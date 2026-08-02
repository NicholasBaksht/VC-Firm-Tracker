/**
 * GENERATE-SEO-PAGES.JS
 * ============================================================
 * Reads scripts/data.js fresh every run and generates real, static,
 * independently-indexable HTML pages for every category, location,
 * and investment stage - plus sitemap.xml and robots.txt.
 *
 * This is the mechanism that makes the site "compound as the
 * database grows": add firm #147 to data.js with sectors:["AI"],
 * re-run this script (or let the GitHub Action do it automatically
 * on every push), and it appears on the AI category page, the
 * sitemap, and every related internal link - with zero manual
 * page-building.
 *
 * USAGE: node scripts/generate-seo-pages.js
 * Requires zero npm installs - only Node's built-in `fs`/`path`.
 *
 * OUTPUT:
 *   /companies/index.html            <- hub page, links every sector
 *   /companies/<sector-slug>/index.html
 *   /locations/index.html            <- hub page, links every location
 *   /locations/<location-slug>/index.html
 *   /stages/index.html               <- hub page, links every stage
 *   /stages/<stage-slug>/index.html
 *   /sitemap.xml
 *   /robots.txt
 * ============================================================
 */

const fs = require('fs');
const path = require('path');

const { SECTOR_MAP, UNMAPPED_DESCRIPTOR_TAGS, LOCATION_MAP } = require('./taxonomy.js');
const { SECTOR_COPY, LOCATION_COPY, STAGE_COPY } = require('./page-copy.js');

const SITE_ROOT = path.resolve(__dirname, '..'); // repo root
const SITE_URL = 'https://thevcpowerboard.com';
const OUTPUT_DIR = SITE_ROOT; // pages get written directly into the repo tree

// ---------- Load data.js as real data, not by parsing text ----------
function loadDataJs() {
  const dataPath = path.join(SITE_ROOT, 'scripts', 'data.js');
  const code = fs.readFileSync(dataPath, 'utf8');
  const wrapped = `
    ${code}
    return { firms, partnerProfiles, firmStages, firmPerformance, firmGeography, newsItems, featuredFirm };
  `;
  const fn = new Function(wrapped);
  return fn();
}

const CANONICAL_STAGES = [
  { slug: 'pre-seed', label: 'Pre-Seed', rawStage: 'Pre-Seed' },
  { slug: 'seed', label: 'Seed', rawStage: 'Seed' },
  { slug: 'series-a', label: 'Series A', rawStage: 'Series A' },
  { slug: 'series-b', label: 'Series B', rawStage: 'Series B' },
  { slug: 'growth', label: 'Growth', rawStage: 'Growth' },
  { slug: 'late-stage', label: 'Late Stage', rawStage: 'Late Stage' },
];

function buildIndexes(data) {
  const { firms, firmStages } = data;

  const sectorIndex = {};
  Object.keys(SECTOR_MAP).forEach(slug => { sectorIndex[slug] = new Set(); });

  const rawTagToCanonical = {};
  Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
    cfg.rawTags.forEach(raw => {
      if (!rawTagToCanonical[raw]) rawTagToCanonical[raw] = [];
      rawTagToCanonical[raw].push(slug);
    });
  });

  const unmappedSeen = new Set();
  firms.forEach(firm => {
    (firm.sectors || []).forEach(raw => {
      const canonicalSlugs = rawTagToCanonical[raw];
      if (canonicalSlugs) {
        canonicalSlugs.forEach(slug => sectorIndex[slug].add(firm));
      } else if (!UNMAPPED_DESCRIPTOR_TAGS.has(raw)) {
        unmappedSeen.add(raw);
      }
    });
  });

  if (unmappedSeen.size > 0) {
    console.warn('\n⚠️  Found sector tags not yet in taxonomy.js SECTOR_MAP or UNMAPPED_DESCRIPTOR_TAGS:');
    unmappedSeen.forEach(t => console.warn(`   - "${t}"`));
    console.warn('   These firms will still appear via their other sector tags, but won\'t');
    console.warn('   be counted for this specific tag until you add it to taxonomy.js.\n');
  }

  const locationIndex = {};
  Object.keys(LOCATION_MAP).forEach(slug => { locationIndex[slug] = new Set(); });
  const rawHqToCanonical = {};
  Object.entries(LOCATION_MAP).forEach(([slug, cfg]) => {
    cfg.rawHQs.forEach(raw => { rawHqToCanonical[raw] = slug; });
  });
  const unmappedHq = new Set();
  firms.forEach(firm => {
    const slug = rawHqToCanonical[firm.hq];
    if (slug) {
      locationIndex[slug].add(firm);
    } else {
      unmappedHq.add(firm.hq);
    }
  });
  if (unmappedHq.size > 0) {
    console.warn('\n⚠️  Found HQ locations not yet in taxonomy.js LOCATION_MAP:');
    unmappedHq.forEach(h => console.warn(`   - "${h}"`));
    console.warn('   These firms won\'t appear on a location page until added.\n');
  }

  const stageIndex = {};
  CANONICAL_STAGES.forEach(s => { stageIndex[s.slug] = new Set(); });
  firms.forEach(firm => {
    const stages = firmStages[firm.slug] || [];
    CANONICAL_STAGES.forEach(s => {
      if (stages.includes(s.rawStage)) stageIndex[s.slug].add(firm);
    });
  });

  return { sectorIndex, locationIndex, stageIndex };
}

