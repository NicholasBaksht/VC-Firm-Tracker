/* ============================================================
   DATA.JS
   All raw site content: the weekly news feed, the featured-firm
   spotlight, every partner profile, and the big `firms` array
   (the core dataset every other file reads from) along with its
   companion data tables (firmStages, firmPerformance,
   firmGeography). This is the file Peter edits week to week.
   Load this FIRST - everything else reads from it.
   ============================================================ */
// ============================================================
// WEEKLY NEWS — Peter edits this part every week.
// Add a new entry to the TOP of this array (right after the
// opening bracket below). The newest entry becomes the big
// featured box; everything else drops into the list below it.
// Just copy one whole { ... }, block, paste it above the others,
// and change the date/tag/text.
// ============================================================
const newsItems = [
  {
    date: "July 30, 2026",
    tag: "This week",
    text: '<strong>Blue Origin raised $10 billion in its first-ever outside funding round</strong>, at a $130 billion pre-money valuation — the first time Jeff Bezos has taken outside capital in the rocket company\'s 26-year history. <strong>Coatue Management</strong> (see below) led with a $4 billion commitment, alongside $2 billion from Bezos personally and $4 billion more from other institutional investors. The round comes weeks after rival SpaceX\'s own record-setting Nasdaq debut in June.'
  },
  {
    date: "July 22, 2026",
    tag: "Last week",
    text: '<strong>Glow emerged from stealth with a $180 million Series A</strong> at a $1.2 billion valuation, building AI-era endpoint security software. The round was led by Sequoia Capital, with <strong>Redpoint Ventures</strong> and <strong>Index Ventures</strong> (see below) among the participating investors — a rare instance of three firms tracked on this page backing the same round.'
  },
];

 
// ============================================================
// FEATURED FIRM — Peter edits this whenever he wants to spotlight
// a different firm. Just change the "slug" below to any firm's
// slug (see the firms array further down for valid slugs, e.g.
// "a16z", "sequoia", "founders-fund"), and write a short reason
// why it's featured. Everything else - name, AUM, sectors,
// thesis - pulls automatically from that firm's real data, so
// there's nothing to keep in sync by hand.
// ============================================================
const featuredFirm = {
  slug: "tcv",
  reason: "TCV invented the 'crossover' model of investing in the same company both before and after it goes public — and nowhere has that patience paid off more than at Netflix. Co-founder Jay Hoag joined Netflix's board in 1999, back when TCV owned roughly 43% of the pre-IPO company, and he's chaired the board ever since. Netflix is worth more than $400 billion today."
};

// ============================================================
// FULL PROFILE PAGES — optional, works for ANY firm below.
// Right now only Andreessen Horowitz (a16z) has one, but any
// firm can get the same treatment. Two fields are all it takes:
//
//   leadership: [
//     { name: "Full Name", role: "Their Title" },
//     { name: "Full Name", role: "Their Title" }
//   ],
//   timeline: [
//     { year: "YYYY", event: "One sentence describing what happened." },
//     { year: "YYYY", event: "One sentence describing what happened." }
//   ],
//
// Paste both blocks in right after that firm's "thesis" line (see
// how a16z does it below for the exact placement). A firm with
// NEITHER field still works completely normally — the page just
// won't show a leadership grid or timeline for it. Nothing else
// in the code needs to change; the detail page renders whatever
// fields it finds automatically.
// ============================================================
// ============================================================
// PARTNER PROFILES — deep-dive pages for individual VC partners.
// Each key is a slug used in the URL (#partner/alfred-lin). To
// give a leadership entry a clickable profile, add a matching
// "profileSlug" field to that person's entry in the firms array
// below (see Alfred Lin, Marc Andreessen, and Peter Thiel for
// working examples).
// ============================================================