function parseAumBillions(aumStr) {
  if (!aumStr) return 0;
  let m = aumStr.match(/[$£€]([0-9.]+)B/);
  if (m) return parseFloat(m[1]);
  m = aumStr.match(/[$£€]([0-9.]+)M/);
  if (m) return parseFloat(m[1]) / 1000;
  return 0;
}

function formatCombinedAum(billions) {
  if (billions >= 1000) return '$' + (billions / 1000).toFixed(2) + 'T+';
  return '$' + billions.toFixed(1) + 'B+';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugifyForFirmLink(firm) {
  return `${SITE_URL}/#${firm.slug}`;
}

function renderPage({ depth, title, description, canonicalPath, ogType, breadcrumbs, h1, introHtml, statsHtml, firmListHtml, relatedHtml, jsonLd }) {
  const assetPrefix = '../'.repeat(depth);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const breadcrumbHtml = breadcrumbs.map((b, i) => {
    if (i === breadcrumbs.length - 1) {
      return `<span aria-current="page">${escapeHtml(b.label)}</span>`;
    }
    return `<a href="${b.href}">${escapeHtml(b.label)}</a>`;
  }).join(' <span class="crumb-sep">/</span> ');

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.label,
      item: b.absoluteUrl,
    })),
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonicalUrl}">

<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:site_name" content="The VC Power Board">

<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="${assetPrefix}styles/main.css">
<link rel="stylesheet" href="${assetPrefix}styles/firm-cards.css">
<link rel="stylesheet" href="${assetPrefix}styles/filters.css">
<link rel="stylesheet" href="${assetPrefix}styles/responsive.css">

<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}

<style>
  .seo-breadcrumb { font-family: var(--mono); font-size: 12px; color: var(--ink-dim); padding: 20px 0 0; }
  .seo-breadcrumb a { color: var(--gold); text-decoration: none; }
  .seo-breadcrumb a:hover { color: var(--gold-bright); }
  .seo-breadcrumb .crumb-sep { color: var(--hairline); margin: 0 4px; }
  .seo-h1 { font-family: var(--serif); font-weight: 600; font-size: clamp(32px, 4.5vw, 48px); line-height: 1.1; margin: 16px 0 20px; }
  .seo-intro { font-size: 16px; line-height: 1.65; color: var(--ink-dim); max-width: 760px; margin-bottom: 16px; }
  .seo-stats { font-family: var(--mono); font-size: 14px; color: var(--ink); background: var(--surface); border: 1px solid var(--hairline); border-radius: 6px; padding: 16px 20px; margin: 24px 0 40px; display: flex; flex-wrap: wrap; gap: 24px; }
  .seo-stats strong { color: var(--gold-bright); }
  .seo-related { margin: 56px 0 40px; padding-top: 32px; border-top: 1px solid var(--hairline); }
  .seo-related h2 { font-family: var(--serif); font-size: 20px; margin-bottom: 14px; }
  .seo-related-links { display: flex; flex-wrap: wrap; gap: 8px; }
  .seo-related-links a { font-family: var(--mono); font-size: 12.5px; color: var(--ink-dim); background: var(--surface); border: 1px solid var(--hairline); border-radius: 20px; padding: 8px 16px; text-decoration: none; transition: border-color 0.15s ease, color 0.15s ease; }
  .seo-related-links a:hover { border-color: var(--gold); color: var(--gold-bright); }
  .seo-nav-simple { display: flex; justify-content: space-between; align-items: center; padding: 14px 24px; max-width: 1080px; margin: 0 auto; border-bottom: 1px solid var(--hairline); }
  .seo-nav-simple a.brand { font-family: var(--mono); font-size: 15px; font-weight: 500; color: var(--ink); text-decoration: none; }
  .seo-nav-simple a.back-to-app { font-family: var(--mono); font-size: 13px; color: var(--gold); text-decoration: none; }
</style>
</head>
<body>
  <nav class="seo-nav-simple">
    <a class="brand" href="${assetPrefix}index.html">The VC Power Board</a>
    <a class="back-to-app" href="${SITE_URL}/#">Explore the Full Rankings →</a>
  </nav>
  <div class="wrap">
    <div class="seo-breadcrumb">${breadcrumbHtml}</div>
    <h1 class="seo-h1">${escapeHtml(h1)}</h1>
    <div class="seo-intro">${introHtml}</div>
    ${statsHtml}
    <div class="firms">
      ${firmListHtml}
    </div>
    ${relatedHtml}
  </div>
  <footer style="border-top: 1px solid var(--hairline); padding: 36px 0 60px; margin-top: 40px;">
    <div class="wrap">
      <p style="font-size: 13px; color: var(--ink-dim);">The VC Power Board tracks real, sourced, publicly-verifiable data on venture capital firms. See our <a href="${assetPrefix}index.html#methodologyAnchor" style="color: var(--gold);">Methodology page</a> for how figures are compiled.</p>
    </div>
  </footer>
</body>
</html>`;
}

function renderFirmCard(firm) {
  const aumDisplay = escapeHtml(firm.aum || '');
  const sectorsDisplay = (firm.sectors || []).slice(0, 4).map(s => `<span class="compare-sector-tag">${escapeHtml(s)}</span>`).join('');
  return `
    <div class="firm">
      <div class="firm-head">
        <div>
          <div class="firm-rank">${escapeHtml(firm.hq || '')}</div>
          <div class="firm-name"><a href="${slugifyForFirmLink(firm)}" class="firm-link">${escapeHtml(firm.name)}</a></div>
          <div class="firm-meta">Founded ${firm.founded || '—'}</div>
        </div>
        <div class="firm-aum">
          <div class="num">${aumDisplay}</div>
          <div class="lbl">Assets Managed</div>
        </div>
      </div>
      <div class="firm-thesis">${escapeHtml((firm.signatureExit || '').slice(0, 220))}${(firm.signatureExit || '').length > 220 ? '…' : ''}</div>
      <div style="margin-top: 12px;">${sectorsDisplay}</div>
      <a href="${slugifyForFirmLink(firm)}" class="firm-page-link">View Full Firm Profile →</a>
    </div>`;
}

function buildItemListJsonLd(firmsArr, pageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: pageUrl,
    numberOfItems: firmsArr.length,
    itemListElement: firmsArr.slice(0, 50).map((firm, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Organization',
        name: firm.name,
        url: slugifyForFirmLink(firm),
        description: (firm.thesis || '').slice(0, 200),
      },
    })),
  };
}

function writeFile(relPath, content) {
  const fullPath = path.join(OUTPUT_DIR, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}

function main() {
  const data = loadDataJs();
  const { sectorIndex, locationIndex, stageIndex } = buildIndexes(data);

  const allGeneratedUrls = [];

  Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
    const firmsArr = [...sectorIndex[slug]].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    if (firmsArr.length === 0) return;

    const combinedAum = firmsArr.reduce((sum, f) => sum + parseAumBillions(f.aum), 0);
    const pageUrl = `${SITE_URL}/companies/${slug}/`;
    const relatedSlugs = Object.keys(SECTOR_MAP).filter(s => s !== slug).slice(0, 6);

    const html = renderPage({
      depth: 2,
      title: `Top ${cfg.label} Venture Capital Firms | The VC Power Board`,
      description: `${firmsArr.length} real, verified venture capital firms investing in ${cfg.description}, ranked by assets under management. Sourced data, updated daily.`,
      canonicalPath: `/companies/${slug}/`,
      ogType: 'website',
      breadcrumbs: [
        { label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` },
        { label: 'Companies', href: `../index.html`, absoluteUrl: `${SITE_URL}/companies/` },
        { label: cfg.label, href: '', absoluteUrl: pageUrl },
      ],
      h1: `${cfg.label} Venture Capital Firms`,
      introHtml: escapeHtml(SECTOR_COPY[slug] || ''),
      statsHtml: `<div class="seo-stats"><span><strong>${firmsArr.length}</strong> firms tracked</span><span><strong>${formatCombinedAum(combinedAum)}</strong> combined AUM</span></div>`,
      firmListHtml: firmsArr.map(renderFirmCard).join(''),
      relatedHtml: `<div class="seo-related"><h2>Related Categories</h2><div class="seo-related-links">${relatedSlugs.map(s => `<a href="../${s}/">${escapeHtml(SECTOR_MAP[s].label)}</a>`).join('')}</div></div>`,
      jsonLd: buildItemListJsonLd(firmsArr, pageUrl),
    });
    writeFile(`companies/${slug}/index.html`, html);
    allGeneratedUrls.push({ url: pageUrl, priority: '0.8' });
  });

  {
    const nonEmptySectors = Object.entries(SECTOR_MAP).filter(([slug]) => sectorIndex[slug].size > 0);
    const hubHtml = renderPage({
      depth: 1,
      title: 'Venture Capital Firms by Category | The VC Power Board',
      description: 'Browse every venture capital sector tracked on The VC Power Board — AI, fintech, healthcare, climate, cybersecurity, and more — each ranked by real, verified assets under management.',
      canonicalPath: '/companies/',
      ogType: 'website',
      breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Companies', href: '', absoluteUrl: `${SITE_URL}/companies/` }],
      h1: 'Venture Capital Firms by Category',
      introHtml: 'Every sector below links to a dedicated page ranking the real, verified venture capital firms actively investing in that space — sourced from public filings, firm disclosures, and reputable financial reporting.',
      statsHtml: '',
      firmListHtml: nonEmptySectors.map(([slug, cfg]) => `<div class="firm"><div class="firm-name"><a href="${slug}/" class="firm-link">${escapeHtml(cfg.label)}</a></div><div class="firm-meta">${sectorIndex[slug].size} firms tracked</div></div>`).join(''),
      relatedHtml: '',
      jsonLd: null,
    });
    writeFile('companies/index.html', hubHtml);
    allGeneratedUrls.push({ url: `${SITE_URL}/companies/`, priority: '0.9' });
  }

  Object.entries(LOCATION_MAP).forEach(([slug, cfg]) => {
    const firmsArr = [...locationIndex[slug]].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    if (firmsArr.length === 0) return;

    const combinedAum = firmsArr.reduce((sum, f) => sum + parseAumBillions(f.aum), 0);
    const pageUrl = `${SITE_URL}/locations/${slug}/`;
    const relatedSlugs = Object.keys(LOCATION_MAP).filter(s => s !== slug).slice(0, 6);

    const html = renderPage({
      depth: 2,
      title: `Top ${cfg.label} Venture Capital Firms | The VC Power Board`,
      description: `${firmsArr.length} real, verified venture capital firms headquartered in ${cfg.label}, ranked by assets under management. Sourced data, updated daily.`,
      canonicalPath: `/locations/${slug}/`,
      ogType: 'website',
      breadcrumbs: [
        { label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` },
        { label: 'Locations', href: `../index.html`, absoluteUrl: `${SITE_URL}/locations/` },
        { label: cfg.label, href: '', absoluteUrl: pageUrl },
      ],
      h1: `${cfg.label} Venture Capital Firms`,
      introHtml: escapeHtml(LOCATION_COPY[slug] || ''),
      statsHtml: `<div class="seo-stats"><span><strong>${firmsArr.length}</strong> firms tracked</span><span><strong>${formatCombinedAum(combinedAum)}</strong> combined AUM</span></div>`,
      firmListHtml: firmsArr.map(renderFirmCard).join(''),
      relatedHtml: `<div class="seo-related"><h2>Other Locations</h2><div class="seo-related-links">${relatedSlugs.map(s => `<a href="../${s}/">${escapeHtml(LOCATION_MAP[s].label)}</a>`).join('')}</div></div>`,
      jsonLd: buildItemListJsonLd(firmsArr, pageUrl),
    });
    writeFile(`locations/${slug}/index.html`, html);
    allGeneratedUrls.push({ url: pageUrl, priority: '0.7' });
  });

  {
    const nonEmptyLocations = Object.entries(LOCATION_MAP).filter(([slug]) => locationIndex[slug].size > 0);
    const hubHtml = renderPage({
      depth: 1,
      title: 'Venture Capital Firms by Location | The VC Power Board',
      description: 'Browse venture capital firms by headquarters location — Silicon Valley, New York, Boston, Europe, Israel, and more — each ranked by real, verified assets under management.',
      canonicalPath: '/locations/',
      ogType: 'website',
      breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Locations', href: '', absoluteUrl: `${SITE_URL}/locations/` }],
      h1: 'Venture Capital Firms by Location',
      introHtml: 'Venture capital remains geographically concentrated even in a remote-first era. Browse firms by where they\'re actually headquartered, based on real, verified data.',
      statsHtml: '',
      firmListHtml: nonEmptyLocations.map(([slug, cfg]) => `<div class="firm"><div class="firm-name"><a href="${slug}/" class="firm-link">${escapeHtml(cfg.label)}</a></div><div class="firm-meta">${locationIndex[slug].size} firms tracked</div></div>`).join(''),
      relatedHtml: '',
      jsonLd: null,
    });
    writeFile('locations/index.html', hubHtml);
    allGeneratedUrls.push({ url: `${SITE_URL}/locations/`, priority: '0.9' });
  }

  CANONICAL_STAGES.forEach(({ slug, label }) => {
    const firmsArr = [...stageIndex[slug]].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    if (firmsArr.length === 0) return;

    const combinedAum = firmsArr.reduce((sum, f) => sum + parseAumBillions(f.aum), 0);
    const pageUrl = `${SITE_URL}/stages/${slug}/`;
    const relatedSlugs = CANONICAL_STAGES.filter(s => s.slug !== slug).map(s => s.slug).slice(0, 6);

    const html = renderPage({
      depth: 2,
      title: `Top ${label} Investors | Venture Capital Firms | The VC Power Board`,
      description: `${firmsArr.length} real, verified venture capital firms investing at the ${label} stage, ranked by assets under management. Sourced data, updated daily.`,
      canonicalPath: `/stages/${slug}/`,
      ogType: 'website',
      breadcrumbs: [
        { label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` },
        { label: 'Stages', href: `../index.html`, absoluteUrl: `${SITE_URL}/stages/` },
        { label: label, href: '', absoluteUrl: pageUrl },
      ],
      h1: `${label} Investors`,
      introHtml: escapeHtml(STAGE_COPY[slug] || ''),
      statsHtml: `<div class="seo-stats"><span><strong>${firmsArr.length}</strong> firms tracked</span><span><strong>${formatCombinedAum(combinedAum)}</strong> combined AUM</span></div>`,
      firmListHtml: firmsArr.map(renderFirmCard).join(''),
      relatedHtml: `<div class="seo-related"><h2>Other Stages</h2><div class="seo-related-links">${relatedSlugs.map(s => `<a href="../${s}/">${escapeHtml(CANONICAL_STAGES.find(x => x.slug === s).label)}</a>`).join('')}</div></div>`,
      jsonLd: buildItemListJsonLd(firmsArr, pageUrl),
    });
    writeFile(`stages/${slug}/index.html`, html);
    allGeneratedUrls.push({ url: pageUrl, priority: '0.7' });
  });

  {
    const nonEmptyStages = CANONICAL_STAGES.filter(s => stageIndex[s.slug].size > 0);
    const hubHtml = renderPage({
      depth: 1,
      title: 'Venture Capital Firms by Investment Stage | The VC Power Board',
      description: 'Browse venture capital firms by investment stage — Pre-Seed, Seed, Series A, Series B, Growth, and Late Stage — each ranked by real, verified assets under management.',
      canonicalPath: '/stages/',
      ogType: 'website',
      breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Stages', href: '', absoluteUrl: `${SITE_URL}/stages/` }],
      h1: 'Venture Capital Firms by Investment Stage',
      introHtml: 'Different firms specialize in different points of a company\'s life — from pre-seed conviction bets to late-stage growth capital. Browse by the stage that matches where your company actually is.',
      statsHtml: '',
      firmListHtml: nonEmptyStages.map(s => `<div class="firm"><div class="firm-name"><a href="${s.slug}/" class="firm-link">${escapeHtml(s.label)}</a></div><div class="firm-meta">${stageIndex[s.slug].size} firms tracked</div></div>`).join(''),
      relatedHtml: '',
      jsonLd: null,
    });
    writeFile('stages/index.html', hubHtml);
    allGeneratedUrls.push({ url: `${SITE_URL}/stages/`, priority: '0.9' });
  }

  const sitemapUrls = [{ url: `${SITE_URL}/`, priority: '1.0' }, ...allGeneratedUrls];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>\n    <loc>${u.url}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>`;
  writeFile('sitemap.xml', sitemapXml);

  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  writeFile('robots.txt', robotsTxt);

  console.log(`\n✅ Generated ${allGeneratedUrls.length} static pages + sitemap.xml + robots.txt`);
  console.log(`   Companies: ${Object.keys(SECTOR_MAP).filter(s => sectorIndex[s].size > 0).length} category pages`);
  console.log(`   Locations: ${Object.keys(LOCATION_MAP).filter(s => locationIndex[s].size > 0).length} location pages`);
  console.log(`   Stages: ${CANONICAL_STAGES.filter(s => stageIndex[s.slug].size > 0).length} stage pages`);
}

main();
