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
    date: "July 22, 2026",
    tag: "This week",
    text: '<strong>Glow emerged from stealth with a $180 million Series A</strong> at a $1.2 billion valuation, building AI-era endpoint security software. The round was led by Sequoia Capital, with <strong>Redpoint Ventures</strong> and <strong>Index Ventures</strong> (see below) among the participating investors — a rare instance of three firms tracked on this page backing the same round.'
  },
{
    date: "July 16, 2026",
    tag: "Last week",
    text: '<strong>Fireworks AI raised $1.505 billion</strong> — one of the largest single venture rounds of 2026 — at a $17.5 billion valuation. The round was led by Atreides Management, Index Ventures, and TCV, with <strong>Lightspeed Venture Partners</strong> (see below) among the participating investors. Fireworks says it has already crossed $1 billion in annual revenue, a rare milestone for an AI company this size.'
  }
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
  slug: "founders-fund",
  reason: "SpaceX's blockbuster June 2026 IPO turned Founders Fund's original 2008 stake into an estimated ~80x return — one of the biggest single wins in venture capital history."
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
const partnerProfiles = {
  "alfred-lin": {
    name: "Alfred Lin",
    firm: "Sequoia Capital",
    firmSlug: "sequoia",
    title: "Managing Partner",
    joinedYear: 2010,
    education: ["B.A. Applied Mathematics, Harvard University", "M.S. Statistics, Stanford University"],
    previousExperience: [
      "Chairman, COO & CFO, Zappos.com (2005–2010) — acquired by Amazon for $1.2B",
      "VP Finance & Business Development, Tellme Networks (2001–2005) — acquired by Microsoft",
      "Co-Founder, Venture Frogs (1999–2014)",
      "Co-Founder & VP Finance, LinkExchange (1996–1999) — acquired by Microsoft for $265M"
    ],
    investmentFocus: ["Consumer", "Marketplaces", "Enterprise Software"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Uber", ticker: "UBER" },
      { name: "Reddit", ticker: "RDDT" },
      { name: "Houzz", ticker: null },
      { name: "OpenAI", ticker: null }
    ],
    boardSeats: ["Airbnb", "DoorDash", "Citadel Securities"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "1996", event: "Co-founds LinkExchange as VP Finance; the company is sold to Microsoft for $265M in 1999." },
      { year: "2001", event: "Joins Tellme Networks as VP Finance & Business Development, later acquired by Microsoft." },
      { year: "2005", event: "Becomes Chairman, COO, and CFO of Zappos.com." },
      { year: "2009", event: "Zappos is acquired by Amazon for $1.2 billion." },
      { year: "2010", event: "Joins Sequoia Capital as a partner, focused on consumer and enterprise investments." },
      { year: "2025", event: "Becomes co-steward (Managing Partner) of Sequoia Capital alongside Pat Grady." }
    ],
    biography: "Alfred Lin is a Taiwanese-American venture capitalist who joined Sequoia Capital in 2010 after building his career as an operator, not just an investor — a background that shapes how he evaluates founders today. Before Sequoia, he served as Chairman, COO, and CFO of Zappos, guiding the online retailer to a $1.2 billion acquisition by Amazon in 2009. He first crossed paths with Sequoia as an operator at LinkExchange, which the firm backed in the 1990s. At Sequoia, Lin has specialized in consumer, marketplace, and enterprise software investments, leading or co-leading the firm's positions in Airbnb, DoorDash, and OpenAI. He topped the Forbes Midas List of top venture capitalists in both 2021 and 2025.",
    sources: [
      { label: "Sequoia Capital — Alfred Lin", url: "https://www.sequoiacap.com/people/alfred-lin/" },
      { label: "Forbes Midas List Profile", url: "https://www.forbes.com/profile/alfred-lin/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alfred_Lin" }
    ]
  },
  "marc-andreessen": {
    name: "Marc Andreessen",
    firm: "Andreessen Horowitz",
    firmSlug: "a16z",
    title: "Co-Founder & General Partner",
    joinedYear: 2009,
    education: ["B.S. Computer Science, University of Illinois Urbana-Champaign"],
    previousExperience: [
      "Co-Creator, Mosaic web browser (1993)",
      "Co-Founder, Netscape Communications (1994) — IPO 1995, acquired by AOL for $4.2B in 1999",
      "Co-Founder, Loudcloud / Opsware (1999) — acquired by Hewlett-Packard for $1.6B in 2007"
    ],
    investmentFocus: ["Software", "Crypto", "Fintech", "Consumer", "AI Infrastructure"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "GitHub", ticker: null },
      { name: "Facebook", ticker: "META" },
      { name: "Pinterest", ticker: "PINS" },
      { name: "Skype", ticker: null }
    ],
    boardSeats: ["Meta Platforms"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "1993", event: "Co-creates Mosaic, one of the first graphical web browsers, while a student at UIUC." },
      { year: "1994", event: "Co-founds Netscape Communications." },
      { year: "1995", event: "Netscape's IPO helps launch the commercial internet era and the dot-com boom." },
      { year: "1999", event: "AOL acquires Netscape for $4.2 billion." },
      { year: "2007", event: "Hewlett-Packard acquires Opsware (formerly Loudcloud) for $1.6 billion." },
      { year: "2009", event: "Co-founds Andreessen Horowitz (a16z) with Ben Horowitz on a $300 million debut fund." }
    ],
    biography: "Marc Andreessen co-created Mosaic, the graphical web browser that made the early internet accessible to ordinary people, while still a student at the University of Illinois. He went on to co-found Netscape, whose 1995 IPO is widely credited with igniting the dot-com boom, before AOL acquired the company for $4.2 billion in 1999. After a second exit — selling Opsware to Hewlett-Packard for $1.6 billion in 2007 — Andreessen co-founded Andreessen Horowitz in 2009, building it into one of the largest venture capital firms in the world. He sits on the board of Meta Platforms and has backed category-defining companies including Airbnb, Coinbase, and GitHub.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marc_Andreessen" },
      { label: "a16z — Marc Andreessen", url: "https://a16z.com/author/marc-andreessen/" }
    ]
  },
  "peter-thiel": {
    name: "Peter Thiel",
    firm: "Founders Fund",
    firmSlug: "founders-fund",
    title: "Co-Founder & Partner",
    joinedYear: 2005,
    education: ["B.A. Philosophy, Stanford University (1989)", "J.D., Stanford Law School (1992)"],
    previousExperience: [
      "Co-Founder & CEO, PayPal (1998–2002) — IPO 2002, acquired by eBay for $1.5B",
      "Founder, Clarium Capital Management (2002)",
      "Co-Founder & Chairman, Palantir Technologies (2003) — IPO 2020"
    ],
    investmentFocus: ["Aerospace", "Defense Tech", "Hard Tech", "Fintech"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "SpaceX", ticker: "SPCX" },
      { name: "Palantir", ticker: "PLTR" },
      { name: "LinkedIn", ticker: null },
      { name: "Airbnb", ticker: "ABNB" },
      { name: "Stripe", ticker: null }
    ],
    boardSeats: ["Palantir (Chairman)"],
    ipoCount: 3,
    majorExits: 1,
    careerTimeline: [
      { year: "1998", event: "Co-founds PayPal, serving as CEO and chairman." },
      { year: "2002", event: "PayPal goes public, then is acquired by eBay for $1.5 billion months later." },
      { year: "2003", event: "Co-founds Palantir Technologies, serving as chairman." },
      { year: "2004", event: "Makes the first outside investment in Facebook." },
      { year: "2005", event: "Co-founds Founders Fund with fellow PayPal alumni Ken Howery and Luke Nosek." },
      { year: "2008", event: "Founders Fund becomes an early investor in SpaceX." },
      { year: "2020", event: "Palantir goes public on the NYSE via direct listing." }
    ],
    biography: "Peter Thiel co-founded PayPal and led it through its 2002 IPO and subsequent $1.5 billion acquisition by eBay, then became Facebook's first outside investor in 2004 — a bet that returned enormously when the company went public in 2012. In 2005, alongside fellow PayPal alumni Ken Howery and Luke Nosek, he co-founded Founders Fund on a deliberately contrarian philosophy: back ambitious, technically difficult companies other investors pass on. That thesis led the firm to become the first institutional investor in both SpaceX and Palantir, the data-analytics company Thiel co-founded and still chairs. Palantir went public in 2020; SpaceX followed in 2026.",
    sources: [
      { label: "Founders Fund — Peter Thiel", url: "https://foundersfund.com/team/peter-thiel/" },
      { label: "Britannica", url: "https://www.britannica.com/money/Peter-Thiel" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peter_Thiel" }
    ]
  },
  "jeff-horing": {
    name: "Jeff Horing",
    firm: "Insight Partners",
    firmSlug: "insight-partners",
    title: "Co-Founder & Managing Director",
    joinedYear: 1995,
    education: ["B.A. Electrical Engineering, University of Pennsylvania", "M.B.A., MIT Sloan School of Management"],
    previousExperience: [
      "Principal, Goldman Sachs",
      "Principal, Warburg Pincus & Company"
    ],
    investmentFocus: ["Software", "SaaS", "Data & Analytics", "Cybersecurity"],
    notableInvestments: [
      { name: "Alteryx", ticker: null },
      { name: "Wix", ticker: "WIX" },
      { name: "Shutterstock", ticker: "SSTK" },
      { name: "JFrog", ticker: "FROG" },
      { name: "nCino", ticker: "NCNO" },
      { name: "AirWatch", ticker: null }
    ],
    boardSeats: ["monday.com (Chairman)", "Wiz", "JFrog", "Alteryx"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1995", event: "Co-founds Insight Partners with Jerry Murdock, betting that 'software is the best business in the world.'" },
      { year: "2012", event: "Leads Insight's investment in Shutterstock ahead of its IPO." },
      { year: "2013", event: "Leads Insight's investment in Wix ahead of its IPO." },
      { year: "2014", event: "AirWatch, an Insight portfolio company, is acquired by VMware for $1.5 billion." },
      { year: "2017", event: "Leads Insight's investment in Alteryx ahead of its IPO." },
      { year: "2025", event: "Insight Partners surpasses $90 billion in assets under management, with over 875 companies invested in to date." }
    ],
    biography: "Jeff Horing co-founded Insight Partners in 1995 after working as a principal at Goldman Sachs and Warburg Pincus, building the firm around a then-contrarian thesis: software, not hardware, was the best business in the world. In the firm's earliest years, Horing and his co-founder famously sourced deals by manually reading trade publications for growing software companies — an outbound, research-driven approach that still defines Insight's culture. Over three decades, he has led investments in more than 140 companies and personally led the firm to public exits including Wix, Shutterstock, Alteryx, JFrog, and nCino. He currently chairs the board of monday.com and sits on the boards of Wiz, JFrog, and Alteryx.",
    sources: [
      { label: "Insight Partners — Jeff Horing", url: "https://www.insightpartners.com/team/jeff-horing/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/jeff-horing/" },
      { label: "Wikipedia — Insight Partners", url: "https://en.wikipedia.org/wiki/Insight_Partners" }
    ]
  },
  "chase-coleman": {
    name: "Chase Coleman",
    firm: "Tiger Global Management",
    firmSlug: "tiger-global",
    title: "Founder & Managing Partner",
    joinedYear: 2001,
    education: ["B.A. Economics & Spanish, Williams College (1997)"],
    previousExperience: [
      "Technology Analyst & Partner, Tiger Management (1997–2000) — under Julian Robertson"
    ],
    investmentFocus: ["Internet", "Fintech", "Consumer Tech", "Global Public & Private Equity"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "JD.com", ticker: "JD" },
      { name: "Stripe", ticker: null },
      { name: "Uber", ticker: "UBER" }
    ],
    boardSeats: ["Tiger Foundation", "Hospital for Special Surgery (Investment Committee Co-Chair)"],
    ipoCount: 4,
    majorExits: 1,
    careerTimeline: [
      { year: "1997", event: "Joins Julian Robertson's Tiger Management as a technology analyst straight out of Williams College." },
      { year: "2000", event: "Robertson closes Tiger Management and entrusts Coleman with over $25 million to manage as one of the original 'Tiger Cubs.'" },
      { year: "2001", event: "Launches Tiger Technology (later renamed Tiger Global Management) as a public-markets hedge fund." },
      { year: "2010s", event: "Builds an early pre-IPO stake in Facebook, later selling it for an estimated $1 billion." },
      { year: "2021", event: "Tiger Global becomes one of the most active venture investors globally, expanding aggressively into private markets." }
    ],
    biography: "Chase Coleman was only 25 when Julian Robertson closed Tiger Management in 2000 and handed him roughly $25 million to manage — one of the original 'Tiger Cubs' who launched their own funds from Tiger's wind-down. A childhood friend of Robertson's son, Coleman had joined Tiger Management as a technology analyst straight out of Williams College in 1997. He founded Tiger Global in 2001 and built it into a hybrid the industry hadn't quite seen before: a fund equally comfortable buying public stocks and writing private venture checks, moving unusually fast into deals other investors took months to close. His early, high-conviction stake in Facebook — sold for an estimated $1 billion in 2013 — remains one of the defining bets of his career.",
    sources: [
      { label: "Tiger Global — Chase Coleman", url: "https://www.tigerglobal.com/chase-coleman" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chase_Coleman_III" }
    ]
  },
  "hemant-taneja": {
    name: "Hemant Taneja",
    firm: "General Catalyst",
    firmSlug: "general-catalyst",
    title: "CEO & Managing Director",
    joinedYear: 2002,
    education: ["B.S. Biology, B.S. Mathematics, B.S. EECS, M.Eng. EECS, M.S. Operations Research — Massachusetts Institute of Technology"],
    previousExperience: [
      "Co-Founder, Chairman & CEO, Isovia — acquired by JP Mobile"
    ],
    investmentFocus: ["Healthcare", "AI Infrastructure", "Defense", "Fintech"],
    notableInvestments: [
      { name: "Snap", ticker: "SNAP" },
      { name: "Samsara", ticker: "IOT" },
      { name: "Stripe", ticker: null },
      { name: "GitLab", ticker: null },
      { name: "Anduril", ticker: null },
      { name: "Grammarly", ticker: null }
    ],
    boardSeats: ["Khan Academy", "Revolution Healthcare Acquisition"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "2002", event: "Joins General Catalyst as an entrepreneur-in-residence after selling his first company, Isovia." },
      { year: "2017", event: "Leads General Catalyst's investment in Snap ahead of its IPO." },
      { year: "2020", event: "Portfolio company Livongo is acquired for $18.5 billion — the largest digital health transaction to date at the time." },
      { year: "2021", event: "Becomes CEO of General Catalyst, succeeding the firm's earlier leadership." },
      { year: "2025", event: "Publishes 'The Transformation Principles,' laying out his thesis for AI-driven resilience across healthcare, defense, and industrials." }
    ],
    biography: "Hemant Taneja moved from Delhi, India to the U.S. as a teenager and went on to earn five degrees from MIT before dropping out of a PhD program to found his first company, Isovia, which he sold to JP Mobile. He joined General Catalyst as an entrepreneur-in-residence in 2002 and became CEO in 2021, architecting the firm's strategy around what he calls 'economies of unscale' — using AI to build platform companies aligned with long-term societal interests. He has led early investments in Stripe, Snap, Samsara, and Anthropic, and guided portfolio company Livongo through an $18.5 billion acquisition, the largest digital health deal of its era.",
    sources: [
      { label: "General Catalyst — Hemant Taneja", url: "https://www.generalcatalyst.com/team/hemant-taneja" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hemant_Taneja" }
    ]
  },
  "scott-sandell": {
    name: "Scott Sandell",
    firm: "New Enterprise Associates",
    firmSlug: "nea",
    title: "Executive Chairman & Chief Investment Officer",
    joinedYear: 1996,
    education: ["A.B. Engineering Sciences, Dartmouth College (1986)", "M.B.A., Stanford Graduate School of Business (1992)"],
    previousExperience: [
      "Product Manager, Microsoft — worked on Windows 95",
      "Co-Founder, European Subsidiary, C-ATS Software",
      "Consultant, Boston Consulting Group"
    ],
    investmentFocus: ["Enterprise Technology", "Cloud Infrastructure", "Fintech"],
    notableInvestments: [
      { name: "Salesforce", ticker: null },
      { name: "Workday", ticker: "WDAY" },
      { name: "Robinhood", ticker: "HOOD" },
      { name: "Cloudflare", ticker: null },
      { name: "Bloom Energy", ticker: null },
      { name: "Tableau", ticker: null }
    ],
    boardSeats: ["Cloudflare (Lead Independent Director)"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1996", event: "Joins NEA after roles at Microsoft, C-ATS Software, and Boston Consulting Group." },
      { year: "2000s", event: "Leads NEA's early investments in Salesforce and WebEx." },
      { year: "2012", event: "Leads NEA's investment in Workday ahead of its IPO." },
      { year: "2021", event: "Leads NEA's investment in Robinhood ahead of its IPO." },
      { year: "2023", event: "Becomes CEO of NEA, later transitioning to Executive Chairman and Chief Investment Officer." }
    ],
    biography: "Scott Sandell joined NEA in 1996 after stints at Microsoft, where he worked as a product manager on Windows 95, and Boston Consulting Group. Over nearly three decades at the firm, he has personally led investments in a run of industry-transforming companies — Salesforce, WebEx, Workday, Tableau, Bloom Energy, and Robinhood among them — and been named to the Forbes Midas List repeatedly for it. He has held nearly every senior title at NEA, from Managing General Partner to CEO to his current role as Executive Chairman and Chief Investment Officer, and currently serves as lead independent director of Cloudflare.",
    sources: [
      { label: "NEA — Scott Sandell", url: "https://www.nea.com/team/scott-sandell" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/scott-sandell/" }
    ]
  },
  "jeremy-liew": {
    name: "Jeremy Liew",
    firm: "Lightspeed Venture Partners",
    firmSlug: "lightspeed",
    title: "Partner",
    joinedYear: 2006,
    education: ["B.Sc. & B.A. (Hons), Australian National University", "M.B.A., Stanford University (2000)"],
    previousExperience: [
      "SVP Corporate Development & Chief of Staff to CEO, AOL",
      "General Manager, Netscape",
      "VP Strategic Planning, IAC (InterActiveCorp)"
    ],
    investmentFocus: ["Consumer", "Mobile", "Social Media", "Fintech"],
    notableInvestments: [
      { name: "Snap", ticker: "SNAP" },
      { name: "Affirm", ticker: "AFRM" },
      { name: "The Honest Company", ticker: "HNST" },
      { name: "Bonobos", ticker: null },
      { name: "Giphy", ticker: null }
    ],
    boardSeats: ["Affirm", "Blockchain.com"],
    ipoCount: 3,
    majorExits: 3,
    careerTimeline: [
      { year: "1988", event: "Represents Australia at the International Mathematical Olympiad alongside future Fields Medalist Terence Tao." },
      { year: "1990s", event: "Works at early web pioneers Netscape, AOL, CitySearch, and IAC." },
      { year: "2006", event: "Joins Lightspeed Venture Partners as its first dedicated consumer specialist." },
      { year: "2012", event: "Makes the first institutional investment in a then-tiny app called Snapchat." },
      { year: "2017", event: "Snap goes public, five years after that first bet." },
      { year: "2021", event: "Steps back from leading new investments while remaining on the boards of his existing portfolio companies." }
    ],
    biography: "Jeremy Liew represented Australia at the International Mathematical Olympiad as a teenager before deciding, in his words, that he wasn't cut out to be a professional mathematician. He spent the 1990s and early 2000s as an operator at Netscape, AOL, CitySearch, and IAC before joining Lightspeed Venture Partners in 2006 as the firm's first dedicated consumer specialist. In 2012, he made the first institutional investment in a then-tiny disappearing-photo app called Snapchat, a bet that defined his career and the firm's consumer practice alike. He has also backed Affirm, The Honest Company, and Bonobos, and stepped back from new investments in 2021 while remaining active on his portfolio companies' boards.",
    sources: [
      { label: "Lightspeed — Jeremy Liew", url: "https://lsvp.com/team-member/jeremy-liew/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jeremy_Liew" }
    ]
  },
  "arthur-patterson": {
    name: "Arthur Patterson",
    firm: "Accel",
    firmSlug: "accel",
    title: "Founding Partner",
    joinedYear: 1983,
    education: ["A.B., Harvard University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "General Partner, Adler & Company",
      "Venture Capital Investor, Citicorp Venture Capital",
      "International Office, U.S. Treasury Department"
    ],
    investmentFocus: ["Enterprise Software", "Consumer", "Services"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "MetroPCS", ticker: null },
      { name: "Veritas Software", ticker: null },
      { name: "Portal Software", ticker: null },
      { name: "UUNet", ticker: null }
    ],
    boardSeats: ["Aalyria", "Acalvio", "Integral Development", "QMC Telecom International"],
    ipoCount: 7,
    majorExits: 3,
    careerTimeline: [
      { year: "1983", event: "Co-founds Accel with Jim Swartz on a strategy of deep specialization in specific technology categories." },
      { year: "1990s", event: "Leads Accel investments through IPOs including Veritas Software, UUNet, and Portal Software." },
      { year: "2005", event: "Accel leads Facebook's Series A, a single check that became one of the highest-multiple returns in VC history." },
      { year: "2013", event: "Named MetroPCS's Presiding Director as the company merges with T-Mobile." },
      { year: "2022", event: "Receives the National Venture Capital Association's Lifetime Achievement Award." }
    ],
    biography: "Arthur Patterson co-founded Accel in 1983 after roles at Citicorp Venture Capital, Adler & Company, and the U.S. Treasury Department, betting on a strategy of deep specialization in specific technology categories rather than spreading investments broadly — an unusual approach at the time. Over four decades, he has led Accel investments through IPOs including Veritas Software, UUNet, Portal Software, and Actuate, and served as a director of MetroPCS through its eventual merger with T-Mobile. His most famous bet came in 2005, when he led Accel's Series A investment in Facebook, still cited as one of the highest-multiple returns in venture capital history. He received the National Venture Capital Association's Lifetime Achievement Award in 2022.",
    sources: [
      { label: "Accel — Arthur Patterson", url: "https://www.accel.com/team/arthur-patterson" },
      { label: "PitchBook Profile", url: "https://pitchbook.com/profiles/investor/167544-19" }
    ]
  },
  "vinod-khosla": {
    name: "Vinod Khosla",
    firm: "Khosla Ventures",
    firmSlug: "khosla-ventures",
    title: "Founder",
    joinedYear: 2004,
    education: ["B.Tech. Electrical Engineering, IIT Delhi", "M.S. Biomedical Engineering, Carnegie Mellon University", "M.B.A., Stanford University"],
    previousExperience: [
      "Co-Founder, Sun Microsystems (1982) — served as first CEO",
      "General Partner, Kleiner Perkins (1986–2004)"
    ],
    investmentFocus: ["Clean Energy", "Artificial Intelligence", "Deep Tech"],
    notableInvestments: [
      { name: "Block (Square)", ticker: "XYZ" },
      { name: "Instacart", ticker: "CART" },
      { name: "OpenAI", ticker: null },
      { name: "Impossible Foods", ticker: null }
    ],
    boardSeats: ["Multiple private portfolio companies across clean energy and AI"],
    ipoCount: 2,
    majorExits: 2,
    careerTimeline: [
      { year: "1982", event: "Co-founds Sun Microsystems, serving as its first CEO before transitioning to venture capital." },
      { year: "1986", event: "Joins Kleiner Perkins as a General Partner, investing there for nearly two decades." },
      { year: "2004", event: "Founds Khosla Ventures, focused on high-risk, high-reward technology bets others consider too early." },
      { year: "2009", event: "Makes an early investment in Square (now Block), years ahead of its 2015 IPO." },
      { year: "2019", event: "Becomes an early institutional backer of OpenAI, one of the firm's highest-profile recent bets." }
    ],
    biography: "Vinod Khosla co-founded Sun Microsystems in 1982, serving as its first CEO, before moving into venture capital as a General Partner at Kleiner Perkins for nearly two decades. In 2004, he founded his own firm, Khosla Ventures, built on the conviction that the biggest returns come from technology bets everyone else is too cautious to make — from early clean energy investments long before the category was fashionable to some of the earliest institutional capital behind OpenAI. True to his engineering training at IIT Delhi and Carnegie Mellon, Khosla has built a reputation for backing technically difficult, capital-intensive bets that more conservative investors pass on.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vinod_Khosla" },
      { label: "Khosla Ventures", url: "https://www.khoslaventures.com" }
    ]
  },
  "joshua-kushner": {
    name: "Joshua Kushner",
    firm: "Thrive Capital",
    firmSlug: "thrive-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2009,
    education: ["B.A., Harvard University (2008)", "M.B.A., Harvard Business School (2011)"],
    previousExperience: [
      "Private Equity Group, Goldman Sachs — distressed debt"
    ],
    investmentFocus: ["Consumer Internet", "AI", "Fintech", "Healthcare"],
    notableInvestments: [
      { name: "Instagram", ticker: null },
      { name: "OpenAI", ticker: null },
      { name: "Stripe", ticker: null },
      { name: "GitHub", ticker: null },
      { name: "Figma", ticker: "FIG" },
      { name: "Instacart", ticker: "CART" }
    ],
    boardSeats: ["Oscar Health (Vice Chairman)", "A24 Films"],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2008", event: "Graduates from Harvard College and joins Goldman Sachs' private equity group, working on distressed debt." },
      { year: "2009", event: "Founds Thrive Capital at age 24 with a $5 million first fund, initially funding it himself." },
      { year: "2012", event: "Makes one of his earliest and most famous bets on Instagram, years before its acquisition by Facebook." },
      { year: "2013", event: "Co-founds Oscar Health, serving as vice chairman." },
      { year: "2020s", event: "Becomes one of the earliest and largest institutional investors in OpenAI." }
    ],
    biography: "Joshua Kushner founded Thrive Capital in 2009 at just 24 years old, funding the firm's first, $5 million fund largely himself after a brief stint in Goldman Sachs' private equity group. Thrive has stayed deliberately small in deal volume — funding only a handful of new companies most years — while making some of the earliest bets on Instagram and, more recently, OpenAI, a concentrated approach that has made it one of the highest-returning firms of its size. Outside of Thrive, Kushner co-founded and serves as vice chairman of Oscar Health, the technology-driven health insurance company.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Joshua_Kushner" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/josh-kushner/" }
    ]
  },
  "byron-deeter": {
    name: "Byron Deeter",
    firm: "Bessemer Venture Partners",
    firmSlug: "bessemer",
    title: "Partner",
    joinedYear: 2005,
    education: ["B.A., University of California, Berkeley"],
    previousExperience: [
      "Co-Founder, President & CEO, Trigo Technologies (1999–2004) — acquired by IBM",
      "Business Development Executive, IBM",
      "Associate, TA Associates",
      "Analyst, McKinsey & Company"
    ],
    investmentFocus: ["Cloud Computing", "SaaS", "AI", "Enterprise Software"],
    notableInvestments: [
      { name: "Twilio", ticker: "TWLO" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "Box", ticker: null },
      { name: "HashiCorp", ticker: null },
      { name: "SendGrid", ticker: null },
      { name: "Anthropic", ticker: null }
    ],
    boardSeats: ["ServiceTitan", "MaintainX", "Syndio"],
    ipoCount: 13,
    majorExits: 11,
    careerTimeline: [
      { year: "1999", event: "Co-founds cloud-computing company Trigo Technologies, serving as President and CEO." },
      { year: "2004", event: "Trigo Technologies is acquired by IBM, where Deeter continues on as an executive." },
      { year: "2005", event: "Joins Bessemer Venture Partners to help build out the firm's global cloud practice." },
      { year: "2010", event: "Leads Bessemer's early investment in Twilio, years ahead of its 2016 IPO." },
      { year: "2016", event: "Twilio and SendGrid, two companies Deeter backed, both go public." },
      { year: "2024", event: "ServiceTitan, one of Deeter's Series A investments, goes public in a roughly $9 billion IPO." }
    ],
    biography: "Byron Deeter built and sold his own cloud-computing company, Trigo Technologies, to IBM before returning to venture capital in 2005 to help lead Bessemer's global cloud practice. Since then, he has backed more than 100 cloud companies, 13 of which have gone public — including Twilio, DocuSign, Box, HashiCorp, and SendGrid — and co-authored Bessemer's widely cited 'Ten Laws of Cloud Computing' along with the firm's annual State of the Cloud report. His early, contrarian bet on Twilio in 2010, when the company was widely dismissed as a niche tool with a small market, became one of the defining cloud investments of the decade after its 2016 IPO.",
    sources: [
      { label: "Bessemer — Byron Deeter", url: "https://www.bvp.com/team/byron-deeter" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/byron-deeter/" }
    ]
  },
  "bill-gurley": {
    name: "Bill Gurley",
    firm: "Benchmark",
    firmSlug: "benchmark",
    title: "General Partner",
    joinedYear: 1999,
    education: ["B.S. Computer Science, University of Florida (1989)", "M.B.A., University of Texas at Austin, McCombs School of Business (1993)"],
    previousExperience: [
      "Design Engineer, Compaq Computer",
      "Technical Marketing, AMD Embedded Processor Division",
      "Technology Research Analyst, CS First Boston",
      "General Partner, Hummer Winblad Venture Partners"
    ],
    investmentFocus: ["Consumer Internet", "Marketplaces", "Enterprise"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Zillow", ticker: null },
      { name: "GrubHub", ticker: null },
      { name: "OpenTable", ticker: null },
      { name: "Nextdoor", ticker: null },
      { name: "Stitch Fix", ticker: null }
    ],
    boardSeats: ["Nextdoor", "HackerOne", "Solv"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1989", event: "Graduates from the University of Florida with a computer science degree and joins Compaq as a design engineer." },
      { year: "1993", event: "Earns an MBA from UT Austin, then moves into technology research on Wall Street, working on the Amazon IPO." },
      { year: "1999", event: "Joins Benchmark as a General Partner." },
      { year: "2011", event: "Leads Benchmark's early investment in Uber." },
      { year: "2017", event: "Steps down from Uber's board following the company's leadership turmoil, handing the seat to fellow Benchmark partner Matt Cohler." },
      { year: "2025", event: "Publishes 'Runnin' Down a Dream,' a book on building a career you love." }
    ],
    biography: "Bill Gurley built an unusually well-rounded technical and financial foundation before venture capital — a computer science degree from the University of Florida, engineering roles at Compaq and AMD, and years as a Wall Street technology analyst covering the Amazon IPO — before joining Benchmark as a General Partner in 1999. He became one of the most influential investors of the 2010s through early, high-conviction bets on Uber, Zillow, GrubHub, OpenTable, and Nextdoor, and built a parallel reputation as a widely read commentator through his blog, Above the Crowd. He stepped down from Uber's board in 2017 amid the company's leadership crisis and has since relocated to Austin, Texas, while remaining active on several portfolio company boards.",
 sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bill_Gurley" },
      { label: "Texas Exes Distinguished Alumnus", url: "https://www.texasexes.org/about-us/awards/distinguished-alumnus-award-0" }
    ]
  },
  "reid-hoffman": {
    name: "Reid Hoffman",
    firm: "Greylock Partners",
    firmSlug: "greylock",
    title: "Partner",
    joinedYear: 2009,
    education: ["B.S. Symbolic Systems, Stanford University", "M.St. Philosophy, Wolfson College, Oxford University (Marshall Scholar)"],
    previousExperience: [
      "Founder, SocialNet (1997) — an early social networking site",
      "Executive Vice President & Founding Board Member, PayPal (2000–2002) — acquired by eBay for $1.5B",
      "Co-Founder & Executive Chairman, LinkedIn (2003) — IPO 2011, acquired by Microsoft for $26.2B in 2016"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise Software", "AI", "Marketplaces"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "Airbnb", ticker: "ABNB" },
      { name: "LinkedIn", ticker: null },
      { name: "Aurora Innovation", ticker: "AUR" },
      { name: "Groupon", ticker: "GRPN" }
    ],
    boardSeats: ["Microsoft", "Aurora Innovation"],
    ipoCount: 2,
    majorExits: 2,
    careerTimeline: [
      { year: "1997", event: "Founds SocialNet, an early and unsuccessful attempt at online social networking." },
      { year: "2000", event: "Joins PayPal as Executive Vice President and a founding board member." },
      { year: "2002", event: "eBay acquires PayPal for $1.5 billion." },
      { year: "2003", event: "Co-founds LinkedIn, serving as CEO for its first four years and later as Executive Chairman." },
      { year: "2009", event: "Joins Greylock Partners as a partner while still serving as LinkedIn's chairman." },
      { year: "2011", event: "LinkedIn goes public; Hoffman's stake is valued at over $2 billion." },
      { year: "2016", event: "Microsoft acquires LinkedIn for $26.2 billion; Hoffman joins Microsoft's board." }
    ],
    biography: "Reid Hoffman is part of the 'PayPal Mafia' — the group of early PayPal employees and executives who went on to found or fund a wave of major technology companies. After PayPal's $1.5 billion sale to eBay, Hoffman co-founded LinkedIn in 2003, growing it into the world's largest professional networking service before Microsoft acquired it for $26.2 billion in 2016. He joined Greylock Partners as a partner in 2009, focusing on businesses with strong network effects, and was an early investor in both Facebook and Airbnb. He is also the host of the podcast Masters of Scale and co-author of three best-selling books on entrepreneurship, including Blitzscaling.",
    sources: [
{ label: "Greylock — Reid Hoffman", url: "https://greylock.com/team/reid-hoffman/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Reid_Hoffman" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/reid-hoffman/" }
    ]
  },
  "john-doerr": {
    name: "John Doerr",
    firm: "Kleiner Perkins",
    firmSlug: "kleiner-perkins",
    title: "Chairman",
    joinedYear: 1980,
    education: ["B.S. & M.S. Electrical Engineering, Rice University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Engineering, Marketing & Sales Executive, Intel (1974–1980)"
    ],
    investmentFocus: ["Enterprise Software", "Internet Infrastructure", "Climate Tech"],
    notableInvestments: [
      { name: "Amazon", ticker: "AMZN" },
      { name: "Google", ticker: "GOOGL" },
      { name: "Netscape", ticker: null },
      { name: "Sun Microsystems", ticker: null },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Slack", ticker: null }
    ],
    boardSeats: ["Alphabet (Google)"],
    ipoCount: 4,
    majorExits: 1,
    careerTimeline: [
      { year: "1974", event: "Joins Intel just as the company launches its landmark 8080 microprocessor." },
      { year: "1980", event: "Joins Kleiner Perkins as a partner." },
      { year: "1996", event: "Leads Kleiner Perkins' investment in Amazon.com, later helping recruit its early engineering leadership." },
      { year: "1999", event: "Leads a $12.5 million investment in Google alongside Sequoia Capital — the firm's largest check at the time." },
      { year: "2004", event: "Google goes public in one of the most celebrated venture bets in history." },
      { year: "2016", event: "Steps down from day-to-day leadership of Kleiner Perkins, becoming chairman." },
      { year: "2018", event: "Publishes 'Measure What Matters,' popularizing the OKR goal-setting framework he introduced to Google." }
    ],
    biography: "John Doerr joined Intel in 1974, just as the company launched its landmark 8080 microprocessor, before joining Kleiner Perkins as a partner in 1980. Over more than four decades at the firm, he led some of the most consequential venture investments in history: Amazon in 1996, and Google in 1999, when Kleiner Perkins and Sequoia Capital each wrote what was then their largest check ever on a 17-page pitch deck with no business model. Beyond capital, Doerr helped recruit key early executives at both companies and introduced the OKR (Objectives and Key Results) goal-setting framework to Google, later documenting it in his bestselling book Measure What Matters. He stepped down from day-to-day leadership of Kleiner Perkins in 2016 and remains a board director of Alphabet.",
  sources: [
      { label: "Kleiner Perkins — John Doerr", url: "https://www.kleinerperkins.com/people/john-doerr/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/john-doerr/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/John_Doerr" }
    ]
  },
  "fred-wilson": {
    name: "Fred Wilson",
    firm: "Union Square Ventures",
    firmSlug: "union-square-ventures",
    title: "Co-Founder & Partner",
    joinedYear: 2003,
    education: ["B.S. Mechanical Engineering, Massachusetts Institute of Technology", "M.B.A., The Wharton School, University of Pennsylvania"],
    previousExperience: [
      "Associate to General Partner, Euclid Partners (1987–1996)",
      "Co-Founder, Flatiron Partners (1996–2001) — with Jerry Colonna"
    ],
    investmentFocus: ["Consumer Internet", "Marketplaces", "Fintech", "Crypto"],
    notableInvestments: [
      { name: "Twitter", ticker: null },
      { name: "Etsy", ticker: "ETSY" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "Tumblr", ticker: null },
      { name: "MongoDB", ticker: "MDB" },
      { name: "Zynga", ticker: null }
    ],
    boardSeats: ["Etsy (former)", "Twitter (former)"],
    ipoCount: 5,
    majorExits: 1,
    careerTimeline: [
      { year: "1987", event: "Joins Euclid Partners as an associate, eventually becoming a General Partner." },
      { year: "1996", event: "Co-founds Flatiron Partners with Jerry Colonna, investing in early internet companies." },
      { year: "2001", event: "Shuts down Flatiron Partners following the dot-com crash." },
      { year: "2003", event: "Co-founds Union Square Ventures with Brad Burnham." },
      { year: "2007", event: "Leads USV's Series A investment in Twitter, then four months old." },
      { year: "2008", event: "Leads USV's investment in Etsy." },
      { year: "2013", event: "Portfolio company Tumblr is acquired by Yahoo for $1.1 billion." },
      { year: "2021", event: "Coinbase, an early USV bet, goes public via direct listing." }
    ],
    biography: "Fred Wilson has been a venture capitalist since 1987, working his way up from associate to General Partner at Euclid Partners before co-founding Flatiron Partners in 1996. After Flatiron closed following the dot-com crash, he co-founded Union Square Ventures in 2003 with Brad Burnham, built around a deliberately small-fund philosophy Wilson has stuck to for two decades. USV's early, thesis-driven bets on network-effect businesses — Twitter four months after launch, a then-unproven Etsy, and Coinbase years before crypto went mainstream — have made it one of the most consistently prescient firms in venture capital. Wilson is also known for AVC.com, his long-running blog on venture capital and startups, active continuously since 2003.",
    sources: [
      { label: "USV — Fred Wilson", url: "https://www.usv.com/people/fred-wilson/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fred_Wilson_(financier)" }
    ]
  },
  "geoff-yang": {
    name: "Geoff Yang",
    firm: "Redpoint Ventures",
    firmSlug: "redpoint",
    title: "Founding Partner & Managing Director",
    joinedYear: 1999,
    education: ["B.S.E. Operations Research & Financial Engineering, Princeton University (1981)", "M.B.A., Stanford Graduate School of Business (1985)"],
    previousExperience: [
      "Marketing Representative, IBM Corporation",
      "Associate, First Century Partners",
      "General Partner, Institutional Venture Partners (IVP) (1987–1999)"
    ],
    investmentFocus: ["Consumer Media", "Internet Infrastructure", "Networking"],
    notableInvestments: [
      { name: "TiVo", ticker: null },
      { name: "Juniper Networks", ticker: "JNPR" },
      { name: "MySpace", ticker: null },
      { name: "Ask Jeeves", ticker: null },
      { name: "Excite", ticker: null },
      { name: "Foundry Networks", ticker: null }
    ],
    boardSeats: ["Warner Bros. Discovery", "Franklin Templeton"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1981", event: "Graduates from Princeton University with a degree in Operations Research and Financial Engineering." },
      { year: "1985", event: "Earns an MBA from Stanford Graduate School of Business." },
      { year: "1987", event: "Joins Institutional Venture Partners (IVP) as a General Partner." },
      { year: "1999", event: "Co-founds Redpoint Ventures, focused on consumer media and internet infrastructure." },
      { year: "2000s", event: "Leads investments through IPOs including Juniper Networks, TiVo, Ask Jeeves, and Excite." }
    ],
    biography: "Geoff Yang spent 12 years as a General Partner at Institutional Venture Partners before co-founding Redpoint Ventures in 1999, bringing decades of experience backing consumer media and internet infrastructure companies from their earliest days. His investments include Juniper Networks, TiVo, Ask Jeeves, Excite, and MySpace, several of which went public during his tenure. Beyond Redpoint, Yang has served as a director of AT&T and currently sits on the boards of Warner Bros. Discovery and Franklin Templeton, alongside advisory roles at Princeton University and the Stanford Graduate School of Business.",
    sources: [
 { label: "Redpoint — Geoff Yang", url: "https://www.redpoint.com/our-people/geoff-yang/" },
      { label: "USOPC Profile", url: "https://www.usopc.org/geoff-yang" }
    ]
  },
  "bijan-sabet": {
    name: "Bijan Sabet",
    firm: "Spark Capital",
    firmSlug: "spark-capital",
    title: "Co-Founder & Partner Emeritus",
    joinedYear: 2005,
    education: ["B.S., Boston College (1991)"],
    previousExperience: [
      "Senior Executive, WebTV and other Silicon Valley startups (1990s) — WebTV acquired by Microsoft for $425M in 1997",
      "Entrepreneur in Residence, Charles River Ventures"
    ],
    investmentFocus: ["Consumer Internet", "Social Media", "Marketplaces"],
    notableInvestments: [
      { name: "Twitter", ticker: null },
      { name: "Tumblr", ticker: null },
      { name: "Foursquare", ticker: null },
      { name: "Stack Overflow", ticker: null },
      { name: "Boxee", ticker: null }
    ],
    boardSeats: ["Twitter (2008–2011, former)", "Tumblr (2007–2013, former)"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "1991", event: "Graduates from Boston College with a degree in accounting and computer science." },
      { year: "1990s", event: "Works at WebTV and other early consumer internet startups; WebTV is acquired by Microsoft for $425 million in 1997." },
      { year: "2005", event: "Co-founds Spark Capital with Santo Politi, Paul Conway, and Todd Dagres." },
      { year: "2007", event: "Leads Spark's investment in Twitter when the company has fewer than a dozen employees." },
      { year: "2013", event: "Twitter goes public; Tumblr, another Sabet-backed company, is acquired by Yahoo for $1.1 billion the same year." },
      { year: "2021", event: "Transitions from General Partner to Limited Partner to pursue public service." },
      { year: "2022", event: "Sworn in as U.S. Ambassador to the Czech Republic, serving until 2025." }
    ],
    biography: "Bijan Sabet co-founded Spark Capital in 2005 after a decade building early consumer internet startups, including WebTV, which Microsoft acquired for $425 million in 1997. He led Spark's investment in Twitter in 2007, when the company had fewer than a dozen employees, and served on its board until 2011 — two years before Twitter's 2013 IPO. He was also an early backer of Tumblr, which Yahoo acquired for $1.1 billion the same year. In 2021, Sabet transitioned from General Partner to Limited Partner at Spark to pursue public service, and was sworn in as U.S. Ambassador to the Czech Republic in 2022, serving until 2025 — a genuinely unusual second act for a venture capitalist.",
  
  sources: [
      { label: "Spark Capital — Bijan Sabet", url: "https://www.sparkcapital.com/team-members/bijan-sabet" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bijan_Sabet" }
    ]
  },
  "danny-rimer": {
    name: "Danny Rimer",
    firm: "Index Ventures",
    firmSlug: "index-ventures",
    title: "Partner",
    joinedYear: 2002,
    education: ["B.A. History & Literature, Harvard University"],
    previousExperience: [
      "Underwriting Analyst, Hambrecht & Quist — worked on the IPOs of Amazon, Netscape, and Verisign",
      "The Barksdale Group"
    ],
    investmentFocus: ["Consumer", "Design", "Marketplaces", "Creative Platforms"],
    notableInvestments: [
      { name: "Dropbox", ticker: "DBX" },
      { name: "Etsy", ticker: "ETSY" },
      { name: "Figma", ticker: "FIG" },
      { name: "Discord", ticker: null },
      { name: "Skype", ticker: null },
      { name: "King (Candy Crush)", ticker: null }
    ],
    boardSeats: ["Figma"],
    ipoCount: 4,
    majorExits: 2,
    careerTimeline: [
      { year: "1990s", event: "Works as an underwriting analyst at Hambrecht & Quist, helping take Amazon, Netscape, and Verisign public." },
      { year: "2002", event: "Joins Index Ventures and opens the firm's London office." },
      { year: "2012", event: "Opens Index's San Francisco office, bridging the firm's European and U.S. operations." },
      { year: "2015", event: "Portfolio company Etsy goes public at a $1.8 billion valuation." },
      { year: "2017", event: "Appointed an Officer of the Order of the British Empire (OBE) for services to business and charity." },
      { year: "2018", event: "Returns to Index's London office as a partner." },
      { year: "2025", event: "Portfolio company Figma goes public at a $56 billion valuation." }
    ],
    biography: "Danny Rimer joined Index Ventures in 2002, opening the firm's London office, after working as an underwriting analyst at Hambrecht & Quist where he helped take Amazon, Netscape, and Verisign public. The son of Index Securities founder Gerald Rimer and brother of Index co-founder Neil Rimer, he built a reputation for backing design-driven consumer and creative platforms — Dropbox, Etsy, Skype, Discord, and Figma among them. He led Index's Series B investment in Dropbox and has sat on the boards of Etsy, King, Skype, and Dropbox over his career. In 2017, he was appointed an Officer of the Order of the British Empire for services to business and charity, and his investment in Figma proved out spectacularly when the company went public in 2025 at a $56 billion valuation.",
    sources: [
      { label: "Index Ventures — Danny Rimer", url: "https://www.indexventures.com/team/danny-rimer/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Danny_Rimer" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/danny-rimer/" }
    ]
  },
  "josh-kopelman": {
    name: "Josh Kopelman",
    firm: "First Round Capital",
    firmSlug: "first-round-capital",
    title: "Founder & Managing Director",
    joinedYear: 2004,
    education: ["B.S. cum laude, Entrepreneurial Management & Marketing, Wharton School, University of Pennsylvania"],
    previousExperience: [
      "Co-Founder, Infonautics Corporation (1992) — IPO'd on NASDAQ in 1996",
      "Founder, Half.com (1999) — acquired by eBay in 2000",
      "Co-Founder, TurnTide (2003) — anti-spam startup acquired by Symantec six months later"
    ],
    investmentFocus: ["Seed-Stage", "Consumer Internet", "Marketplaces", "Fintech"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Square (Block)", ticker: "XYZ" },
      { name: "Roblox", ticker: "RBLX" },
      { name: "Warby Parker", ticker: "WRBY" },
      { name: "Notion", ticker: null },
      { name: "Blue Apron", ticker: null }
    ],
    boardSeats: ["The Philadelphia Inquirer (Chair Emeritus, former Chairman 2015–2024)"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "1992", event: "Co-founds Infonautics Corporation as a Wharton undergraduate." },
      { year: "1996", event: "Infonautics goes public on NASDAQ." },
      { year: "1999", event: "Founds Half.com, growing it into a major seller of used books, movies, and music." },
      { year: "2000", event: "eBay acquires Half.com." },
      { year: "2003", event: "Co-founds TurnTide, an anti-spam startup Symantec acquires just six months later." },
      { year: "2004", event: "Co-founds First Round Capital with Howard Morgan, built to reinvent seed-stage investing." },
      { year: "2010", event: "Leads First Round's roughly $1.25 million investment in UberCab — Uber's first-ever institutional funding." },
      { year: "2019", event: "Uber goes public at a valuation exceeding $70 billion." }
    ],
    biography: "Josh Kopelman was a serial entrepreneur before he was ever a venture capitalist — he co-founded Infonautics as a Wharton undergraduate in 1992 and took it public just four years later, then founded Half.com in 1999, selling it to eBay within a year. After a brief detour co-founding an anti-spam startup that Symantec acquired within six months, Kopelman co-founded First Round Capital in 2004 with Howard Morgan, built specifically to reinvent seed-stage investing with small initial checks to companies with little more than a founding team and an idea. First Round's most famous bet came in 2010, when Kopelman led the firm's roughly $1.25 million investment in a tiny startup called UberCab — the company's first-ever institutional funding, made when Uber was still working out of a First Round conference room. That seed investment became one of the highest-multiple returns in venture history when Uber went public in 2019 at a valuation exceeding $70 billion.",
 sources: [
      { label: "First Round — Josh Kopelman", url: "https://firstround.com/news/person/josh-kopelman/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Josh_Kopelman" }
    ]
  },
  "saar-gur": {
    name: "Saar Gur",
    firm: "CRV",
    firmSlug: "crv",
    title: "General Partner",
    joinedYear: 2007,
    education: ["B.S. Biochemistry & Molecular Biology, University of Wisconsin–Madison (1998)", "M.B.A., Stanford Graduate School of Business (2003)"],
    previousExperience: [
      "VP Customer Acquisition, Adteractive (2004–2006)",
      "Co-Founder, BrightRoll (2006) — video ad platform acquired by Yahoo for $640M in 2014"
    ],
    investmentFocus: ["Consumer", "Marketplaces", "Fintech"],
    notableInvestments: [
      { name: "DoorDash", ticker: "DASH" },
      { name: "Ring", ticker: null },
      { name: "ClassPass", ticker: null },
      { name: "Patreon", ticker: null },
      { name: "Mercury", ticker: null },
      { name: "MileIQ", ticker: null }
    ],
    boardSeats: ["Cendana Capital (advisor)", "Progress Financial (advisor)"],
    ipoCount: 4,
    majorExits: 4,
    careerTimeline: [
      { year: "1998", event: "Graduates from the University of Wisconsin–Madison with a degree in biochemistry and molecular biology." },
      { year: "2003", event: "Earns an MBA from Stanford Graduate School of Business." },
      { year: "2006", event: "Co-founds BrightRoll, a video ad platform, building it out of his San Francisco apartment." },
      { year: "2007", event: "Joins CRV as a General Partner." },
      { year: "2013", event: "Leads CRV's seed investment in DoorDash, when the company is just nine weeks old." },
      { year: "2014", event: "Yahoo acquires BrightRoll for $640 million." },
      { year: "2018", event: "Amazon acquires Ring, another Gur-backed company, for $1 billion." },
      { year: "2020", event: "DoorDash goes public at a $39 billion valuation." }
    ],
    biography: "Saar Gur co-founded the video ad platform BrightRoll in 2006 — building it, in his own telling, out of his San Francisco apartment — before Yahoo acquired it for $640 million in 2014. He joined CRV as a General Partner in 2007 and built a reputation for seeding consumer and marketplace startups before their categories became obvious: he led CRV's seed investment in DoorDash when the company was just nine weeks old, and backed the smart-doorbell startup Ring after it was rejected on Shark Tank, a bet Amazon validated with a $1 billion acquisition in 2018. DoorDash went public in December 2020 at a $39 billion valuation, one of four IPOs in Gur's portfolio, and he has appeared on the Forbes Midas List five times since his 2021 debut.",
    sources: [
 { label: "CRV — Saar Gur", url: "https://www.crv.com/team/saar-gur" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/saar-gur/" }
    ]
  },
  "neeraj-agrawal": {
    name: "Neeraj Agrawal",
    firm: "Battery Ventures",
    firmSlug: "battery-ventures",
    title: "General Partner",
    joinedYear: 2000,
    education: ["B.S. Computer Science, Cornell University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Product Manager, RealNetworks",
      "Operating Executive, SkyTV"
    ],
    investmentFocus: ["SaaS", "B2B Software", "Cloud Infrastructure"],
    notableInvestments: [
      { name: "Wayfair", ticker: "W" },
      { name: "Coupa", ticker: null },
      { name: "Guidewire", ticker: "GWRE" },
      { name: "Nutanix", ticker: "NTNX" },
      { name: "Groupon", ticker: "GRPN" },
      { name: "Bazaarvoice", ticker: null }
    ],
    boardSeats: ["Braze", "Pendo.io", "Dataiku", "Workato"],
    ipoCount: 10,
    majorExits: 4,
    careerTimeline: [
      { year: "2000", event: "Joins Battery Ventures after working as a product manager at RealNetworks and an operating executive at SkyTV." },
      { year: "2011", event: "Leads Battery's first institutional investment in Wayfair, having known co-founder Niraj Shah since their Cornell days." },
      { year: "2014", event: "Wayfair goes public." },
      { year: "2017", event: "Named to the New York Times' Top 20 Venture Capitalists Worldwide." },
      { year: "2019", event: "Reaches #9 on the Forbes Midas List, his tenth consecutive year on the ranking." }
    ],
    biography: "Neeraj Agrawal joined Battery Ventures in 2000 after working as a product manager at RealNetworks and an operating executive at SkyTV, building a career focused on SaaS and B2B software investing. He led Battery's investment in Wayfair in 2011, jumping at the chance after having known co-founder Niraj Shah since their days together at Cornell University. He has since guided more than ten portfolio companies through IPOs, including Coupa, Guidewire, Nutanix, Bazaarvoice, and Groupon, and coined the widely used 'T2D3' framework for scaling SaaS companies. He has appeared on the Forbes Midas List for ten consecutive years, reaching as high as #9 in 2019, and was named to the New York Times' Top 20 Venture Capitalists Worldwide in 2017.",
sources: [
      { label: "Battery Ventures — Neeraj Agrawal", url: "https://www.battery.com/people/neeraj-agrawal/" },
      { label: "The Org", url: "https://theorg.com/org/battery-ventures/org-chart/neeraj-agrawal" }
    ]
  },
  "david-krane": {
    name: "David Krane",
    firm: "GV",
    firmSlug: "gv",
    title: "CEO & Managing Partner",
    joinedYear: 2010,
    education: ["B.A. Journalism, Indiana University Bloomington"],
    previousExperience: [
      "Corporate Communications Roles, Qualcomm & Apple",
      "Four11 (later became Yahoo Mail)",
      "Employee #84 & Director of Global Communications and Public Affairs, Google (2000–2010)"
    ],
    investmentFocus: ["Consumer Technology", "Life Sciences", "Enterprise"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Nest Labs", ticker: null },
      { name: "HomeAway", ticker: null },
      { name: "Blue Bottle Coffee", ticker: null },
      { name: "StockX", ticker: null },
      { name: "GitLab", ticker: "GTLB" }
    ],
    boardSeats: ["MGM Studios (former)"],
    ipoCount: 3,
    majorExits: 3,
    careerTimeline: [
      { year: "2000", event: "Joins Google as employee number 84, later leading global communications and public affairs." },
      { year: "2009", event: "Helps establish Google Ventures." },
      { year: "2010", event: "Becomes a General Partner at GV." },
      { year: "2011", event: "Personally leads GV's $258 million investment in Uber." },
      { year: "2016", event: "Becomes CEO and Managing Partner of GV, succeeding founding CEO Bill Maris." },
      { year: "2019", event: "Uber goes public." }
    ],
    biography: "David Krane joined Google in 2000 as employee number 84, rising to lead the company's global communications and public affairs group during its transformation into a multibillion-dollar enterprise. He helped establish Google Ventures in 2009 and became a General Partner in 2010, bringing an unusual communications-and-PR background rather than a traditional finance pedigree to venture investing. He personally led GV's landmark $258 million investment in Uber, which he has described as a 'relentless pursuit' of the founder, alongside early bets on Nest Labs, HomeAway, and Blue Bottle Coffee. Krane became CEO and Managing Partner of GV in 2016, succeeding founding CEO Bill Maris, and now oversees more than $13 billion in assets across roughly 400 active portfolio companies.",
    sources: [
      { label: "GV — David Krane", url: "https://www.gv.com/team/david-krane" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/David_Krane" }
    ]
  },
  "todd-chaffee": {
    name: "Todd Chaffee",
    firm: "IVP",
    firmSlug: "ivp",
    title: "Managing Director & General Partner",
    joinedYear: 2000,
    education: ["B.S. with honors, University of Minnesota Carlson School of Management", "Stanford Graduate School of Business Advanced Management Program", "Harvard Business School Venture Capital Program"],
    previousExperience: [
      "Management roles, American Express & TRW Information Systems Group",
      "Founder, Grand Expeditions, Inc. — luxury travel company with $200M+ in revenue",
      "SVP Advanced Payment Systems, then EVP, Visa International (1994–2000) — built Visa's venture capital arm, generating $1.2B+ in gains"
    ],
    investmentFocus: ["Media", "Travel", "Technology"],
    notableInvestments: [
      { name: "Twitter", ticker: null },
      { name: "Netflix", ticker: "NFLX" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "HomeAway", ticker: null },
      { name: "Kayak", ticker: null },
      { name: "Yahoo", ticker: null }
    ],
    boardSeats: ["Domo (former)"],
    ipoCount: 10,
    majorExits: 3,
    careerTimeline: [
      { year: "1994", event: "Joins Visa as Senior Vice President of Advanced Payment Systems." },
      { year: "1995", event: "Launches Visa's venture capital arm from scratch." },
      { year: "2000", event: "Joins IVP as a General Partner, becoming the youngest Executive Vice President in Visa's history just before leaving." },
      { year: "2009", event: "Leads IVP's $44 million investment in Twitter at a $220 million valuation." },
      { year: "2013", event: "Twitter goes public." },
      { year: "2018", event: "IVP's original Twitter stake has grown into a return of nearly $5 billion." }
    ],
    biography: "Todd Chaffee built Visa's first venture capital arm from scratch starting in 1994, generating more than $1.2 billion in gains and a 32.8x return multiple before becoming the youngest Executive Vice President in Visa International's history. He joined IVP as a General Partner in 2000 and built a portfolio spanning Netflix, HomeAway, Kayak, Coinbase, and Yahoo — but his signature bet came in 2009, when he led IVP's $44 million investment in Twitter at a $220 million valuation. By 2018, that stake had grown into a return of nearly $5 billion. Chaffee has appeared on the Forbes Midas List every year from 2009 through 2018 and was named to the New York Times' Top 100 Venture Capitalists list for four consecutive years.",
    sources: [
      { label: "IVP — Todd Chaffee", url: "https://www.ivp.com/team/todd-chaffee/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/todd-chaffee/" }
    ]
  },
  "jon-callaghan": {
    name: "Jon Callaghan",
    firm: "True Ventures",
    firmSlug: "true-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2005,
    education: ["B.A. Government, Dartmouth College", "M.B.A. with distinction, Harvard Business School"],
    previousExperience: [
      "Founder, Mountain Bike Outfitters, Inc. (1986) — founded at age 17, ran for eight years",
      "Associate, Summit Partners (1991)",
      "Greenhouse, AOL's venture capital incubator",
      "CMGI's @Ventures group (1996)",
      "Managing Director, Globespan Capital Partners"
    ],
    investmentFocus: ["Consumer", "Hardware & Wearables", "Media"],
    notableInvestments: [
      { name: "Fitbit", ticker: null },
      { name: "Peloton", ticker: "PTON" },
      { name: "BrightRoll", ticker: null },
      { name: "Ring", ticker: null },
      { name: "Automattic (WordPress)", ticker: null },
      { name: "HashiCorp", ticker: null }
    ],
    boardSeats: ["Peloton", "Madison Reed", "Fitbit (2015–2018, former Lead Independent Director)"],
    ipoCount: 4,
    majorExits: 4,
    careerTimeline: [
      { year: "1986", event: "Founds Mountain Bike Outfitters, Inc. at age 17, running the Jackson Hole shop for eight years." },
      { year: "1991", event: "Joins Summit Partners as an associate, beginning his venture career." },
      { year: "1996", event: "Joins CMGI's @Ventures group, entering the internet market early." },
      { year: "2005", event: "Co-founds True Ventures with Phil Black." },
      { year: "2015", event: "Fitbit goes public; Callaghan serves as Lead Independent Director." },
      { year: "2015", event: "Becomes Chairman of the National Venture Capital Association, serving through 2016." },
      { year: "2019", event: "Peloton, another True Ventures portfolio company, goes public." }
    ],
    biography: "Jon Callaghan founded his first company, Mountain Bike Outfitters, at just 17 years old, running the Jackson Hole shop for eight years before entering venture capital as an associate at Summit Partners in 1991. After roles at AOL's venture incubator and CMGI's early internet-focused @Ventures group, he co-founded True Ventures in 2005 with Phil Black, built around a deliberate strategy of maximizing risk at the earliest stages — backing category-defining companies before their categories even existed. That philosophy defined True's investment in Fitbit, made when the device looked like little more than a pedometer in a world with no wearables market; Callaghan served as the company's Lead Independent Director through its 2015 IPO. He has also led deals and sat on the boards of Peloton, BrightRoll, and Madison Reed, and served as Chairman of the National Venture Capital Association from 2015 to 2016.",
 sources: [
      { label: "True Ventures — Jon Callaghan", url: "https://www.trueventures.com/team/jon-callaghan" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/person/jon-callaghan" }
    ]
  },
  "shawn-carolan": {
    name: "Shawn Carolan",
    firm: "Menlo Ventures",
    firmSlug: "menlo-ventures",
    title: "Partner",
    joinedYear: 2002,
    education: ["B.S. & M.S. Electrical Engineering, University of Illinois Urbana-Champaign (highest honors)", "M.B.A., Stanford Graduate School of Business"],
    previousExperience: [
      "Developer, then Manager of Software Architecture, Open Port Technology — wrote wire protocols in C++, obtained a patent",
      "DARPA-funded fellowship in computational electromagnetics"
    ],
    investmentFocus: ["Consumer Technology", "Enterprise Software"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Roku", ticker: "ROKU" },
      { name: "Chime", ticker: null },
      { name: "Siri", ticker: null },
      { name: "PlaySpan", ticker: null },
      { name: "IMVU", ticker: null }
    ],
    boardSeats: ["Chime", "ShipBob", "Monarch Money", "OpenSpace", "Roku (through IPO, former)"],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "2002", event: "Joins Menlo Ventures as an associate." },
      { year: "2004", event: "Promoted to Managing Director at age 30." },
      { year: "2005", event: "Menlo becomes Siri's first investor, years before Apple's 2010 acquisition." },
      { year: "2011", event: "Leads a $32 million Series B investment in Uber, a deal a16z had passed on." },
      { year: "2018", event: "A SoftBank-led group purchases roughly half of Menlo's Uber shares for $973 million, a 93x return." },
      { year: "2019", event: "Uber goes public." }
    ],
    biography: "Shawn Carolan joined Menlo Ventures in 2002 as an associate after earning electrical engineering degrees with highest honors from the University of Illinois and an MBA from Stanford, and was promoted to managing director just two years later at age 30. His technical background led him to some of Menlo's most distinctive early bets, including being the firm's first investor in Siri before Apple acquired it in 2010. His signature deal came in 2011, when he led Menlo's $32 million Series B investment in Uber — a deal a16z had walked away from — valuing the young ride-hailing startup at $322 million. When a SoftBank-led investor group bought roughly half of Menlo's Uber shares in 2018, the sale returned $973 million on an original $10.5 million stake, a 93x return. Carolan has also served on Roku's board through its IPO and currently sits on the boards of Chime, ShipBob, and Monarch Money.",
    sources: [
      { label: "Menlo Ventures — Shawn Carolan", url: "https://menlovc.com/team/shawn-carolan/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2019/04/29/getting-a-piece-of-uber/" }
    ]
  },
  "jeff-crowe": {
    name: "Jeff Crowe",
    firm: "Norwest Venture Partners",
    firmSlug: "norwest-venture-partners",
    title: "Senior Managing Partner",
    joinedYear: 2004,
    education: ["B.A. History, summa cum laude & Phi Beta Kappa, Dartmouth College", "M.B.A., Stanford Graduate School of Business (Arjay Miller Scholar)"],
    previousExperience: [
      "Marketing & General Management, ROLM Corporation's voice messaging division",
      "Co-Founder & CEO, Edify Corporation (1990–1999) — led the company through its 1996 Nasdaq IPO; acquired by S1 Corporation in 1999",
      "President & COO, DoveBid, Inc. — grew revenue from $10M to $120M"
    ],
    investmentFocus: ["Internet", "Consumer", "Software"],
    notableInvestments: [
      { name: "Spotify", ticker: "SPOT" },
      { name: "Lending Club", ticker: "LC" },
      { name: "Jet.com", ticker: null },
      { name: "Glint", ticker: null },
      { name: "Plaid", ticker: null },
      { name: "Faire", ticker: null }
    ],
    boardSeats: ["HoneyBook", "Minted", "Madison Reed", "ICON", "Common"],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "1978", event: "Graduates Dartmouth College summa cum laude and Phi Beta Kappa, majoring in history." },
      { year: "1990", event: "Co-founds Edify Corporation, a venture-backed enterprise software company." },
      { year: "1996", event: "Leads Edify through its IPO on Nasdaq." },
      { year: "1999", event: "Edify is acquired by S1 Corporation; Crowe moves to DoveBid as President and COO." },
      { year: "2004", event: "Joins Norwest Venture Partners." },
      { year: "2013", event: "Becomes Managing Partner." },
      { year: "2014", event: "Norwest is the largest institutional investor in Lending Club's IPO." },
      { year: "2018", event: "Portfolio company Spotify goes public; Glint is acquired by Microsoft-owned LinkedIn for $400 million." }
    ],
    biography: "Jeff Crowe spent his first career as a technology operator, not an investor — he co-founded the enterprise software company Edify Corporation in 1990, led it through a Nasdaq IPO in 1996, and later served as President and COO of DoveBid, growing the business auction firm's revenue twelvefold. He joined Norwest Venture Partners in 2004 and became Managing Partner in 2013, focusing on internet, consumer, and software investments. Crowe and Norwest were the largest investors in Lending Club at its 2014 IPO, and his portfolio includes Spotify's 2018 public listing, Jet.com's $3 billion acquisition by Walmart, and Glint's $400 million acquisition by Microsoft the same year Spotify went public. He has appeared on the Forbes Midas List six years running and is known for a hands-on, product-focused investing style — he has said he validated the opportunity behind Minted, the design marketplace, partly by discovering his own wife had been a loyal customer for years.",
    sources: [
   { label: "Norwest — Jeff Crowe", url: "https://www.norwest.com/team/jeff-crowe/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/jeff-crowe/" }
    ]
  },
  "santi-subotovsky": {
    name: "Santi Subotovsky",
    firm: "Emergence Capital",
    firmSlug: "emergence-capital",
    title: "General Partner",
    joinedYear: 2010,
    education: ["B.S. Economics, Universidad de San Andrés, Argentina", "M.B.A. with Distinction, Harvard Business School"],
    previousExperience: [
      "Founder, AXG Tecnonexo (1999) — e-learning company grown to 150+ employees across Latin America and the U.S., with clients including Bank of America, Coca-Cola, and the World Bank",
      "Summer Associate, Storm Ventures",
      "Advisor, Aqua Capital Partners"
    ],
    investmentFocus: ["Cloud", "SaaS", "Enterprise Software", "Digital Media"],
    notableInvestments: [
      { name: "Zoom", ticker: "ZM" },
      { name: "Chorus", ticker: null },
      { name: "Openpath Security", ticker: null },
      { name: "Crunchbase", ticker: null },
      { name: "Logik.io", ticker: null },
      { name: "Zipline", ticker: null }
    ],
    boardSeats: ["Zoom", "Crunchbase", "Logik.io", "Zipline", "Tundra", "Class"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1999", event: "Founds AXG Tecnonexo, an e-learning company, in Argentina." },
      { year: "2010", event: "Moves to the U.S. after more than 70 VCs turn him down, then joins Emergence Capital as a Kauffman Fellow under Gordon Ritter's mentorship." },
      { year: "2010s", event: "Leads Emergence's investment in Zoom while it is still a little-known startup." },
      { year: "2019", event: "Zoom goes public." },
      { year: "2021", event: "Makes his Forbes Midas List debut, one of the first three Latin American venture capitalists named to the list." }
    ],
    biography: "Santi Subotovsky grew up in Argentina expecting to follow his father into mechanic work, but when no jobs were available, he founded his own company instead — AXG Tecnonexo, an e-learning platform he grew to 150 employees across Latin America and the U.S., landing clients like Bank of America and Coca-Cola. He moved to the United States in 2010 after more than 70 venture capital firms turned him down, eventually joining Emergence Capital as a Kauffman Fellow under founder Gordon Ritter's mentorship. He went on to lead Emergence's investment in Zoom when it was still a little-known startup, and remains on its board today. When Zoom founder Eric Yuan struggled to balance running the company with travel to meet investors, Subotovsky told him he'd go wherever Eric was, no matter the time or place — a gesture that came to define his hands-on investing style. He made his Forbes Midas List debut in 2021, becoming one of the first three Latin American venture capitalists to be named to the list.",
    sources: [
 { label: "Emergence Capital — Santi Subotovsky", url: "https://www.emcap.com/people/santi-subotovsky" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/santi-subotovsky/" }
    ]
  },
  "thomas-laffont": {
    name: "Thomas Laffont",
    firm: "Coatue Management",
    firmSlug: "coatue-management",
    title: "Co-Founder & Chief Investment Officer of Privates",
    joinedYear: 2003,
    education: ["B.A., Yale University (1997)"],
    previousExperience: [
      "Creative Artists Agency (CAA), Beverly Hills (1997–2003) — Agent Trainee, then Principal in the Motion Picture Group, representing film and television talent"
    ],
    investmentFocus: ["Technology", "Consumer", "Fintech"],
    notableInvestments: [
      { name: "Snap", ticker: "SNAP" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "ByteDance", ticker: null },
      { name: "OpenAI", ticker: null },
      { name: "Lime", ticker: null },
      { name: "OneTrust", ticker: null }
    ],
    boardSeats: ["OneTrust", "Lime"],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "1997", event: "Graduates Yale University." },
      { year: "1997", event: "Joins Creative Artists Agency in Beverly Hills, spending seven years representing film and television talent." },
      { year: "2003", event: "Joins his brother Philippe at Coatue Management to launch the firm's private investing business." },
      { year: "2013", event: "Leads an early investment in Snap, years before its IPO." },
      { year: "2017", event: "Snap goes public." },
      { year: "2020s", event: "Backs ByteDance, DoorDash, and OpenAI as Coatue's venture practice accelerates." }
    ],
    biography: "Thomas Laffont spent seven years at Creative Artists Agency in Beverly Hills, representing artists in film and television, before joining his brother Philippe at Coatue Management in 2003 to build the firm's private investing business from scratch. What started as a public equities hedge fund became one of the most prolific technology crossover investors of its era under Thomas's direction, backing ByteDance, Snap, DoorDash, and OpenAI as the venture and growth practice grew alongside Coatue's public portfolio. He led Coatue's early 2013 investment in Snap, years before its 2017 IPO, and continues to spearhead the firm's annual East Meets West Conference, which brings together technology founders and executives from the U.S. and Asia.",
    sources: [
      { label: "Coatue — Why CTEK (team bios)", url: "https://www.coatuectek.com/why-ctek" },
{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coatue_Management" }
    ]
  },
  "ajay-agarwal": {
    name: "Ajay Agarwal",
    firm: "Bain Capital Ventures",
    firmSlug: "bain-capital-ventures",
    title: "Partner",
    joinedYear: 2003,
    education: ["B.S. Electrical Engineering, Stanford University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Telemetry Design Engineer (summers), Hughes Aircraft Space and Communications Group — helped bid on the original DirecTV satellite",
      "Employee #18, Trilogy Software — ran Product and Sales for eight years, growing revenue from $1M to $300M",
      "Consultant, McKinsey & Company (Los Angeles)"
    ],
    investmentFocus: ["Early-Stage Application Software", "SaaS", "Commerce Enablement", "Product-Led Growth"],
    notableInvestments: [
      { name: "Kiva Systems", ticker: null },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "SendGrid", ticker: null },
      { name: "Clari", ticker: null },
      { name: "Gainsight", ticker: null }
    ],
    boardSeats: ["Ike (former)"],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2003", event: "Joins Bain Capital Ventures as a partner, focused on early-stage application software." },
      { year: "2004", event: "Leads BCV's first institutional round in Kiva Systems, a warehouse robotics startup." },
      { year: "2012", event: "Amazon acquires Kiva Systems, rebranding it Amazon Robotics." },
      { year: "2012", event: "Named to the Forbes Midas List." },
      { year: "2013", event: "Named to the Forbes Midas List for a second consecutive year." }
    ],
    biography: "Ajay Agarwal spent two summers as a telemetry design engineer at Hughes Aircraft, helping bid on the original DirecTV satellite, before co-founding a software startup with a college classmate that grew into Trilogy Software — Agarwal joined as employee 18 and spent eight years running product and sales, growing revenue from $1 million to $300 million. After an MBA at Harvard and a stint at McKinsey, he joined Bain Capital Ventures in 2003. His signature bet came in 2004, when he led BCV's first institutional round in Kiva Systems, a warehouse robotics startup founded by Mick Mountz at a time when e-commerce was still nascent. Amazon acquired Kiva in 2012, rebranding it Amazon Robotics — its robots now power more than 2,000 fulfillment centers across Amazon's global network. Agarwal was named to the Forbes Midas List in both 2012 and 2013.",
    sources: [
      { label: "Bain Capital Ventures — Ajay Agarwal", url: "https://baincapitalventures.com/team/ajay-agarwal/" },
   { label: "Bain Capital", url: "https://www.baincapital.com/people/ajay-agarwal" }
    ]
  },
  "steve-anderson": {
    name: "Steve Anderson",
    firm: "Baseline Ventures",
    firmSlug: "baseline-ventures",
    title: "Founder",
    joinedYear: 2006,
    education: ["MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Roles at Microsoft, eBay, and Starbucks before striking out on his own"
    ],
    investmentFocus: ["Consumer Internet", "Mobile", "Early-Stage Software"],
    notableInvestments: [
      { name: "Instagram", ticker: null },
      { name: "Stitch Fix", ticker: "SFIX" },
      { name: "PagerDuty", ticker: "PD" },
      { name: "Heroku", ticker: null },
      { name: "Machine Zone", ticker: null }
    ],
    boardSeats: ["Stitch Fix (former largest shareholder)"],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2006", event: "Founds Baseline Ventures as a one-person firm after working at Microsoft, eBay, and Starbucks." },
      { year: "2010", event: "Becomes Instagram's very first investor, writing an early check to founders Kevin Systrom and Mike Krieger." },
      { year: "2012", event: "Facebook acquires Instagram." },
      { year: "2017", event: "Stitch Fix goes public; Baseline is the company's largest shareholder." },
      { year: "2019", event: "PagerDuty goes public." }
    ],
    biography: "Steve Anderson left roles at Microsoft, eBay, and Starbucks to found Baseline Ventures in 2006, running it ever since as a genuine one-person operation — sourcing, deciding, and closing every deal himself, often within 30 minutes of meeting a founder. His defining bet came in 2010, when he became the very first investor in a photo-sharing app called Instagram, backing founders Kevin Systrom and Mike Krieger before the company had much more than an idea. Anderson turned roughly $70 million raised across his first three funds into $700 million, and was the largest shareholder in Stitch Fix at its 2017 IPO. He has also backed Heroku, Machine Zone, and PagerDuty, and remains one of the few investors in Silicon Valley still running a fund entirely solo.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/steve-anderson/" },
      { label: "Forbes — How Steve Anderson Struck Gold", url: "https://www.forbes.com/sites/ryanmac/2016/03/23/steve-anderson-baseline-ventures-instagram-venture-capital-raver/" }
    ]
  },
  "ron-conway": {
    name: "Ron Conway",
    firm: "SV Angel",
    firmSlug: "sv-angel",
    title: "Founder & Managing Partner",
    joinedYear: 2005,
    education: ["B.A. Political Science, San Jose State University"],
    previousExperience: [
      "Marketing roles, National Semiconductor Corporation (1973–1979)",
      "Co-Founder, President & CEO, Altos Computer Systems (1979–1990) — took the company public on Nasdaq in 1982",
      "Founder & Managing Partner, Angel Investors LP (1998–2005)"
    ],
    investmentFocus: ["Consumer Internet", "Early-Stage Technology"],
    notableInvestments: [
      { name: "Google", ticker: "GOOGL" },
      { name: "Facebook", ticker: "META" },
      { name: "Twitter", ticker: null },
      { name: "Airbnb", ticker: null },
      { name: "PayPal", ticker: null },
      { name: "Square", ticker: "XYZ" }
    ],
    boardSeats: [],
    ipoCount: 6,
    majorExits: 8,
    careerTimeline: [
      { year: "1979", event: "Co-founds Altos Computer Systems, taking it public on Nasdaq in 1982." },
      { year: "1998", event: "Founds Angel Investors LP, an early institutional angel fund." },
      { year: "2005", event: "Launches SV Angel, backing Google, Facebook, Twitter, and PayPal at the earliest stages." },
      { year: "2018", event: "Retires from active investing to focus on philanthropy." },
      { year: "2025", event: "SV Angel announces it will stop raising new funds, continuing to invest smaller amounts directly." }
    ],
    biography: "Ron Conway co-founded Altos Computer Systems and took it public in 1982 before turning to angel investing in the 1990s, eventually founding Angel Investors LP in 1998 and SV Angel in 2005. Known as the 'Godfather of Silicon Valley,' Conway built one of the most connected early-stage portfolios in technology history, with early stakes in Google, Facebook, Twitter, PayPal, and Airbnb. He retired from active day-to-day investing in 2018, and in 2025 SV Angel — now run alongside his sons Ronny and Topher — announced it would stop raising traditional funds in favor of writing smaller, more personal checks directly.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/ron-conway/" },
      { label: "SV Angel Team", url: "https://svangel.com/about/team" }
    ]
  },
  "jeff-clavier": {
    name: "Jeff Clavier",
    firm: "Uncork Capital",
    firmSlug: "uncork-capital",
    title: "Founding Partner",
    joinedYear: 2004,
    education: ["M.S. Computer Science, Université Paris Descartes"],
    previousExperience: [
      "CTO, Effix — French fintech startup acquired by Reuters",
      "General Partner, RVC (Reuters' $450M corporate venture fund)"
    ],
    investmentFocus: ["Seed-Stage", "Consumer Internet", "SaaS", "Marketplaces"],
    notableInvestments: [
      { name: "SendGrid", ticker: null },
      { name: "Fitbit", ticker: null },
      { name: "Eventbrite", ticker: "EB" },
      { name: "Postmates", ticker: null },
      { name: "Poshmark", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 5,
    careerTimeline: [
      { year: "2000", event: "Immigrates to the U.S., joining Reuters' $450 million corporate venture fund as a General Partner." },
      { year: "2004", event: "Leaves Reuters to found SoftTech VC, later renamed Uncork Capital." },
      { year: "2007", event: "Raises one of the first funds to be labeled 'micro-VC,' a $15 million Fund II." },
      { year: "2017", event: "Portfolio company SendGrid goes public." },
      { year: "2019", event: "Twilio acquires SendGrid." },
      { year: "2025", event: "Uncork raises $300 million combined across two new funds." }
    ],
    biography: "Jeff Clavier immigrated to the U.S. in 2000 after serving as CTO of a French fintech startup acquired by Reuters, joining Reuters' own $450 million corporate venture fund as a general partner. In 2004 he left to found Uncork Capital, then called SoftTech VC, one of the first dedicated seed-stage venture firms in Silicon Valley — and in 2007, one of the first funds to be labeled 'micro-VC.' Clavier and the firm he built have backed Fitbit, Eventbrite, Postmates, and Poshmark, but SendGrid stands out: Uncork backed the email infrastructure company as a seed investor, watched it go public in 2017, and saw Twilio acquire it just two years later. Clavier has stepped back from day-to-day management, with Andy McLoughlin now leading the firm as Managing Partner.",
    sources: [
      { label: "Uncork Capital — Jeff Clavier", url: "https://uncorkcapital.com/team/jeff-clavier" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Uncork_Capital" }
    ]
  },
  "chad-byers": {
    name: "Chad Byers",
    firm: "Susa Ventures",
    firmSlug: "susa-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2013,
    education: ["B.A. Environmental Science, University of Colorado Boulder"],
    previousExperience: [
      "Senior Director of Platform, Integrate.com",
      "Marketing & Product roles, Silver Spring Networks, Bloom Energy, Electronic Arts"
    ],
    investmentFocus: ["Marketplaces", "Fintech", "Healthcare"],
    notableInvestments: [
      { name: "Robinhood", ticker: "HOOD" },
      { name: "Flexport", ticker: null },
      { name: "Newfront Insurance", ticker: null },
      { name: "Andela", ticker: null },
      { name: "Stord", ticker: null }
    ],
    boardSeats: ["Newfront Insurance", "Stord"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2013", event: "Co-founds Susa Ventures with Leo Polovets and Seth Berman after an 11-month fundraise for a $25 million debut fund." },
      { year: "2013", event: "Leads the firm's first-ever investment, a $250,000 seed check into Robinhood." },
      { year: "2021", event: "Robinhood goes public; Susa's original stake has grown into a return of roughly $400 million." },
      { year: "2025", event: "Susa closes its $175 million fifth flagship fund." }
    ],
    biography: "Chad Byers grew up around venture capital as the son of Kleiner Perkins co-founder Brook Byers and brother of former Google Ventures partner Blake Byers, but built his own path through operating roles at Electronic Arts, Bloom Energy, and Integrate.com before co-founding Susa Ventures in 2013 with Leo Polovets and Seth Berman. After an 11-month effort to raise a $25 million debut fund, Byers made the firm's very first investment: a $250,000 seed check into a fintech startup called Robinhood, after its founders demoed the app to him at a Sand Hill Road hotel. When Robinhood went public in 2021, that original check had grown into a return of roughly $400 million — close to a 1,000x multiple, and one of the most celebrated seed bets of its era. Susa has since raised more than $1 billion cumulatively, including a $175 million fifth flagship fund in 2025.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/chad-byers/" },
      { label: "Forbes — Meet the Robinhood Investor", url: "https://www.forbes.com/sites/kevindowd/2021/08/22/meet-the-robinhood-investor-who-turned-250000-into-400-million/" }
    ]
  },
  "charles-hudson": {
    name: "Charles Hudson",
    firm: "Precursor Ventures",
    firmSlug: "precursor-ventures",
    title: "Managing Partner & Founder",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "VP Business Development, Serious Business — acquired by Zynga in 2010",
      "Co-Founder & CEO, Bionic Panda Games",
      "Partner, SoftTech VC (now Uncork Capital) — focused on mobile infrastructure and marketplaces"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Generalist Software & Hardware"],
    notableInvestments: [
      { name: "The Athletic", ticker: null },
      { name: "Bobbie", ticker: null },
      { name: "Carrot Fertility", ticker: null },
      { name: "Modern Health", ticker: null },
      { name: "Superhuman", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2010", event: "Serious Business, where Hudson serves as VP of Business Development, is acquired by Zynga." },
      { year: "2015", event: "Leaves Uncork Capital (then SoftTech VC) to found Precursor Ventures as a solo GP." },
      { year: "2022", event: "Portfolio company The Athletic is acquired by The New York Times for $525 million." },
      { year: "2025", event: "Precursor closes its fifth fund at $66 million." }
    ],
    biography: "Charles Hudson co-founded a mobile games startup and later served as VP of Business Development at Serious Business until its acquisition by Zynga in 2010, before joining SoftTech VC — later renamed Uncork Capital — as a partner focused on mobile infrastructure and marketplaces. In 2015, he left to found Precursor Ventures as a solo general partner, built specifically around backing first-time and underrepresented founders who often lack the traditional networks that open doors at bigger firms. Running an intentionally high-volume model of 75 to 100 investments per fund, Hudson backed The Athletic years before The New York Times acquired the sports media company for $525 million in 2022. Precursor has since raised five funds and grown past $250 million under management, with Hudson making all investment decisions himself.",
    sources: [
  { label: "TechCrunch — Charles Hudson", url: "https://techcrunch.com/author/charles-hudson/" },
      { label: "Fortune", url: "https://fortune.com/2024/06/19/precursor-ventures-founder-charles-hudson-on-investing-early-how-the-landscape-for-black-entrepreneurs-is-evolving-and-opera/" }
    ]
  },
  "eric-paley": {
    name: "Eric Paley",
    firm: "Founder Collective",
    firmSlug: "founder-collective",
    title: "Co-Founder & Partner Emeritus",
    joinedYear: 2009,
    education: ["B.A. Government, Dartmouth College", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Co-Founder & CEO, Brontes Technologies — 3D imaging company spun out of MIT, acquired by 3M in 2006",
      "Entrepreneur-in-Residence, Harvard Business School"
    ],
    investmentFocus: ["Seed-Stage", "Sector-Agnostic"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "The Trade Desk", ticker: "TTD" },
      { name: "PillPack", ticker: null },
      { name: "Airtable", ticker: null },
      { name: "WHOOP", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2006", event: "3M acquires Brontes Technologies, the 3D imaging company Paley co-founded." },
      { year: "2009", event: "Co-founds Founder Collective with David Frankel and Micah Rosenbloom." },
      { year: "2010", event: "Leads Founder Collective's seed investment in Uber, one of the firm's earliest bets." },
      { year: "2016", event: "The Trade Desk goes public." },
      { year: "2018", event: "Amazon acquires PillPack, an early Founder Collective investment, for roughly $1 billion." },
      { year: "2019", event: "Uber goes public." }
    ],
    biography: "Eric Paley co-founded Brontes Technologies, a 3D imaging company spun out of MIT, and sold it to 3M in 2006 before earning an MBA at Harvard and co-founding Founder Collective in 2009 with David Frankel and Micah Rosenbloom. The firm built its reputation on a simple, disciplined approach: fund seed-stage founders directly, keep fund sizes small, and never take large pro-rata reserves that would dilute the very founders it backs. That approach led Founder Collective to one of its earliest seed investments in Uber in 2010, and to being among the first investors in PillPack, the online pharmacy Amazon acquired for roughly $1 billion in 2018. Paley has been named to the Forbes Midas List five times, ranking as the list's top seed investor in both 2018 and 2019, and now holds the title of Partner Emeritus at the firm.",
    sources: [
      { label: "Founder Collective — Eric Paley", url: "https://foundercollective.com/team/eric-paley/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/eric-paley/" }
    ]
  },
  "semil-shah": {
    name: "Semil Shah",
    firm: "Haystack",
    firmSlug: "haystack",
    title: "Founder & General Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Product and operational roles at early-stage startups, most recently one acquired by Apple"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Consumer", "Cloud/SaaS", "AI"],
    notableInvestments: [
      { name: "DoorDash", ticker: "DASH" },
      { name: "Instacart", ticker: "CART" },
      { name: "Figma", ticker: "FIG" },
      { name: "HashiCorp", ticker: null },
      { name: "Carta", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "2013", event: "Semil Shah founds Haystack as a solo general partner." },
      { year: "2013", event: "Invests in DoorDash's $2.5 million seed round within Haystack's first six months." },
      { year: "2018", event: "Also joins Lightspeed Venture Partners as a Venture Partner." },
      { year: "2020", event: "DoorDash goes public." },
      { year: "2022", event: "Shah is named to the Forbes Midas Seed List for the first time, a recognition repeated in 2023 and 2024." }
    ],
    biography: "Semil Shah spent years in product and operational roles at early-stage startups — the most recent acquired by Apple — while building an audience through frequent writing about startups and venture capital that eventually drew in the early investors and LPs who helped fund his first bets. He founded Haystack in 2013 as one of the original solo general partners, a structure he adopted partly because he didn't fit the mold traditional venture firms were looking for at the time. Within Haystack's first six months, Shah invested in DoorDash's $2.5 million seed round — one of the earliest bets the firm ever made, and one that would grow into a company worth tens of billions of dollars by the time it went public in 2020. He has also backed Instacart, Figma, and HashiCorp — all of which either went public or were acquired for billions — and was named to the Forbes Midas Seed List in 2022, 2023, and 2024.",
    sources: [
      { label: "Haystack Team", url: "https://haystack.vc/team" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/semil-shah/" }
    ]
  },
  "rob-go": {
    name: "Rob Go",
    firm: "NextView Ventures",
    firmSlug: "nextview-ventures",
    title: "Co-Founder & Partner",
    joinedYear: 2010,
    education: ["B.S. Economics, Duke University (Magna Cum Laude)", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Investor, Spark Capital — early-stage consumer internet and SaaS investments",
      "Business Product Lead, eBay — led major search, browse, and discovery product launches",
      "Consultant, The Parthenon Group",
      "Product Management roles, Fidelity Investments and BzzAgent"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Marketplaces", "Consumer", "Digital Health", "Vertical SaaS"],
    notableInvestments: [
      { name: "Attentive", ticker: null },
      { name: "ThredUp", ticker: "TDUP" },
      { name: "Boardable", ticker: null },
      { name: "Dover", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2010", event: "Co-founds NextView Ventures with David Beisel and Lee Hower, on the thesis that the Everyday Economy needed a dedicated seed specialist outside the Bay Area." },
      { year: "2021", event: "Portfolio company ThredUp goes public on Nasdaq." }
    ],
    biography: "Rob Go spent his early career in product roles at eBay and Fidelity before joining Spark Capital as an early-stage investor focused on consumer internet and SaaS. In 2010, he co-founded NextView Ventures with David Beisel and Lee Hower on a contrarian thesis: that a dedicated seed-stage specialist firm belonged outside the Bay Area, built around what the firm calls the 'Everyday Economy' — startups that redesign the habitual moments of daily life for large populations. That focus led NextView to an early stake in Attentive, which grew into a roughly $10 billion company, and to backing ThredUp ahead of its 2021 Nasdaq IPO. Go has been recognized as one of Boston's most influential technology figures for his role building a seed ecosystem outside Silicon Valley's traditional hubs.",
    sources: [
      { label: "NextView Ventures — Rob Go", url: "https://nextview.vc/team/rob-go/" },
      { label: "Boston Globe", url: "https://www.bostonglobe.com/tech-power-players/year/2023/person/rob-go-nextview-ventures/" }
    ]
  },
  "manu-kumar": {
    name: "Manu Kumar",
    firm: "K9 Ventures",
    firmSlug: "k9-ventures",
    title: "Founder & Chief Firestarter",
    joinedYear: 2009,
    education: ["B.S. & M.S. Electrical & Computer Engineering, Carnegie Mellon University (University Honors)", "Ph.D. Computer Science, Stanford University (Distinction in Teaching)"],
    previousExperience: [
      "Founder, President & CEO, SneakerLabs — acquired in 2000",
      "VP Interactive Technologies, E.piphany",
      "Chairman & CEO, iMeet — merged with Netspoke, later acquired by Premiere Global Services"
    ],
    investmentFocus: ["Pre-Seed (a category he coined)", "New Technology", "New Markets"],
    notableInvestments: [
      { name: "Twilio", ticker: "TWLO" },
      { name: "Lyft", ticker: "LYFT" },
      { name: "DNAnexus", ticker: null },
      { name: "CrowdFlower", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 2,
    careerTimeline: [
      { year: "2000", event: "Sells his first company, SneakerLabs." },
      { year: "2009", event: "Founds K9 Ventures, coining the term 'Pre-Seed' as an investment category." },
      { year: "2010s", event: "Becomes the earliest investor in Twilio." },
      { year: "2016", event: "Twilio goes public." },
      { year: "2019", event: "Lyft, another early K9 bet, goes public." }
    ],
    biography: "Manu Kumar earned a PhD in Computer Science from Stanford after founding and selling SneakerLabs and running iMeet, before founding K9 Ventures in 2009 — a firm credited with coining the term 'Pre-Seed' as its own distinct investment category. Kumar, who calls himself K9's 'Chief Firestarter,' invests 'frighteningly early,' often before a company has a product or even a formal team, and by design makes just 4 to 6 investments a year rather than casting a wide net. That discipline led him to become the earliest investor in Twilio, years before its 2016 IPO, and an early backer of Lyft ahead of its 2019 public debut. K9 has kept its fund size small on purpose ever since, running one of the tightest, most concentrated portfolios of any firm on this page.",
    sources: [
      { label: "K9 Ventures — Meet Manu Kumar", url: "https://www.k9ventures.com/blog/2015/09/08/meet-manu-kumar-chief-firestarter-at-k9-ventures/" },
    { label: "The Twenty Minute VC", url: "https://www.thetwentyminutevc.com/manukumar" }
    ]
  },
  "ben-blumenrose": {
    name: "Ben Blumenrose",
    firm: "Designer Fund",
    firmSlug: "designer-fund",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2014,
    education: [],
    previousExperience: [
      "Design Lead / Manager, Facebook (5+ years)"
    ],
    investmentFocus: ["Design-Led Early-Stage Software", "Health", "Business Software"],
    notableInvestments: [
      { name: "Stripe", ticker: null },
      { name: "Notion", ticker: null },
      { name: "Gusto", ticker: null },
      { name: "Commure", ticker: null },
      { name: "Omada Health", ticker: null },
      { name: "Framer", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2014", event: "Co-founds Designer Fund after more than five years as a design lead at Facebook." },
      { year: "2017", event: "Launches the Bridge fellowship, connecting designers to startups." },
      { year: "2022", event: "Closes Designer Fund's $40 million Fund III." }
    ],
    biography: "Ben Blumenrose spent more than five years as a design lead at Facebook before co-founding Designer Fund in 2014, built on the then-unusual premise that design should shape a company's formation from day one rather than get bolted on after product-market fit. The firm has backed Stripe, Notion, Gusto, and Framer, among others — all still private, so none has produced a public exit yet, but Designer Fund's own materials put the combined value of its portfolio above $80 billion as of its 2022 Fund III close. Blumenrose has built the firm around operators and designers helping founders sharpen product quality and hire design talent, treating design as a compounding strategic advantage rather than a cosmetic layer.",
    sources: [
      { label: "Designer Fund", url: "https://designerfund.com" }
    ]
  },
  "victor-gutwein": {
    name: "Victor Gutwein",
    firm: "M25",
    firmSlug: "m25",
    title: "Founder & Managing Partner",
    joinedYear: 2015,
    education: ["Economics, University of Chicago"],
    previousExperience: [
      "Corporate Strategy, Walgreens",
      "Consumer Deal Team Lead, Hyde Park Angels (youngest member)"
    ],
    investmentFocus: ["Midwest Early-Stage Tech", "Software", "Fintech", "Healthcare IT"],
    notableInvestments: [
      { name: "Authenticx", ticker: null },
      { name: "XStereotype", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2015", event: "Launches M25 at age 23 with $1 million to invest exclusively in Midwest tech startups, after a stint at Walgreens." },
      { year: "2016", event: "Raises $11 million for M25's second fund." },
      { year: "2019", event: "Raises $31.8 million for M25's third fund alongside partner Mike Asem." },
      { year: "2025", event: "Closes M25's largest fund yet, $36.5 million Fund IV, on the firm's 10th anniversary." }
    ],
    biography: "Victor Gutwein grew up in rural Indiana in a family of entrepreneurs, launched a bubblegum vending business in middle school, and after a stint on Walgreens' corporate strategy team, started M25 at age 23 with $1 million to invest exclusively in Midwest tech startups — a region he felt was constantly overlooked by coastal venture capital. He simultaneously became the youngest member of Hyde Park Angels, investing in 21 startups as its consumer deal team lead. Alongside founding partner Mike Asem, Gutwein grew M25 into the most active early-stage investor in the Midwest, backing more than 150 startups across 11 states and closing the firm's largest fund yet, $36.5 million, on its 10-year anniversary in 2025. The firm's portfolio has gone on to raise more than $600 million in follow-on funding.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/victor-gutwein/" },
      { label: "Crain's Chicago Business", url: "https://www.chicagobusiness.com/finance-banking/m25-raises-365m-fund-amid-venture-slowdown/" }
    ]
  },
  "sumeet-singh": {
    name: "Sumeet Singh",
    firm: "Worldbuild",
    firmSlug: "worldbuild",
    title: "Founder & Managing Partner",
    joinedYear: 2025,
    education: ["Georgetown University"],
    previousExperience: [
      "Investor, Andreessen Horowitz (a16z)",
      "Roles at Brigit and Nyca Partners"
    ],
    investmentFocus: ["AI Infrastructure", "Developer Tools", "Aerospace", "Energy"],
    notableInvestments: [
      { name: "SF Compute", ticker: null },
      { name: "Browserbase", ticker: null },
      { name: "Cowboy Space Corp", ticker: null },
      { name: "Truffle", ticker: null },
      { name: "Fractal Power", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2025", event: "Begins building Worldbuild after roles at a16z, Brigit, and Nyca Partners." },
      { year: "2026", event: "Closes Worldbuild's $30 million debut fund." }
    ],
    biography: "Sumeet Singh spent time as an investor at Andreessen Horowitz and in operating and investing roles at Brigit and Nyca Partners before founding Worldbuild, a firm built around the idea that the best early bets require genuine intellectual conviction rather than pattern-matching against what other investors are already doing. Worldbuild closed a $30 million debut fund in 2026, backing early companies including SF Compute and Browserbase — bets Singh has said he was able to make early precisely because his thesis-driven approach let him form a point of view before a company looked obvious to generalist investors.",
    sources: [
      { label: "Worldbuild", url: "https://worldbuild.vc" }
    ]
  },
  "anu-duggal": {
    name: "Anu Duggal",
    firm: "Female Founders Fund",
    firmSlug: "female-founders-fund",
    title: "Founding Partner",
    joinedYear: 2014,
    education: [],
    previousExperience: [],
    investmentFocus: ["Digital Health", "AI-First Vertical Software", "Beauty & Personal Care", "Deep Tech"],
    notableInvestments: [
      { name: "Rent the Runway", ticker: "RENT" },
      { name: "Maven Clinic", ticker: null },
      { name: "Zola", ticker: null },
      { name: "Tala", ticker: null },
      { name: "Billie", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2014", event: "Founds Female Founders Fund in New York City." },
      { year: "2021", event: "Portfolio company Rent the Runway goes public on Nasdaq." },
      { year: "2025", event: "Closes Female Founders Fund's $29 million Fund IV, bringing total firm capital to $140 million." }
    ],
    biography: "Anu Duggal founded Female Founders Fund in 2014 around a straightforward premise: female founders were being systematically underfunded relative to their performance, and a firm built specifically to be their first institutional check could both correct that gap and generate strong returns. The firm backed Jennifer Hyman's Rent the Runway years before its 2021 Nasdaq listing, along with Maven Clinic, Zola, and Tala. Duggal has scaled Female Founders Fund to $140 million in total capital across its funds, most recently closing a $29 million Fund IV in December 2025, while keeping the firm's core focus on seed-stage healthcare, AI-first software, and consumer categories underrepresented founders are building in.",
    sources: [
      { label: "Female Founders Fund", url: "https://femalefoundersfund.com" }
    ]
  },
  "amanda-robson": {
    name: "Amanda Robson",
    firm: "Modern Technical Fund",
    firmSlug: "modern-technical-fund",
    title: "Founder (Solo GP)",
    joinedYear: 2025,
    education: [],
    previousExperience: [
      "Partner, Cowboy Ventures (~5 years; youngest partner in firm history)",
      "Investor, Norwest Venture Partners",
      "Investment Banking, William Blair"
    ],
    investmentFocus: ["Infrastructure", "Data", "Security", "Developer Tooling"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2020s", event: "Becomes the youngest partner in Cowboy Ventures' history after roles at Norwest Venture Partners and William Blair." },
      { year: "2025", event: "Leaves Cowboy Ventures to found Modern Technical Fund, closing a $22 million debut fund." }
    ],
    biography: "Amanda Robson started her career in investment banking at William Blair before moving into venture capital at Norwest Venture Partners and then Cowboy Ventures, where she became the youngest partner in the firm's history. In 2025, she left to found Modern Technical Fund as a solo general partner, built specifically to back highly technical founders — often in infrastructure, data, and security — who tend to look strongest to specialists long before they look obvious to generalist investors.",
    sources: [
      { label: "Modern Technical Fund", url: "https://moderntechnical.com" }
    ]
  },
  "rex-salisbury": {
    name: "Rex Salisbury",
    firm: "Cambrian Ventures",
    firmSlug: "cambrian-ventures",
    title: "Founder & General Partner",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Fintech Investor, Andreessen Horowitz (a16z)",
      "Software Engineer"
    ],
    investmentFocus: ["Fintech", "Fintech Infrastructure"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2022", event: "Founds Cambrian Ventures after a career as a software engineer and fintech investor at a16z, closing a $20 million debut fund." },
      { year: "2025", event: "Closes Cambrian's second $20 million fintech-focused fund." }
    ],
    biography: "Rex Salisbury worked as a software engineer before becoming a fintech investor at Andreessen Horowitz, where he built one of the best-networked founder communities in the category. In 2022, he used that network to launch Cambrian Ventures as a solo general partner, built around the thesis that fintech has captured only a small share of global financial-services value and that meaningful new category formation is still ahead. Salisbury has kept Cambrian focused exclusively on early-stage fintech through two $20 million funds, even as the broader venture cycle made specialist strategies harder to sustain.",
    sources: [
      { label: "Cambrian Ventures", url: "https://cambrian.vc" }
    ]
  },
  "sydney-thomas": {
    name: "Sydney Thomas",
    firm: "Symphonic Capital",
    firmSlug: "symphonic-capital",
    title: "Founder & General Partner",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Early-stage investing roles prior to founding Symphonic Capital",
      "Creator, Black Women in VC list"
    ],
    investmentFocus: ["Health", "Wealth", "Climate Resilience"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2022", event: "Begins building the thesis behind Symphonic Capital." },
      { year: "2025", event: "Closes Symphonic Capital's $13.5 million debut fund in April." }
    ],
    biography: "Sydney Thomas built one of the most-cited resources in early-stage venture, the Black Women in VC list, before founding Symphonic Capital around a specific thesis: that the essential systems ordinary households depend on — healthcare access, financial resilience, climate adaptation — are chronically underbuilt and underfinanced relative to how much they matter. Symphonic closed its $13.5 million debut fund in April 2025, backing pre-seed and seed founders, often using AI, working to close access gaps in health and wealth for what Thomas has described as the 99%.",
    sources: [
      { label: "Symphonic Capital", url: "https://symphoniccapital.com" }
    ]
  },
  "nik-milanovic": {
    name: "Nik Milanović",
    firm: "The Fintech Fund",
    firmSlug: "the-fintech-fund",
    title: "Founder & General Partner",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Founder, This Week in Fintech (media and community platform)"
    ],
    investmentFocus: ["Fintech", "Crypto", "DeFi"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2022", event: "Launches The Fintech Fund, building on the community from This Week in Fintech." },
      { year: "2024", event: "Closes The Fintech Fund's $10 million Fund II in September." }
    ],
    biography: "Nik Milanović built This Week in Fintech into one of the most-read newsletters and communities in the fintech industry, then converted that platform into The Fintech Fund in 2022 — a genuinely unusual media-to-fund path in venture capital. The fund closed a $10 million second vehicle in September 2024, investing across fintech, crypto, and DeFi globally, with Milanović's global fintech network functioning as the firm's primary sourcing advantage.",
 sources: [
      { label: "The Fintech Fund", url: "https://thefintechfund.com" }
    ]
  },
  "greg-sands": {
    name: "Greg Sands",
    firm: "Costanoa Ventures",
    firmSlug: "costanoa-ventures",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Managing Director, Sutter Hill Ventures",
      "First Product Manager, Netscape",
      "Business Development Manager, Cisco"
    ],
    investmentFocus: ["Applied AI", "AI & Data Infrastructure", "Cybersecurity", "National Security", "Fintech"],
    notableInvestments: [
      { name: "SGNL", ticker: null },
      { name: "VictorOps", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2012", event: "Founds Costanoa Ventures after roles as Netscape's first product manager and a Managing Director at Sutter Hill Ventures." },
      { year: "2013", event: "Publishes Costanoa's investment thesis behind VictorOps." },
      { year: "2017", event: "Closes Costanoa's $175 million Fund III." },
      { year: "2018", event: "VictorOps, backed at Series A, is acquired by Splunk." },
      { year: "2026", event: "SGNL, another Costanoa portfolio company, is acquired by CrowdStrike." }
    ],
    biography: "Greg Sands was Netscape's first product manager and a business development manager at Cisco before becoming a Managing Director at Sutter Hill Ventures, then founding Costanoa Ventures in 2012 to lead Seed and Series A rounds in complex, high-impact markets where deep sector expertise matters — applied AI, data infrastructure, cybersecurity, and fintech among them. Costanoa backed VictorOps at Series A, which Splunk acquired in 2018, and more recently backed SGNL, acquired by CrowdStrike in January 2026. The firm closed its $175 million Fund III in 2017 and has stayed disciplined about leading rounds in categories it believes require real technical depth to evaluate correctly.",
    sources: [
      { label: "Costanoa Ventures", url: "https://www.costanoavc.com" }
    ]
  },
  "rick-zullo": {
    name: "Rick Zullo",
    firm: "Equal Ventures",
    firmSlug: "equal-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2020,
    education: ["Columbia Business School"],
    previousExperience: [
      "Investor, Lightbank",
      "Investor, Lightview Capital",
      "Deloitte"
    ],
    investmentFocus: ["Climate", "Insurance", "Retail", "Supply Chain"],
    notableInvestments: [
      { name: "SmartHop", ticker: null },
      { name: "David Energy", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2020", event: "Co-founds Equal Ventures, launching a $56 million debut fund." },
      { year: "2022", event: "Closes a second fund and opportunity vehicle." },
      { year: "2024", event: "Announces $175 million in combined capital to 'bridge the digital divide' by bringing software into legacy industries." }
    ],
    biography: "Rick Zullo worked at Deloitte and as an investor at Lightbank and Lightview Capital before co-founding Equal Ventures in 2020, built around a deliberately research-heavy, thesis-driven approach to backing founders bringing software into legacy industries — climate, insurance, retail, and supply chain among them — rather than chasing generic software categories. Zullo has been closely associated with Equal's investments in SmartHop and David Energy, and helped grow the firm to $175 million in combined capital across its second fund and opportunity vehicle by 2024, while continuing to publish detailed sector research across insurance and climate.",
    sources: [
      { label: "Equal Ventures", url: "https://www.equal.vc" }
    ]
  },
  "nnamdi-okike": {
    name: "Nnamdi Okike",
    firm: "645 Ventures",
    firmSlug: "645-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Investor, Insight Partners — credited with 19 investments and nine exits totaling more than $9B in exit value, including Mimecast and Privalia"
    ],
    investmentFocus: ["Fintech", "Enterprise", "Healthtech", "Cybersecurity", "Infrastructure & Developer Tools"],
    notableInvestments: [
      { name: "Iterable", ticker: null },
      { name: "Overtime", ticker: null },
      { name: "LeagueApps", ticker: null },
      { name: "Oort", ticker: null },
      { name: "RentSpree", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2013", event: "Co-founds 645 Ventures after a career as an investor at Insight Partners." },
      { year: "2014", event: "Begins deploying 645's software-powered investing strategy." },
      { year: "2020", event: "Closes 645's $160 million Fund III." },
      { year: "2023", event: "Named to the Forbes Midas Brink list." }
    ],
    biography: "Nnamdi Okike spent his early career as an investor at Insight Partners, where his track record includes 19 investments and nine exits totaling more than $9 billion in exit value, including Mimecast and Privalia. He co-founded 645 Ventures in 2013, building the firm around an internal data platform, Voyager, that combines early-stage investing with a large operating network. 645's own portfolio has produced exits including Oort, acquired by Cisco, and LeagueApps, acquired by Accel-KKR, alongside investments in Iterable, Overtime, and RentSpree. The firm closed its $160 million Fund III in 2020, and Okike was named to the Forbes Midas Brink list in 2023.",
    sources: [
      { label: "645 Ventures", url: "https://www.645ventures.com" }
    ]
  },
  "nihal-mehta": {
    name: "Nihal Mehta",
    firm: "Eniac Ventures",
    firmSlug: "eniac-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2009,
    education: [],
    previousExperience: [
      "Founder of five startups since 1999, including ipsh! (acquired by Omnicom) and LocalResponse (acquired by BlueCava)"
    ],
    investmentFocus: ["Technology", "Software", "Robotics", "SaaS"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1999", event: "Begins founding the first of five startups, ahead of a later shift into venture capital." },
      { year: "2009", event: "Co-founds Eniac Ventures as a seed-stage specialist." },
      { year: "2025", event: "Closes Eniac's $160 million Fund VI." }
    ],
    biography: "Before co-founding Eniac Ventures in 2009, Nihal Mehta founded five startups himself, including ipsh!, acquired by Omnicom, and LocalResponse, acquired by BlueCava — a founder-first background that shaped Eniac's seed-stage, product-market-fit-focused approach ever since. The firm has grown its platform model with each successive fund, closing its sixth, at $160 million, in 2025, and continues to invest specifically at the seed stage across technology, software, robotics, and SaaS.",
    sources: [
      { label: "Eniac Ventures", url: "https://eniac.vc" }
    ]
  },
  "eva-ho": {
    name: "Eva Ho",
    firm: "Fika Ventures",
    firmSlug: "fika-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2016,
    education: ["Harvard University", "Cornell University"],
    previousExperience: [
      "Founding General Partner, Susa Ventures",
      "Founding Executive, Factual",
      "Senior Product Marketing Manager, Google and YouTube"
    ],
    investmentFocus: ["B2B Software", "Fintech", "Marketplaces", "AI Services", "Manufacturing", "Supply Chain"],
    notableInvestments: [
      { name: "SGNL", ticker: null },
      { name: "Openpath Security", ticker: null },
      { name: "Berbix", ticker: null },
      { name: "Ivo", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2016", event: "Co-founds Fika Ventures after roles at Google, YouTube, Factual, and as a founding partner at Susa Ventures." },
      { year: "2021", event: "Fika is widely discussed as a $77 million seed fund." },
      { year: "2024", event: "Closes Fika's $160 million Fund IV." },
      { year: "2026", event: "Portfolio company SGNL is acquired by CrowdStrike for $740 million." }
    ],
    biography: "Eva Ho was a senior product marketing manager at Google and YouTube, then a founding executive at Factual and a founding general partner at Susa Ventures, before co-founding Fika Ventures in 2016 around the idea that founder service — business development, recruiting, and capital strategy help — is itself the product a firm sells. That approach helped Fika back SGNL, which CrowdStrike acquired for $740 million in 2026, along with earlier exits like Openpath Security to Motorola Solutions and Berbix to Socure. Fika closed its $160 million Fund IV in 2024.",
    sources: [
      { label: "Fika Ventures", url: "https://fika.vc" }
    ]
  },
  "blair-garrou": {
    name: "Blair Garrou",
    firm: "Mercury Fund",
    firmSlug: "mercury-fund",
    title: "Managing Partner & Co-Founder",
    joinedYear: 2005,
    education: [],
    previousExperience: [
      "CEO, Intermat",
      "Principal, Genesis Park",
      "Director of Operations, Houston Technology Center",
      "Investment Banking, Credit Analysis, and Auditing"
    ],
    investmentFocus: ["AI", "Blockchain", "Frontier Technologies", "Defense & Security"],
    notableInvestments: [
      { name: "Performix", ticker: null },
      { name: "PactSafe", ticker: null },
      { name: "PatientIO", ticker: null },
      { name: "Venus Aerospace", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2005", event: "Co-founds Mercury Fund after roles as CEO of Intermat and Principal at Genesis Park." },
      { year: "2021", event: "Portfolio company Performix is acquired by Honeywell." },
      { year: "2023", event: "Closes Mercury's $160 million Fund V." },
      { year: "2025", event: "Leads a major financing for defense-tech company Venus Aerospace as Mercury expands into frontier technology." }
    ],
    biography: "Blair Garrou spent his early career in investment banking, credit analysis, and auditing before becoming CEO of Intermat and a principal at Genesis Park, then co-founded Mercury Fund in 2005 on the premise that innovation is not a coastal phenomenon — building the firm into one of the most active early-stage investors across the U.S. Midcontinent. Mercury's portfolio has produced exits including Performix, acquired by Honeywell in 2021, and PactSafe, acquired by Ironclad. Garrou closed Mercury's $160 million Fund V in 2023 and has led the firm's recent expansion into defense and frontier technology, including a major financing for Venus Aerospace.",
    sources: [
      { label: "Mercury Fund", url: "https://mercuryfund.com" }
    ]
  },
  "jonathan-lehr": {
    name: "Jonathan Lehr",
    firm: "Work-Bench",
    firmSlug: "work-bench",
    title: "Co-Founder & General Partner",
    joinedYear: 2013,
    education: ["Bioengineering, University of Pennsylvania"],
    previousExperience: [
      "Office of the CIO, IT, Morgan Stanley"
    ],
    investmentFocus: ["Enterprise Software", "AI/ML", "Developer Tools", "Infrastructure", "Security"],
    notableInvestments: [
      { name: "Cockroach Labs", ticker: null },
      { name: "CoreOS", ticker: null },
      { name: "Semmle", ticker: null },
      { name: "FireHydrant", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 4,
    careerTimeline: [
      { year: "2013", event: "Co-founds Work-Bench in New York, building an enterprise-tech community around the firm from day one." },
      { year: "2016", event: "Publicly writes about backing Cockroach Labs as a foundational enterprise infrastructure bet." },
      { year: "2025", event: "Announces Work-Bench's new $160 million fund." }
    ],
    biography: "Jonathan Lehr worked in Morgan Stanley's Office of the CIO before co-founding Work-Bench in 2013, built around a highly specialized bet: that distribution, customer access, and enterprise community-building are as much a part of what a firm sells founders as the capital itself. Lehr publicly championed Cockroach Labs as a foundational enterprise infrastructure bet years before it became a major database company, and Work-Bench's broader portfolio has produced exits including CoreOS to Red Hat, Semmle to GitHub, and FireHydrant to Freshworks. The firm announced its new $160 million fund in 2025.",
    sources: [
      { label: "Work-Bench", url: "https://www.work-bench.com" }
    ]
  },
  "mark-grovic": {
    name: "Mark Grovic",
    firm: "New Markets Venture Partners",
    firmSlug: "new-markets-venture-partners",
    title: "Co-Founder & General Partner",
    joinedYear: 2003,
    education: ["B.A. Political Economies (Honors), University of California, Berkeley", "J.D., Georgetown University"],
    previousExperience: [
      "Portfolio Manager, Small Enterprise Assistance Funds (SEAF)",
      "Director, Baltic Small Equity Fund",
      "Co-Founder & Principal, Templeton Emerging Europe Fund",
      "Portfolio Manager of Private Equities, Calvert Group",
      "Professor of Private Equity, University of Maryland R.H. Smith School of Business (18 years)"
    ],
    investmentFocus: ["Education Technology", "Workforce Development", "Social-Impact Software"],
    notableInvestments: [
      { name: "PowerSchool", ticker: null },
      { name: "Galvanize", ticker: null },
      { name: "MediaSolv", ticker: null },
      { name: "Lightningcast", ticker: null },
      { name: "Moodlerooms", ticker: null }
    ],
    boardSeats: ["Credly", "Graduation Alliance"],
    ipoCount: 1,
    majorExits: 5,
    careerTimeline: [
      { year: "1992", event: "Begins investing in high-growth companies, including impact-oriented work at Calvert Group." },
      { year: "2003", event: "Co-founds New Markets Venture Partners in Fulton, Maryland." },
      { year: "2021", event: "Portfolio company PowerSchool goes public on NYSE." },
      { year: "2023", event: "Closes New Markets' oversubscribed fifth fund at over $160 million." }
    ],
    biography: "Mark Grovic has been investing in high-growth companies since 1992, including early impact-investing work at Calvert Group decades before ESG became mainstream, and co-founded the Templeton Emerging Europe Fund before co-founding New Markets Venture Partners in 2003. The firm has stayed exclusively focused on education and workforce technology for more than two decades, generating over $3.3 billion in enterprise value and completing 21 realized exits, including PowerSchool's 2021 IPO and Galvanize's acquisition by K12. Grovic closed New Markets' oversubscribed fifth fund at over $160 million in 2023, and has also taught private equity for 18 years as a professor at the University of Maryland's R.H. Smith School of Business.",
    sources: [
      { label: "Forbes", url: "https://www.forbes.com/sites/dereknewton/2023/05/31/meet-mark-grovic-veteran-education-investor-at-new-market-venture-partners/" },
      { label: "New Markets Venture Partners", url: "https://www.newmarketsvp.com/members/mark-grovic" }
    ]
  },
  "david-hall": {
    name: "David Hall",
    firm: "Rise of the Rest Seed Fund",
    firmSlug: "rise-of-the-rest-seed-fund",
    title: "Managing Partner",
    joinedYear: 2006,
    education: [],
    previousExperience: [
      "Investor, Revolution Growth",
      "Investor, Revolution Ventures"
    ],
    investmentFocus: ["Geographically Broad Early-Stage Investing (Outside Silicon Valley, Boston, and New York)"],
    notableInvestments: [
      { name: "Anduril", ticker: null },
      { name: "AppHarvest", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2006", event: "Joins Revolution, working across Revolution Growth and Revolution Ventures." },
      { year: "2014", event: "The Rise of the Rest initiative launches with its first bus tour across overlooked startup regions." },
      { year: "2017", event: "The dedicated $150 million Rise of the Rest Seed Fund launches." },
      { year: "2018", event: "First fund investments are announced, including the fund's first check into Anduril." }
    ],
    biography: "David Hall joined Revolution in 2006 and worked across both Revolution Growth and Revolution Ventures before taking on leadership of the Rise of the Rest Seed Fund, a $150 million vehicle built around one of the clearest geography-led theses in venture capital: back high-growth startups outside Silicon Valley, Boston, and New York, and use Revolution's platform and brand to strengthen local ecosystems. The fund made its first-ever investment in Anduril at seed, years before the company became a major defense-technology player, and AppHarvest became Rise of the Rest's first publicly traded portfolio company, though it is no longer independently traded today.",
    sources: [
      { label: "Revolution", url: "https://www.revolution.com/rise-of-the-rest/" }
    ]
  },
  "paul-martino": {
    name: "Paul Martino",
    firm: "Bullpen Capital",
    firmSlug: "bullpen-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2010,
    education: [],
    previousExperience: [],
    investmentFocus: ["Post-Seed / Early-Stage Technology (Generalist)"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010s", event: "Founds Bullpen Capital around a timing-based 'post-seed' investing strategy, rather than a sector specialization." },
      { year: "2022", event: "Raises Bullpen's largest fund yet, $145 million Fund VI." },
      { year: "2023", event: "Public reporting describes the fund as centered on backing overlooked 'unloved gems' that already have product-market fit." }
    ],
    biography: "Paul Martino founded Bullpen Capital around a genuinely distinct strategy in venture capital: rather than specializing by sector, Bullpen specializes by timing, investing just after a company's earliest angel or seed round in businesses that have found real product-market fit but remain overlooked by other investors. That 'post-seed' and 'unloved gems' thesis has carried the firm through more than a decade of investing, including its largest fund yet, a $145 million Fund VI raised in 2022.",
    sources: [
      { label: "Bullpen Capital", url: "https://www.bullpencapital.com" }
    ]
  },
  "henri-pierre-jacques": {
    name: "Henri Pierre-Jacques",
    firm: "Harlem Capital",
    firmSlug: "harlem-capital",
    title: "Managing Partner & Co-Founder",
    joinedYear: 2015,
    education: ["Harvard Business School", "Duke University"],
    previousExperience: [
      "Private Equity",
      "Investment Banking"
    ],
    investmentFocus: ["Industry-Agnostic (Enterprise & Consumer Technology)", "Diverse Founders"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2015", event: "Co-founds Harlem Capital as an angel syndicate, launched in a Harlem living room." },
      { year: "2019", event: "Closes Harlem Capital's $40 million inaugural institutional fund." },
      { year: "2021", event: "Closes Harlem Capital's $134 million Fund II." },
      { year: "2023", event: "Harlem Capital has raised two funds and made 60 investments." }
    ],
    biography: "Henri Pierre-Jacques co-founded Harlem Capital in 2015 as an angel syndicate started in a Harlem living room, after earlier work in private equity and investment banking and an education at Duke University and Harvard Business School. He has built the firm around a multi-decade mission — changing the face of entrepreneurship by backing diverse founders — while still operating with the discipline of a focused seed fund, writing roughly $750,000 to $1.5 million checks for meaningful ownership stakes. Harlem Capital grew from a $40 million inaugural fund in 2019 to a $134 million Fund II in 2021, and had made 60 investments across both funds by 2023.",
    sources: [
      { label: "Harlem Capital", url: "https://www.harlem.capital" }
    ]
  },
  "jenny-lefcourt": {
    name: "Jenny Lefcourt",
    firm: "Freestyle",
    firmSlug: "freestyle",
    title: "General Partner",
    joinedYear: 2014,
    education: ["Wharton School, University of Pennsylvania", "Stanford Graduate School of Business"],
    previousExperience: [
      "Certified Public Accountant, New York",
      "Co-Founder, WeddingChannel (founded while at Stanford GSB)"
    ],
    investmentFocus: ["Generalist Early-Stage Technology"],
    notableInvestments: [
      { name: "Discord", ticker: null },
      { name: "BetterUp", ticker: null },
      { name: "Crexi", ticker: null },
      { name: "Artera", ticker: null },
      { name: "Narvar", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "1999", event: "Co-founds WeddingChannel while attending Stanford Graduate School of Business, after working as a CPA in New York." },
      { year: "2014", event: "Joins Freestyle as a General Partner." },
      { year: "2022", event: "Freestyle closes its $130 million Fund VI." },
      { year: "2025", event: "Named to Business Insider's Seed 40 list." }
    ],
    biography: "Jenny Lefcourt worked as a CPA in New York before co-founding WeddingChannel while attending Stanford Graduate School of Business, giving her direct founder experience before she became a full-time investor. She joined Freestyle as a General Partner in 2014, backing early-stage generalist technology companies including Discord, BetterUp, Crexi, and Narvar, and helped the firm close its $130 million Fund VI in 2022. Lefcourt was named to Business Insider's Seed 40 list in 2025, reflecting Freestyle's pitch to founders: experienced seed leadership grounded in real operator empathy rather than a narrow sector thesis.",
sources: [
      { label: "Freestyle", url: "https://freestyle.vc" }
    ]
  },
  "david-sacks": {
    name: "David Sacks",
    firm: "Craft Ventures",
    firmSlug: "craft-ventures",
    title: "Partner & Co-Founder",
    joinedYear: 2017,
    education: ["B.A. Economics, Stanford University", "J.D., University of Chicago Law School"],
    previousExperience: [
      "First Product Leader & COO, PayPal — part of the group later nicknamed the 'PayPal Mafia'",
      "Founder, Yammer — an enterprise social networking company acquired by Microsoft for $1.2 billion"
    ],
    investmentFocus: ["SaaS", "Marketplaces", "AI", "Cloud/Infrastructure", "Fintech"],
    notableInvestments: [
      { name: "Reddit", ticker: "RDDT" },
      { name: "Airbnb", ticker: null },
      { name: "Facebook", ticker: "META" },
      { name: "Palantir", ticker: "PLTR" },
      { name: "SpaceX", ticker: "SPCX" },
      { name: "Uber", ticker: "UBER" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1999", event: "Joins PayPal as its first product leader, later becoming COO." },
      { year: "2008", event: "Founds Yammer, an enterprise social networking company." },
      { year: "2012", event: "Microsoft acquires Yammer for $1.2 billion." },
      { year: "2017", event: "Co-founds Craft Ventures with Bill Lee." },
      { year: "2023", event: "Craft closes its IV and Growth II funds, bringing total AUM to $3.3 billion." },
      { year: "2024", event: "Portfolio company Reddit goes public on NYSE." }
    ],
    biography: "David Sacks was PayPal's first product leader and later its COO, part of the group later nicknamed the 'PayPal Mafia,' before founding Yammer, an enterprise social networking company he built and sold to Microsoft for $1.2 billion. He co-founded Craft Ventures in 2017 with Bill Lee, built around a deliberately operator-led model — the firm has grown to $3.3 billion in total assets under management following its 2023 Craft IV and Growth II funds. Craft's early investments include Airbnb, Facebook, Palantir, and SpaceX, and its 2017 investment in Reddit was still on the books when the company went public in 2024. Sacks has become known for being unusually public about his own investing framework, and has since taken on a public policy role advising on AI and crypto matters.",
  sources: [
      { label: "Craft Ventures — Announcing $1.3B", url: "https://www.craftventures.com/articles/announcing-1-3-billion-for-craft-ventures-iv-and-growth-ii" },
      { label: "Craft Ventures", url: "https://www.craftventures.com" }
    ]
  },
  "navin-chaddha": {
    name: "Navin Chaddha",
    firm: "Mayfield",
    firmSlug: "mayfield",
    title: "Managing Partner",
    joinedYear: 2006,
    education: ["B.Tech Electrical Engineering, IIT Delhi (Distinguished Alumni Award)", "M.S. Electrical Engineering, Stanford University"],
    previousExperience: [
      "Co-Founder, VXtreme — streaming media platform acquired by Microsoft to become Windows Media",
      "Co-Founder, iBeam Broadcasting — streaming media content delivery network, taken public on Nasdaq (IBEM)",
      "Co-Founder, Rivio — SaaS provider for small businesses, later merged with CPA.com"
    ],
    investmentFocus: ["AI", "Enterprise Software", "Consumer Technology", "Human & Planetary Health"],
    notableInvestments: [
      { name: "Lyft", ticker: "LYFT" },
      { name: "HashiCorp", ticker: null },
      { name: "Poshmark", ticker: null },
      { name: "Marketo", ticker: null },
      { name: "SolarCity", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 18,
    majorExits: 29,
    careerTimeline: [
      { year: "1992", event: "Graduates IIT Delhi with a B.Tech in Electrical Engineering, then begins a PhD at Stanford." },
      { year: "1996", event: "Leaves his PhD to found VXtreme, later acquired by Microsoft to become Windows Media." },
      { year: "2000s", event: "Founds iBeam Broadcasting, taking it public on Nasdaq, then founds Rivio, later merged with CPA.com." },
      { year: "2006", event: "Joins Mayfield as Managing Partner." },
      { year: "2019", event: "Portfolio company Lyft goes public." },
      { year: "2023", event: "Leads Mayfield XVII and Select III to a combined $955 million close, lifting total AUM to $3 billion." }
    ],
    biography: "Navin Chaddha grew up in India, graduated from IIT Delhi, and began a PhD at Stanford before walking away to found VXtreme, a streaming media platform later acquired by Microsoft to become Windows Media. He went on to found two more companies — iBeam Broadcasting, which he took public on Nasdaq, and Rivio, later merged with CPA.com — before joining Mayfield as Managing Partner in 2006. He has since backed more than 60 companies, 18 of which have gone public and 29 of which have been acquired, including Lyft, HashiCorp, and Poshmark, and has been named to the Forbes Midas List eighteen times, ranking in the Top Five in 2020, 2022, 2023, and 2024. Chaddha has led Mayfield's growth to $3 billion in assets under management, built around what he calls a 'people first' philosophy — backing founders primarily at the inception stage, before the broader market believes in them.",
    sources: [
      { label: "Mayfield — Navin Chaddha", url: "https://www.mayfield.com/team/navin-chaddha/" },
   { label: "World Economic Forum", url: "https://www.weforum.org/people/navin-chaddha/" }
    ]
  },
  "ilya-sukhar": {
    name: "Ilya Sukhar",
    firm: "Matrix Partners",
    firmSlug: "matrix-partners",
    title: "General Partner",
    joinedYear: 2016,
    education: ["B.S. Computer Science, Operations Research & Information Engineering, Cornell University", "M.Eng. Computer Science, Cornell University"],
    previousExperience: [
      "Senior Software Engineer, Ooyala",
      "Co-Founder & CEO, Parse — mobile backend infrastructure platform acquired by Facebook for approximately $100 million in 2013",
      "Head of Developer Products, Facebook",
      "Part-Time Partner, Y Combinator"
    ],
    investmentFocus: ["AI", "Infrastructure", "Developer Tools"],
    notableInvestments: [
      { name: "Fivetran", ticker: null },
      { name: "Flock Safety", ticker: null },
      { name: "Mashgin", ticker: null },
      { name: "Parabola", ticker: null },
      { name: "Airtable", ticker: null },
      { name: "Scale AI", ticker: null }
    ],
    boardSeats: ["Fivetran", "Flock Safety", "Mashgin", "Parabola"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2007", event: "Graduates Cornell University with a B.S. in Computer Science, Operations Research & Information Engineering." },
      { year: "2008", event: "Earns a Master of Engineering in Computer Science, also at Cornell." },
      { year: "2008", event: "Joins Ooyala as a Senior Software Engineer." },
      { year: "2011", event: "Co-founds Parse, a mobile backend infrastructure platform." },
      { year: "2013", event: "Facebook acquires Parse for approximately $100 million; becomes Head of Developer Products at Facebook." },
      { year: "2014", event: "Begins serving as a part-time Partner at Y Combinator." },
      { year: "2016", event: "Joins Matrix Partners as General Partner." }
    ],
    biography: "Ilya Sukhar studied computer science and operations research at Cornell before co-founding Parse in 2011, a mobile backend infrastructure platform that Facebook acquired for approximately $100 million in 2013 — he went on to lead Facebook's Developer Products team before fully transitioning out. After a stint as a part-time partner at Y Combinator, he joined Matrix Partners as a General Partner in 2016, where he concentrates on AI, infrastructure, and developer tools. His angel portfolio, built since 2014, includes early stakes in Scale AI and Airtable, and his Matrix investments include Fivetran, Flock Safety, Mashgin, and Parabola — the kind of infrastructure-first bets that reflect his own path as a founder-engineer who understood what technical teams needed before most investors did.",
    sources: [
     { label: "VentureBeat", url: "https://venturebeat.com/ai/parse-cofounder-and-y-combinator-partner-ilya-sukhar-joins-matrix-partners" },
      { label: "The Twenty Minute VC", url: "https://www.thetwentyminutevc.com/ilyasukhar" }
    ]
  },
  "aydin-senkut": {
    name: "Aydin Senkut",
    firm: "Felicis",
    firmSlug: "felicis",
    title: "Founder & Managing Partner",
    joinedYear: 2006,
    education: ["B.A., Boston University", "M.B.A., Wharton School, University of Pennsylvania", "M.A. International Studies, University of Pennsylvania"],
    previousExperience: [
      "Google's First Product Manager — helped launch Google's first ten international sites"
    ],
    investmentFocus: ["AI", "Cybersecurity & Defense", "Health & Bio", "Global Resilience/Energy", "Infrastructure/Software"],
    notableInvestments: [
      { name: "Shopify", ticker: "SHOP" },
      { name: "Credit Karma", ticker: null },
      { name: "Canva", ticker: null },
      { name: "Fitbit", ticker: null },
      { name: "Guardant Health", ticker: "GH" },
      { name: "Verkada", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 13,
    majorExits: 125,
    careerTimeline: [
      { year: "2000s", event: "Serves as Google's first product manager, helping launch the company's first ten international sites." },
      { year: "2006", event: "Founds Felicis in Menlo Park, California." },
      { year: "2015", event: "Portfolio companies Shopify and Fitbit both go public." },
      { year: "2023", event: "Felicis closes its $825 million Fund IX, bringing total AUM to $3 billion." },
      { year: "2025", event: "Closes Felicis's largest fund yet, $900 million Fund X, on the firm's 19th anniversary." }
    ],
    biography: "Aydin Senkut was Google's first product manager, helping launch the company's first ten international sites, before founding Felicis in 2006. Often described as one of the original 'super angels,' Senkut built a reputation for spotting non-consensus founders early and scaling that instinct into a full multi-stage investment platform — backing Shopify, Credit Karma, Canva, Fitbit, and Guardant Health among more than 50 unicorns and over 125 exits. Felicis closed its $825 million Fund IX in 2023, bringing total assets under management to $3 billion, and followed with a $900 million Fund X in 2025 — the firm's largest fund yet, closed on Senkut's 19th anniversary as an institutional investor. He frames Felicis's approach around measurement, instrumentation, and backing founders who are 'brave' enough to build before consensus forms, with every first check contractually barred from voting against the founder.",
    sources: [
      { label: "TechCrunch — Felicis Fund IX", url: "https://techcrunch.com/2023/03/02/felicis-funded-50-more-deals-last-year-than-in-2021-some-as-prices-were-still-rising-and-it-says-it-has-no-regrets" },
      { label: "TechCrunch — Felicis Fund X", url: "https://techcrunch.com/2025/06/12/after-a-string-of-successes-early-stage-fund-felicis-raises-fresh-900m/" }
     ]
  },
      "micky-malka": {
    name: "Micky Malka",
    firm: "Ribbit Capital",
    firmSlug: "ribbit-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Co-Builder, Patagon.com — online financial services platform acquired by Santander in 2000",
      "Co-Founder, Banco Lemon — Brazilian retail bank acquired by Banco do Brasil"
    ],
    investmentFocus: ["Fintech", "Crypto", "Money Movement", "Global Financial Services"],
    notableInvestments: [
      { name: "Coinbase", ticker: "COIN" },
      { name: "Nubank", ticker: "NU" },
      { name: "Robinhood", ticker: "HOOD" },
      { name: "Affirm", ticker: "AFRM" },
      { name: "SoFi", ticker: "SOFI" }
    ],
    boardSeats: ["Robinhood"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "2000", event: "Santander acquires Patagon.com, the online financial services platform Malka helped build." },
      { year: "2000s", event: "Co-founds Banco Lemon in Brazil, later acquired by Banco do Brasil." },
      { year: "2012", event: "Founds Ribbit Capital in Palo Alto, focused globally on financial technology." },
      { year: "2013", event: "Raises Ribbit's first $100 million fund and makes an early bet on Coinbase." },
      { year: "2021", event: "Walmart and Ribbit partner to form the fintech venture One; Coinbase and Nubank both reach the public markets." },
      { year: "2026", event: "Ribbit's Form ADV reports approximately $20.78 billion in regulatory assets under management." }
    ],
    biography: "Meyer 'Micky' Malka is a Venezuelan-born entrepreneur whose path into venture capital ran through regulated finance rather than software. He helped build the online financial services platform Patagon.com, acquired by Santander in 2000, then co-founded Banco Lemon, a Brazilian retail bank later acquired by Banco do Brasil — real operating experience inside brokerages and banks across Latin America and the United States. He founded Ribbit Capital in 2012 and used that background to identify category leaders in financial services years before generalist investors were comfortable underwriting them, making early bets on Coinbase, Nubank, and Robinhood that now sit among the most valuable fintech positions in venture capital. Ribbit's public messaging has broadened past fintech into commerce, identity, data, energy, and AI, but its center of gravity remains the same specialty it started with.",
    sources: [
      { label: "Ribbit Capital", url: "https://ribbitcap.com" },
      { label: "Wikipedia — Micky Malka", url: "https://en.wikipedia.org/wiki/Micky_Malka" },
      { label: "Wikipedia — Ribbit Capital", url: "https://en.wikipedia.org/wiki/Ribbit_Capital" }
    ]
  },
  "matt-mcilwain": {
    name: "Matt McIlwain",
    firm: "Madrona Venture Group",
    firmSlug: "madrona",
    title: "Managing Director",
    joinedYear: 2000,
    education: [],
    previousExperience: [
      "Vice President of Business Process, Genuine Parts Company",
      "Engagement Manager, McKinsey & Company",
      "Investment Banking, Credit Suisse"
    ],
    investmentFocus: ["AI & Intelligent Applications", "Cloud & Data Infrastructure", "Enterprise Software", "Marketplaces"],
    notableInvestments: [
      { name: "Smartsheet", ticker: null },
      { name: "Redfin", ticker: "RDFN" },
      { name: "Impinj", ticker: "PI" },
      { name: "Apptio", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2000", event: "Joins Madrona as a Managing Director after roles at Genuine Parts Company, McKinsey, and Credit Suisse." },
      { year: "2010s", event: "Backs a run of Seattle enterprise and cloud companies including Smartsheet and Apptio." },
      { year: "2018", event: "Portfolio company Smartsheet goes public; Madrona closes Fund VII and says it manages nearly $1.6 billion." },
      { year: "2022", event: "Madrona raises $690 million across Fund 9 and Acceleration Fund 3." }
    ],
    biography: "Matt McIlwain joined Madrona in 2000 from an unusually operational background for a venture investor — Vice President of Business Process at Genuine Parts Company, engagement manager at McKinsey, and earlier investment banking at Credit Suisse. He is closely identified with Madrona's long-duration company-building style and with the Seattle cloud and enterprise software ecosystem that grew up around the firm. The right story to attach to him isn't a single flashy seed check; it's Madrona's repeated 'day one to IPO' framing, where Smartsheet, Redfin, Impinj, and Apptio function as decades-long case studies in patient company formation rather than quick exits. Search-visible Madrona materials do not disclose his education, so that field is intentionally left blank here.",
    sources: [
      { label: "Madrona", url: "https://www.madrona.com" },
      { label: "Wikipedia — Madrona Venture Group", url: "https://en.wikipedia.org/wiki/Madrona_Venture_Group" }
    ]
},
  "ann-miura-ko": {
    name: "Ann Miura-Ko",
    firm: "Floodgate",
    firmSlug: "floodgate",
    title: "Co-Founding Partner",
    joinedYear: 2008,
    education: ["Ph.D., Stanford University", "B.S. Electrical Engineering, Yale University"],
    previousExperience: [
      "Investor, Charles River Ventures",
      "Consultant, McKinsey & Company"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Consumer Internet", "Marketplaces"],
    notableInvestments: [
      { name: "Lyft", ticker: "LYFT" },
      { name: "TaskRabbit", ticker: null },
      { name: "Twitch", ticker: null },
      { name: "Twitter", ticker: null },
      { name: "Okta", ticker: "OKTA" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2008", event: "Co-founds Floodgate with Mike Maples Jr. during the financial crisis, after roles at Charles River Ventures and McKinsey." },
      { year: "2008", event: "Gives birth to her second child, defends her Stanford PhD six weeks later, and makes her first investment in TaskRabbit." },
      { year: "2010", event: "Makes her seed bet in Zimride, the company that becomes Lyft." },
      { year: "2018", event: "Co-founds All Raise, a nonprofit focused on diversity in venture capital." },
      { year: "2019", event: "Lyft goes public on Nasdaq." }
    ],
    biography: "Ann Miura-Ko co-founded Floodgate with Mike Maples Jr. in 2008, after an electrical engineering degree from Yale, PhD work at Stanford, and stints at Charles River Ventures and McKinsey. Her own account of the firm's founding is the most memorable thing about it: she was told she was 'insane' to start a fund in the middle of the financial crisis, gave birth to her second child, defended her PhD six weeks later, and was already on her way to making her first investment in TaskRabbit. Two years later she made the seed bet in Zimride that became Lyft, one of the best-known pre-seed checks in venture capital. She co-founded All Raise in 2018 and has spent her career at the earliest possible stage, where a firm's only real edge is conviction about people before there is anything else to evaluate.",
    sources: [
      { label: "Floodgate", url: "https://floodgate.com" },
      { label: "Wikipedia — Floodgate Fund", url: "https://en.wikipedia.org/wiki/Floodgate_Fund" }
    ]
 },
  "josh-wolfe": {
    name: "Josh Wolfe",
    firm: "Lux Capital",
    firmSlug: "lux-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2000,
    education: ["Cornell University"],
    previousExperience: [],
    investmentFocus: ["AI", "Automation", "Biotech", "Defense", "Energy", "Robotics", "Frontier Science"],
    notableInvestments: [
      { name: "Anduril", ticker: null },
      { name: "Applied Intuition", ticker: null },
      { name: "Hugging Face", ticker: null },
      { name: "Runway", ticker: null },
      { name: "Together", ticker: null },
      { name: "Kallyope", ticker: null }
    ],
    boardSeats: ["Santa Fe Institute (Trustee)"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2000", event: "Co-founds Lux Capital with Peter Hébert and Robert Paull, backed early by Carlyle Group co-founder Bill Conway." },
      { year: "2011", event: "Lux-backed Kurion aids the cleanup of the Fukushima nuclear accident." },
      { year: "2012", event: "Lux invests in surgical robotics company Auris Health." },
      { year: "2016", event: "Kurion is acquired by Veolia for $350 million." },
      { year: "2017", event: "Lux helps fund the seed round for defense technology company Anduril Industries." },
      { year: "2019", event: "Johnson & Johnson acquires Auris Health for up to $6.1 billion." }
    ],
    biography: "Josh Wolfe co-founded Lux Capital in 2000 with Peter Hébert and Robert Paull, and is a Cornell alumnus, published scientist, and trustee of the Santa Fe Institute — a background that shows in how the firm invests. Lux's defining trait is that it does not treat hard science, difficult regulation, and long commercialization timelines as reasons to pass; Wolfe's own framing is that a first check can and should sit beside all three. That conviction put Lux into nuclear waste cleanup company Kurion before Fukushima made the category legible, into Auris Health seven years before Johnson & Johnson paid up to $6.1 billion for it, and into Anduril's seed round in 2017, when defense technology was still widely considered uninvestable by venture standards. He invests as a generalist across AI, automation, biotech, compute, defense, energy, infrastructure, and robotics.",
    sources: [
      { label: "Lux Capital", url: "https://www.luxcapital.com" },
      { label: "Wikipedia — Josh Wolfe", url: "https://en.wikipedia.org/wiki/Josh_Wolfe" },
      { label: "Wikipedia — Lux Capital", url: "https://en.wikipedia.org/wiki/Lux_Capital" }
    ]
},
  "zachary-bogue": {
    name: "Zachary Bogue",
    firm: "DCVC",
    firmSlug: "dcvc",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2011,
    education: [],
    previousExperience: [],
    investmentFocus: ["Deep Tech", "Advanced Computing", "Space", "Defense & Security", "Climate"],
    notableInvestments: [
      { name: "Rocket Lab", ticker: "RKLB" },
      { name: "SentinelOne", ticker: "S" },
      { name: "Planet Labs", ticker: "PL" },
      { name: "Element AI", ticker: null },
      { name: "Blue River Technology", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "2011", event: "Co-founds the firm as Data Collective with Matt Ocko in Palo Alto." },
      { year: "2017", event: "Portfolio company Blue River Technology is acquired by John Deere for $305 million." },
      { year: "2021", event: "Several DCVC-backed companies reach the public markets, including SentinelOne and Recursion." },
      { year: "2026", event: "DCVC publishes its inaugural Deep Tech Opportunities report." }
    ],
    biography: "Zachary Bogue co-founded DCVC — originally Data Collective — with Matt Ocko, building the firm around a model most venture funds don't attempt: pairing career investors with a standing bench of more than 35 technical experts, including CTOs, chief scientists, and professors at Stanford and Berkeley. The point of that structure is to make it possible to underwrite companies whose core risk is scientific rather than commercial. Bogue is closely associated with Rocket Lab, SentinelOne, and Element AI, and wrote and publicly discussed the Rocket Lab bet years before a broader aerospace-investor consensus existed — consistent with a firm willing to fund categories that need both patient capital and genuine technical fluency. Public DCVC materials do not disclose his education, so that field is intentionally left blank here rather than inferred.",
    sources: [
      { label: "DCVC — Team", url: "https://www.dcvc.com/team/" },
      { label: "DCVC", url: "https://www.dcvc.com" }
    ]
  }
   "leonid-boguslavsky": {
    name: "Leonid Boguslavsky",
    firm: "RTP Global",
    firmSlug: "rtp-global",
    title: "Founder & Partner",
    joinedYear: 2000,
    education: [],
    previousExperience: [
      "Entrepreneur and internet investor prior to founding RTP Global; funded the firm largely from reinvested proceeds of earlier ventures"
    ],
    investmentFocus: ["AI", "SaaS", "DevOps", "Fintech", "Global Consumer Internet"],
    notableInvestments: [
      { name: "Datadog", ticker: "DDOG" },
      { name: "Delivery Hero", ticker: null },
      { name: "Cred", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2000", event: "Founds RTP Global, funding the firm largely from proceeds of his own prior ventures rather than traditional outside LP capital." },
      { year: "2011", event: "Supports RTP's U.S. expansion through RTP Ventures in New York." },
      { year: "2012", event: "RTP backs Datadog's Series A round." },
      { year: "2018", event: "The firm, previously known as ru-Net, formally rebrands as RTP Global." },
      { year: "2023", event: "RTP announces Fund IV at $1 billion." }
    ],
    biography: "Leonid Boguslavsky founded RTP Global in 2000 after building wealth as an entrepreneur and internet investor, and funded the firm's early activity largely by reinvesting his own prior gains rather than raising extensively from outside limited partners — an unusual structure that still shapes how RTP operates today. That self-funded, founder-capitalized model gives the firm an unusually long time horizon and a reputation for fast decision-making, since it isn't bound by the same fundraising cycles as a traditional LP-backed fund. Boguslavsky's highest-profile bet came in 2012, when RTP backed Datadog's Series A round years before the observability company's 2019 Nasdaq IPO, and the firm has since built a global footprint spanning New York, London, Paris, and Bengaluru while staying close to his original founder-led model.",
    sources: [
      { label: "RTP Global", url: "https://rtp.vc" }
    ]
  },
"sunil-dhaliwal": {
    name: "Sunil Dhaliwal",
    firm: "Amplify Partners",
    firmSlug: "amplify-partners",
    title: "Founder & General Partner",
    joinedYear: 2012,
    education: ["B.S., Finance & International Business, Georgetown University"],
    previousExperience: [
      "Technology Investment Banking, Alex. Brown & Sons",
      "General Partner, Battery Ventures (14+ years)"
    ],
    investmentFocus: ["AI", "Developer Tools", "Data Infrastructure", "Cybersecurity", "Enterprise Software"],
    notableInvestments: [
      { name: "Datadog", ticker: "DDOG" },
      { name: "Fastly", ticker: "FSLY" },
      { name: "Splunk", ticker: null }
    ],
    boardSeats: ["Runway"],
    ipoCount: 3,
    majorExits: 0,
    careerTimeline: [
      { year: "1996", event: "Graduates from Georgetown University and joins Alex. Brown & Sons in technology investment banking." },
      { year: "1998", event: "Joins Battery Ventures, where he spends more than 14 years backing early-stage infrastructure companies including Splunk." },
      { year: "2012", event: "Leaves Battery to found Amplify Partners, closing a $40 million debut fund after 18 months of fundraising." },
      { year: "2019", event: "Portfolio companies Datadog and Fastly both go public." },
      { year: "2025", event: "Closes $900 million across Fund 6, Fund 6 Select, and Amplify's first dedicated biology fund." }
    ],
    biography: "Sunil Dhaliwal has spent more than 25 years investing in technical infrastructure, starting at Battery Ventures in 1998 after two years in technology banking at Alex. Brown & Sons following his 1996 Georgetown graduation. At Battery he spent over 14 years backing early-stage companies through multiple market cycles, including a formative early bet on Splunk, before leaving in 2012 to found Amplify Partners on a single conviction: that technical founders deserved an investor who understood their problem space as deeply as they did. His first fund raised just $40 million after 18 months of on-and-off fundraising; Amplify has since grown into a $900 million platform whose portfolio includes Datadog and Fastly, both public since 2019. Dhaliwal has said his instinct for backing builders in unfashionable technical corners traces back to watching his own father leave a corporate engineering job to start a company when Dhaliwal was still in grade school.",
    sources: [
      { label: "Amplify Partners", url: "https://www.amplifypartners.com/team/sunil-dhaliwal" },
      { label: "TechCrunch — Amplify Partners", url: "https://techcrunch.com/2018/09/18/amplify-partners-locks-in-200-million-to-transform-technical-founders-into-people-who-can-actually-lead-a-startup/" }
    ]
  },
"teymour-boutros-ghali": {
    name: "Teymour Boutros-Ghali",
    firm: "BOLD Capital Partners",
    firmSlug: "bold-capital-partners",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2015,
    education: ["BA, Electrical Engineering, Cambridge University", "PhD, Plasma Physics, MIT", "SM, Management, MIT Sloan School of Management"],
    previousExperience: [
      "General Partner, Monitor Ventures",
      "Senior Executive, Time Warner (operations and investments)",
      "CEO, AllBusiness (acquired by NBC)",
      "CEO, Zowie Intertainment (acquired by LEGO)",
      "CEO, Thrive Online (acquired by AOL)",
      "Consultant, Boston Consulting Group"
    ],
    investmentFocus: ["AI", "Healthcare", "Longevity", "Biotechnology", "Deep Tech"],
    notableInvestments: [
      { name: "Insilico Medicine", ticker: "3696.HK" },
      { name: "Colossal", ticker: null },
      { name: "Near Space Labs", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 3,
    careerTimeline: [
      { year: "2005", event: "Serves as General Partner at Monitor Ventures before co-founding BOLD." },
      { year: "2015", event: "Co-founds BOLD Capital Partners with Peter Diamandis." },
      { year: "2025", event: "Portfolio company Insilico Medicine completes its Hong Kong IPO, raising HKD 2.277 billion." }
    ],
    biography: "Teymour Boutros-Ghali brought an unusually operational background to venture investing when he co-founded BOLD Capital Partners with Peter Diamandis in 2015. After a Cambridge electrical engineering degree, a PhD in plasma physics and a management degree from MIT, and time at Boston Consulting Group, he spent years as a senior Time Warner executive before leading three companies to acquisitions himself — AllBusiness (sold to NBC), Zowie Intertainment (acquired by LEGO), and Thrive Online (sold to AOL) — then served as a General Partner at Monitor Ventures before starting BOLD. That mix of deep technical training and repeated hands-on company-building experience underpins BOLD's 'convergence' thesis, which treats longevity, synthetic biology, AI, and robotics as a single connected investment category rather than separate bets. The firm's clearest recent proof point is Insilico Medicine, one of BOLD's portfolio companies, which completed its Hong Kong Stock Exchange listing in December 2025.",
    sources: [
      { label: "BOLD Capital Partners", url: "https://boldcapitalpartners.com" },
      { label: "Wikipedia — Teymour Boutros-Ghali", url: "https://en.wikipedia.org/wiki/Teymour_Boutros-Ghali" }
    ]
  },
"matt-melymuka": {
    name: "Matt Melymuka",
    firm: "PeakSpan Capital",
    firmSlug: "peakspan-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2015,
    education: ["B.S., Finance, Georgetown University (cum laude)"],
    previousExperience: [
      "Technology Investment Banker, Piper Jaffray (Technology, Media & Telecom group)",
      "Investor, Investor Growth Capital (B2B software investment team)",
      "Investor, Greycroft Partners' Growth Fund"
    ],
    investmentFocus: ["Applied AI", "B2B Software", "Go-to-Market Technology", "Hospitality Technology"],
    notableInvestments: [
      { name: "Ecwid", ticker: null }
    ],
    boardSeats: ["Letterhead"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2011", event: "Joins Investor Growth Capital's B2B software investment team, where he meets future PeakSpan co-founders Phil Dur and Brian Mulvey." },
      { year: "2015", event: "Co-founds PeakSpan Capital with Phil Dur and Brian Mulvey." },
      { year: "2021", event: "PeakSpan portfolio company Ecwid is acquired by Lightspeed Commerce for approximately $500 million." },
      { year: "2022", event: "Named to Crain's New York Business '40 Under 40' list." },
      { year: "2024", event: "Named to GrowthCap's Top 40 Under 40 Growth Investors list, a recognition repeated in 2025." }
    ],
    biography: "Matt Melymuka has spent his entire career on growth-stage software investing, starting as a technology investment banker on Piper Jaffray's Technology, Media & Telecom team before moving to Investor Growth Capital's B2B software investment team — where he met Phil Dur and Brian Mulvey, the two colleagues with whom he'd later found PeakSpan Capital in 2015. After refining their shared investment approach together at Investor Growth Capital and then Greycroft Partners' Growth Fund, the three co-founded PeakSpan around a specific bet: that applied AI B2B software companies scaling from roughly $3 million to $50 million in ARR needed a specialist partner, not a generalist growth fund. Melymuka has worked with more than 30 growth-stage software companies over 15-plus years at the firm, has been named to both Crain's and GrowthCap's 40 Under 40 lists, and leads PeakSpan's efforts in go-to-market and hospitality technology.",
    sources: [
      { label: "PeakSpan Capital", url: "https://www.peakspancapital.com/investment-team/matt-melymuka" }
    ]
  },
"gaurav-garg": {
    name: "Gaurav Garg",
    firm: "Wing Venture Capital",
    firmSlug: "wing-vc",
    title: "Founding Partner",
    joinedYear: 2013,
    education: ["BS & MS, Electrical Engineering, Washington University in St. Louis", "BS, Computer Science, Washington University in St. Louis"],
    previousExperience: [
      "Engineering roles, SynOptics and Bay Networks",
      "Founder & SVP of Product Management, Redback Networks (IPO 1999)",
      "Partner, Sequoia Capital (2001-2012)"
    ],
    investmentFocus: ["AI", "Data Infrastructure", "Enterprise Software", "Cybersecurity", "Developer Tools"],
    notableInvestments: [
      { name: "Snowflake", ticker: "SNOW" },
      { name: "Ruckus Wireless", ticker: null },
      { name: "FireEye", ticker: null },
      { name: "MobileIron", ticker: null }
    ],
    boardSeats: ["Ruckus Wireless", "FireEye", "MobileIron", "Cohesity"],
    ipoCount: 6,
    majorExits: 2,
    careerTimeline: [
      { year: "1996", event: "Founds Redback Networks after early engineering roles at SynOptics and Bay Networks." },
      { year: "1999", event: "Redback Networks completes its IPO." },
      { year: "2001", event: "Joins Sequoia Capital as a partner." },
      { year: "2002", event: "Founds Ruckus Wireless, which he builds toward IPO over the following decade." },
      { year: "2012", event: "Ruckus Wireless and FireEye both go public; Garg's decade at Sequoia ends." },
      { year: "2013", event: "Co-founds Wing Venture Capital with Peter Wagner." },
      { year: "2020", event: "Portfolio company Snowflake goes public, later valued at over $70 billion on its first trading day." }
    ],
    biography: "Gaurav Garg brought a rare founder-to-investor path to Wing Venture Capital when he co-founded the firm with Peter Wagner in 2013. After early engineering roles at SynOptics and Bay Networks, he founded Redback Networks in 1996 and took it public in 1999, then spent 2001 to 2012 as a partner at Sequoia Capital, where he helped build FireEye and Jasper from early stages and served on boards for more than ten years each. In between, he founded Ruckus Wireless in 2002 and guided it to its own 2012 IPO — giving him operating experience building two public companies from scratch, not just investing in others. That builder's instinct shows up directly in Wing's long-duration, company-building posture with founders, and in its highest-profile bet: Wing was a first-check investor in Snowflake years before its 2020 IPO, which valued the data cloud company at over $70 billion on its first day of trading.",
    sources: [
      { label: "Wing Venture Capital", url: "https://www.wing.vc/people/gaurav-garg" },
      { label: "Wing Launch Announcement", url: "https://www.wing.vc/content/wing-launches-with-new-111-million-venture-fund" }
    ]
  },
"lior-susan": {
    name: "Lior Susan",
    firm: "Eclipse Ventures",
    firmSlug: "eclipse-ventures",
    title: "Founder, Managing Partner & CEO",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "Co-Founder, Intucell (software-defined networking, acquired by Cisco for $475M in 2012)",
      "Founder & General Partner, Lab IX — Flextronics' hardware investment platform",
      "Special Forces reservist, Israel Defense Forces"
    ],
    investmentFocus: ["Manufacturing", "Logistics", "Energy", "Defense", "Industrial AI"],
    notableInvestments: [
      { name: "Enovix", ticker: "ENVX" },
      { name: "Bright Machines", ticker: null },
      { name: "Cerebras", ticker: null },
      { name: "Augury", ticker: null }
    ],
    boardSeats: ["Bright Machines", "Cerebras", "Augury", "Ursa Major"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2008", event: "Co-founds Intucell with his brother, building a software-defined networking company for global telecom networks." },
      { year: "2012", event: "Cisco acquires Intucell for $475 million." },
      { year: "2012", event: "Joins Flex as Founder & General Partner of Lab IX, its hardware investment platform, investing across energy storage, additive manufacturing, and robotics." },
      { year: "2015", event: "Founds Eclipse Ventures in Palo Alto to back founders rebuilding physical industries." },
      { year: "2020", event: "Eclipse invests in Enovix; Eclipse partner Greg Reichow joins its board." },
      { year: "2021", event: "Enovix becomes a public company via business combination." },
      { year: "2026", event: "Eclipse closes $1.3 billion across Fund VI and Early Growth Fund III, bringing total AUM to roughly $10 billion." }
    ],
    biography: "Lior Susan's path to venture capital runs through a kibbutz in Israel and an elite Special Forces unit, not a university — by his own account, he arrived in Silicon Valley in his mid-20s with no formal education and no experience working for anyone else. In 2008 he joined his brother to build Intucell, a software-defined networking startup for telecom networks, and sold it to Cisco for $475 million four years later. He then spent three years at Flex, the global manufacturing company, leading its Lab IX hardware investment platform and getting an inside view of the operational inefficiencies choking legacy physical industries — manufacturing, logistics, energy. That experience became the direct thesis behind Eclipse Ventures, which he founded in 2015 on the belief that rebuilding those industries, not just software-enabling them, would define the next generation of consequential companies. Eclipse's 2020 investment in battery maker Enovix, which went public the following year, remains one of the clearest proof points of that thesis.",
    sources: [
      { label: "Eclipse Ventures", url: "https://eclipse.capital/team/lior-susan/" },
      { label: "Heidrick & Struggles Interview", url: "https://www.heidrick.com/en/insights/podcasts/e189_traits-successful-venture-capital-leader-lior-susan" }
    ]
  },
"chris-arsenault": {
    name: "Chris Arsenault",
    firm: "Inovia Capital",
    firmSlug: "inovia-capital",
    title: "Co-Founder & General Partner",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "Founder & CEO, SIT Solutions Internet Technilogic (SIT Europe sold to Ubizen, 1999)",
      "Co-Founder, Copernic Technologies and Wanted Technologies",
      "Investment Director & Entrepreneur in Residence, Telesystem Group",
      "Partner, MSBi Capital (renamed Inovia Capital)"
    ],
    investmentFocus: ["Enterprise Software", "Commerce", "AI", "Growth-Stage Company Building"],
    notableInvestments: [
      { name: "Lightspeed Commerce", ticker: "LSPD" },
      { name: "AppDirect", ticker: null },
      { name: "Sonder", ticker: null }
    ],
    boardSeats: ["AppDirect", "Lightspeed Commerce", "Poka"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1993", event: "Founds SIT Solutions Internet Technilogic; its European division is later sold to Ubizen in 1999." },
      { year: "1999", event: "Joins the Telesystem Group as Investment Director & Entrepreneur in Residence, helping spin out subsidiaries of Teleglobe and Microcell." },
      { year: "2002", event: "Joins MSBi Capital as Partner, focused on the technology sector." },
      { year: "2007", event: "Co-founds Inovia Capital, building the firm out from MSBi's original platform." },
      { year: "2019", event: "Lightspeed Commerce, a company Arsenault has long supported as a board member, goes public on the NYSE and TSX." }
    ],
    biography: "Chris Arsenault arrived at Inovia Capital's founding in 2007 with more than a decade of operating experience already behind him, not a traditional finance background. He founded SIT Solutions in 1993, sold its European division to Ubizen in 1999, then spent years helping build Copernic Technologies and Wanted Technologies while also working inside the Telesystem Group, where he helped spin subsidiaries out of telecom giants Teleglobe and Microcell. He joined MSBi Capital in 2002 as its technology-focused partner, and when the firm relaunched as Inovia Capital in 2007, Arsenault became a co-founder shaping its culture and long-term platform strategy. That operator-first background is part of why Inovia frames itself as institution-building rather than opportunistic dealmaking — Arsenault has stayed closely involved with Lightspeed Commerce since its earliest days, sitting on its board through its 2019 IPO, alongside continued board seats at AppDirect and Poka.",
    sources: [
      { label: "Inovia Capital", url: "https://www.inovia.vc/team/chris-arsenault/" },
      { label: "Réseau Capital", url: "https://reseaucapital.com/en/speakers/chris-arsenault/" }
    ]
  },
"matt-bigge": {
    name: "Matt Bigge",
    firm: "Crosslink Capital",
    firmSlug: "crosslink-capital",
    title: "Partner",
    joinedYear: 2016,
    education: ["BS, International Relations, Georgetown University", "MBA, Harvard Business School"],
    previousExperience: [
      "Infantry Officer, U.S. Army, 10th Mountain Division (Airborne & Ranger qualified)",
      "Co-Founder & President, MILCOM Technologies",
      "CEO & Co-Founder, Strategic Social Holdings (acquired by Constellis Group)",
      "Venture Partner, Paladin Capital Group"
    ],
    investmentFocus: ["Cybersecurity", "Enterprise Infrastructure", "Digital Transformation", "National Security Tech"],
    notableInvestments: [
      { name: "ArcSight", ticker: null },
      { name: "CloudShield", ticker: null },
      { name: "Narus", ticker: null },
      { name: "MeshNetworks", ticker: null }
    ],
    boardSeats: ["Silicon Valley Defense Group"],
    ipoCount: 0,
    majorExits: 4,
    careerTimeline: [
      { year: "1992", event: "Serves as an Infantry Officer in the U.S. Army's 10th Mountain Division after graduating Georgetown." },
      { year: "1997", event: "Co-founds MILCOM Technologies, ultimately leading the commercialization of more than $2 billion in defense-focused R&D into ten product companies." },
      { year: "2012", event: "Becomes a Venture Partner at Paladin Capital Group, investing in enterprise and industrial infrastructure security." },
      { year: "2016", event: "Joins Crosslink Capital as Partner, focused on enterprise and industrial IT infrastructure, security, and what the firm calls 'plausible science fiction.'" }
    ],
    biography: "Matt Bigge's path to Crosslink Capital runs through the U.S. Army's 10th Mountain Division, where he served as an Airborne- and Ranger-qualified Infantry officer after graduating Georgetown, before earning his MBA at Harvard Business School. He co-founded MILCOM Technologies in 1997, spending years commercializing more than $2 billion of defense-focused R&D into ten separate product companies — work that led to a track record backing companies like ArcSight (acquired by HP), CloudShield (acquired by SAIC), and Narus (acquired by Boeing). After serving as CEO of Strategic Social Holdings and a Venture Partner at Paladin Capital, he joined Crosslink in 2016 with a two-decade relationship to the firm's team already in place — he'd worked with Crosslink partner Eric Chin years earlier at MILCOM. That military-to-venture pipeline is now a defining part of Crosslink's brand: Bigge pulls the firm's cybersecurity and national-security-adjacent investing into what Crosslink calls 'plausible science fiction,' broadening it well past a conventional enterprise SaaS identity.",
    sources: [
      { label: "Crosslink Capital", url: "https://www.crosslinkcapital.com/team/matt-bigge/" },
      { label: "Silicon Valley Defense Group", url: "https://www.siliconvalleydefense.org/our-team-1/matt-bigge" }
    ]
  },
"dan-levitan": {
    name: "Dan Levitan",
    firm: "Maveron",
    firmSlug: "maveron",
    title: "Co-Founder & General Partner",
    joinedYear: 1998,
    education: ["BA, Duke University", "MBA, Harvard Business School"],
    previousExperience: [
      "Managing Director, Consumer Group, Schroder Wertheim & Co. (led Starbucks' 1992 IPO)"
    ],
    investmentFocus: ["Consumer", "Commerce", "Health & Wellness", "Fintech"],
    notableInvestments: [
      { name: "Zulily", ticker: null },
      { name: "Allbirds", ticker: "BIRD" },
      { name: "Potbelly", ticker: "PBPB" },
      { name: "Trupanion", ticker: "TRUP" }
    ],
    boardSeats: ["Allbirds", "Trupanion", "Pacaso", "Two Chairs"],
    ipoCount: 4,
    majorExits: 0,
    careerTimeline: [
      { year: "1992", event: "Leads Starbucks' IPO as a Schroder Wertheim & Co. investment banker, forming a relationship with CEO Howard Schultz." },
      { year: "1998", event: "Co-founds Maveron with Howard Schultz in Seattle." },
      { year: "2009", event: "Leads Zulily's approximately $5 million Series A round." },
      { year: "2013", event: "Zulily and Potbelly both go public; Maveron's 22% Zulily stake is worth more than $1 billion at IPO." },
      { year: "2014", event: "Named to the Forbes Midas List of top venture investors." },
      { year: "2021", event: "Portfolio company Allbirds goes public on the Nasdaq." }
    ],
    biography: "Dan Levitan spent 15 years as a consumer-focused investment banker before co-founding Maveron, leading Starbucks' 1992 IPO as a managing director at Schroder Wertheim & Co. — the deal that formed his relationship with CEO Howard Schultz. The two co-founded Maveron together in 1998, built around a single conviction that has defined the firm ever since: invest only in consumer-facing brands and technology, never enterprise. Levitan's clearest proof point came in 2009, when he led a roughly $5 million Series A round in Zulily; by the time the ecommerce company went public in 2013 at a $4.6 billion valuation, Maveron's 22% stake was worth more than $1 billion. He was named to the Forbes Midas List in 2014, has sat on the boards of Allbirds, Trupanion, Pacaso, and Two Chairs, and remains the firm's most public face more than 25 years after co-founding it.",
    sources: [
      { label: "Maveron", url: "https://www.maveron.com" },
      { label: "Wikipedia — Dan Levitan", url: "https://en.wikipedia.org/wiki/Dan_Levitan" }
    ]
  },
"ho-nam": {
    name: "Ho Nam",
    firm: "Altos Ventures",
    firmSlug: "altos-ventures",
    title: "Co-Founder & Managing Director",
    joinedYear: 1996,
    education: ["BS, Engineering (minor, Philosophy, Politics & Economics), Harvey Mudd College", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Associate Consultant, Bain & Company",
      "Associate, Trinity Ventures (early investor in Starbucks)",
      "Sales & Marketing, Silicon Graphics",
      "Product roles, Octel Communications"
    ],
    investmentFocus: ["Enterprise Software", "Consumer Internet", "Durable Founder-Led Businesses"],
    notableInvestments: [
      { name: "Coupang", ticker: "CPNG" },
      { name: "Roblox", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 0,
    careerTimeline: [
      { year: "1988", event: "Graduates Harvey Mudd College and joins Bain & Company as an Associate Consultant." },
      { year: "1990", event: "Joins Trinity Ventures as an Associate, an early investor in Starbucks among other companies." },
      { year: "1994", event: "Completes his Stanford MBA and joins Silicon Graphics in sales and marketing, later moving to Octel Communications." },
      { year: "1996", event: "Co-founds Altos Ventures with Han Kim and Anthony Lee." },
      { year: "2007", event: "Altos' relationship with Roblox begins." },
      { year: "2021", event: "Both Roblox and Coupang go public." }
    ],
    biography: "Ho Nam immigrated to the United States from Korea with his family at age nine, and has said that experience of starting over shaped the patient, long-horizon approach he later brought to venture investing. After a Harvey Mudd engineering degree, he began his career at Bain & Company, then moved into venture capital at Trinity Ventures — an early Starbucks investor — before earning his Stanford MBA and spending time at Silicon Graphics and Octel Communications. He co-founded Altos Ventures in 1996 with Han Kim and Anthony Lee, and the firm's defining trait under his leadership has been patience most funds don't attempt: Altos held its Roblox position for well over a decade before the company's 2021 IPO, and its early stake in Coupang was worth an implied $62.1 billion at that company's own 2021 listing. Nam has since become a public voice for what he calls venture capital's spiritual side, writing about kindness, curiosity, and service as core to long-term investing rather than just financial technique.",
    sources: [
      { label: "Harvey Mudd College Magazine", url: "https://magazine.hmc.edu/spring-2024/building-success-with-heart/" },
      { label: "uAspire", url: "https://www.uaspire.org/about/team/ho-nam" }
    ]
  },
"anthony-lin": {
    name: "Anthony Lin",
    firm: "Intel Capital",
    firmSlug: "intel-capital",
    title: "Managing Partner & Head of Intel Capital",
    joinedYear: 2008,
    education: ["BA, Economics, University of California, Berkeley"],
    previousExperience: [
      "Corporate Finance, M&A & Private Equity roles, Banc of America Securities",
      "Corporate Finance, ASAT",
      "Corporate Finance, Merrill Lynch",
      "Corporate Finance, PaineWebber"
    ],
    investmentFocus: ["AI", "Cloud", "Silicon", "Frontier Technology"],
    notableInvestments: [
      { name: "SambaNova Systems", ticker: null },
      { name: "Syntiant", ticker: null },
      { name: "Articul8", ticker: null }
    ],
    boardSeats: ["SambaNova Systems", "Syntiant Corp", "Articul8.AI", "RealSense"],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1996", event: "Begins a 12-year career in corporate finance, M&A, and private equity at Banc of America Securities, ASAT, Merrill Lynch, and PaineWebber." },
      { year: "2008", event: "Joins Intel, initially leading mergers, acquisitions, and international investing." },
      { year: "2020", event: "Named interim head of Intel Capital following Wendell Brooks' departure." },
      { year: "2021", event: "Appointed permanent Managing Partner and Head of Intel Capital." },
      { year: "2022", event: "Launches a $1 billion investment fund with Intel Foundry Services to build out the fab-technology innovation ecosystem." }
    ],
    biography: "Anthony Lin spent 12 years in corporate finance, M&A, and private equity — at Banc of America Securities, ASAT, Merrill Lynch, and PaineWebber — before joining Intel in 2008, initially overseeing the company's own mergers, acquisitions, and international equity investments. He moved into Intel Capital and was named interim head in 2020 after Wendell Brooks' departure, taking the role permanently in February 2021. As a voting member of Intel Capital's investment committee, Lin now oversees all of the unit's equity investment activity, organized around four domains he's helped define — Cloud, Devices, Frontier, and Silicon — with 2023 alone seeing more than $350 million deployed across 30 new investments spanning AI infrastructure, robotics, and translation technology. He currently sits on the boards of SambaNova Systems, Syntiant, Articul8.AI, and RealSense.",
    sources: [
      { label: "Intel Newsroom", url: "https://newsroom.intel.com/biography/anthony-lin" },
      { label: "Intel Capital", url: "https://www.intelcapital.com/team/anthony-lin/" }
    ]
  },
"quinn-li": {
    name: "Quinn Li",
    firm: "Qualcomm Ventures",
    firmSlug: "qualcomm-ventures",
    title: "Senior Vice President & Global Head",
    joinedYear: 2005,
    education: ["BS, MS & PhD, Electrical Engineering, Washington University in St. Louis", "MBA, Cornell University"],
    previousExperience: [
      "3G Wireless Technology & Standards Engineer, Lucent Technologies",
      "Wireless Technology Development, Broadcom",
      "Product Management & Business Development, IBM Systems and Technology Group"
    ],
    investmentFocus: ["5G", "AI", "Automotive", "Enterprise & Data Center", "IoT"],
    notableInvestments: [
      { name: "Zoom", ticker: "ZM" },
      { name: "Enovix", ticker: "ENVX" },
      { name: "Eero", ticker: null },
      { name: "InvenSense", ticker: null }
    ],
    boardSeats: ["Augury", "Celona", "Cohesity", "Cresta", "Netradyne", "R-Zero"],
    ipoCount: 3,
    majorExits: 5,
    careerTimeline: [
      { year: "1996", event: "Begins his career as an engineer at Lucent Technologies, working on 3G wireless standards development." },
      { year: "2003", event: "Completes his MBA at Cornell, where he gets his first exposure to venture investing through a student-run VC fund." },
      { year: "2005", event: "Joins Qualcomm Ventures, calling it his 'dream company' after earlier roles at Broadcom and IBM." },
      { year: "2018", event: "Portfolio company Ring is acquired by Amazon for more than $1 billion." },
      { year: "2019", event: "Portfolio companies Zoom and Cloudflare both go public." },
      { year: "2021", event: "Portfolio companies SentinelOne, Enovix, Matterport, Spire, and Science 37 all go public." }
    ],
    biography: "Quinn Li's path to venture capital ran directly through engineering: after earning his PhD in electrical engineering, he spent years working on 3G wireless standards at Lucent Technologies before roles at Broadcom and IBM gave him exposure to product strategy and deal-making. He got his real introduction to venture investing during his Cornell MBA, working as an investment professional for a small, student-run VC fund, and joined Qualcomm Ventures in 2005 calling it his dream company. His investment philosophy is explicit about playing to Qualcomm's own technical edge — he's said the firm invests where its parent company's scale and industry position give it 'unfair knowledge' that generalist VCs don't have. That approach has produced more than a dozen exits, including A123 Systems, Eero, Enovix, InvenSense, Pensando, and Zoom, and Li now oversees Qualcomm's global venture portfolio of more than 150 active companies across seven regions.",
    sources: [
      { label: "Qualcomm Ventures", url: "https://www.qualcommventures.com/team/quinn-li/" },
      { label: "Corporate Venturing Insider", url: "https://medium.com/@corporateventuringinsider/qualcomm-ventures-quinn-li-levering-an-unfair-advantage-c18a04516f9e" }
    ]
  },
"noah-yago": {
    name: "Noah Yago",
    firm: "Cisco Investments",
    firmSlug: "cisco-investments",
    title: "Vice President",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Investor, Triangle Peak Partners",
      "Venture roles, JVP (Jerusalem Venture Partners)",
      "Venture roles, Veronis Suhler Stevenson"
    ],
    investmentFocus: ["Enterprise Software", "AI", "Data Infrastructure"],
    notableInvestments: [
      { name: "HashiCorp", ticker: null },
      { name: "DataRobot", ticker: null },
      { name: "Dremio", ticker: null },
      { name: "AlphaSense", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2017", event: "Joins Cisco Investments from Triangle Peak Partners, after earlier venture roles at JVP and Veronis Suhler Stevenson." },
      { year: "2021", event: "Portfolio company HashiCorp, one of his led investments, goes public on the Nasdaq." }
    ],
    biography: "Noah Yago joined Cisco Investments in 2017 after venture roles at Triangle Peak Partners, JVP, and Veronis Suhler Stevenson, bringing a background spanning both financial and strategic investing before moving fully into Cisco's corporate venture platform. He has led investments in HashiCorp, DataRobot, Dremio, and AlphaSense, with HashiCorp's December 2021 IPO — at a roughly $14 billion valuation — standing as the clearest public proof point of his sourcing. His focus sits at the intersection of enterprise software, data infrastructure, and AI, the same categories Cisco Investments has doubled down on since launching its dedicated $1 billion AI fund in 2024.",
    sources: [
      { label: "Cisco Investments Team", url: "https://www.ciscoinvestments.com/team" }
    ]
  },
"john-somorjai": {
    name: "John Somorjai",
    firm: "Salesforce Ventures",
    firmSlug: "salesforce-ventures",
    title: "President",
    joinedYear: 2009,
    education: [],
    previousExperience: [
      "Corporate Development & M&A roles at Salesforce prior to founding Salesforce Ventures"
    ],
    investmentFocus: ["AI", "Enterprise Software", "Cloud Infrastructure", "Fintech"],
    notableInvestments: [
      { name: "Snowflake", ticker: "SNOW" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "Zoom", ticker: "ZM" },
      { name: "Databricks", ticker: null },
      { name: "Vlocity", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 1,
    careerTimeline: [
      { year: "2009", event: "Helps found Salesforce Ventures, becoming its President." },
      { year: "2020", event: "Vlocity, one of his notable investments, is acquired by parent company Salesforce for $1.33 billion." },
      { year: "2024", event: "Salesforce Ventures marks 15 years under his leadership, having deployed more than $6 billion across 630+ startups." }
    ],
    biography: "John Somorjai helped found Salesforce Ventures in 2009 and has run it as President ever since, building it into one of the largest and most active corporate venture platforms in enterprise software. His official bio credits him with involvement in a broad set of the firm's highest-profile bets, including Auth0, Databricks, DocuSign, nCino, Snowflake, Vlocity, and Zoom — a mix spanning identity, data infrastructure, e-signature, banking software, and communications. The clearest and most unusual proof point among them is Vlocity: Salesforce Ventures backed the industry-cloud software company as an outside investor, and Salesforce itself later acquired it for $1.33 billion in February 2020, a rare case of a corporate VC's portfolio company being absorbed directly by its own parent.",
    sources: [
      { label: "Salesforce Ventures People", url: "https://salesforceventures.com/people/" }
    ]
  },
"laela-sturdy": {
    name: "Laela Sturdy",
    firm: "CapitalG",
    firmSlug: "capitalg",
    title: "Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Led emerging businesses at Google",
      "Leadership roles on YouTube and Google Search"
    ],
    investmentFocus: ["AI", "Enterprise Infrastructure", "Data & Analytics", "Fintech"],
    notableInvestments: [
      { name: "Duolingo", ticker: "DUOL" },
      { name: "UiPath", ticker: "PATH" },
      { name: "Stripe", ticker: null }
    ],
    boardSeats: ["Duolingo"],
    ipoCount: 2,
    majorExits: 0,
    careerTimeline: [
      { year: "2013", event: "Joins CapitalG shortly after its founding, coming from leadership roles on YouTube and Google Search." },
      { year: "2015", event: "Leads CapitalG's investment in Duolingo." },
      { year: "2021", event: "Duolingo goes public on the Nasdaq." }
    ],
    biography: "Laela Sturdy joined CapitalG shortly after Alphabet founded the growth fund in 2013, bringing years of internal Google leadership experience — she had led the company's emerging businesses group and held senior roles on both YouTube and Google Search. That internal operating background is central to CapitalG's pitch to founders: its investors aren't just financiers, they're people who've run large-scale consumer and enterprise products at Google itself. Sturdy has become one of the firm's most visible Managing Partners, with Duolingo standing as her clearest public outcome — she backed the language-learning company years before its 2021 Nasdaq IPO and continues to sit on its board.",
    sources: [
      { label: "CapitalG Team", url: "https://capitalg.com/team/" }
    ]
  },
"david-lee-samsung-next": {
    name: "David Lee",
    firm: "Samsung NEXT",
    firmSlug: "samsung-next",
    title: "Head of Samsung NEXT & EVP, Samsung Electronics",
    joinedYear: 2018,
    education: ["BA, Johns Hopkins University", "MS, Electrical Engineering, Stanford University (NSF Graduate Fellow)", "JD, New York University School of Law"],
    previousExperience: [
      "Corporate Attorney, technology law firms",
      "Business Development, StumbleUpon (acquired by eBay)",
      "Founding member, Google New Business Development team",
      "Investor, Baseline Ventures",
      "Co-Founder, SV Angel (backed Airbnb, Twitter, Dropbox, Pinterest, Stripe, DoorDash, Snap, Instacart)",
      "Co-Founder & Chairman, Refactor Capital"
    ],
    investmentFocus: ["AI", "Healthtech", "Frontier Technology", "SaaS"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Stripe", ticker: null },
      { name: "Instacart", ticker: "CART" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 0,
    careerTimeline: [
      { year: "2007", event: "StumbleUpon, where he worked in business development, is acquired by eBay." },
      { year: "2009", event: "Becomes a founding member of Google's New Business Development team, then joins Baseline Ventures." },
      { year: "2009", event: "Co-founds SV Angel, backing Airbnb, Twitter, Dropbox, Pinterest, Snap, Stripe, DoorDash, and Instacart at seed stage." },
      { year: "2018", event: "Co-founds and chairs Refactor Capital, a seed fund focused on health and biology, and joins Samsung as Head of Samsung NEXT." }
    ],
    biography: "David Lee's path to running Samsung NEXT ran through corporate law, Google, and some of Silicon Valley's most consequential seed bets. After a Stanford electrical engineering degree and an NYU law degree, he worked as a corporate attorney before moving into business development at StumbleUpon and then joining Google's New Business Development team at its founding. He co-founded SV Angel in 2009, where seed checks into Airbnb, Twitter, Dropbox, Pinterest, Snap, Stripe, DoorDash, and Instacart built one of the most recognizable angel track records of that era. A stage-four lymphoma diagnosis in the 1990s shaped a lasting focus on health and wellness investing, which led him to co-found and chair Refactor Capital, a seed fund dedicated to health and biology, before taking the helm at Samsung NEXT. He now runs Samsung's global startup investing arm despite not speaking Korean, bringing a distinctly Western venture sensibility to one of Asia's largest corporate investors.",
    sources: [
      { label: "Samsung NEXT Team", url: "https://www.samsungnext.com/team/" },
      { label: "Grokipedia — David Lee", url: "https://grokipedia.com/page/David_Lee_(investor)" }
    ]
  },
"michelle-gonzalez": {
    name: "Michelle Gonzalez",
    firm: "M12",
    firmSlug: "m12",
    title: "Corporate Vice President & Global Head",
    joinedYear: 2022,
    education: ["BA, Business Administration, University of Oklahoma", "JD, Yale Law School"],
    previousExperience: [
      "Consultant, McKinsey & Company",
      "Senior Product & Business Leader, Apple (News, Books & Movies, outside the U.S.)",
      "Partner, IBM Ventures (AI, blockchain & quantum computing)",
      "Entrepreneur-in-Residence & Investor, Comcast Ventures (including its Catalyst Fund for underrepresented founders)",
      "Managing Partner, Area 120 (Google's internal incubator)"
    ],
    investmentFocus: ["AI", "Enterprise Software", "Startup Incubation"],
    notableInvestments: [
      { name: "TaskUs", ticker: "TASK" },
      { name: "PandaDoc", ticker: null },
      { name: "Wallaroo", ticker: null }
    ],
    boardSeats: ["Go1", "SpyCloud", "Databook", "TaskUs"],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2016", event: "Joins IBM Ventures as a Partner, focused on AI, blockchain, and quantum computing partnerships." },
      { year: "2018", event: "Joins Google as Managing Partner of Area 120, its internal incubator." },
      { year: "2022", event: "Named Corporate Vice President and Global Head of M12, Microsoft's venture fund." },
      { year: "2023", event: "Under her leadership, Microsoft marks M12's track record at 100+ companies, 15 unicorns, and 6 IPOs." }
    ],
    biography: "Michelle Gonzalez brought an unusually wide-ranging background to M12 when she was named its Corporate Vice President and Global Head in 2022. After starting her career at McKinsey and spending more than seven years as a senior product leader at Apple, she moved into venture and incubation roles at Comcast Ventures — where she also managed capital deployment for its Catalyst Fund supporting Black and Latinx seed-stage founders — and then IBM Ventures, focused on AI, blockchain, and quantum computing partnerships. Immediately before M12 she ran Google's Area 120 internal incubator as Managing Partner, leading a strategic realignment that produced a record number of projects successfully 'spinning in' to become core Google products. That incubation-and-venture combination now defines how she runs M12: she has proactively aligned the fund closer to Microsoft's senior leadership while preserving autonomous investment decisions, and currently sits on the boards of Go1, SpyCloud, Databook, and TaskUs.",
    sources: [
      { label: "M12 Team", url: "https://m12.vc/team/michelle-gonzalez/" },
      { label: "Global Venturing Powerlist 2022", url: "https://globalventuring.com/corporate/gcv-powerlist-2022-13-michelle-gonzalez/" }
    ]
  },
"scott-darling": {
    name: "Scott Darling",
    firm: "Dell Technologies Capital",
    firmSlug: "dell-technologies-capital",
    title: "Founding Partner & President",
    joinedYear: 2012,
    education: ["BA, Economics & Computer Science, UC Santa Cruz", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Product Marketing, High-End Systems, Apple",
      "Multiple General Manager & Marketing roles, Intel",
      "Vice President & Managing Director, Intel Capital",
      "General Partner, Frazier Technology Ventures (12 years)",
      "President, EMC Corporate Development and Ventures"
    ],
    investmentFocus: ["Silicon", "Cybersecurity", "Core Enterprise Software", "Ecommerce & Logistics"],
    notableInvestments: [
      { name: "Zscaler", ticker: "ZS" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "MongoDB", ticker: "MDB" },
      { name: "Nutanix", ticker: null }
    ],
    boardSeats: ["Zscaler", "Lightbend", "Exotec", "Datometry", "Noodle.ai", "VAST Data"],
    ipoCount: 7,
    majorExits: 0,
    careerTimeline: [
      { year: "1981", event: "Graduates UC Santa Cruz with a degree in economics and computer science." },
      { year: "1988", event: "Completes his MBA at Stanford, after early roles at Apple and two PC industry startups." },
      { year: "2000", event: "Joins Intel Capital as Vice President and Managing Director, managing teams supporting more than two-thirds of Intel's revenue." },
      { year: "2012", event: "Founds the venture practice inside EMC that becomes Dell Technologies Capital, leading Zscaler's Series A as its first institutional investor." },
      { year: "2018", event: "Zscaler goes public; Darling continues to serve on its board." },
      { year: "2021", event: "Served 11 years on DocuSign's board through its own path to and through the public markets." }
    ],
    biography: "Scott Darling has spent more than two decades moving between operating and venture roles at some of the largest technology companies in the world, giving Dell Technologies Capital an unusually deep bench of institutional experience for a corporate venture arm. After early product marketing roles at Apple and a decade rising through Intel — eventually becoming Vice President and Managing Director of Intel Capital, where he oversaw investment teams supporting more than two-thirds of Intel's total revenue — he spent 12 years as a General Partner at Frazier Technology Ventures before EMC recruited him to start its venture practice in 2012. That practice became Dell Technologies Capital after Dell's acquisition of EMC, and Darling has run it as President ever since, describing it as pulling the best of both his Intel Capital and Frazier experience. He led Zscaler's Series A as DTC's first institutional investment and still sits on its board today, alongside a run of other IPO outcomes — DocuSign, JFrog, MongoDB, Nutanix — that have made DTC one of the more consistently productive corporate venture arms in enterprise technology.",
    sources: [
      { label: "Dell Technologies Capital Team", url: "https://www.delltechnologiescapital.com/team/scott-darling" },
      { label: "Global Venturing Powerlist 2025", url: "https://globalventuring.com/corporate/awards/powerlist-2025-scott-darling/" }
    ]
  },
"ulrich-thiem": {
    name: "Ulrich Thiem",
    firm: "Porsche Ventures",
    firmSlug: "porsche-ventures",
    title: "Managing Director",
    joinedYear: 2019,
    education: ["PhD, Law, Universität Osnabrück"],
    previousExperience: [
      "Corporate Lawyer, CMS (Frankfurt)",
      "Legal Department, Porsche AG",
      "Director, Corporate Affairs & Investments, Porsche AG"
    ],
    investmentFocus: ["Auto Tech", "Intelligent Enterprise", "Sustainability", "Mobility"],
    notableInvestments: [
      { name: "Fleetonomy", ticker: null },
      { name: "Greyp Bikes", ticker: null },
      { name: "Cresta", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2011", event: "Joins Porsche AG's legal department after working as a corporate lawyer at CMS in Frankfurt." },
      { year: "2016", event: "Porsche establishes Porsche Ventures; Thiem moves into corporate affairs and investments." },
      { year: "2019", event: "Becomes Managing Director of Porsche Ventures." },
      { year: "2020", event: "Oversees the sale of portfolio company Fleetonomy to Via." },
      { year: "2021", event: "Oversees Porsche's own acquisition of portfolio company Greyp Bikes." }
    ],
    biography: "Ulrich Thiem came to Porsche Ventures through law, not finance — a PhD in law from Universität Osnabrück and a stint as a corporate lawyer at CMS in Frankfurt before joining Porsche's legal department in 2011. That legal and corporate-affairs background shaped how he built out Porsche Ventures after taking over as Managing Director in 2019, three years after the unit's founding: a strategic investor focused on customer experience, mobility, and digital lifestyles, with a growing emphasis on AI and future technology. Under his leadership the firm has run a lean team — around 17 people managing roughly 35 active investments — while still producing real outcomes, including the 2020 sale of Israeli fleet mobility company Fleetonomy to Via and Porsche's own 2021 acquisition of ebike maker Greyp Bikes, a portfolio company Porsche liked enough to buy outright.",
    sources: [
      { label: "Global Venturing Powerlist 2022", url: "https://globalventuring.com/corporate/gcv-powerlist-2022-ulrich-thiem/" },
      { label: "Global Venturing Powerlist 2023", url: "https://globalventuring.com/corporate/corporate-venturer/powerlist-2023-ulrich-thiem/" }
    ]
  },
 "baris-guzel": {
    name: "Baris Guzel",
    firm: "BMW i Ventures",
    firmSlug: "bmw-i-ventures",
    title: "Partner",
    joinedYear: 2017,
    education: ["BS, Industrial Engineering, Istanbul Technical University", "MEM, Duke University", "MBA, UNC Kenan-Flagler Business School (Dean's Fellow)"],
    previousExperience: [
      "Venture capital roles in Hamburg, Germany (DAAD scholarship)",
      "Technology Investment Banking Associate, Deutsche Bank",
      "Venture Capital Associate, Presidio Partners"
    ],
    investmentFocus: ["Mobility", "Manufacturing", "Supply Chain", "Climate"],
    notableInvestments: [
      { name: "Xometry", ticker: "XMTR" },
      { name: "ChargePoint", ticker: "CHPT" },
      { name: "Tekion", ticker: null },
      { name: "Zūm", ticker: null }
    ],
    boardSeats: ["AMPECO", "Our Next Energy"],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "2015", event: "Leads global expansion of VCIC, the world's largest venture capital competition, as a graduate student at UNC Kenan-Flagler." },
      { year: "2017", event: "Joins BMW i Ventures in March after roles at Deutsche Bank and Presidio Partners; leads Xometry's Series B as his first investment." },
      { year: "2019", event: "Leads or co-leads investments in Tekion, AutoFi, and Zūm." },
      { year: "2020", event: "Mapillary, a portfolio company he led the Series B for, is acquired by Facebook." },
      { year: "2021", event: "Xometry goes public on the Nasdaq in June; Guzel rings the opening bell with the company's team." }
    ],
    biography: "Baris Guzel's path into venture capital started on a manufacturing floor: growing up in Turkey obsessed with cars and technology, he interned conducting Kaizen studies at a car plant while studying industrial engineering at Istanbul Technical University. A DAAD scholarship took him into venture capital in Hamburg, Germany, and after a Duke engineering management degree and an MBA at UNC Kenan-Flagler — where he led VCIC, the world's largest venture capital competition — he worked in technology investment banking at Deutsche Bank before joining BMW i Ventures in 2017. His first investment for the firm was leading Xometry's Series B, and he stayed closely involved through the manufacturing marketplace's 2021 Nasdaq IPO, ringing the bell alongside its team. He has since led or co-led investments in Tekion, AutoFi, Zūm, and Solid Power, and continues to support ChargePoint and other public portfolio companies as they scale.",
    sources: [
      { label: "BMW i Ventures Team", url: "https://www.bmwiventures.com/team" },
      { label: "Xometry IPO Note", url: "https://www.bmwiventures.com/news/xometry-ipo" }
    ]
  },
"amy-burr": {
    name: "Amy Burr",
    firm: "SKY VC",
    firmSlug: "sky-vc",
    title: "CEO",
    joinedYear: 2018,
    education: [],
    previousExperience: [
      "Original Founder, Virgin America (strategy, corporate programs, commercial & revenue development)",
      "Led Virgin America's merger integration with Alaska Airlines"
    ],
    investmentFocus: ["Travel", "Hospitality", "Transportation", "Aviation"],
    notableInvestments: [
      { name: "Joby Aviation", ticker: "JOBY" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2004", event: "Serves as an original founder of Virgin America, working across strategy and commercial development." },
      { year: "2016-2018", event: "Leads Virgin America's merger integration with Alaska Airlines before joining JetBlue Technology Ventures." },
      { year: "2018", event: "Joins JetBlue Technology Ventures as Managing Director of Operations and Partnerships." },
      { year: "2021", event: "Promoted to President following Bonny Simi's departure to Joby Aviation; Joby goes public in August." },
      { year: "2025", event: "Becomes CEO of SKY VC following the firm's transition from JetBlue Technology Ventures." }
    ],
    biography: "Amy Burr has spent more than 25 years at the intersection of aviation and technology, starting as an original founder of Virgin America in 2004, where she worked across strategy, corporate programs, and commercial development before leading the airline's merger integration with Alaska Airlines. She joined JetBlue Technology Ventures in 2018 as Managing Director of Operations and Partnerships, building the operational foundation that supported the fund's portfolio companies, and was promoted to President in 2021 after founding president Bonny Simi left to join portfolio company Joby Aviation directly following its public listing — a transition Simi has called a model for succession planning in corporate venture capital. Burr has since guided the fund's evolution from a wholly-owned JetBlue subsidiary into SKY VC, an independent fund under SKY Leasing, now leading its strategic vision as CEO across travel, hospitality, and transportation investing.",
    sources: [
      { label: "SKY VC Team", url: "https://www.sky-vc.com/team" },
      { label: "JetBlue Press Release", url: "https://news.jetblue.com/latest-news/press-release-details/2021/JetBlue-Promotes-Amy-Burr-to-President-JetBlue-Technology-Ventures-07-01-2021/default.aspx" }
    ]
  },
};

// ============================================================
// INVESTMENT STAGE LOOKUP — powers the visual stage filter cards.
// Grounded in each firm's own stated stage focus, gathered during
// research for its profile above (e.g. "seed-stage specialist,"
// "later-stage growth investor," "stage-agnostic seed through
// growth"). Keyed by slug so it never has to touch the firms
// array itself.
// ============================================================
const firmStages = {
  "a16z": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "sequoia": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "insight-partners": ["Series A", "Series B", "Growth", "Late Stage"],
  "tiger-global": ["Series B", "Growth", "Late Stage"],
  "general-catalyst": ["Seed", "Series A", "Series B", "Growth"],
  "nea": ["Seed", "Series A", "Series B", "Growth"],
  "lightspeed": ["Seed", "Series A", "Series B", "Growth"],
  "kleiner-perkins": ["Series A", "Series B", "Growth", "Late Stage"],
  "accel": ["Seed", "Series A", "Series B", "Growth"],
  "khosla-ventures": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
  "battery-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "gv": ["Seed", "Series A", "Series B", "Growth"],
  "index-ventures": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
  "founders-fund": ["Seed", "Series A", "Series B", "Growth"],
  "thrive-capital": ["Seed", "Series A", "Series B"],
  "bessemer": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "benchmark": ["Seed", "Series A"],
  "spark-capital": ["Pre-Seed", "Seed", "Series A", "Series B"],
  "ivp": ["Series B", "Growth", "Late Stage"],
  "redpoint": ["Seed", "Series A", "Series B", "Growth"],
  "crv": ["Pre-Seed", "Seed", "Series A"],
  "true-ventures": ["Pre-Seed", "Seed", "Series A"],
  "greylock": ["Seed", "Series A", "Series B"],
  "union-square-ventures": ["Pre-Seed", "Seed", "Series A"],
  "first-round-capital": ["Pre-Seed", "Seed"],
  // The 14 entries below were added later, backfilled from the same
  // research already done for each firm when it was added to the
  // site - not new claims. Grounded in each firm's own stated stage
  // focus (e.g. Uncork's "one stage: seed" framing, Norwest's
  // "every stage" positioning, K9 and Precursor's explicit
  // pre-seed/seed specialization).
  "coatue-management": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "norwest-venture-partners": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "bain-capital-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "menlo-ventures": ["Seed", "Series A", "Series B", "Growth"],
  "emergence-capital": ["Seed", "Series A"],
  "haystack": ["Pre-Seed", "Seed", "Series A"],
  "uncork-capital": ["Seed"],
  "nextview-ventures": ["Pre-Seed", "Seed"],
  "sv-angel": ["Pre-Seed", "Seed"],
  "precursor-ventures": ["Pre-Seed", "Seed"],
  "susa-ventures": ["Seed", "Series A"],
 "baseline-ventures": ["Pre-Seed", "Seed"],
  "founder-collective": ["Pre-Seed", "Seed"],
  "k9-ventures": ["Pre-Seed", "Seed"],
  "designer-fund": ["Pre-Seed", "Seed", "Series A"],
  "m25": ["Pre-Seed", "Seed"],
  "worldbuild": ["Pre-Seed"],
  "female-founders-fund": ["Seed"],
  "modern-technical-fund": ["Pre-Seed", "Seed"],
  "cambrian-ventures": ["Pre-Seed", "Seed"],
"symphonic-capital": ["Pre-Seed", "Seed"],
  "the-fintech-fund": ["Pre-Seed", "Seed"],
  "costanoa-ventures": ["Seed", "Series A"],
  "equal-ventures": ["Seed"],
  "645-ventures": ["Pre-Seed", "Seed", "Series A", "Growth"],
  "eniac-ventures": ["Seed"],
  "fika-ventures": ["Pre-Seed", "Seed"],
  "mercury-fund": ["Seed", "Series A"],
  "new-markets-venture-partners": ["Series A", "Series B", "Growth"],
  "work-bench": ["Seed", "Series A"],
  "rise-of-the-rest-seed-fund": ["Seed"],
  "bullpen-capital": ["Seed", "Series A"],
  "harlem-capital": ["Seed"],
"freestyle": ["Seed"],
"craft-ventures": ["Seed", "Series A", "Growth"],
"mayfield": ["Pre-Seed", "Seed", "Series A", "Series B"],
"matrix-partners": ["Pre-Seed", "Seed", "Series A"],
"ribbit-capital": ["Seed", "Series A", "Series B", "Growth"],
"initialized-capital": ["Seed"],
 "felicis": ["Seed", "Series A", "Growth"],
 "madrona": ["Seed", "Series A", "Growth"],
  "floodgate": ["Pre-Seed", "Seed"],
       "lux-capital": ["Seed", "Series A", "Growth"],
  "dcvc": ["Seed", "Series A", "Growth"],
   "rtp-global": ["Seed", "Series A", "Series B"],
    "amplify-partners": ["Seed", "Series A", "Series B"],
         "wing-vc": ["Seed", "Series A", "Series B"],
   "peakspan-capital": ["Series A", "Series B", "Growth"],
   "inovia-capital": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth", "Late Stage"],
     "crosslink-capital": ["Pre-Seed", "Seed", "Series A"],
   "bold-capital-partners": ["Seed", "Series A"],
   "altos-ventures": ["Seed", "Series A"],
   "maveron": ["Seed", "Series A"],
   "intel-capital": ["Seed", "Series A", "Series B", "Growth"],
   "salesforce-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "qualcomm-ventures": ["Seed", "Series A", "Series B", "Growth"],
      "cisco-investments": ["Seed", "Series A", "Series B", "Growth"],
         "capitalg": ["Series A", "Series B", "Growth", "Late Stage"],
         "samsung-next": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "m12": ["Seed", "Series A", "Series B"],
   "dell-technologies-capital": ["Seed", "Series A", "Series B"],
   "porsche-ventures": ["Seed", "Series A", "Series B"],
   "bmw-i-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "sky-vc": ["Seed", "Series A", "Series B"]
};

// ============================================================
// INVESTMENT PERFORMANCE LOOKUP — powers the dashboard on each
// firm's detail page. Every number here is a real, sourced figure
// gathered during that firm's research (see its thesis/timeline
// for the same facts in prose). Deliberately NOT populated for
// every firm or every field - where a solid number wasn't found,
// the field is simply omitted here, and the dashboard renderer
// skips it entirely rather than showing a placeholder or guess.
// Fill in more over time as research is done on more firms.
// ============================================================
const firmPerformance = {
  "insight-partners": { totalPortfolio: 875 },
  "kleiner-perkins": { totalPortfolio: 900 },
  "battery-ventures": { totalPortfolio: 450, ipoExits: 65, acquisitions: 185 },
  "gv": { totalPortfolio: 400 },
  "index-ventures": { totalPortfolio: 662, unicorns: 108 },
  "spark-capital": { totalPortfolio: 861 },
  "redpoint": { totalPortfolio: 465 },
  "crv": { totalPortfolio: 750, ipoExits: 80 },
  "union-square-ventures": { totalPortfolio: 130 },
  "first-round-capital": { totalPortfolio: 500 },
"ivp": { totalPortfolio: 400, ipoExits: 110 },
  "true-ventures": { totalPortfolio: 390, unicorns: 8, ipoExits: 5, acquisitions: 130 },
   "eclipse-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "qualcomm-ventures": ["Seed", "Series A", "Series B", "Growth"]
};

const firmGeography = {
  "battery-ventures": { secondary: ['United Kingdom', 'Israel'] },
  "gv": { secondary: ['United Kingdom'] },
  "ivp": { secondary: ['United Kingdom'] },
  "index-ventures": { secondary: ['United States'] }
};

const firms = [
  {
    rank: 1,
    name: "Andreessen Horowitz",
    sectors: ["AI", "Crypto", "Fintech", "Consumer"],
    signatureExit: "Coinbase's 2021 direct listing on Nasdaq — one of the largest crypto IPOs ever",
    slug: "a16z",
    seoPage: "firms/a16z/",
    website: "https://a16z.com",
    short: "a16z",
    founded: 2009,
    hq: "Menlo Park, CA",
    aum: "$90B+",
    thesis: "Founded in 2009 by Marc Andreessen, the co-creator of the Netscape browser, and Ben Horowitz, a former enterprise software executive, a16z set out to build a different kind of VC firm — one staffed with in-house recruiters, marketers, and engineers to support founders directly, not just write checks. The firm's stage-agnostic, software-eats-the-world thesis has since carried it into crypto, biotech, and AI, backing companies from seed rounds through late-stage growth across every category it touches.",
    leadership: [
      { name: "Marc Andreessen", role: "Co-Founder & General Partner", profileSlug: "marc-andreessen" },
      { name: "Ben Horowitz", role: "Co-Founder & General Partner" },
      { name: "Chris Dixon", role: "General Partner, a16z crypto" },
      { name: "Martin Casado", role: "General Partner, Infrastructure & Enterprise" },
      { name: "Andrew Chen", role: "General Partner, Consumer & Apps" },
      { name: "Scott Kupor", role: "Managing Partner" }
    ],
    timeline: [
      { year: "2009", event: "Marc Andreessen and Ben Horowitz launch the firm with a $300 million debut fund." },
      { year: "2011", event: "Becomes the first VC firm to hold stakes in Facebook, Twitter, Groupon, and Zynga at the same time." },
      { year: "2013", event: "Backs Coinbase and Lyft in their early funding rounds, years before either went public." },
      { year: "2018", event: "Its early investment in GitHub returns over $1 billion when Microsoft acquires the company for $7.5 billion." },
      { year: "2021", event: "Coinbase and Roblox both go public in the same year — two of the firm's largest exits to date." },
      { year: "2022", event: "Raises a $4.5 billion fund dedicated to crypto, one of the largest ever raised for the category." }
    ],
    holdings: [
      { name: "Airbnb", ticker: "ABNB", historicalPrice: null, price: 147.00 },
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Roblox", ticker: "RBLX", historicalPrice: null, price: 51.68 },
      { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: 15.67 },
      { name: "Pinterest", ticker: "PINS", historicalPrice: null, price: 23.20 }
    ]
  },
  {
    rank: 2,
    name: "Sequoia Capital",
    sectors: ["Enterprise Software", "Consumer", "AI", "Semiconductors"],
    signatureExit: "Nvidia — an early investor that rode the company to become one of the most valuable in the world",
    slug: "sequoia",
    seoPage: "firms/sequoia-capital/",
    website: "https://www.sequoiacap.com",
    short: "Sequoia",
    founded: 1972,
    hq: "Menlo Park, CA",
    aum: "$90B+",
    thesis: "Founded in 1972 by Don Valentine, a former Fairchild Semiconductor sales executive often called the \"grandfather of Silicon Valley venture capital,\" Sequoia was there for the first wave of the personal computer era, providing early funding to Apple and Atari. Over five decades it has repeated that pattern again and again — Google, PayPal, and Nvidia among them — building a reputation as the industry's steadiest and most consistent winner across multiple technology cycles.",
    leadership: [
      { name: "Don Valentine", role: "Founder (1972)" },
      { name: "Roelof Botha", role: "Senior Steward, Global Managing Partner" },
      { name: "Alfred Lin", role: "Managing Partner", profileSlug: "alfred-lin" }
    ],
    timeline: [
      { year: "1972", event: "Don Valentine, a former Fairchild Semiconductor sales executive, founds the firm in Menlo Park." },
      { year: "1978", event: "Becomes an early backer of Apple, one of the defining investments of Silicon Valley's first tech boom." },
      { year: "2005", event: "Makes an early bet on Nvidia, decades before the chipmaker became one of the world's most valuable companies." },
      { year: "2023", event: "Splits into three independent firms — Sequoia Capital, Peak XV Partners (India/Southeast Asia), and HongShan (China)." }
    ],
    holdings: [
      { name: "Nvidia", ticker: "NVDA", historicalPrice: 138.1, price: 202.81 },
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 }
    ]
  },
  {
    rank: 3,
    name: "Insight Partners",
    sectors: ["Software", "SaaS", "Cybersecurity"],
    signatureExit: "Shopify's 2015 IPO, one of the defining e-commerce software exits of the decade",
    slug: "insight-partners",
    seoPage: "firms/insight-partners/",
    website: "https://www.insightpartners.com",
    short: "Insight",
    founded: 1995,
    hq: "New York, NY",
    aum: "$90B+",
    thesis: "Founded in 1995 by Jeff Horing and Jerry Murdock in New York, Insight built its identity on outbound sourcing long before that was common practice — in the firm's earliest years, the two co-founders would comb through trade publications by hand looking for software companies that were hiring, and therefore growing. That research-driven, find-them-before-anyone-else approach scaled into a firm managing tens of billions of dollars, still built around the same instinct to spot momentum early.",
    leadership: [
      { name: "Jeff Horing", role: "Co-Founder & Managing Director", profileSlug: "jeff-horing" },
      { name: "Jerry Murdock", role: "Co-Founder (Managing Director until 2011)" }
    ],
    timeline: [
      { year: "1995", event: "Jeff Horing and Jerry Murdock found the firm in New York, betting early on B2B software." },
      { year: "1995-2000", event: "Sources deals by manually reading trade publications for software companies that were hiring." },
      { year: "2015", event: "Portfolio company Shopify goes public, one of the firm's defining software exits." },
      { year: "2025", event: "Assets under management surpass $90 billion, with over 875 companies invested in to date." }
    ],
    holdings: [
      { name: "Shopify", ticker: "SHOP", historicalPrice: 107.53, price: 123.56 },
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 52.74 }
    ]
  },
  {
  rank: 4,
    name: "Tiger Global Management",
    sectors: ["Internet", "Fintech", "Consumer Tech"],
    signatureExit: "An early pre-IPO stake in Facebook that helped define Tiger Global's hybrid public-private strategy",
    slug: "tiger-global",
    website: "https://www.tigerglobal.com",
    short: "Tiger Global",
    founded: 2001,
    hq: "New York, NY",
    aum: "$58B+",
    thesis: "Chase Coleman was only 25 when he launched Tiger Global (originally named Tiger Technology) in 2001, seeded with roughly $25 million from his mentor Julian Robertson after Robertson's own famed hedge fund, Tiger Management, wound down. Coleman built Tiger Global as a hybrid the industry hadn't quite seen before — a fund equally comfortable buying public stocks and writing private venture checks, a strategy that let it move unusually fast into deals other VCs took months to close.",
    leadership: [
      { name: "Chase Coleman", role: "Founder", profileSlug: "chase-coleman" },
      { name: "Scott Shleifer", role: "Partner, led expansion into private equity" }
    ],
    timeline: [
      { year: "2001", event: "Chase Coleman, then 25, launches the firm (originally Tiger Technology) with $25 million seeded by mentor Julian Robertson." },
      { year: "2003", event: "Scott Shleifer joins and helps expand the firm from public markets into private equity and venture deals." },
      { year: "2010s", event: "Builds an early pre-IPO stake in Facebook, defining the firm's hybrid public-private strategy." },
      { year: "2021", event: "Becomes one of the most active venture investors globally, deploying capital at unusually high speed." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "JD.com", ticker: "JD", historicalPrice: null, price: 29.62 }
    ]
  },
  {
    rank: 5,
    name: "Coatue Management",
    sectors: ["Technology", "Consumer", "Fintech", "AI"],
    signatureExit: "Snap's 2017 IPO — Coatue's private investing arm, launched by co-founder Thomas Laffont in 2003, made an early 2013 investment in Snap years before its public debut",
    slug: "coatue-management",
    website: "https://www.coatue.com",
    short: "Coatue",
    founded: 1999,
    hq: "New York, NY",
    aum: "$54B+",
    thesis: "Coatue Management was founded in 1999 by Philippe Laffont, a 'Tiger Cub' alumnus of Julian Robertson's Tiger Management, initially as a technology-focused public equities hedge fund. In 2003, Philippe's brother Thomas Laffont joined after seven years at Creative Artists Agency to launch Coatue's private investing business, transforming the firm into one of the most active crossover investors in technology — moving fluidly between public stocks and early-stage venture bets. That range led Coatue to back Snap years before its 2017 IPO, along with ByteDance, DoorDash, and OpenAI, while its public portfolio holds major stakes in Nvidia, Meta, and other dominant technology companies.",
    leadership: [
      { name: "Philippe Laffont", role: "Founder & Portfolio Manager" },
      { name: "Thomas Laffont", role: "Co-Founder & CIO of Privates", profileSlug: "thomas-laffont" }
    ],
    timeline: [
      { year: "1999", event: "Philippe Laffont founds Coatue Management as a technology-focused hedge fund with $45 million in starting capital." },
      { year: "2003", event: "Thomas Laffont joins to launch Coatue's private investing and venture capital business." },
      { year: "2013", event: "Coatue makes an early investment in Snap, years before its IPO." },
      { year: "2017", event: "Snap goes public." },
      { year: "2020s", event: "Backs ByteDance, DoorDash, and OpenAI as the firm's venture practice accelerates alongside the AI boom." }
    ],
    holdings: [
      { name: "Snap", ticker: "SNAP", historicalPrice: null, price: 4.53 },
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 }
    ]
  },
  {
    rank: 6,
    name: "General Catalyst",
    sectors: ["Healthcare", "Fintech", "AI Infrastructure"],
    signatureExit: "Snap's 2017 IPO, one of the largest consumer tech listings of its era",
    slug: "general-catalyst",
    website: "https://www.generalcatalyst.com",
    short: "GC",
    founded: 2000,
    hq: "Cambridge, MA",
    aum: "$35B+",
    thesis: "David Fialkow and Joel Cutler, childhood friends since the age of five or six, spent years building and selling travel and consumer companies together before co-founding General Catalyst in Cambridge, Massachusetts in 2000. What started as a Boston-area firm with a first fund of $250 million has since expanded into Silicon Valley, Europe, and India, evolving into one of the largest venture firms in the world.",
    leadership: [
      { name: "Joel Cutler", role: "Co-Founder" },
      { name: "David Fialkow", role: "Co-Founder & Managing Director" },
      { name: "Hemant Taneja", role: "CEO & Managing Director", profileSlug: "hemant-taneja" }
    ],
    timeline: [
      { year: "2000", event: "Childhood friends Joel Cutler and David Fialkow found the firm in Cambridge, Massachusetts." },
      { year: "2001", event: "Closes its first fund at $250 million, focused on early-stage technology companies." },
      { year: "2010", event: "Opens a Silicon Valley office, expanding beyond its Boston roots." },
      { year: "2017", event: "Portfolio company Snap goes public in one of the largest consumer tech IPOs of its era." }
    ],
    holdings: [
      { name: "HubSpot", ticker: "HUBS", historicalPrice: null, price: 224.26 },
      { name: "Samsara", ticker: "IOT", historicalPrice: null, price: 38.32 }
    ]
  },
  {
    rank: 7,
    name: "New Enterprise Associates",
    sectors: ["Technology", "Healthcare", "Life Sciences"],
    signatureExit: "Robinhood's 2021 IPO, bringing retail stock trading to the public markets",
    slug: "nea",
    website: "https://www.nea.com",
    short: "NEA",
    founded: 1977,
    hq: "Menlo Park, CA",
    aum: "$25B+",
    thesis: "NEA was founded in 1977 by three men who each brought a different piece of the puzzle: Dick Kramlich, who had trained under legendary investor Arthur Rock; Frank Bonsal, an investment banker who had taken startups public; and Chuck Newhall, who had managed investment funds at T. Rowe Price. Deliberately built with offices on both coasts from day one — unusual for the era — NEA's first fund raised just $16 million, a fraction of the more than $25 billion it manages today.",
    leadership: [
      { name: "Dick Kramlich", role: "Co-Founder" },
      { name: "Chuck Newhall", role: "Co-Founder" },
      { name: "Frank Bonsal", role: "Co-Founder" },
      { name: "Scott Sandell", role: "Executive Chairman", profileSlug: "scott-sandell" }
    ],
    timeline: [
      { year: "1977", event: "Three founders with complementary backgrounds — banking, fund management, and VC — launch NEA with a $16 million first fund." },
      { year: "1981", event: "Makes one of its earliest notable investments in 3Com." },
      { year: "2015", event: "Closes a $3.1 billion fund, the largest venture fund raised up to that point." },
      { year: "2021", event: "Portfolio company Robinhood goes public, bringing retail stock trading to the public markets." }
    ],
    holdings: [
      { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.96 },
      { name: "Workday", ticker: "WDAY", historicalPrice: null, price: 144.78 }
    ]
  },
  {
    rank: 8,
    name: "Lightspeed Venture Partners",
    sectors: ["Enterprise Infrastructure", "Consumer"],
    signatureExit: "Snap's 2017 IPO, five years after Lightspeed wrote Snapchat's first-ever institutional check",
    slug: "lightspeed",
    website: "https://lsvp.com",
    short: "Lightspeed",
    founded: 2000,
    hq: "Menlo Park, CA",
    aum: "$25B+",
    thesis: "Lightspeed traces its roots to Weiss, Peck & Greer Venture Partners, rebranding under its current name in 2000 as it sharpened its focus on enterprise infrastructure and consumer technology. The firm's willingness to back unproven, young founders paid off dramatically in 2012, when partner Jeremy Liew wrote the first institutional check into a then-tiny disappearing-photo app called Snapchat.",
    leadership: [
      { name: "Barry Eggers", role: "Co-Founder" },
      { name: "Ravi Mhatre", role: "Co-Founder" },
      { name: "Jeremy Liew", role: "Partner, wrote Snapchat's first check", profileSlug: "jeremy-liew" }
    ],
    timeline: [
      { year: "2000", event: "Rebrands from Weiss, Peck & Greer Venture Partners into Lightspeed Venture Partners." },
      { year: "2012", event: "Partner Jeremy Liew writes the first institutional check into a then-tiny app called Snapchat." },
      { year: "2017", event: "Snap goes public, five years after that first bet." },
      { year: "2020s", event: "Expands heavily into enterprise infrastructure alongside its consumer roots." }
    ],
    holdings: [
      { name: "Snap", ticker: "SNAP", historicalPrice: null, price: 4.53 },
      { name: "Affirm", ticker: "AFRM", historicalPrice: null, price: 64.71 }
    ]
  },
  {
    rank: 9,
    name: "Kleiner Perkins",
    sectors: ["Enterprise Software", "Consumer Internet", "Healthcare", "AI"],
    signatureExit: "Google's 2004 IPO — the firm's $12.5 million bet alongside Sequoia Capital remains one of the most celebrated investments in venture capital history",
    slug: "kleiner-perkins",
    website: "https://www.kleinerperkins.com",
    short: "Kleiner Perkins",
    founded: 1972,
    hq: "Menlo Park, CA",
    aum: "$21B+",
    thesis: "Kleiner Perkins was founded in 1972 by Eugene Kleiner, a Fairchild Semiconductor co-founder, and Tom Perkins, a former Hewlett-Packard executive with degrees from MIT and Harvard. Joined shortly after by Frank Caufield and Brook Byers, the firm built its name on backing category-defining technology companies from their earliest days, including Genentech, Sun Microsystems, Netscape, Amazon, and Google. The firm's 1999 investment in Google alongside Sequoia Capital — writing what was then its largest check ever — remains one of the most celebrated bets in venture capital history.",
    leadership: [
      { name: "Eugene Kleiner", role: "Co-Founder (1972)" },
      { name: "Tom Perkins", role: "Co-Founder (1972)" },
      { name: "John Doerr", role: "Chairman", profileSlug: "john-doerr" }
    ],
    timeline: [
      { year: "1972", event: "Eugene Kleiner and Tom Perkins found the firm in Menlo Park, later joined by Frank Caufield and Brook Byers." },
      { year: "1980", event: "John Doerr joins as a partner after a career at Intel." },
      { year: "1996", event: "Leads an early investment in Amazon.com." },
      { year: "1999", event: "Invests $12.5 million in Google alongside Sequoia Capital — the firm's largest check at the time." },
      { year: "2004", event: "Google goes public, one of the most celebrated venture bets in history." },
      { year: "2016", event: "John Doerr steps down from day-to-day leadership, becoming chairman." }
    ],
    holdings: [
      { name: "Amazon", ticker: "AMZN", historicalPrice: null, price: 247.55 },
      { name: "Palo Alto Networks", ticker: "PANW", historicalPrice: null, price: 341.59 },
      { name: "Snap", ticker: "SNAP", historicalPrice: null, price: 4.53 }
    ]
  },
 {
    rank: 10,
    name: "Ribbit Capital",
    sectors: ["Fintech", "Crypto", "Consumer Internet", "AI"],
    signatureExit: "Nubank's 2021 NYSE IPO — Ribbit was an early backer of the Brazilian neobank, which reached a market capitalization of roughly $67.4 billion by July 2026",
    slug: "ribbit-capital",
    website: "https://ribbitcap.com",
    short: "Ribbit",
    founded: 2012,
    hq: "Palo Alto, CA",
    aum: "$20.78B (RAUM, Form ADV 2026)",
    thesis: "Micky Malka founded Ribbit Capital in 2012 after a career spent building brokerages and banks rather than software companies — he helped build Patagon.com, which Santander acquired in 2000, then co-founded Banco Lemon, later acquired by Banco do Brasil. That regulated-finance operating background, rather than a conventional Silicon Valley career arc, is what made Ribbit the premier financial-services specialist in venture capital, backing category leaders globally from a first $100 million fund in 2013. The firm's public messaging has since broadened well past 'fintech' into global commerce, money movement, identity, data, energy, AI, and wealth management, but the through-line is unchanged: Coinbase, Nubank, and Robinhood are all Ribbit bets, and its March 2026 Form ADV reports approximately $20.78 billion in regulatory assets under management.",
    leadership: [
      { name: "Micky Malka", role: "Founder & Managing Partner", profileSlug: "micky-malka" }
    ],
    timeline: [
      { year: "2012", event: "Micky Malka founds Ribbit Capital in Palo Alto after building and selling financial companies across Latin America and the U.S." },
      { year: "2013", event: "Raises Ribbit's first $100 million fund and makes an early bet on Coinbase." },
      { year: "2021", event: "Walmart and Ribbit partner to form the fintech venture One." },
      { year: "2022", event: "Ribbit LEAP, the firm's publicly traded vehicle, is wound down." },
      { year: "2026", event: "Ribbit's Form ADV reports approximately $20.78 billion in regulatory assets under management." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Nubank", ticker: "NU", historicalPrice: null, price: null },
      { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.96 },
      { name: "Affirm", ticker: "AFRM", historicalPrice: null, price: 64.71 },
      { name: "SoFi", ticker: "SOFI", historicalPrice: null, price: null }
    ]
  },
    {
    rank: 11,
    name: "Accel",
    sectors: ["Enterprise Software", "Consumer", "Security"],
    signatureExit: "Facebook's Series A in 2005 — still cited as one of the highest-multiple returns in VC history",
    slug: "accel",
    website: "https://www.accel.com",
    short: "Accel",
    founded: 1983,
    hq: "Palo Alto, CA",
    aum: "$20B+",
    thesis: "Arthur Patterson and Jim Swartz founded Accel in 1983, betting on a strategy of deep specialization in specific technology categories rather than spreading investments broadly — an approach that was unusual at the time. That focus paid off most famously in 2005, when Accel led Facebook's Series A, a single investment that became one of the highest-multiple returns in venture capital history and cemented the firm's reputation for spotting category-defining companies early.",
    leadership: [
      { name: "Arthur Patterson", role: "Co-Founder", profileSlug: "arthur-patterson" },
      { name: "Jim Swartz", role: "Co-Founder" }
    ],
    timeline: [
      { year: "1983", event: "Arthur Patterson and Jim Swartz found the firm on a strategy of deep specialization in specific tech categories." },
      { year: "2000s", event: "Expands internationally, opening a London office to invest across Europe." },
      { year: "2005", event: "Leads Facebook's Series A — a single check that became one of the highest-multiple returns in VC history." },
      { year: "2010s", event: "Backs Slack, Atlassian, and Dropbox as the firm builds a reputation in enterprise software." }
    ],
    holdings: [
      { name: "Meta Platforms", ticker: "META", historicalPrice: null, price: 646.01 },
      { name: "Etsy", ticker: "ETSY", historicalPrice: null, price: 84.10 }
    ]
  },
  {
    rank: 12,
    name: "Norwest Venture Partners",
    sectors: ["Enterprise Software", "Consumer Internet", "Fintech", "Healthcare"],
    signatureExit: "Spotify's 2018 direct listing on the NYSE — one of several major exits, including Lending Club's 2014 IPO, where Norwest was the largest institutional investor",
    slug: "norwest-venture-partners",
    website: "https://www.norwest.com",
    short: "Norwest",
    founded: 1961,
    hq: "Menlo Park, CA",
    aum: "$15.5B+",
    thesis: "Norwest Venture Partners traces its roots to 1961, when it was founded as the Northwest Growth Fund, the venture arm of a Minneapolis bank holding company that would eventually become Wells Fargo after a 1998 merger. That corporate lineage gives Norwest an unusual structure among major venture firms: Wells Fargo has remained its primary limited partner for more than six decades, providing a level of capital stability few firms can match. Senior Managing Partner Jeff Crowe, who joined in 2004 after founding and running his own venture-backed software company through an IPO, has led the firm's most prominent recent bets, including being the largest institutional investor in Lending Club's 2014 IPO and backing Spotify ahead of its 2018 public listing.",
    leadership: [
      { name: "Jeff Crowe", role: "Senior Managing Partner", profileSlug: "jeff-crowe" }
    ],
    timeline: [
      { year: "1961", event: "Norwest is founded in Minneapolis as the Northwest Growth Fund, the venture arm of Norwest Corporation." },
      { year: "1998", event: "Norwest Corporation merges with Wells Fargo, which becomes the firm's primary limited partner." },
      { year: "2004", event: "Jeff Crowe joins the firm after founding and running Edify Corporation through its 1996 IPO." },
      { year: "2013", event: "Crowe becomes Managing Partner." },
      { year: "2014", event: "Norwest is the largest institutional investor in Lending Club's IPO." },
      { year: "2018", event: "Portfolio company Spotify goes public via direct listing." }
    ],
    holdings: [
      { name: "Spotify", ticker: "SPOT", historicalPrice: null, price: null },
      { name: "LendingClub", ticker: "LC", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 13,
    name: "Khosla Ventures",
    sectors: ["Clean Energy", "AI", "Deep Tech"],
    signatureExit: "Block (formerly Square)'s 2015 IPO, one of fintech's defining public debuts",
    slug: "khosla-ventures",
    website: "https://www.khoslaventures.com",
    short: "Khosla",
    founded: 2004,
    hq: "Menlo Park, CA",
    aum: "$15B+",
    thesis: "Vinod Khosla co-founded Sun Microsystems in 1982 before moving into venture capital, eventually launching his own firm, Khosla Ventures, in 2004. True to his engineering background, Khosla built the firm's reputation on taking bets other investors considered too risky or too far from proven markets — from early clean energy to artificial intelligence — arguing that the biggest returns come from technology bets everyone else is too cautious to make.",
    leadership: [
      { name: "Vinod Khosla", role: "Founder", profileSlug: "vinod-khosla" }
    ],
    timeline: [
      { year: "1982", event: "Vinod Khosla co-founds Sun Microsystems, years before moving into venture capital." },
      { year: "2004", event: "Khosla founds his own firm, focused on high-risk, high-reward technology bets." },
      { year: "2009", event: "Makes an early investment in Square (now Block), years ahead of its 2015 IPO." },
      { year: "2020s", event: "Shifts significant focus toward artificial intelligence alongside its long-running clean energy bets." }
    ],
    holdings: [
      { name: "Block", ticker: "XYZ", historicalPrice: null, price: 79.94 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 }
    ]
  },
  {
    rank: 14,
    name: "Battery Ventures",
    sectors: ["Enterprise Software", "SaaS", "Consumer Internet", "Industrial Technology"],
    signatureExit: "Wayfair's 2014 IPO — Battery led the company's first institutional financing round in 2011, after General Partner Neeraj Agrawal recognized the opportunity through a decade-long friendship with co-founder Niraj Shah",
    slug: "battery-ventures",
    website: "https://www.battery.com",
    short: "Battery",
    founded: 1983,
    hq: "Boston, MA",
    aum: "$13B+",
    thesis: "Battery Ventures was founded in 1983 by Rick Frisbie, Howard Anderson, and Bob Barrett in Boston, building a research-focused, collaborative approach to backing category-leading technology companies across their entire lifecycle, from seed investments through growth equity and buyouts. That range paid off in 2011, when General Partner Neeraj Agrawal led Battery's investment in Wayfair's first institutional financing round — a bet built partly on a decade-long friendship with co-founder Niraj Shah dating back to their college days at Cornell. Wayfair went public just three years later, in 2014.",
    leadership: [
      { name: "Rick Frisbie", role: "Co-Founder (1983)" },
      { name: "Howard Anderson", role: "Co-Founder (1983)" },
      { name: "Neeraj Agrawal", role: "General Partner", profileSlug: "neeraj-agrawal" }
    ],
    timeline: [
      { year: "1983", event: "Rick Frisbie, Howard Anderson, and Bob Barrett found Battery Ventures in Boston." },
      { year: "2000", event: "Neeraj Agrawal joins the firm as a partner." },
      { year: "2011", event: "Leads Battery's first institutional investment in Wayfair." },
      { year: "2014", event: "Wayfair goes public." },
      { year: "2020s", event: "Continues investing across venture, growth equity, and buyouts from its 15th flagship fund, capitalized at $3.25 billion." }
    ],
    holdings: [
      { name: "Wayfair", ticker: "W", historicalPrice: null, price: null },
      { name: "Nutanix", ticker: "NTNX", historicalPrice: null, price: null },
      { name: "Guidewire", ticker: "GWRE", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 15,
    name: "GV",
    sectors: ["Consumer Internet", "Life Sciences", "Enterprise Software", "AI"],
    signatureExit: "Uber's 2019 IPO — GV's $258 million investment, personally led by CEO David Krane, was one of the largest venture checks in Uber's early history",
    slug: "gv",
    website: "https://www.gv.com",
    short: "GV",
    founded: 2009,
    hq: "Mountain View, CA",
    aum: "$13B+",
    thesis: "GV, launched as Google Ventures in 2009 by founding CEO Bill Maris, operates as the independent venture capital arm of Alphabet Inc., with Alphabet itself serving as GV's sole limited partner. That structure gives the firm an unusually long time horizon — deals in decades, not funding cycles — while still investing with full independence from Google's core search and advertising business. The firm's $258 million investment in Uber, personally led by current CEO David Krane, became one of its most defining bets, alongside early stakes in Nest Labs, Slack, and Flatiron Health.",
    leadership: [
      { name: "Bill Maris", role: "Founding CEO (2009)" },
      { name: "David Krane", role: "CEO & Managing Partner", profileSlug: "david-krane" }
    ],
    timeline: [
      { year: "2009", event: "Bill Maris founds Google Ventures with an initial $100 million capital commitment from Google." },
      { year: "2010", event: "David Krane joins as a General Partner." },
      { year: "2011", event: "GV leads a $258 million investment in Uber." },
      { year: "2015", event: "Rebrands from Google Ventures to GV as Google reorganizes under Alphabet." },
      { year: "2016", event: "David Krane becomes CEO and Managing Partner, succeeding Bill Maris." },
      { year: "2019", event: "Uber goes public." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "GitLab", ticker: "GTLB", historicalPrice: null, price: null },
      { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.96 }
    ]
  },
   {
    rank: 16,
    name: "Intel Capital",
    sectors: ["AI", "Cloud Infrastructure", "Cybersecurity", "5G", "Robotics"],
    signatureExit: "No single signature exit — Intel Capital's scale is cumulative: since 1991 it has invested $12.9 billion across more than 1,582 companies worldwide, with 692 reaching an IPO or acquisition, including current public holding Joby Aviation",
    slug: "intel-capital",
    website: "https://www.intelcapital.com",
    short: "Intel Capital",
    founded: 1991,
    hq: "Santa Clara, CA",
    aum: "$12.9B invested since 1991 (cumulative capital deployed)",
    thesis: "Intel Capital was founded in 1991 as, by its own description, the first corporate venture capital firm, and it has spent more than three decades investing globally around Intel's core compute and connectivity platforms. The firm organizes its current portfolio into four groups — Cloud, Devices, Frontier, and Silicon — reflecting genuinely broad technical reach across AI infrastructure, edge systems, cybersecurity, 5G, and semiconductor tooling, not just software. Since 1991, Intel Capital has invested $12.9 billion across more than 1,582 companies worldwide, with 692 of them reaching a public listing or acquisition, giving it one of the largest cumulative track records of any strategic investor in technology.",
    leadership: [
   { name: "Anthony Lin", role: "Head of Intel Capital & Corporate Vice President", profileSlug: "anthony-lin" },
      { name: "Mark Rostick", role: "Vice President & Senior Managing Director" },
      { name: "Srini Ananth", role: "Managing Director" }
    ],
    timeline: [
      { year: "1991", event: "Intel founds Intel Capital as one of the first corporate venture capital arms." },
      { year: "2017", event: "Total invested capital passes $12.2 billion across 1,500 companies." },
      { year: "2021", event: "Portfolio companies SentinelOne, Enovix, Matterport, Spire, and Science 37 all go public." },
      { year: "2026", event: "Cumulative invested capital reaches $12.9 billion across more than 1,582 companies, with 692 IPO or M&A outcomes." }
    ],
    holdings: [
      { name: "Joby Aviation", ticker: "JOBY", historicalPrice: 8.09, price: 7.24 }
    ]
  },
  {
    rank: 16,
    name: "Index Ventures",
    sectors: ["Consumer Internet", "Fintech", "AI", "Marketplaces"],
    signatureExit: "Figma's July 2025 IPO at a $56 billion valuation — Index backed the design platform years before its explosive public debut",
    slug: "index-ventures",
    website: "https://www.indexventures.com",
    short: "Index",
    founded: 1996,
    hq: "London, UK",
    aum: "$12B+",
    thesis: "Index Ventures traces its roots to Index Securities, a Swiss bond-trading firm founded by Gerald Rimer in 1976. His son Neil Rimer, along with David Rimer and Giuseppe Zocco, formally launched Index Ventures as a technology investment firm in Geneva in 1996. The firm opened its London office in 2002 — its current headquarters — and its San Francisco office in 2012, building a genuinely transatlantic practice that has backed Dropbox, Etsy, Discord, Robinhood, and Figma.",
    leadership: [
      { name: "Neil Rimer", role: "Co-Founder" },
      { name: "Danny Rimer", role: "Partner", profileSlug: "danny-rimer" },
      { name: "Mike Volpi", role: "General Partner" }
    ],
    timeline: [
      { year: "1996", event: "Neil Rimer, David Rimer, and Giuseppe Zocco found Index Ventures in Geneva." },
      { year: "2002", event: "Opens its London office, which becomes the firm's primary headquarters." },
      { year: "2012", event: "Opens a San Francisco office, formalizing its transatlantic presence." },
      { year: "2015", event: "Portfolio company Etsy goes public." },
      { year: "2025", event: "Portfolio company Figma goes public at a $56 billion valuation." }
    ],
    holdings: [
      { name: "Etsy", ticker: "ETSY", historicalPrice: null, price: 84.10 },
      { name: "Figma", ticker: "FIG", historicalPrice: null, price: 23.95 },
      { name: "Dropbox", ticker: "DBX", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 17,
    name: "Founders Fund",
    sectors: ["Aerospace", "Defense Tech", "Hard Tech"],
    signatureExit: "SpaceX's June 2026 IPO — an estimated ~80x return on Founders Fund's original stake",
    slug: "founders-fund",
    website: "https://foundersfund.com",
    short: "Founders Fund",
    founded: 2005,
    hq: "San Francisco, CA",
    aum: "$12B+",
    thesis: "Peter Thiel, Ken Howery, and Luke Nosek — all veterans of PayPal's founding team — launched Founders Fund in 2005 with a deliberately contrarian philosophy: back ambitious, technically difficult companies that other VCs pass on for being too weird or too capital-intensive. That thesis led directly to the firm becoming the first institutional investor in both SpaceX and Palantir, two of the highest-conviction, longest-held bets in the firm's history.",
    leadership: [
      { name: "Peter Thiel", role: "Co-Founder", profileSlug: "peter-thiel" },
      { name: "Ken Howery", role: "Co-Founder" },
      { name: "Luke Nosek", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2005", event: "Three PayPal Mafia veterans — Thiel, Howery, and Nosek — found the firm on a contrarian, hard-tech thesis." },
      { year: "2008", event: "Becomes an early investor in SpaceX, a bet that would compound for nearly two decades." },
      { year: "2010s", event: "Becomes the first institutional investor in Palantir, another long-held, high-conviction position." },
      { year: "2026", event: "SpaceX goes public, turning the firm's original 2008 stake into an estimated ~80x return." }
    ],
    holdings: [
      { name: "Palantir", ticker: "PLTR", historicalPrice: 75.19, price: 134.44 },
      { name: "SpaceX", ticker: "SPCX", historicalPrice: null, price: 160.95 }
    ]
  },
  {
    rank: 18,
    name: "Thrive Capital",
    sectors: ["Consumer Internet", "AI"],
    signatureExit: "An early stake in Instagram years before its acquisition by Facebook",
    slug: "thrive-capital",
    website: "https://thrivecap.com",
    short: "Thrive",
    founded: 2009,
    hq: "New York, NY",
    aum: "$10B+ (latest fund)",
    thesis: "Joshua Kushner founded Thrive Capital in 2009 at just 24 years old, initially funding it himself before raising outside capital from investors including Princeton University, the Wellcome Trust, and Peter Thiel. Thrive has stayed deliberately small in deal volume — funding only 8 to 12 new companies most years — while making some of the earliest bets on Instagram, and more recently OpenAI, a concentrated approach that has made it one of the highest-returning firms of its size.",
    leadership: [
      { name: "Joshua Kushner", role: "Founder", profileSlug: "joshua-kushner" }
    ],
    timeline: [
      { year: "2009", event: "Joshua Kushner founds the firm at age 24, initially funding it himself." },
      { year: "2011", event: "Raises its first institutional fund, with Princeton University and the Wellcome Trust among early backers." },
      { year: "2012", event: "Makes one of its earliest and most famous bets on Instagram, years before its acquisition by Facebook." },
      { year: "2020s", event: "Becomes one of the earliest and largest institutional investors in OpenAI." }
    ],
    holdings: [
      { name: "Figma", ticker: "FIG", historicalPrice: null, price: 23.95 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 }
    ]
  },
  {
    rank: 19,
    name: "Bessemer Venture Partners",
    sectors: ["Cloud Software", "Consumer", "Healthcare"],
    signatureExit: "LinkedIn's 2011 IPO, followed by its 2016 acquisition by Microsoft",
    slug: "bessemer",
    website: "https://www.bvp.com",
    short: "Bessemer",
    founded: 1911,
    hq: "Redwood City, CA",
    aum: "$10B+ (recent fund)",
    thesis: "Bessemer's story starts nowhere near a startup: in 1911, steel magnate Henry Phipps Jr. — Andrew Carnegie's business partner and the second-largest shareholder in Carnegie Steel — formed a family office to manage the fortune from Carnegie Steel's sale. That family office didn't formally become a venture capital firm until the 1970s, when it opened a Silicon Valley outpost to chase the emerging tech industry, eventually spinning out as Bessemer Venture Partners in 1986 — making it, by a wide margin, the oldest firm in venture capital.",
    leadership: [
      { name: "Henry Phipps Jr.", role: "Founder (1911, as Bessemer Trust)" },
      { name: "Byron Deeter", role: "Partner", profileSlug: "byron-deeter" }
    ],
    timeline: [
      { year: "1911", event: "Steel magnate Henry Phipps Jr. forms a family office to manage the fortune from Carnegie Steel's sale." },
      { year: "1974", event: "Begins accepting outside investors for the first time, beyond the Phipps family itself." },
      { year: "1975", event: "Opens a Silicon Valley office, shifting focus toward technology and medical companies." },
      { year: "1986", event: "Formally spins out as Bessemer Venture Partners, a dedicated venture capital firm." }
    ],
        holdings: [
{ name: "Shopify", ticker: "SHOP", historicalPrice: 107.53, price: 123.56 },
      { name: "Pinterest", ticker: "PINS", historicalPrice: null, price: 23.50 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 }
    ]
  },
  {
    rank: 20,
    name: "Bain Capital Ventures",
    sectors: ["Enterprise Software", "Fintech", "SaaS", "Cybersecurity"],
    signatureExit: "Amazon's 2012 acquisition of Kiva Systems — Ajay Agarwal led BCV's first institutional round in the warehouse robotics startup in 2004, and its technology now powers Amazon Robotics across more than 2,000 fulfillment centers",
    slug: "bain-capital-ventures",
    website: "https://baincapitalventures.com",
    short: "BCV",
    founded: 2001,
    hq: "Boston, MA",
    aum: "$10B+",
    thesis: "Bain Capital Ventures was formed in 2001 as the dedicated venture capital arm of Bain Capital, the private investment firm Mitt Romney helped launch in 1984 as a spinoff from the consulting firm Bain & Company. That consulting DNA shaped BCV's approach: partner Ajay Agarwal, who joined in 2003, led the firm's first institutional round in Kiva Systems in 2004 — a warehouse robotics startup founded on the then-contrarian bet that e-commerce fulfillment costs would eventually balloon out of control. Amazon acquired Kiva in 2012, rebranding it Amazon Robotics; its systems now power more than 2,000 fulfillment centers worldwide. BCV has since backed DocuSign, LinkedIn, Twilio, and Redis across enterprise software, fintech, and infrastructure.",
    leadership: [
      { name: "James Nahirny", role: "Co-Founder" },
      { name: "Michael Krupka", role: "Co-Founder" },
      { name: "Ajay Agarwal", role: "Partner", profileSlug: "ajay-agarwal" }
    ],
    timeline: [
      { year: "2001", event: "Bain Capital forms Bain Capital Ventures as its dedicated venture arm." },
      { year: "2003", event: "Ajay Agarwal joins as a partner." },
      { year: "2004", event: "Agarwal leads BCV's first institutional round in Kiva Systems, a warehouse robotics startup." },
      { year: "2011", event: "Portfolio company LinkedIn goes public." },
      { year: "2012", event: "Amazon acquires Kiva Systems, rebranding it Amazon Robotics." },
      { year: "2018", event: "Portfolio company DocuSign goes public." }
    ],
    holdings: [
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: null },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 }
    ]
  },
   {
    rank: 21,
    name: "Eclipse Ventures",
    sectors: ["Robotics", "AI Infrastructure", "Manufacturing", "Defense", "Climate"],
    signatureExit: "No single dollar-verified signature exit — Eclipse instead builds a defense-heavy 'connected industrial economy' of companies that share infrastructure and talent, including True Anomaly (autonomous spacecraft), Blue Water Autonomy (autonomous Navy vessels), and VulcanForms (supplying more than 15 Department of Defense programs including the F-35 and Patriot systems)",
    slug: "eclipse-ventures",
    website: "https://eclipse.capital",
    short: "Eclipse Ventures",
    founded: 2015,
    hq: "Palo Alto, CA",
    aum: "$10B+ (following $1.3B Fund VI + Early Growth Fund III close, April 2026)",
    thesis: "Eclipse Ventures was founded in 2015 on the belief that the most consequential companies of the next decade would be built in physical industries — manufacturing, energy, defense, and supply chains — not software alone. The firm describes itself not as a traditional portfolio but as a connected industrial economy: companies it backs share infrastructure, talent networks, and hard-won operational insight with each other, and Eclipse itself co-founds and incubates companies from scratch rather than only writing checks into existing startups. In April 2026 the firm closed its largest fundraise yet, $1.3 billion across a $720 million Fund VI and a $591 million Early Growth Fund III, pushing total assets under management to roughly $10 billion across an 11-year history.",
    leadership: [
     { name: "Lior Susan", role: "Founder & CEO", profileSlug: "lior-susan" },
      { name: "Greg Reichow", role: "Partner" }
    ],
    timeline: [
      { year: "2015", event: "Lior Susan founds Eclipse Ventures in Palo Alto." },
      { year: "2021", event: "Closes Fund IV at $500 million and its first dedicated Early Growth Fund at $510 million." },
      { year: "2023", event: "Closes $1.23 billion across Fund V and Early Growth Fund II, pushing total capital under management to $4 billion." },
      { year: "2026", event: "Closes its largest raise yet, $1.3 billion across Fund VI and Early Growth Fund III, pushing total AUM to roughly $10 billion." }
    ],
    holdings: []
  },
   {
    rank: 22,
    name: "Altos Ventures",
    sectors: ["Consumer", "Enterprise Software", "Marketplaces", "Fintech"],
    signatureExit: "Coupang's 2021 NYSE IPO — Altos was an early backer of the South Korean ecommerce company, which priced at an implied valuation of $62.1 billion",
    slug: "altos-ventures",
    website: "https://altos.vc",
    short: "Altos Ventures",
    founded: 1996,
    hq: "Menlo Park, CA",
    aum: "$10B+ (RIA regulatory AUM)",
    thesis: "Altos Ventures was founded in 1996 by Han Kim, Ho Nam, and Anthony Lee, three Stanford MBA classmates who began managing their first fund the same year through an introduction from a professor. The firm's public materials describe a deliberately contrarian, patient philosophy — favoring durable businesses with strong unit economics over trend-driven sectors, and staying involved with portfolio companies for more than a decade after the first check. That patience produced two of venture capital's largest single-firm outcomes: Altos held roughly 25% of Roblox at its 2021 IPO, a stake reported to be worth more than $8 billion, and was an early backer of Coupang, the South Korean ecommerce company that priced its own 2021 IPO at an implied $62.1 billion valuation.",
    leadership: [
  { name: "Han Kim", role: "Co-Founder & Managing Director" },
      { name: "Ho Nam", role: "Co-Founder & Managing Director", profileSlug: "ho-nam" },
      { name: "Anthony Lee", role: "Co-Founder & Managing Director" }
    ],
    timeline: [
      { year: "1996", event: "Han Kim, Ho Nam, and Anthony Lee found Altos Ventures in Menlo Park." },
      { year: "2007", event: "Altos' relationship with Roblox begins." },
      { year: "2021", event: "Both Roblox and Coupang go public; Altos' Roblox stake alone is reported worth more than $8 billion at listing." },
      { year: "2026", event: "Firm surpasses $10 billion in regulatory assets under management." }
    ],
    holdings: [
      { name: "Coupang", ticker: "CPNG", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 21,
    name: "Benchmark",
    sectors: ["Consumer Internet", "Marketplaces", "Enterprise"],
    signatureExit: "eBay — a $6.7 million Series A in 1997 that became one of the best-performing venture bets ever made",
    slug: "benchmark",
    website: "https://www.benchmark.com",
    short: "Benchmark",
    founded: 1995,
    hq: "San Francisco, CA",
    aum: "$9B+",
    thesis: "Five young partners — Bob Kagle, Bruce Dunlevie, Andy Rachleff, Kevin Harvey, and Val Vaden — broke off from their established firms in 1995 to found Benchmark on a radical premise for the time: every partner would be paid and treated exactly equally, with no senior hierarchy. Barely two years later, the firm's $6.7 million bet on a tiny auction site called eBay became one of the best-performing venture investments ever made, validating the flat-partnership model Benchmark still runs today.",
    leadership: [
      { name: "Bob Kagle", role: "Co-Founder" },
      { name: "Bruce Dunlevie", role: "Co-Founder" },
      { name: "Andy Rachleff", role: "Co-Founder" },
      { name: "Kevin Harvey", role: "Co-Founder" },
      { name: "Bill Gurley", role: "General Partner", profileSlug: "bill-gurley" }
    ],
    timeline: [
      { year: "1995", event: "Five partners break off from established firms to found Benchmark as a radically equal partnership." },
      { year: "1997", event: "Makes a $6.7 million Series A bet on a tiny auction site called eBay — one of the best-performing VC investments ever made." },
      { year: "1999", event: "Bill Gurley joins as a partner, going on to become one of the firm's most prominent investors." },
      { year: "2010s", event: "Backs Uber and Snap, continuing its pattern of early, high-conviction consumer bets." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Snap", ticker: "SNAP", historicalPrice: null, price: 4.53 }
    ]
  },
  {
    rank: 22,
    name: "Spark Capital",
    sectors: ["Consumer Internet", "Enterprise Software", "Fintech", "AI"],
    signatureExit: "Twitter's 2013 IPO — Spark led the company's early investment in 2007 when it had fewer than a dozen employees",
    slug: "spark-capital",
    website: "https://www.sparkcapital.com",
    short: "Spark",
    founded: 2005,
    hq: "Boston, MA",
    aum: "$8.7B+",
    thesis: "Spark Capital was founded in 2005 by Bijan Sabet, Paul Conway, Santo Politi, and Todd Dagres, built on a deliberately founder-first philosophy that prioritizes people over spreadsheets. The firm's early conviction in consumer internet companies paid off dramatically with Twitter — Sabet led the investment in 2007 when the company had fewer than a dozen employees, years before its 2013 IPO. Spark has since extended that same instinct into enterprise software, fintech, and AI, including an early Series C investment in Anthropic that turned $75 million into an estimated $3 billion.",
    leadership: [
      { name: "Bijan Sabet", role: "Co-Founder & Partner Emeritus", profileSlug: "bijan-sabet" },
      { name: "Santo Politi", role: "Co-Founder & General Partner" },
      { name: "Todd Dagres", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2005", event: "Bijan Sabet, Paul Conway, Santo Politi, and Todd Dagres found Spark Capital in Boston." },
      { year: "2007", event: "Leads an early investment in Twitter when the company has fewer than a dozen employees." },
      { year: "2013", event: "Twitter goes public; portfolio company Tumblr is acquired by Yahoo for $1.1 billion the same year." },
      { year: "2014", event: "Portfolio company Oculus VR is acquired by Facebook for $2 billion." },
      { year: "2020s", event: "Makes an early Series C investment in Anthropic, turning $75 million into an estimated $3 billion." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Affirm", ticker: "AFRM", historicalPrice: null, price: 64.71 },
      { name: "Wayfair", ticker: "W", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 23,
    name: "IVP",
    sectors: ["Consumer Internet", "Media", "Travel", "Fintech"],
    signatureExit: "Twitter's 2013 IPO — Todd Chaffee led IVP's $44 million investment in 2009 at a $220 million valuation, a stake that grew into a return of nearly $5 billion by 2018",
    slug: "ivp",
    website: "https://www.ivp.com",
    short: "IVP",
    founded: 1980,
    hq: "Menlo Park, CA",
    aum: "$7B+",
    thesis: "IVP, founded in 1980 by Reid Dennis, is one of the oldest venture capital firms on Sand Hill Road. Dennis had already spent nearly three decades building a network of early angel investors before formally launching IVP, and the firm became one of the first dedicated later-stage growth investors in Silicon Valley. After the dot-com crash, several IVP partners left to help found Redpoint Ventures in 1999 — a firm also tracked on this page. IVP's own defining bet came in 2009, when partner Todd Chaffee led a $44 million investment in Twitter at a $220 million valuation, a stake that grew into a return of nearly $5 billion within a decade.",
    leadership: [
      { name: "Reid Dennis", role: "Founder (1980)" },
      { name: "Todd Chaffee", role: "Managing Director & General Partner", profileSlug: "todd-chaffee" }
    ],
    timeline: [
      { year: "1980", event: "Reid Dennis founds Institutional Venture Partners in Menlo Park." },
      { year: "1999", event: "Several IVP partners leave to help found Redpoint Ventures after the dot-com crash." },
      { year: "2000", event: "Todd Chaffee joins as a General Partner." },
      { year: "2009", event: "Leads a $44 million investment in Twitter at a $220 million valuation." },
      { year: "2013", event: "Twitter goes public." },
      { year: "2018", event: "IVP's original Twitter stake has grown into a return of nearly $5 billion." }
    ],
    holdings: [
      { name: "Netflix", ticker: "NFLX", historicalPrice: null, price: 68.20 },
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 }
    ]
  },
   {
    rank: 24,
    name: "CapitalG",
    sectors: ["AI", "Enterprise Software", "Cybersecurity", "Fintech"],
    signatureExit: "Looker's 2020 acquisition by Google for $2.6 billion — announced in June 2019 and completed the following February, with CapitalG's Gene Frantz counting it among his major outcomes",
    slug: "capitalg",
    website: "https://capitalg.com",
    short: "CapitalG",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$7B",
    thesis: "CapitalG is Alphabet's independent growth fund, founded in 2013 to share Google's own growth expertise — commercial pipeline building, hiring, and go-to-market advisory — with scaling companies, not just write checks. Unlike most corporate venture arms, it publishes classic fund metrics openly: $7 billion in assets under management, typical check sizes of $50 to $200 million, and a track record of 16 IPOs and 11 M&A exits, which puts it closer to a dedicated growth-equity franchise than a scouting arm. Its portfolio includes category-defining names like Stripe, Airbnb, CrowdStrike, and Databricks, with Looker's $2.6 billion acquisition by Google itself standing as its most direct proof of strategic value.",
    leadership: [
      { name: "Laela Sturdy", role: "Managing Partner", profileSlug: "laela-sturdy" },
      { name: "Gene Frantz", role: "General Partner" },
      { name: "Alex Nichols", role: "General Partner" }
    ],
    timeline: [
      { year: "2013", event: "Alphabet founds CapitalG as its independent growth fund." },
      { year: "2019", event: "Google agrees to acquire portfolio company Looker for $2.6 billion in June." },
      { year: "2020", event: "The Looker acquisition completes in February." },
      { year: "2021", event: "Portfolio company Duolingo goes public on the Nasdaq." }
    ],
    holdings: [
      { name: "Duolingo", ticker: "DUOL", historicalPrice: null, price: 132.82 },
      { name: "UiPath", ticker: "PATH", historicalPrice: null, price: null },
      { name: "Zscaler", ticker: "ZS", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 24,
    name: "Menlo Ventures",
    sectors: ["Consumer Internet", "Enterprise Software", "AI"],
    signatureExit: "Uber's 2019 IPO — Menlo led the company's $32 million Series B in 2011 after a16z passed on the deal, and realized a 93x return when a SoftBank-led group bought part of its stake for $973 million in 2018",
    slug: "menlo-ventures",
    website: "https://menlovc.com",
    short: "Menlo",
    founded: 1976,
    hq: "Menlo Park, CA",
    aum: "$5.8B+",
    thesis: "Menlo Ventures was founded in 1976 by H. DuBose Montgomery in Menlo Park, making it one of the oldest continuously active venture capital firms in Silicon Valley. The firm spent much of its history investing primarily in enterprise technology before shifting toward a more even split between consumer and enterprise bets by the 2010s. That range paid off in 2011, when partner Shawn Carolan led Menlo's $32 million Series B investment in Uber — a deal a16z had walked away from — valuing the fledgling ride-hailing startup at just $322 million. The bet became one of the most lucrative in the firm's history when a SoftBank-led investor group purchased roughly half of Menlo's Uber shares in 2018 for $973 million, a 93x return.",
    leadership: [
      { name: "H. DuBose Montgomery", role: "Founder (1976)" },
      { name: "Shawn Carolan", role: "Partner", profileSlug: "shawn-carolan" }
    ],
    timeline: [
      { year: "1976", event: "H. DuBose Montgomery founds Menlo Ventures in Menlo Park." },
      { year: "2002", event: "Shawn Carolan joins the firm as an associate." },
      { year: "2005", event: "Menlo becomes Siri's first investor, years before Apple's 2010 acquisition." },
      { year: "2011", event: "Leads a $32 million Series B investment in Uber, a deal a16z had passed on." },
      { year: "2018", event: "A SoftBank-led group purchases roughly half of Menlo's Uber shares for $973 million, a 93x return." },
      { year: "2019", event: "Uber goes public." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Roku", ticker: "ROKU", historicalPrice: null, price: null }
    ]
  },
   {
    rank: 25,
    name: "Salesforce Ventures",
    sectors: ["AI", "Enterprise Software", "Fintech", "Cybersecurity"],
    signatureExit: "Vlocity's February 2020 acquisition by Salesforce itself for $1.33 billion — an unusually direct proof point, since Salesforce Ventures backed the industry-cloud software company before its own parent acquired it",
    slug: "salesforce-ventures",
    website: "https://salesforceventures.com",
    short: "Salesforce Ventures",
    founded: 2009,
    hq: "San Francisco, CA",
    aum: "$6B+ deployed capital",
    thesis: "Salesforce Ventures was founded in 2009 as Salesforce's venture platform, and its official framing is explicit about what it sells beyond capital: patient investing paired with privileged access to Salesforce's customers, partners, and product expertise. That platform capability isn't just marketing — the firm says its dedicated platform team has helped hundreds of portfolio companies with community building, brand amplification, and customer introductions. Salesforce Ventures has invested in more than 630 startups and deployed over $6 billion, supporting more than 200 IPOs and acquisitions, with a $1 billion commitment specifically earmarked for AI founders as of its 15-year retrospective.",
    leadership: [
      { name: "Paul Drews", role: "Managing Partner" },
      { name: "John Somorjai", role: "President", profileSlug: "john-somorjai" },
      { name: "Ken Asada", role: "Partner & Head of Japan" }
    ],
    timeline: [
      { year: "2009", event: "Salesforce founds Salesforce Ventures as its dedicated venture platform." },
      { year: "2020", event: "Salesforce acquires Vlocity, a Salesforce Ventures portfolio company, for $1.33 billion in February." },
      { year: "2021", event: "Salesforce Ventures makes a $75 million private placement in monday.com concurrent with its June IPO." },
      { year: "2024", event: "Marks 15 years with more than 630 startup investments, $6 billion+ deployed, and a $1 billion AI-founder commitment." }
    ],
    holdings: [
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 52.91 },
      { name: "monday.com", ticker: "MNDY", historicalPrice: null, price: null },
      { name: "nCino", ticker: "NCNO", historicalPrice: null, price: null }
    ]
  },
    {
    rank: 25,
    name: "Lux Capital",
    sectors: ["Deep Tech", "AI", "Healthcare", "Defense Tech", "Clean Energy"],
    signatureExit: "Auris Health's 2019 acquisition by Johnson & Johnson for up to $6.1 billion — Lux first invested in the surgical robotics company in 2012, seven years before the deal",
    slug: "lux-capital",
    website: "https://www.luxcapital.com",
    short: "Lux",
    founded: 2000,
    hq: "New York, NY",
    aum: "$7B+",
    thesis: "Lux Capital was founded in 2000 by Josh Wolfe, Peter Hébert, and Robert Paull, and has spent more than two decades funding science- and engineering-heavy companies long before they look mainstream. What distinguishes the firm is its refusal to separate venture investing from frontier technical ambition: Lux's own materials treat hard science, difficult regulation, and long commercialization arcs as the price of the category rather than reasons to pass. That patience produced Auris Health, the surgical robotics company Johnson & Johnson acquired for up to $6.1 billion in 2019, seven years after Lux first invested, alongside early positions in Anduril, Recursion, and Hugging Face.",
    leadership: [
      { name: "Josh Wolfe", role: "Co-Founder & Managing Partner", profileSlug: "josh-wolfe" },
      { name: "Peter Hébert", role: "Co-Founder & Managing Partner" },
      { name: "Robert Paull", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2000", event: "Josh Wolfe, Peter Hébert, and Robert Paull found Lux Capital." },
      { year: "2012", event: "Lux invests in Auris Health, the surgical robotics company." },
      { year: "2016", event: "Lux invests in Recursion, an early bet on computational drug discovery." },
      { year: "2019", event: "Johnson & Johnson acquires Auris Health for up to $6.1 billion." },
      { year: "2021", event: "Multiple Lux-backed companies list publicly, including Aeva and Recursion." },
      { year: "2026", event: "Firm materials continue to cite $7 billion under management across AI, biotech, defense, energy, and robotics." }
    ],
    holdings: [
      { name: "Recursion", ticker: "RXRX", historicalPrice: null, price: null },
      { name: "Aeva", ticker: "AEVA", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 26,
    name: "Redpoint Ventures",
    sectors: ["Consumer Internet", "Cloud Infrastructure", "SaaS", "Enterprise Software"],
    signatureExit: "Netflix — an early investor that backed the company years before streaming existed as a category",
    slug: "redpoint",
    website: "https://www.redpoint.com",
    short: "Redpoint",
    founded: 1999,
    hq: "Menlo Park, CA",
    aum: "$4.5B+",
    thesis: "Redpoint Ventures was founded in 1999 in Menlo Park by a group of experienced investors including Geoff Yang, Tim Haley, and John Walecka, several of whom had previously worked together at Institutional Venture Partners. The firm built its early reputation on Netflix, backing the company years before streaming existed as a category, and has since extended that pattern of early conviction into cloud infrastructure and SaaS, with investments in Twilio, Snowflake, Stripe, and HashiCorp.",
    leadership: [
      { name: "Geoff Yang", role: "Founding Partner", profileSlug: "geoff-yang" },
      { name: "Tim Haley", role: "Founding Partner" },
      { name: "John Walecka", role: "Founding Partner" }
    ],
    timeline: [
      { year: "1999", event: "A group of former IVP investors, including Geoff Yang and Tim Haley, found Redpoint Ventures." },
      { year: "1998", event: "Tim Haley joins Netflix's board of directors, a relationship that predates Redpoint's founding." },
      { year: "2002", event: "Netflix goes public, one of the firm's defining early wins." },
      { year: "2016", event: "Portfolio company Twilio goes public." },
      { year: "2020", event: "Portfolio company Snowflake goes public in one of the largest software IPOs on record." }
    ],
    holdings: [
      { name: "Netflix", ticker: "NFLX", historicalPrice: null, price: 68.20 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 },
      { name: "Snowflake", ticker: "SNOW", historicalPrice: null, price: null }
    ]
  },
   {
    rank: 27,
    name: "Crosslink Capital",
    sectors: ["AI", "Enterprise Software", "Consumer Internet", "Fintech", "Cloud Infrastructure"],
    signatureExit: "No single signature exit with a verified public dollar figure — Crosslink's track record instead runs through Alpha, its invite-only network of more than 2,000 founders, CEOs, and investors co-founded by General Partner Eric Chin in 2005, now in its third decade of connecting the firm's portfolio to the wider venture ecosystem",
    slug: "crosslink-capital",
    website: "https://www.crosslinkcapital.com",
    short: "Crosslink Capital",
    founded: 1989,
    hq: "Menlo Park, CA",
    aum: "$4.6B+",
    thesis: "Crosslink Capital was founded in 1989 and has spent 35 years investing in early-stage founders from pre-seed and seed through Series A, across enterprise, consumer, and vertical technology. The firm's clearest differentiator is Alpha, an invite-only network of more than 2,000 founders, CEOs, investors, and operators that General Partner Eric Chin co-founded in 2005 — now running more than forty annual events and functioning as a genuine deal-sourcing and founder-support engine rather than a marketing label. Crosslink closed its tenth flagship fund, Crosslink Ventures X, at $350 million in April 2024, the same size as its prior fund from January 2021, and now manages more than $4.6 billion.",
    leadership: [
   { name: "Michael Stark", role: "Partner & Founder" },
      { name: "Eric Chin", role: "General Partner & Alpha Founder" },
      { name: "Matt Bigge", role: "Partner", profileSlug: "matt-bigge" },
      { name: "Phil Boyer", role: "Partner" }
    ],
    timeline: [
      { year: "1989", event: "Michael Stark founds Crosslink Capital in Menlo Park." },
      { year: "2005", event: "General Partner Eric Chin co-founds Alpha, the firm's invite-only founder and investor network." },
      { year: "2021", event: "Closes its ninth flagship fund at $350 million in January." },
      { year: "2024", event: "Closes its tenth flagship fund, Crosslink Ventures X, at $350 million, marking the firm's 35th year." }
    ],
    holdings: []
  },
   {
    rank: 29,
    name: "Cisco Investments",
    sectors: ["AI", "Cybersecurity", "Cloud Infrastructure", "Enterprise Software"],
    signatureExit: "HashiCorp's December 2021 Nasdaq IPO at a roughly $14 billion valuation — Cisco's 2021 year-in-review named it alongside Confluent and GitLab as portfolio IPO milestones; HashiCorp was later taken private in IBM's February 2025 acquisition",
    slug: "cisco-investments",
    website: "https://www.ciscoinvestments.com",
    short: "Cisco Investments",
    founded: 1993,
    hq: "San Jose, CA",
    aum: "$1B AI Fund (2024); historically ~$250-300M deployed annually",
    thesis: "Cisco Investments has operated as Cisco's corporate venture arm since 1993, and its own language is direct about what sets it apart: investing is 'part of the company, and it's strategic,' meaning capital comes bundled with access to Cisco's infrastructure, go-to-market channels, and enterprise customer relationships. That strategy sharpened further in June 2024 with the launch of a dedicated $1 billion AI fund focused on secure and trustworthy AI, adding names like Cohere and Scale AI to a portfolio that already spanned networking, observability, and security. The clearest proof of the model's payoff came in Cisco's 2021 year-in-review, which named HashiCorp, Confluent, and GitLab together as portfolio companies that went public that year.",
    leadership: [
      { name: "Derek Idemoto", role: "Senior Vice President" },
      { name: "Noah Yago", role: "Vice President", profileSlug: "noah-yago" }
    ],
    timeline: [
      { year: "1993", event: "Cisco founds Cisco Investments as one of the earliest corporate venture arms in technology." },
      { year: "2018", event: "Cisco publicly discloses it invests roughly $250-300 million annually across direct and fund investments." },
      { year: "2021", event: "Portfolio companies HashiCorp, Confluent, and GitLab all go public." },
      { year: "2024", event: "Launches a dedicated $1 billion AI fund focused on secure and trustworthy AI." },
      { year: "2025", event: "HashiCorp, one of the firm's signature IPO outcomes, is acquired by IBM and taken private." }
    ],
    holdings: [
      { name: "Confluent", ticker: "CFLT", historicalPrice: null, price: null },
      { name: "GitLab", ticker: "GTLB", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 27,
    name: "CRV",
    sectors: ["Consumer Internet", "Marketplaces", "Enterprise Software", "Cybersecurity"],
    signatureExit: "DoorDash's December 2020 IPO at a $39 billion valuation — CRV led the company's seed round in 2013, when it was just nine weeks old",
    slug: "crv",
    website: "https://www.crv.com",
    short: "CRV",
    founded: 1970,
    hq: "Palo Alto, CA",
    aum: "$4.3B+",
    thesis: "CRV, originally Charles River Ventures, was founded in 1970 in Boston to commercialize research coming out of MIT, with help from Dick Burnes, founder of the semiconductor testing company Teradyne. Over more than five decades, the firm relocated its headquarters to Palo Alto to be closer to Silicon Valley and built a reputation for conviction and speed in early-stage consumer and enterprise deals. That pattern held true in 2013, when partner Saar Gur led CRV's seed investment in DoorDash — a food delivery company just nine weeks old at the time — years before its 2020 IPO valued it at $39 billion.",
    leadership: [
      { name: "Dick Burnes", role: "Co-Founder (1970)" },
      { name: "Saar Gur", role: "General Partner", profileSlug: "saar-gur" }
    ],
    timeline: [
      { year: "1970", event: "Dick Burnes, founder of Teradyne, helps found Charles River Ventures in Boston to commercialize MIT research." },
      { year: "2000s", event: "Relocates headquarters to Palo Alto, California, to be closer to Silicon Valley." },
      { year: "2007", event: "Saar Gur joins as a General Partner." },
      { year: "2013", event: "Leads a seed investment in DoorDash, then just nine weeks old." },
      { year: "2014", event: "Rebrands from Charles River Ventures to CRV." },
      { year: "2020", event: "DoorDash goes public at a $39 billion valuation." }
    ],
    holdings: [
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 },
      { name: "Amgen", ticker: "AMGN", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 28,
    name: "True Ventures",
    sectors: ["Consumer", "Hardware", "Media", "AI"],
    signatureExit: "Fitbit's 2015 IPO — True Ventures was among Fitbit's first institutional investors, backing the company when it looked like little more than a pedometer in a world with no wearables market yet",
    slug: "true-ventures",
    website: "https://www.trueventures.com",
    short: "True",
    founded: 2005,
    hq: "Palo Alto, CA",
    aum: "$3.8B+",
    thesis: "True Ventures was founded in 2005 by Jon Callaghan and Phil Black, both veterans of Summit Partners, built around a deliberate philosophy of maximizing risk at the earliest stages — backing founders before their markets or categories even exist. That approach defined the firm's investment in Fitbit, made when the device looked like little more than a pedometer in a world with no wearables market, and carried through to early bets on Peloton, Ring, and HashiCorp. True has since backed more than 500 companies across seed and Series A stages, with a hands-on approach centered on its annual Founder Camp.",
    leadership: [
      { name: "Jon Callaghan", role: "Co-Founder & Managing Partner", profileSlug: "jon-callaghan" },
      { name: "Phil Black", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2005", event: "Jon Callaghan and Phil Black found True Ventures in Palo Alto." },
      { year: "2015", event: "Portfolio company Fitbit goes public; Callaghan serves as Lead Independent Director." },
      { year: "2019", event: "Portfolio company Peloton goes public." },
      { year: "2021", event: "Fitbit is acquired by Google." },
      { year: "2020s", event: "Expands deep into AI, with more than 85 AI-focused investments." }
    ],
    holdings: [
      { name: "Peloton", ticker: "PTON", historicalPrice: null, price: null },
      { name: "Sweetgreen", ticker: "SG", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 28,
    name: "DCVC",
    sectors: ["Deep Tech", "Climate", "Healthcare", "Defense Tech", "AI Infrastructure"],
    signatureExit: "Blue River Technology's 2017 acquisition by John Deere for $305 million — an agricultural robotics bet that landed years before machine vision became standard in farming equipment",
    slug: "dcvc",
    website: "https://www.dcvc.com",
    short: "DCVC",
    founded: 2011,
    hq: "Palo Alto, CA",
    aum: "$4B+",
    thesis: "DCVC, originally founded as Data Collective by Zachary Bogue and Matt Ocko, describes itself as the world's largest pure-play deep-tech venture firm, with more than $4 billion under management. Its sector map is unusually crisp for a generalist-sized fund — deep tech, climate, human health, defense and security, space, advanced computing, and industrial transformation — and it backs companies applying computational approaches to industries that are genuinely hard to disrupt. The cleanest signature outcome is Blue River Technology, the agricultural robotics company John Deere acquired for $305 million in 2017; the firm's public bench since has included Planet Labs, Rocket Lab, Recursion, and SentinelOne.",
    leadership: [
      { name: "Zachary Bogue", role: "Co-Founder & Managing Partner", profileSlug: "zachary-bogue" },
      { name: "Matt Ocko", role: "Co-Founder & Managing Partner" }
    ],
    timeline: [
      { year: "2011", event: "Zachary Bogue and Matt Ocko found the firm as Data Collective in Palo Alto." },
      { year: "2017", event: "Portfolio company Blue River Technology is acquired by John Deere for $305 million." },
      { year: "2021", event: "Several DCVC-backed companies reach the public markets, including Recursion and SentinelOne." },
      { year: "2026", event: "DCVC publishes its inaugural Deep Tech Opportunities report alongside fresh fund capital." }
    ],
    holdings: [
      { name: "Planet Labs", ticker: "PL", historicalPrice: null, price: null },
      { name: "Rocket Lab", ticker: "RKLB", historicalPrice: null, price: null },
      { name: "Recursion", ticker: "RXRX", historicalPrice: null, price: null },
      { name: "SentinelOne", ticker: "S", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 30,
    name: "Greylock Partners",
    sectors: ["Enterprise Software", "Consumer Internet", "Cybersecurity", "AI"],
    signatureExit: "LinkedIn's 2011 IPO, followed by Microsoft's $26.2 billion acquisition of the company in 2016",
    slug: "greylock",
    website: "https://greylock.com",
    short: "Greylock",
    founded: 1965,
    hq: "Menlo Park, CA",
    aum: "$3.5B+",
    thesis: "Greylock Partners is one of the oldest venture capital firms in the world, founded in 1965 in Cambridge, Massachusetts by Bill Elfers and Dan Gregory, two investors who had cut their teeth at American Research and Development Corporation — one of the very first venture capital firms ever created. After more than four decades on the East Coast, Greylock relocated its headquarters to Silicon Valley in 2009, the same year it added LinkedIn co-founder Reid Hoffman as a partner. The firm focuses on early-stage consumer internet and enterprise software companies, with a six-decade history spanning from early biotech investments to today's AI-first startups.",
    leadership: [
      { name: "Bill Elfers", role: "Co-Founder (1965)" },
      { name: "Dan Gregory", role: "Co-Founder (1965)" },
      { name: "Reid Hoffman", role: "Partner", profileSlug: "reid-hoffman" }
    ],
    timeline: [
      { year: "1965", event: "Bill Elfers and Dan Gregory found Greylock in Cambridge, Massachusetts, with $10 million committed by six families." },
      { year: "1999", event: "Opens its first Silicon Valley office." },
      { year: "2009", event: "Relocates headquarters to Menlo Park, California; LinkedIn co-founder Reid Hoffman joins as a partner." },
      { year: "2011", event: "Portfolio company LinkedIn goes public." },
      { year: "2016", event: "Microsoft acquires LinkedIn for $26.2 billion." }
    ],
    holdings: [
      { name: "Workday", ticker: "WDAY", historicalPrice: null, price: 144.78 },
      { name: "Palo Alto Networks", ticker: "PANW", historicalPrice: null, price: 341.59 },
  { name: "Arista Networks", ticker: "ANET", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 31,
    name: "Craft Ventures",
    sectors: ["SaaS", "Marketplaces", "AI", "Cloud/Infrastructure", "Fintech"],
    signatureExit: "Reddit's 2024 IPO on NYSE — Craft backed the company in 2017, years before its public debut",
    slug: "craft-ventures",
    website: "https://www.craftventures.com",
    short: "Craft Ventures",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$3.3B+",
    thesis: "David Sacks was PayPal's first product leader and later its COO, part of the group later nicknamed the 'PayPal Mafia,' before founding Yammer, an enterprise social networking company he built and sold to Microsoft for $1.2 billion. He co-founded Craft Ventures in 2017 with Bill Lee, built around a deliberately operator-led model that pairs capital with hands-on go-to-market and talent support for B2B software founders. The firm has grown to $3.3 billion in total assets under management following its 2023 Craft IV and Growth II funds, and its early conviction in Reddit — invested in 2017, years before its 2024 IPO — has become one of its most visible public outcomes.",
    leadership: [
      { name: "David Sacks", role: "Partner & Co-Founder", profileSlug: "david-sacks" },
      { name: "Bill Lee", role: "Co-Founder & Venture Partner" }
    ],
    timeline: [
      { year: "2017", event: "David Sacks and Bill Lee found Craft Ventures in San Francisco." },
      { year: "2018", event: "Closes its inaugural $350 million fund." },
      { year: "2019", event: "Closes its second fund at $500 million." },
      { year: "2021", event: "Craft III and Growth I close at $1.12 billion combined, bringing total AUM to $2 billion." },
      { year: "2023", event: "Craft IV and Growth II close at $1.32 billion combined, bringing total AUM to $3.3 billion." },
      { year: "2024", event: "Portfolio company Reddit goes public on NYSE." }
    ],
    holdings: [
      { name: "Reddit", ticker: "RDDT", historicalPrice: null, price: null },
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 }
    ]
  },
  {
    rank: 32,
    name: "Initialized Capital",
    sectors: ["Enterprise Software", "AI", "Infrastructure", "Consumer", "Crypto", "Healthcare"],
    signatureExit: "Coinbase's 2021 direct listing — Initialized was an early backer of the exchange, which carried a market capitalization of roughly $41.9 billion by July 2026",
    slug: "initialized-capital",
    website: "https://initialized.com",
    short: "Initialized",
    founded: 2011,
    hq: "San Francisco, CA",
    aum: "$3.2B",
    thesis: "Initialized Capital was founded in 2011 by Alexis Ohanian, Garry Tan, and Harj Taggar, and has stayed unusually literal about what it does: the firm's own positioning is that it 'sets the standard in seed,' writing first checks across enterprise SaaS, AI, infrastructure, sustainability, hard tech, health, consumer, and crypto. It raised a $125 million seed fund in 2016 and had grown into a roughly $3.2 billion platform by the time Brett Gibson and Jen Wolf took over as managing partners in 2022. Its flagship public winner is Coinbase, alongside Instacart, Opendoor, and Reddit — an unusually high public-exit rate for a firm that deliberately stays seed-first rather than following its winners up the stack.",
    leadership: [
      { name: "Brett Gibson", role: "Managing Partner" },
      { name: "Jen Wolf", role: "Managing Partner" },
      { name: "Garry Tan", role: "Co-Founder" },
      { name: "Alexis Ohanian", role: "Co-Founder" },
      { name: "Harj Taggar", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2011", event: "Alexis Ohanian, Garry Tan, and Harj Taggar found Initialized Capital in San Francisco." },
      { year: "2016", event: "Announces a new $125 million seed fund." },
      { year: "2017", event: "Brett Gibson joins the investment team." },
      { year: "2021", event: "Coinbase goes public via direct listing." },
      { year: "2022", event: "Brett Gibson and Jen Wolf become managing partners; the firm is described as a $3.2 billion platform." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 },
      { name: "Opendoor", ticker: "OPEN", historicalPrice: null, price: null },
      { name: "Reddit", ticker: "RDDT", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 33,
    name: "Mayfield",
    sectors: ["AI", "Enterprise Software", "Semiconductors/Deep Tech", "Cybersecurity", "Human Health"],
    signatureExit: "Lyft's 2019 IPO — one of Mayfield's most recognizable public outcomes, still held in the firm's portfolio today",
    slug: "mayfield",
    website: "https://www.mayfield.com",
    short: "Mayfield",
    founded: 1969,
    hq: "Menlo Park, CA",
    aum: "$3B+",
    thesis: "Mayfield was founded in 1969, making it one of the oldest continuously operating venture capital firms in the world, with roots tracing directly to the founders of Fairchild Semiconductor. Navin Chaddha, a three-time entrepreneur who took iBeam Broadcasting public before joining Mayfield as Managing Partner in 2006, has led the firm through a 'people first' philosophy that prioritizes backing founders at the inception stage, before the broader market believes in an idea. That approach has produced an early stake in Lyft, still one of the firm's most recognizable public outcomes, alongside HashiCorp and Poshmark. Mayfield closed its Mayfield XVII and Select III funds in 2023 at $955 million combined, bringing total assets under management to $3 billion, and has since launched a dedicated $250 million 'AI Start' seed vehicle for AI-first founders.",
    leadership: [
      { name: "Navin Chaddha", role: "Managing Partner", profileSlug: "navin-chaddha" }
    ],
    timeline: [
      { year: "1969", event: "Mayfield is founded in Menlo Park, with early roots tracing to Fairchild Semiconductor's founders." },
      { year: "2006", event: "Navin Chaddha joins Mayfield as Managing Partner after founding and exiting three companies." },
      { year: "2018", event: "Mayfield celebrates 50 years of investing." },
      { year: "2019", event: "Portfolio company Lyft goes public." },
      { year: "2023", event: "Mayfield XVII and Select III close at $955 million combined, bringing total AUM to $3 billion." },
      { year: "2023", event: "Launches a dedicated $250 million 'AI Start' seed fund for AI-first founders." }
    ],
    holdings: [
      { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: null },
      { name: "Couchbase", ticker: "BASE", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 34,
    name: "Emergence Capital",
    sectors: ["Enterprise Software", "SaaS", "Cloud Infrastructure"],
    signatureExit: "Zoom's 2019 IPO — General Partner Santi Subotovsky led Emergence's investment when the video conferencing company was still a little-known startup, and remains on its board today",
    slug: "emergence-capital",
    website: "https://www.emcap.com",
    short: "Emergence",
    founded: 2003,
    hq: "San Mateo, CA",
    aum: "$2.3B+",
    thesis: "Emergence Capital was founded in 2003 by Jason Green, Brian Jacobs, and Gordon Ritter on a deliberately narrow thesis: enterprise software was moving to the cloud, and a firm built entirely around that shift could out-invest generalist funds in the category. The firm makes just 5 to 7 new investments a year by design, prioritizing deep conviction over broad coverage — a discipline that helped it back Salesforce, Veeva, and Box early. That same conviction led General Partner Santi Subotovsky, who joined in 2010 after moving to the U.S. from Argentina, to lead Emergence's investment in Zoom while it was still a little-known startup, years before the company became a household name.",
    leadership: [
      { name: "Gordon Ritter", role: "Founder & General Partner" },
      { name: "Santi Subotovsky", role: "General Partner", profileSlug: "santi-subotovsky" }
    ],
    timeline: [
      { year: "2003", event: "Jason Green, Brian Jacobs, and Gordon Ritter found Emergence Capital on a cloud-software-only thesis." },
      { year: "2008", event: "Becomes the sole venture backer of Veeva Systems' Series A; Veeva later IPOs in 2013." },
      { year: "2010", event: "Santi Subotovsky joins as a Kauffman Fellow under Gordon Ritter's mentorship." },
      { year: "2010s", event: "Leads Emergence's investment in Zoom while it is still a little-known startup." },
      { year: "2019", event: "Zoom goes public." },
      { year: "2021", event: "Subotovsky makes his Forbes Midas List debut, one of the first three Latin American VCs on the list." }
    ],
    holdings: [
      { name: "Zoom", ticker: "ZM", historicalPrice: null, price: null },
      { name: "Veeva Systems", ticker: "VEEV", historicalPrice: null, price: null },
      { name: "Box", ticker: "BOX", historicalPrice: null, price: null }
    ]
  },
    {
    rank: 35,
    name: "PeakSpan Capital",
    sectors: ["AI", "Enterprise Software", "Vertical SaaS", "Fintech", "Ecommerce Infrastructure"],
    signatureExit: "Ecwid's 2021 acquisition by Lightspeed Commerce for $500 million — PeakSpan invested in the ecommerce platform in March 2020 and exited the following year",
    slug: "peakspan-capital",
    website: "https://www.peakspancapital.com",
    short: "PeakSpan",
    founded: 2015,
    hq: "New York, NY",
    aum: "$2.6B",
    thesis: "PeakSpan Capital was founded in 2015 to target what it calls the hardest stage of company building — not the earliest inception risk, but scaling a proven B2B software company from roughly $3 million to $50 million in annual recurring revenue. The firm's own materials emphasize operational support, exit preparedness, and domain specialization across twelve defined categories, from human capital management to next-gen security, rather than broad venture branding. Its inaugural $150 million fund closed in January 2016, followed by a $265 million Fund II in December 2018 and an oversubscribed $567 million Fund III in January 2022 — the same year the firm's exit of ecommerce platform Ecwid, acquired by Lightspeed Commerce for $500 million, became one of its signature outcomes.",
    leadership: [
   { name: "Phil Dur", role: "Co-Founder & Managing Partner" },
      { name: "Brian Mulvey", role: "Co-Founder & Managing Partner" },
      { name: "Matt Melymuka", role: "Co-Founder & Managing Partner", profileSlug: "matt-melymuka" }
    ],
    timeline: [
      { year: "2015", event: "Phil Dur, Brian Mulvey, and Matt Melymuka found PeakSpan Capital." },
      { year: "2016", event: "Closes its inaugural $150 million fund." },
      { year: "2018", event: "Closes Fund II at $265 million." },
      { year: "2020", event: "Invests in ecommerce platform Ecwid in March." },
      { year: "2021", event: "Ecwid is acquired by Lightspeed Commerce for $500 million in June." },
      { year: "2022", event: "Closes Fund III at $567 million, growing AUM toward $1.4 billion." }
    ],
    holdings: []
  },
   {
    rank: 36,
    name: "Inovia Capital",
    sectors: ["AI", "Cybersecurity", "Digital Health", "Fintech", "Infrastructure"],
    signatureExit: "Lightspeed Commerce's 2019 dual listing on the NYSE and TSX — Inovia was Lightspeed's first Canadian investor and helped lead a 2017 buyout that kept the Montreal point-of-sale company from a foreign takeover ahead of its IPO",
    slug: "inovia-capital",
    website: "https://www.inovia.vc",
    short: "Inovia",
    founded: 2007,
    hq: "Montreal, Quebec, Canada",
    aum: "$2.5B+",
    thesis: "Inovia Capital was founded in Montreal in 2007 and has built itself into a full-stack venture platform spanning pre-seed through pre-IPO — a stage range wider than most firms attempt, backed up by a Continuity Fund specifically built to keep supporting winners all the way to public markets. Its clearest proof point is Lightspeed Commerce: Inovia was the point-of-sale company's first Canadian investor, helped lead a 2017 buyout to keep it Canadian-owned rather than see a foreign firm force a sale, and stayed in through its 2019 dual listing on the NYSE and TSX. The firm has since grown past $2.5 billion under management across offices in Montreal, Toronto, Calgary, San Francisco, London, and Abu Dhabi.",
    leadership: [
 { name: "Chris Arsenault", role: "Partner & Co-Founder", profileSlug: "chris-arsenault" },
      { name: "Dennis Kavelman", role: "Partner" },
      { name: "Patrick Pichette", role: "Partner" }
    ],
    timeline: [
      { year: "2007", event: "Chris Arsenault co-founds Inovia Capital in Montreal." },
      { year: "2017", event: "Leads a buyout of Accel Partners' stake in Lightspeed alongside the Caisse, keeping the company Canadian-owned." },
      { year: "2019", event: "Lightspeed Commerce goes public on both the NYSE and TSX." },
      { year: "2021", event: "Raises a $450 million second growth fund and a $416 million CAD continuation fund, pushing total capital under management past $1.9 billion." },
      { year: "2026", event: "Firm surpasses $2.5 billion under management across six global offices." }
    ],
    holdings: [
      { name: "Lightspeed Commerce", ticker: "LSPD", historicalPrice: 15.74, price: 11.68 }
    ]
  },
   {
    rank: 37,
    name: "Qualcomm Ventures",
    sectors: ["AI", "5G", "Automotive", "IoT", "Cybersecurity"],
    signatureExit: "Ring's 2018 acquisition by Amazon for more than $1 billion — Qualcomm Ventures was an early backer of the connected-home company",
    slug: "qualcomm-ventures",
    website: "https://www.qualcommventures.com",
    short: "Qualcomm Ventures",
    founded: 2000,
    hq: "San Diego, CA",
    aum: "$2B+ (150+ active portfolio companies, per NVCA 2026)",
    thesis: "Qualcomm Ventures was founded in November 2000 with an initial $500 million commitment from its parent company, built specifically to promote the growth of the global wireless ecosystem. Its investment focus has stayed tied to that mission ever since — 5G, AI, automotive, IoT, XR, and enterprise and cloud technologies enabled by mobile and connected compute — while its global footprint across San Diego, San Francisco, Israel, Europe, China, India, and Korea gives portfolio companies real commercialization reach beyond typical Silicon Valley strategics. The firm has had seven portfolio exits worth more than $1 billion each, including Fitbit, Cruise Automation, Waze, and Ring, and now manages more than $2 billion in assets across 150-plus active companies.",
    leadership: [
{ name: "Quinn Li", role: "SVP & Global Head of Qualcomm Ventures", profileSlug: "quinn-li" }
    ],
    timeline: [
      { year: "2000", event: "Qualcomm Ventures is founded with an initial $500 million commitment from Qualcomm Incorporated." },
      { year: "2015", event: "Portfolio companies Fitbit and ThunderSoft both go public." },
      { year: "2018", event: "Ring, a connected-home portfolio company, is acquired by Amazon for more than $1 billion." },
      { year: "2019", event: "Zoom and Cloudflare go public; the firm launches a $200 million 5G Ecosystem fund." },
      { year: "2021", event: "SentinelOne, Enovix, Matterport, Spire, and Science 37 all go public." },
      { year: "2026", event: "Firm manages more than $2 billion across 150-plus active portfolio companies in seven regions." }
    ],
    holdings: [
      { name: "SentinelOne", ticker: "S", historicalPrice: 22.57, price: 18.55 }
    ]
  },
   {
    rank: 38,
    name: "Dell Technologies Capital",
    sectors: ["AI", "Cybersecurity", "Data & Analytics", "Enterprise Software"],
    signatureExit: "JFrog's September 2020 Nasdaq IPO — DTC published a case study celebrating the DevOps company's public debut, part of a run of exits including Arista, DocuSign, MongoDB, Nutanix, SumoLogic, and Zscaler that generated more than $160 billion in combined market value",
    slug: "dell-technologies-capital",
    website: "https://www.delltechnologiescapital.com",
    short: "Dell Technologies Capital",
    founded: 2012,
    hq: "Palo Alto, CA",
    aum: "$1.8B+ invested to date",
    thesis: "Dell Technologies Capital, or DTC, has operated as Dell's venture team since 2012, when Scott Darling founded the practice inside EMC before Dell's acquisition folded it into Dell Technologies. DTC's model is explicitly hands-on: alongside capital, portfolio companies get pricing analysis, go-to-market support, customer introductions, and direct access to Dell's family of businesses — Dell, Dell EMC, VMware, Pivotal, and SecureWorks. That approach has produced an unusually deep IPO track record for a corporate venture arm: DTC was the first institutional investor in Zscaler, and its 143 investments since 2012 have produced 65 M&A exits and 9 IPOs, including Arista, DocuSign, JFrog, MongoDB, Nutanix, SumoLogic, and Zscaler, together worth more than $160 billion in combined market value.",
    leadership: [
      { name: "Scott Darling", role: "Founding Partner & President", profileSlug: "scott-darling" },
      { name: "Yair Snir", role: "Managing Director" }
    ],
    timeline: [
      { year: "2012", event: "Scott Darling founds DTC's venture practice inside EMC, expanding to Boston and then Israel within its first two years." },
      { year: "2016", event: "Dell's acquisition of EMC folds the practice into Dell Technologies Capital." },
      { year: "2018", event: "Zscaler, where DTC was the first institutional investor, goes public in March." },
      { year: "2020", event: "JFrog goes public on the Nasdaq in September." },
      { year: "2026", event: "DTC's cumulative track record reaches 143 investments, 65 M&A exits, and 9 IPOs since 2012." }
    ],
    holdings: [
      { name: "Zscaler", ticker: "ZS", historicalPrice: 181.66, price: 167.33 },
      { name: "JFrog", ticker: "FROG", historicalPrice: null, price: null },
      { name: "MongoDB", ticker: "MDB", historicalPrice: null, price: null },
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 52.91 }
    ]
  },
  {
    rank: 35,
    name: "Union Square Ventures",
    sectors: ["Consumer Internet", "Fintech", "Crypto", "Marketplaces"],
    signatureExit: "Etsy's 2015 IPO — USV backed the handmade-goods marketplace in 2008 when it looked like a niche bet against Amazon",
    slug: "union-square-ventures",
    website: "https://www.usv.com",
    short: "USV",
    founded: 2003,
    hq: "New York, NY",
    aum: "$1B+",
    thesis: "Union Square Ventures was founded in 2003 by Fred Wilson and Brad Burnham in New York City, built on a deliberately small-fund philosophy — Wilson has said the firm would never raise a large fund, preferring to stay nimble with vehicles typically under $300 million. That discipline hasn't limited its impact: USV was an early believer in network-effect businesses, backing Twitter four months after it launched, Etsy when handmade-goods marketplaces seemed like a niche bet, and Coinbase years before crypto exchanges were taken seriously by mainstream investors.",
    leadership: [
      { name: "Fred Wilson", role: "Co-Founder", profileSlug: "fred-wilson" },
      { name: "Brad Burnham", role: "Co-Founder" },
      { name: "Albert Wenger", role: "Managing Partner" }
    ],
    timeline: [
      { year: "2003", event: "Fred Wilson and Brad Burnham found Union Square Ventures in New York City." },
      { year: "2007", event: "Leads a Series A investment in Twitter, then just four months old." },
      { year: "2008", event: "Invests in Etsy, a then-unproven marketplace for handmade goods." },
      { year: "2013", event: "Portfolio company Tumblr is acquired by Yahoo for $1.1 billion." },
      { year: "2015", event: "Etsy goes public." },
      { year: "2021", event: "Coinbase, an early USV bet, goes public via direct listing." }
    ],
    holdings: [
      { name: "Etsy", ticker: "ETSY", historicalPrice: null, price: 84.10 },
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Duolingo", ticker: "DUOL", historicalPrice: null, price: null }
    ]
  },
   {
    rank: 35,
    name: "Maveron",
    sectors: ["Consumer", "Ecommerce", "Fintech", "Healthcare", "Education"],
    signatureExit: "Zulily's 2013 Nasdaq IPO — Maveron led the ecommerce company's Series A with roughly $5 million and held a 22% stake worth more than $1 billion at IPO, on a $4.6 billion valuation",
    slug: "maveron",
    website: "https://www.maveron.com",
    short: "Maveron",
    founded: 1998,
    hq: "Seattle, WA",
    aum: "$1.3B (as of 2020)",
    thesis: "Maveron was founded in 1998 by Dan Levitan, a former investment banker who took Starbucks public in 1992, and Howard Schultz, the Starbucks CEO he met on that deal. The firm has stayed unusually disciplined about a single idea ever since: investing only in consumer-facing brands and technology, never enterprise or infrastructure. That focus produced one of the largest single outcomes in Seattle venture history — Levitan led Zulily's roughly $5 million Series A in 2009, and Maveron's 22% stake was worth more than $1 billion when the ecommerce company went public on the Nasdaq in 2013 at a $4.6 billion valuation, alongside the same-year IPO of sandwich chain Potbelly.",
    leadership: [
   { name: "Dan Levitan", role: "Co-Founder & General Partner", profileSlug: "dan-levitan" },
      { name: "Jason Stoffer", role: "General Partner" },
      { name: "David Wu", role: "General Partner" }
    ],
    timeline: [
      { year: "1998", event: "Dan Levitan and Howard Schultz found Maveron in Seattle." },
      { year: "2009", event: "Leads Zulily's approximately $5 million Series A round." },
      { year: "2013", event: "Zulily goes public on the Nasdaq at a $4.6 billion valuation; Potbelly also goes public the same year." },
      { year: "2020", event: "Firm's assets under management stand at $1.3 billion." }
    ],
    holdings: [
      { name: "Allbirds", ticker: "BIRD", historicalPrice: null, price: null }
    ]
  },
    {
    rank: 36,
    name: "RTP Global",
    sectors: ["AI", "Enterprise Software", "Fintech", "Developer Tools", "Climate"],
    signatureExit: "Datadog's 2019 Nasdaq IPO — RTP Global was an early Series A-through-D investor in the observability platform, which priced at $27 per share and had grown to a market capitalization of roughly $93 billion by July 2026",
    slug: "rtp-global",
    website: "https://rtp.vc",
    short: "RTP Global",
    founded: 2000,
    hq: "New York, NY",
    aum: "$1B (latest fund, 2023)",
    thesis: "RTP Global was founded in 2000 by Leonid Boguslavsky, who sold his prior technology company and put the proceeds — along with most of his personal wealth — into starting the firm, then kept reinvesting gains into each subsequent fund rather than relying heavily on outside limited partners. That owner-operator structure shows up in how RTP invests: the firm emphasizes fast decisions, early conviction at seed and Series A, and unusually long holding periods, backing founders across five hubs in New York, London, Bangalore, Paris, and Dubai. RTP has backed more than 100 founders since 2000, with Datadog among its best-known outcomes, and closed its latest flagship fund at $1 billion in 2023.",
    leadership: [
    { name: "Leonid Boguslavsky", role: "Partner & Founder", profileSlug: "leonid-boguslavsky" },
      { name: "Galina Chifina", role: "CEO & Partner" },
      { name: "Thomas Cuvelier", role: "Partner, US & Europe" }
    ],
    timeline: [
      { year: "2000", event: "Leonid Boguslavsky founds RTP Global, seeding it with proceeds from his prior company sale." },
      { year: "2019", event: "Portfolio company Datadog goes public on the Nasdaq at $27 per share." },
      { year: "2023", event: "Closes its latest flagship fund at $1 billion." },
      { year: "2026", event: "Firm operates across five hubs — New York, London, Bangalore, Paris, and Dubai." }
    ],
    holdings: [
      { name: "Datadog", ticker: "DDOG", historicalPrice: 143.63, price: 255.00 }
    ]
  },
   {
    rank: 37,
    name: "BMW i Ventures",
    sectors: ["Mobility", "Climate", "AI"],
    signatureExit: "Xometry's June 2021 Nasdaq IPO — Partner Baris Guzel led the manufacturing marketplace's Series B in 2017 as his very first BMW i Ventures investment, and rang the Nasdaq bell alongside the company's team at its debut",
    slug: "bmw-i-ventures",
    website: "https://www.bmwiventures.com",
    short: "BMW i Ventures",
    founded: 2011,
    hq: "Mountain View, CA",
    aum: "$1.1B+ (Fund III closed at $300M, April 2026)",
    thesis: "BMW i Ventures has operated as an investing platform since 2011, moving to an independent fund structure in 2016, and it functions closer to a high-performing independent fund than a typical corporate VC while still leveraging BMW as a strategic partner. The firm repeatedly stresses financial discipline and Silicon Valley speed, backing more than 90 companies across mobility, supply chain, sustainability, manufacturing, and increasingly AI. Its clearest recent proof point is Xometry, the on-demand manufacturing marketplace it backed at Series B in 2017 and which went public on the Nasdaq in June 2021 — one of several public outcomes alongside ChargePoint, which reached a $2.4 billion valuation at its own 2020 public debut. BMW announced a new $300 million Fund III in April 2026, pushing total capital under management above $1.1 billion.",
    leadership: [
      { name: "Marcus Behrendt", role: "Managing Partner" },
      { name: "Kasper Sage", role: "Managing Partner" },
      { name: "Baris Guzel", role: "Partner", profileSlug: "baris-guzel" }
    ],
    timeline: [
      { year: "2011", event: "BMW establishes what becomes BMW i Ventures as an investing platform." },
      { year: "2016", event: "The platform moves to an independent fund structure." },
      { year: "2017", event: "Baris Guzel joins and leads Xometry's Series B as his first investment for the firm." },
      { year: "2020", event: "ChargePoint reaches a $2.4 billion valuation at its public market debut in September." },
      { year: "2021", event: "Xometry goes public on the Nasdaq in June." },
      { year: "2026", event: "BMW closes a new $300 million Fund III in April, pushing total AUM above $1.1 billion." }
    ],
    holdings: [
      { name: "ChargePoint", ticker: "CHPT", historicalPrice: null, price: 5.84 },
      { name: "Xometry", ticker: "XMTR", historicalPrice: null, price: 50.96 }
    ]
  },
  {
    rank: 36,
    name: "Felicis",
    sectors: ["AI", "Cybersecurity", "Defense Tech", "Healthcare", "Clean Energy", "Enterprise Software"],
    signatureExit: "Shopify's 2015 NYSE IPO — Felicis participated in the company's $15 million Series A and rode it to a market capitalization of roughly $148.3 billion by July 2026",
    slug: "felicis",
    website: "https://www.felicis.com",
    short: "Felicis",
    founded: 2006,
    hq: "Menlo Park, CA",
    aum: "$900M (Fund X, 2025)",
    thesis: "Aydin Senkut was Google's first product manager, helping launch the company's first ten international sites, before founding Felicis in 2006 as one of the original 'super angels.' He scaled that early instinct for non-consensus founders into a genuine multi-stage platform, beginning the transition from solo investor to institutional fund in 2010 — the firm's own timeline features the 2015 Shopify and Fitbit IPOs as the proof point. Felicis has since raised FV VII at $510 million in 2020, FV VIII at $600 million and Focus Fund I at $300 million in 2021, and a $900 million Fund X in 2025, its largest yet, while keeping first checks contractually barred from voting against the founder.",
    leadership: [
      { name: "Aydin Senkut", role: "Founder & Managing Partner", profileSlug: "aydin-senkut" }
    ],
    timeline: [
      { year: "2006", event: "Aydin Senkut founds Felicis in Menlo Park after serving as Google's first product manager." },
      { year: "2010", event: "The firm begins its transition from a solo venture to an institutional fund, hiring its first two investors." },
      { year: "2015", event: "Portfolio companies Shopify and Fitbit both go public." },
      { year: "2020", event: "Closes FV VII at $510 million." },
      { year: "2021", event: "Closes FV VIII at $600 million and Focus Fund I at $300 million." },
      { year: "2025", event: "Closes Fund X at $900 million, the firm's largest, on its 19th anniversary." }
    ],
    holdings: [
      { name: "Shopify", ticker: "SHOP", historicalPrice: 107.53, price: 123.56 },
      { name: "Guardant Health", ticker: "GH", historicalPrice: null, price: null },
      { name: "Ginkgo Bioworks", ticker: "DNA", historicalPrice: null, price: null }
    ]
  },
   {
    rank: 37,
    name: "Amplify Partners",
    sectors: ["AI", "Developer Tools", "Cybersecurity", "Enterprise Software", "Cloud Infrastructure"],
    signatureExit: "Datadog's 2019 Nasdaq IPO — Amplify was one of the company's first institutional investors, more than a decade before the observability platform reached a market capitalization of roughly $93 billion by July 2026",
    slug: "amplify-partners",
    website: "https://www.amplifypartners.com",
    short: "Amplify Partners",
    founded: 2012,
    hq: "Menlo Park, CA",
    aum: "$900M (Fund 6, Fund 6 Select & Amplify Bio, June 2025)",
    thesis: "Amplify Partners was founded in 2012 with an unusually specific identity: it calls itself the first investor built for technical founders, not software founders broadly. The firm made its name as one of the earliest institutional backers of Datadog and Fastly more than a decade ago, when technical founders running B2B infrastructure companies were still considered unconventional bets, and it has kept that thesis through waves of developer tools, data infrastructure, and AI/ML platform investing. In June 2025 Amplify closed $900 million across three vehicles — a $400 million core Fund 6, a $300 million Fund 6 Select for follow-on support, and a new $200 million Amplify Bio fund marking its first dedicated push into digital biology.",
    leadership: [
      { name: "Mike Dauber", role: "General Partner" },
      { name: "Sunil Dhaliwal", role: "Founder & General Partner", profileSlug: "sunil-dhaliwal" },
      { name: "Sarah Catanzaro", role: "General Partner" },
      { name: "Lenny Pruss", role: "General Partner" }
    ],
    timeline: [
      { year: "2012", event: "Amplify Partners is founded, built specifically around backing technical founders." },
      { year: "2019", event: "Portfolio company Datadog goes public on the Nasdaq at $27 per share." },
      { year: "2022", event: "Closes its prior pair of funds, continuing to back developer tools and infrastructure founders." },
      { year: "2025", event: "Closes $900 million across Fund 6, Fund 6 Select, and its first dedicated Amplify Bio fund." }
    ],
    holdings: [
      { name: "Datadog", ticker: "DDOG", historicalPrice: 143.63, price: 255.00 }
    ]
  },
   {
    rank: 38,
    name: "Wing Venture Capital",
    sectors: ["AI", "Data Infrastructure", "Enterprise Software", "Cybersecurity", "Developer Tools"],
    signatureExit: "Snowflake's 2020 NYSE IPO — Wing was a first-check investor in the data cloud company, which priced at $120 per share and closed its first trading day valued at over $70 billion",
    slug: "wing-vc",
    website: "https://wing.vc",
    short: "Wing VC",
    founded: 2013,
    hq: "Palo Alto, CA",
    aum: "$600M (Wing Four, 2023)",
    thesis: "Wing Venture Capital was founded in 2013 and has sharpened over time from a classic enterprise-investing heritage into what it now calls an AI-first technology stack firm. The firm's team bios read unusually specifically for a generalist-sized fund — AI infrastructure, AI applications, security, bio times data, and autonomous software — and its public materials frame the mission around AI, data, autonomous applications, and product-led growth rather than enterprise software broadly. Wing was a first-check investor in Snowflake years before its 2020 IPO, and closed Wing Four, a $600 million early-stage fund, in July 2023.",
    leadership: [
    { name: "Gaurav Garg", role: "Founding Partner", profileSlug: "gaurav-garg" },
      { name: "Peter Wagner", role: "Founding Partner" },
      { name: "Sara Choi", role: "Partner" }
    ],
    timeline: [
      { year: "2013", event: "Gaurav Garg and Peter Wagner found Wing Venture Capital in Palo Alto." },
      { year: "2020", event: "Raises a $450 million third fund and publicly highlights Snowflake, Cohesity, and Gong; Snowflake goes public in September." },
      { year: "2023", event: "Closes Wing Four, a $600 million early-stage fund, in July." }
    ],
    holdings: [
      { name: "Snowflake", ticker: "SNOW", historicalPrice: 157.51, price: 250.00 }
    ]
  },
  {
    rank: 37,
    name: "Madrona Venture Group",
    sectors: ["AI", "Cloud Infrastructure", "Enterprise Software", "Marketplaces"],
    signatureExit: "Redfin's 2017 Nasdaq IPO — one of several Madrona 'day one to IPO' partnerships, alongside Smartsheet's 2018 listing and Impinj's public debut",
    slug: "madrona",
    website: "https://www.madrona.com",
    short: "Madrona",
    founded: 1995,
     hq: "Seattle, WA",
  aum: "$770M (Fund X + Acceleration Fund IV, 2025)",
    thesis: "Madrona Venture Group was founded in Seattle in 1995 by Tom Alberg, Paul Goodrich, Gerald Grinstein, and William Ruckelshaus, and built its identity around day-one partnerships it then holds for decades. The firm's own materials lean on Smartsheet, Redfin, Impinj, and Apptio as case studies in patient company formation rather than quick flips — a framing that fits a firm where more than 90% of investments were once concentrated in the Pacific Northwest. Madrona said it managed nearly $1.6 billion when Fund VII closed in 2018, and closed its largest fundraise yet — $770 million across Fund X and Acceleration Fund IV — in January 2025 to mark the firm's 30th year, now focused on applied AI, developer tools, cloud infrastructure, and AI-enabled biology.",
    leadership: [
      { name: "Matt McIlwain", role: "Managing Director", profileSlug: "matt-mcilwain" },
      { name: "Tom Alberg", role: "Co-Founder (1995)" },
      { name: "Paul Goodrich", role: "Co-Founder (1995)" }
    ],
    timeline: [
      { year: "1995", event: "Tom Alberg, Paul Goodrich, Gerald Grinstein, and William Ruckelshaus found Madrona in Seattle." },
      { year: "2000", event: "Matt McIlwain joins the firm as a Managing Director." },
      { year: "2014", event: "Launches Madrona Venture Labs, an in-house startup studio." },
      { year: "2018", event: "Fund VII closes and the firm says it manages nearly $1.6 billion; portfolio company Smartsheet goes public." },
     { year: "2022", event: "Raises $690 million across Fund 9 and Acceleration Fund 3." },
      { year: "2025", event: "Closes its largest fundraise yet, $770 million across Fund X and Acceleration Fund IV, marking the firm's 30th year." }
    ],
    holdings: [
      { name: "Redfin", ticker: "RDFN", historicalPrice: null, price: null },
      { name: "Impinj", ticker: "PI", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 38,
    name: "Haystack",
    sectors: ["Consumer", "Cloud/SaaS", "AI", "Autonomy"],
    signatureExit: "DoorDash's 2020 IPO — Semil Shah invested in DoorDash's $2.5 million seed round in 2013, one of Haystack's very first bets, made within six months of founding the firm",
    slug: "haystack",
    website: "https://haystack.vc",
    short: "Haystack",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$450M+",
    thesis: "Semil Shah founded Haystack in 2013 as one of the original solo general partners in venture capital — a structure he adopted partly because he didn't fit what traditional firms were looking for at the time. He built his investor network the unconventional way, through frequent public writing about startups that drew in the early backers who funded his first checks. Within Haystack's first six months, Shah invested in DoorDash's $2.5 million seed round, a bet that would grow into a company worth tens of billions by its 2020 IPO. He has since backed Instacart, Figma, and HashiCorp — all of which went public or were acquired for billions of dollars — while keeping Haystack a small, tightly focused team built around founder selection above all else.",
    leadership: [
      { name: "Semil Shah", role: "Founder & General Partner", profileSlug: "semil-shah" }
    ],
    timeline: [
      { year: "2013", event: "Semil Shah founds Haystack as a solo general partner." },
      { year: "2013", event: "Invests in DoorDash's $2.5 million seed round within Haystack's first six months." },
      { year: "2018", event: "Also joins Lightspeed Venture Partners as a Venture Partner." },
      { year: "2020", event: "DoorDash goes public." },
      { year: "2022", event: "Shah is named to the Forbes Midas Seed List for the first time, a recognition repeated in 2023 and 2024." }
    ],
    holdings: [
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 },
      { name: "Figma", ticker: "FIG", historicalPrice: null, price: 23.95 }
  ]
  },
  {
    rank: 39,
    name: "Matrix Partners",
    sectors: ["AI", "Infrastructure", "Fintech", "Semiconductors", "B2B Software", "Health Tech"],
    signatureExit: "Oculus VR's 2014 acquisition by Facebook for approximately $2.3 billion — Matrix backed the company at an early stage",
    slug: "matrix-partners",
    website: "https://matrix.vc",
    short: "Matrix Partners",
    founded: 1977,
    hq: "Cambridge, MA",
    aum: "$450M+",
    thesis: "Matrix Partners traces its roots to the 1977 breakup of Hellman Ferri Investment Associates, when co-founder Paul Ferri chose to focus exclusively on very early-stage technology investing while his former partner built a separate later-stage firm — giving Matrix unusually deep roots in the formative era of American venture capital. The firm has deliberately kept its U.S. fund sizes modest, capped around $450 million, even as many peers raised multi-billion-dollar vehicles, preferring to stay a close-knit team of former founders investing from idea through Series A. That contrarian discipline backed Oculus VR at an early stage, a bet that returned dramatically when Facebook acquired the company for approximately $2.3 billion in 2014, and the firm's partner David Skok has become widely known for SaaS metrics essays that remain standard reading for founders industry-wide.",
    leadership: [
      { name: "Paul Ferri", role: "Founder (1977)" },
      { name: "Ilya Sukhar", role: "General Partner", profileSlug: "ilya-sukhar" }
    ],
    timeline: [
      { year: "1977", event: "Paul Ferri founds Matrix Partners in the breakup of Hellman Ferri Investment Associates." },
      { year: "2001", event: "Matrix VII closes at $1 billion, before the firm later shifts to smaller, more disciplined fund sizes." },
      { year: "2012", event: "Backs Oculus VR at an early stage." },
      { year: "2014", event: "Facebook acquires Oculus VR for approximately $2.3 billion." },
      { year: "2016", event: "Ilya Sukhar joins as a General Partner after selling Parse to Facebook." }
    ],
    holdings: [
      { name: "HubSpot", ticker: "HUBS", historicalPrice: null, price: null }
    ]
  },
   {
    rank: 40,
    name: "BOLD Capital Partners",
    sectors: ["AI", "Healthcare", "Robotics", "Climate"],
    signatureExit: "No single dollar-verified signature exit — BOLD's clearest proof points are two portfolio companies that reached the public markets via Hong Kong listings: Insilico Medicine (HKEX: 3696) and Deep Longevity (SEHK: 0575)",
    slug: "bold-capital-partners",
    website: "https://boldcapitalpartners.com",
    short: "BOLD Capital",
    founded: 2015,
    hq: "Santa Monica, CA",
    aum: "~$500M (across its main fund and dedicated vehicles, per third-party reporting)",
    thesis: "BOLD Capital Partners was founded in 2015 by Peter Diamandis, the space and longevity entrepreneur behind XPRIZE and Singularity University, alongside Teymour Boutros-Ghali, Neal Bhadkamkar, and Emilio Diez Barroso. The firm is best understood as a convergence investor rather than a category-siloed one: its own language centers on technologies at the intersection of the physical, digital, virtual, and biological worlds, with especially heavy emphasis on longevity, synthetic biology, AI, and robotics. That framing shows up directly in its portfolio, which includes two companies that went public via Hong Kong exchange listings — Insilico Medicine and Deep Longevity — alongside continued early-stage bets in advanced robotics and construction technology.",
    leadership: [
  { name: "Peter Diamandis", role: "Co-Founder & Partner" },
      { name: "Teymour Boutros-Ghali", role: "Co-Founder & Managing Partner", profileSlug: "teymour-boutros-ghali" },
      { name: "Neal Bhadkamkar", role: "General Partner" },
      { name: "Emilio Diez Barroso", role: "General Partner" }
    ],
    timeline: [
      { year: "2015", event: "Peter Diamandis and Teymour Boutros-Ghali co-found BOLD Capital Partners in Santa Monica." },
      { year: "2019", event: "Portfolio company Insilico Medicine and Deep Longevity begin building toward eventual Hong Kong exchange listings." },
      { year: "2024", event: "Insilico Medicine and Deep Longevity both complete public listings on the Hong Kong Stock Exchange." }
    ],
    holdings: []
  },
   {
    rank: 41,
    name: "Porsche Ventures",
    sectors: ["Mobility", "Climate", "Enterprise Software"],
    signatureExit: "No single dollar-verified signature exit — confirmed outcomes include Fleetonomy's 2020 sale to digital infrastructure company Via and Greyp Bikes' 2021 acquisition by Porsche itself, though neither transaction's value was publicly disclosed",
    slug: "porsche-ventures",
    website: "https://porsche.ventures",
    short: "Porsche Ventures",
    founded: 2016,
    hq: "Stuttgart, Germany",
    aum: "Up to €250M allocated (2023 announcement)",
    thesis: "Porsche Ventures has operated since 2016 as one of the clearest examples of strategic industrial value-add among corporate venture arms, built around commercialization help, supply-chain access, and the broader Porsche/VW ecosystem rather than capital alone. Under Managing Director Ulrich Thiem, who took over in 2019 after joining Porsche's legal department in 2011, the firm runs two tailored investment portfolios — one close to Porsche's core auto-tech business investing mainly at Series B, the other spanning intelligent enterprise and sustainability more broadly. In April 2023 Porsche earmarked up to €250 million for new and existing venture investments, operating from a distributed team across Stuttgart, Berlin, Palo Alto, Los Angeles, and Tel Aviv.",
    leadership: [
      { name: "Ulrich Thiem", role: "Managing Director", profileSlug: "ulrich-thiem" },
      { name: "Patrick Huke", role: "Head of Porsche Ventures Europe" }
    ],
    timeline: [
      { year: "2011", event: "Ulrich Thiem joins Porsche, initially in its legal department." },
      { year: "2016", event: "Porsche establishes Porsche Ventures, headquartered in Stuttgart." },
      { year: "2019", event: "Thiem becomes Managing Director of Porsche Ventures." },
      { year: "2020", event: "Portfolio company Fleetonomy, an Israeli smart fleet mobility firm, is sold to Via." },
      { year: "2021", event: "Portfolio company Greyp Bikes, an ebike manufacturer, is acquired by Porsche itself." },
      { year: "2023", event: "Porsche earmarks up to €250 million for new and existing venture investments." }
    ],
    holdings: []
  },
  {
    rank: 40,
    name: "Uncork Capital",
    sectors: ["Consumer Internet", "SaaS", "Marketplaces"],
    signatureExit: "SendGrid's 2017 IPO, followed by its 2019 acquisition by Twilio — Uncork backed the email infrastructure company as a seed investor years before either milestone",
    slug: "uncork-capital",
    website: "https://uncorkcapital.com",
    short: "Uncork",
    founded: 2004,
    hq: "San Francisco, CA",
    aum: "$300M+ (recent funds)",
    thesis: "Uncork Capital, originally founded as SoftTech VC in 2004 by Jeff Clavier, was one of the first dedicated seed-stage venture firms in Silicon Valley, and its 2007 fund is often cited as one of the first to be labeled a 'micro-VC.' Clavier, who immigrated to the U.S. in 2000 after serving as CTO of a French fintech startup acquired by Reuters, built the firm around being the first substantial check and the longest relationship a founding team has. That approach backed SendGrid as a seed investor years before its 2017 IPO and 2019 acquisition by Twilio, along with Fitbit, Eventbrite, Postmates, and Poshmark. The firm is now led by Managing Partner Andy McLoughlin, with Clavier continuing as Founding Partner.",
    leadership: [
      { name: "Jeff Clavier", role: "Founding Partner", profileSlug: "jeff-clavier" },
      { name: "Andy McLoughlin", role: "Managing Partner" }
    ],
    timeline: [
      { year: "2004", event: "Jeff Clavier founds SoftTech VC (later renamed Uncork Capital) in Palo Alto." },
      { year: "2007", event: "Raises one of the first funds to be labeled 'micro-VC,' a $15 million Fund II." },
      { year: "2017", event: "Portfolio company SendGrid goes public." },
      { year: "2019", event: "Twilio acquires SendGrid." },
      { year: "2025", event: "Raises $300 million combined across two new funds, Uncork VIII and Uncork Plus IV." }
    ],
    holdings: [
      { name: "Eventbrite", ticker: "EB", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 41,
    name: "NextView Ventures",
    sectors: ["Marketplaces", "Consumer", "Digital Health", "Vertical SaaS"],
    signatureExit: "ThredUp's 2021 Nasdaq IPO — NextView backed the online consignment marketplace as a seed-stage investor years before its public debut",
    slug: "nextview-ventures",
    website: "https://nextview.vc",
    short: "NextView",
    founded: 2010,
    hq: "Boston, MA",
    aum: "$300M+",
    thesis: "Rob Go, David Beisel, and Lee Hower founded NextView Ventures in 2010 on a contrarian thesis for the time: that a dedicated seed-stage specialist firm belonged outside the Bay Area, built around what the firm calls the 'Everyday Economy' — startups that redesign the habitual moments of daily life for large populations, from commerce to health to money. That focus led NextView to an early stake in Attentive, which grew into a roughly $10 billion company, and to backing ThredUp ahead of its 2021 Nasdaq IPO. The firm has stayed a lean, partnership-based team where every partner can lead investments, deliberately avoiding the largest, most competitive Silicon Valley deals in favor of conviction-driven bets closer to home.",
    leadership: [
      { name: "Rob Go", role: "Co-Founder & Partner", profileSlug: "rob-go" },
      { name: "David Beisel", role: "Co-Founder & Partner" },
      { name: "Lee Hower", role: "Co-Founder & Partner" }
    ],
    timeline: [
      { year: "2010", event: "Rob Go, David Beisel, and Lee Hower found NextView Ventures in Boston." },
      { year: "2012", event: "Closes its first fund at $21 million." },
      { year: "2017", event: "Closes a $50 million fund, its largest to that point." },
      { year: "2021", event: "Portfolio company ThredUp goes public on Nasdaq." }
    ],
    holdings: [
      { name: "ThredUp", ticker: "TDUP", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 42,
    name: "SV Angel",
    sectors: ["Consumer Internet", "Early-Stage Technology"],
    signatureExit: "Twitter, Facebook, and PayPal's early growth — SV Angel and founder Ron Conway's Angel Investors LP were among the first checks into all three before they became household names",
    slug: "sv-angel",
    website: "https://svangel.com",
    short: "SV Angel",
    founded: 2005,
    hq: "San Francisco, CA",
    aum: "$285M+",
    thesis: "Ron Conway had already taken Altos Computer Systems public in 1982 and founded one of the first institutional angel funds, Angel Investors LP, in 1998, before launching SV Angel in 2005. Known as the 'Godfather of Silicon Valley,' Conway built a reputation for being one of the very first checks into companies that became generational technology giants — Google, Facebook, Twitter, PayPal, and Airbnb among them. Conway retired from active day-to-day investing in 2018, and in 2025 the firm — now run alongside his sons Ronny and Topher — announced it would stop raising traditional funds in favor of smaller, more personal checks.",
    leadership: [
      { name: "Ron Conway", role: "Founder & Managing Partner", profileSlug: "ron-conway" },
      { name: "Topher Conway", role: "Managing Partner" }
    ],
    timeline: [
      { year: "1998", event: "Ron Conway founds Angel Investors LP, an early institutional angel fund." },
      { year: "2005", event: "Launches SV Angel, backing Google, Facebook, Twitter, and PayPal at the earliest stages." },
      { year: "2018", event: "Conway retires from active investing to focus on philanthropy." },
      { year: "2025", event: "SV Angel announces it will stop raising new funds, continuing to invest smaller amounts directly." }
    ],
    holdings: [
      { name: "Meta Platforms", ticker: "META", historicalPrice: null, price: 646.01 }
    ]
  },
  {
    rank: 43,
    name: "Precursor Ventures",
    sectors: ["Software", "Hardware", "Consumer"],
    signatureExit: "The Athletic's 2022 acquisition by The New York Times for $525 million — Precursor backed the sports media company years before the deal, as one of founder Charles Hudson's earliest bets",
    slug: "precursor-ventures",
    website: "https://precursorvc.com",
    short: "Precursor",
    founded: 2015,
    hq: "San Francisco, CA",
    aum: "$250M+",
    thesis: "Charles Hudson founded Precursor Ventures in 2015 after eight years at SoftTech VC — later renamed Uncork Capital — where he focused on mobile infrastructure and marketplace investments. He built Precursor as a solo general partner making all investment decisions himself, deliberately running an intentionally high-volume model of 75 to 100 investments per fund to back first-time and underrepresented founders who often lack the traditional networks that open doors at bigger firms. That model backed The Athletic years before The New York Times acquired the sports media company for $525 million in 2022, and Precursor has since grown to five funds and more than $250 million under management.",
    leadership: [
      { name: "Charles Hudson", role: "Managing Partner & Founder", profileSlug: "charles-hudson" }
    ],
    timeline: [
      { year: "2010", event: "Serious Business, where Hudson serves as VP of Business Development, is acquired by Zynga." },
      { year: "2015", event: "Charles Hudson leaves Uncork Capital (then SoftTech VC) to found Precursor Ventures as a solo GP." },
      { year: "2022", event: "Portfolio company The Athletic is acquired by The New York Times for $525 million." },
      { year: "2025", event: "Precursor closes its fifth fund at $66 million." }
    ],
    holdings: []
  },
  {
    rank: 44,
    name: "First Round Capital",
    sectors: ["Consumer Internet", "Marketplaces", "Fintech", "SaaS"],
    signatureExit: "Uber's 2019 IPO — First Round led the company's first-ever institutional funding round in 2010, a roughly $1.25 million bet that became one of the highest-multiple returns in venture history",
    slug: "first-round-capital",
    website: "https://firstround.com",
    short: "First Round",
    founded: 2004,
    hq: "San Francisco, CA",
    aum: "$200M+ (per fund, not cumulative)",
    thesis: "First Round Capital was founded in 2004 by Josh Kopelman, a serial entrepreneur who had already taken one company public and sold another to eBay, together with Howard Morgan, a co-founder of Idealab and founding president of Renaissance Technologies. The firm set out specifically to reinvent seed-stage investing, deliberately writing small initial checks — often just $500,000 to $1.5 million — to companies with little more than a founding team and an idea. That approach paid off spectacularly in 2010, when First Round led Uber's first-ever institutional funding round, a bet that grew into one of the highest-multiple returns in venture capital history.",
    leadership: [
      { name: "Josh Kopelman", role: "Founder & Managing Director", profileSlug: "josh-kopelman" },
      { name: "Howard Morgan", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2004", event: "Josh Kopelman and Howard Morgan found First Round Capital to specialize in seed-stage investing." },
      { year: "2010", event: "Leads Uber's first-ever institutional funding round, investing roughly $1.25 million." },
      { year: "2015", event: "Portfolio company Square goes public." },
      { year: "2019", event: "Uber goes public at a valuation exceeding $70 billion." },
      { year: "2021", event: "Portfolio company Roblox goes public." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Square (Block)", ticker: "XYZ", historicalPrice: null, price: 79.94 },
      { name: "Roblox", ticker: "RBLX", historicalPrice: null, price: 51.68 }
    ]
  },
  {
    rank: 45,
    name: "Costanoa Ventures",
    sectors: ["Applied AI", "AI & Data Infrastructure", "Cybersecurity", "National Security", "Fintech"],
    signatureExit: "SGNL's acquisition by CrowdStrike in January 2026 — Costanoa backed the identity security startup years before the deal, alongside its earlier VictorOps exit to Splunk in 2018",
    slug: "costanoa-ventures",
    website: "https://www.costanoavc.com",
    short: "Costanoa Ventures",
    founded: 2012,
    hq: "San Francisco, CA",
    aum: "$175M+ (Fund III)",
    thesis: "Greg Sands was Netscape's first product manager and a business development manager at Cisco before becoming a Managing Director at Sutter Hill Ventures, then founding Costanoa Ventures in 2012 to lead Seed and Series A rounds in complex, high-impact markets where deep sector expertise matters — applied AI, data infrastructure, cybersecurity, and fintech among them. Costanoa backed VictorOps at Series A, which Splunk acquired in 2018, and more recently backed SGNL, acquired by CrowdStrike in January 2026. The firm closed its $175 million Fund III in 2017 and has stayed disciplined about leading rounds in categories it believes require real technical depth to evaluate correctly.",
    leadership: [
      { name: "Greg Sands", role: "Founder & Managing Partner", profileSlug: "greg-sands" }
    ],
    timeline: [
      { year: "2012", event: "Greg Sands founds Costanoa Ventures after roles at Netscape, Cisco, and Sutter Hill Ventures." },
      { year: "2013", event: "Publishes Costanoa's investment thesis behind VictorOps." },
      { year: "2017", event: "Closes Costanoa's $175 million Fund III." },
      { year: "2018", event: "VictorOps, backed at Series A, is acquired by Splunk." },
      { year: "2026", event: "SGNL, another Costanoa portfolio company, is acquired by CrowdStrike." }
    ],
    holdings: []
  },
  {
    rank: 46,
    name: "Equal Ventures",
    sectors: ["Climate", "Insurance", "Retail", "Supply Chain"],
    signatureExit: "No public exit yet — Equal Ventures has focused its $175 million in capital on bringing software into legacy industries like insurance, climate, and supply chain",
    slug: "equal-ventures",
    website: "https://www.equal.vc",
    short: "Equal Ventures",
    founded: 2020,
    hq: "New York, NY",
    aum: "$175M+ (Fund II + Opportunity Fund)",
    thesis: "Rick Zullo worked at Deloitte and as an investor at Lightbank and Lightview Capital before co-founding Equal Ventures in 2020, built around a deliberately research-heavy, thesis-driven approach to backing founders bringing software into legacy industries — climate, insurance, retail, and supply chain among them — rather than chasing generic software categories. Zullo has been closely associated with Equal's investments in SmartHop and David Energy, and helped grow the firm to $175 million in combined capital across its second fund and opportunity vehicle by 2024, while continuing to publish detailed sector research across insurance and climate.",
    leadership: [
      { name: "Rick Zullo", role: "Co-Founder & Managing Partner", profileSlug: "rick-zullo" }
    ],
    timeline: [
      { year: "2020", event: "Rick Zullo co-founds Equal Ventures, launching a $56 million debut fund." },
      { year: "2022", event: "Closes a second fund and opportunity vehicle." },
      { year: "2024", event: "Announces $175 million in combined capital to 'bridge the digital divide' by bringing software into legacy industries." }
    ],
    holdings: []
  },
  {
    rank: 47,
    name: "Susa Ventures",
    sectors: ["Enterprise Software", "Fintech", "Healthcare"],
    signatureExit: "Robinhood's 2021 IPO — Susa's very first investment was a $250,000 seed check into Robinhood in 2013, a bet that grew into a roughly $400 million return, close to a 1,000x multiple",
    slug: "susa-ventures",
    website: "https://susaventures.com",
    short: "Susa",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$175M+ (latest fund)",
    thesis: "Susa Ventures was founded in 2013 by Chad Byers, Leo Polovets, and Seth Berman in San Francisco, named after a family of mountain gorillas in Rwanda. The firm's first-ever investment, made just after closing a $25 million debut fund following an 11-month fundraise, was a $250,000 seed check into a fintech startup called Robinhood — a bet Byers made after its founders demoed the app to him at a Sand Hill Road hotel. When Robinhood went public in 2021, that original stake had grown into a return of roughly $400 million, close to a 1,000x multiple. Susa has since backed Flexport, Newfront Insurance, and Stord, deliberately keeping its fund sizes modest — 'your fund size is your strategy,' Byers has said — while raising more than $1 billion cumulatively.",
    leadership: [
      { name: "Chad Byers", role: "Co-Founder & General Partner", profileSlug: "chad-byers" },
      { name: "Leo Polovets", role: "Co-Founder & General Partner" },
      { name: "Seth Berman", role: "Co-Founder & General Partner" }
    ],
    timeline: [
      { year: "2013", event: "Chad Byers, Leo Polovets, and Seth Berman found Susa Ventures in San Francisco." },
      { year: "2013", event: "Leads the firm's first-ever investment, a $250,000 seed check into Robinhood." },
      { year: "2021", event: "Robinhood goes public; Susa's original stake has grown into a return of roughly $400 million." },
      { year: "2025", event: "Susa closes its $175 million fifth flagship fund." }
    ],
    holdings: [
      { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.96 }
    ]
  },
  {
    rank: 48,
    name: "645 Ventures",
    sectors: ["Fintech", "Enterprise", "Healthtech", "Cybersecurity", "Infrastructure & Developer Tools"],
    signatureExit: "Oort's acquisition by Cisco — one of several strategic exits in 645's portfolio, alongside LeagueApps' acquisition by Accel-KKR",
    slug: "645-ventures",
    website: "https://www.645ventures.com",
    short: "645 Ventures",
    founded: 2013,
    hq: "New York, NY",
    aum: "$160M+ (Fund III)",
    thesis: "Nnamdi Okike spent his early career as an investor at Insight Partners, where his track record includes 19 investments and nine exits totaling more than $9 billion in exit value, including Mimecast and Privalia. He co-founded 645 Ventures in 2013, building the firm around an internal data platform, Voyager, that combines early-stage investing with a large operating network. 645's own portfolio has produced exits including Oort, acquired by Cisco, and LeagueApps, acquired by Accel-KKR, alongside investments in Iterable, Overtime, and RentSpree. The firm closed its $160 million Fund III in 2020.",
    leadership: [
      { name: "Nnamdi Okike", role: "Co-Founder & Managing Partner", profileSlug: "nnamdi-okike" }
    ],
    timeline: [
      { year: "2013", event: "Nnamdi Okike co-founds 645 Ventures after a career as an investor at Insight Partners." },
      { year: "2014", event: "Begins deploying 645's software-powered investing strategy." },
      { year: "2020", event: "Closes 645's $160 million Fund III." },
      { year: "2023", event: "Okike is named to the Forbes Midas Brink list." }
    ],
    holdings: []
  },
  {
    rank: 49,
    name: "Eniac Ventures",
    sectors: ["Technology", "Software", "Robotics", "SaaS"],
    signatureExit: "No public portfolio exit yet — Eniac has focused exclusively on seed-stage investing since 2009",
    slug: "eniac-ventures",
    website: "https://eniac.vc",
    short: "Eniac Ventures",
    founded: 2009,
    hq: "New York, NY",
    aum: "$160M+ (Fund VI)",
    thesis: "Before co-founding Eniac Ventures in 2009, Nihal Mehta founded five startups himself, including ipsh!, acquired by Omnicom, and LocalResponse, acquired by BlueCava — a founder-first background that shaped Eniac's seed-stage, product-market-fit-focused approach ever since. The firm has grown its platform model with each successive fund, closing its sixth, at $160 million, in 2025, and continues to invest specifically at the seed stage across technology, software, robotics, and SaaS.",
    leadership: [
      { name: "Nihal Mehta", role: "Co-Founder & General Partner", profileSlug: "nihal-mehta" }
    ],
    timeline: [
      { year: "1999", event: "Nihal Mehta begins founding the first of five startups, ahead of a later shift into venture capital." },
      { year: "2009", event: "Co-founds Eniac Ventures as a seed-stage specialist." },
      { year: "2025", event: "Closes Eniac's $160 million Fund VI." }
    ],
    holdings: []
  },
  {
    rank: 50,
    name: "Fika Ventures",
    sectors: ["B2B Software", "Fintech", "Marketplaces", "AI Services", "Manufacturing", "Supply Chain"],
    signatureExit: "SGNL's acquisition by CrowdStrike for $740 million in 2026 — Fika backed the identity security startup as an early investor, alongside earlier exits like Openpath Security to Motorola Solutions",
    slug: "fika-ventures",
    website: "https://fika.vc",
    short: "Fika Ventures",
    founded: 2016,
    hq: "Los Angeles, CA",
    aum: "$160M+ (Fund IV)",
    thesis: "Eva Ho was a senior product marketing manager at Google and YouTube, then a founding executive at Factual and a founding general partner at Susa Ventures, before co-founding Fika Ventures in 2016 around the idea that founder service — business development, recruiting, and capital strategy help — is itself the product a firm sells. That approach helped Fika back SGNL, which CrowdStrike acquired for $740 million in 2026, along with earlier exits like Openpath Security to Motorola Solutions and Berbix to Socure. Fika closed its $160 million Fund IV in 2024.",
    leadership: [
      { name: "Eva Ho", role: "Co-Founder & General Partner", profileSlug: "eva-ho" }
    ],
    timeline: [
      { year: "2016", event: "Eva Ho co-founds Fika Ventures after roles at Google, YouTube, Factual, and Susa Ventures." },
      { year: "2021", event: "Fika is widely discussed as a $77 million seed fund." },
      { year: "2024", event: "Closes Fika's $160 million Fund IV." },
      { year: "2026", event: "Portfolio company SGNL is acquired by CrowdStrike for $740 million." }
    ],
    holdings: []
  },
  {
    rank: 51,
    name: "Mercury Fund",
    sectors: ["AI", "Blockchain", "Frontier Technologies", "Defense & Security"],
    signatureExit: "Performix's acquisition by Honeywell in 2021 — one of several strategic exits in Mercury's two-decade Midcontinent-focused portfolio, alongside PactSafe's acquisition by Ironclad",
    slug: "mercury-fund",
    website: "https://mercuryfund.com",
    short: "Mercury Fund",
    founded: 2005,
    hq: "Houston, TX",
    aum: "$160M+ (Fund V)",
    thesis: "Blair Garrou spent his early career in investment banking, credit analysis, and auditing before becoming CEO of Intermat and a principal at Genesis Park, then co-founded Mercury Fund in 2005 on the premise that innovation is not a coastal phenomenon — building the firm into one of the most active early-stage investors across the U.S. Midcontinent. Mercury's portfolio has produced exits including Performix, acquired by Honeywell in 2021, and PactSafe, acquired by Ironclad. Garrou closed Mercury's $160 million Fund V in 2023 and has led the firm's recent expansion into defense and frontier technology, including a major financing for Venus Aerospace.",
    leadership: [
      { name: "Blair Garrou", role: "Managing Partner & Co-Founder", profileSlug: "blair-garrou" }
    ],
    timeline: [
      { year: "2005", event: "Blair Garrou co-founds Mercury Fund after roles as CEO of Intermat and Principal at Genesis Park." },
      { year: "2021", event: "Portfolio company Performix is acquired by Honeywell." },
      { year: "2023", event: "Closes Mercury's $160 million Fund V." },
      { year: "2025", event: "Leads a major financing for defense-tech company Venus Aerospace as Mercury expands into frontier technology." }
    ],
    holdings: []
  },
  {
    rank: 52,
    name: "New Markets Venture Partners",
    sectors: ["Education Technology", "Workforce Development", "Social-Impact Software"],
    signatureExit: "PowerSchool's 2021 IPO on NYSE — one of New Markets' notable exits across two decades of dedicated edtech and workforce investing, alongside Galvanize's acquisition by K12",
    slug: "new-markets-venture-partners",
    website: "https://www.newmarketsvp.com",
    short: "New Markets Venture Partners",
    founded: 2003,
    hq: "Fulton, MD",
    aum: "$160M+ (latest fund)",
    thesis: "Mark Grovic has been investing in high-growth companies since 1992, including early impact-investing work at Calvert Group decades before ESG became mainstream, and co-founded the Templeton Emerging Europe Fund before co-founding New Markets Venture Partners in 2003. The firm has stayed exclusively focused on education and workforce technology for more than two decades, generating over $3.3 billion in enterprise value and completing 21 realized exits, including PowerSchool's 2021 IPO and Galvanize's acquisition by K12. Grovic closed New Markets' oversubscribed fifth fund at over $160 million in 2023.",
    leadership: [
      { name: "Mark Grovic", role: "Co-Founder & General Partner", profileSlug: "mark-grovic" }
    ],
    timeline: [
      { year: "1992", event: "Mark Grovic begins investing in high-growth companies, including impact-oriented work at Calvert Group." },
      { year: "2003", event: "Co-founds New Markets Venture Partners in Fulton, Maryland." },
      { year: "2021", event: "Portfolio company PowerSchool goes public on NYSE." },
      { year: "2023", event: "Closes New Markets' oversubscribed fifth fund at over $160 million." }
    ],
    holdings: []
  },
  {
    rank: 53,
    name: "Work-Bench",
    sectors: ["Enterprise Software", "AI/ML", "Developer Tools", "Infrastructure", "Security"],
    signatureExit: "CoreOS's acquisition by Red Hat — one of several enterprise infrastructure exits in Work-Bench's portfolio, alongside Semmle's acquisition by GitHub",
    slug: "work-bench",
    website: "https://www.work-bench.com",
    short: "Work-Bench",
    founded: 2013,
    hq: "New York, NY",
    aum: "$160M+ (latest fund)",
    thesis: "Jonathan Lehr worked in Morgan Stanley's Office of the CIO before co-founding Work-Bench in 2013, built around a highly specialized bet: that distribution, customer access, and enterprise community-building are as much a part of what a firm sells founders as the capital itself. Lehr publicly championed Cockroach Labs as a foundational enterprise infrastructure bet years before it became a major database company, and Work-Bench's broader portfolio has produced exits including CoreOS to Red Hat, Semmle to GitHub, and FireHydrant to Freshworks. The firm announced its new $160 million fund in 2025.",
    leadership: [
      { name: "Jonathan Lehr", role: "Co-Founder & General Partner", profileSlug: "jonathan-lehr" }
    ],
    timeline: [
      { year: "2013", event: "Jonathan Lehr co-founds Work-Bench in New York, building an enterprise-tech community around the firm from day one." },
      { year: "2016", event: "Publicly writes about backing Cockroach Labs as a foundational enterprise infrastructure bet." },
      { year: "2025", event: "Announces Work-Bench's new $160 million fund." }
    ],
    holdings: []
  },
  {
    rank: 54,
    name: "Rise of the Rest Seed Fund",
    sectors: ["Geographically Broad Early-Stage Investing (Outside Silicon Valley, Boston, and New York)"],
    signatureExit: "AppHarvest became Rise of the Rest's first publicly traded portfolio company after its SPAC debut, though it is no longer independently traded today — the fund's first-ever investment was in Anduril, before it became a defense-tech giant",
    slug: "rise-of-the-rest-seed-fund",
    website: "https://www.revolution.com/rise-of-the-rest/",
    short: "Rise of the Rest",
    founded: 2017,
    hq: "Washington, DC",
    aum: "$150M+ (seed fund)",
    thesis: "David Hall joined Revolution in 2006 and worked across both Revolution Growth and Revolution Ventures before taking on leadership of the Rise of the Rest Seed Fund, a $150 million vehicle built around one of the clearest geography-led theses in venture capital: back high-growth startups outside Silicon Valley, Boston, and New York, and use Revolution's platform and brand to strengthen local ecosystems. The fund made its first-ever investment in Anduril at seed, years before the company became a major defense-technology player, and AppHarvest became Rise of the Rest's first publicly traded portfolio company, though it is no longer independently traded today.",
    leadership: [
      { name: "David Hall", role: "Managing Partner", profileSlug: "david-hall" }
    ],
    timeline: [
      { year: "2006", event: "David Hall joins Revolution, working across Revolution Growth and Revolution Ventures." },
      { year: "2014", event: "The Rise of the Rest initiative launches with its first bus tour across overlooked startup regions." },
      { year: "2017", event: "The dedicated $150 million Rise of the Rest Seed Fund launches." },
      { year: "2018", event: "First fund investments are announced, including the fund's first check into Anduril." }
    ],
    holdings: []
  },
  {
    rank: 55,
    name: "Floodgate",
    sectors: ["Consumer Internet", "SaaS", "Marketplaces", "Fintech", "Infrastructure"],
    signatureExit: "Lyft's 2019 Nasdaq IPO — Ann Miura-Ko's seed bet in the company then known as Zimride is among the best-known pre-seed checks in venture capital",
    slug: "floodgate",
    website: "https://floodgate.com",
    short: "Floodgate",
    founded: 2008,
    hq: "Menlo Park, CA",
    aum: "$150M (latest closed fund)",
    thesis: "Floodgate was built by Mike Maples Jr. and Ann Miura-Ko as a dedicated pre-seed and seed specialist, operating first as Maples Investments before taking the Floodgate name in March 2010. Its identity is less a narrow sector thesis than a willingness to hold conviction in breakout founders before anyone else will — Miura-Ko has written that she was told she was 'insane' to start the firm in the middle of the financial crisis, then gave birth to her second child, defended her Stanford PhD six weeks later, and was already on her way to making her first investment in TaskRabbit. That posture produced her best-known early bet, the Zimride seed round that became Lyft, and TechCrunch reported the firm at roughly $500 million in assets in 2022 alongside a recently closed $150 million fund.",
    leadership: [
      { name: "Ann Miura-Ko", role: "Co-Founding Partner", profileSlug: "ann-miura-ko" },
      { name: "Mike Maples Jr.", role: "Co-Founding Partner" }
    ],
    timeline: [
      { year: "2008", event: "Ann Miura-Ko co-founds the firm with Mike Maples Jr. in the middle of the financial crisis." },
      { year: "2010", event: "Maples Investments is renamed Floodgate Fund in March; Miura-Ko makes her seed bet in Zimride, later Lyft." },
      { year: "2018", event: "Miura-Ko co-founds All Raise, the nonprofit focused on diversity in venture capital." },
      { year: "2021", event: "Closes a seventh fund at $146 million." },
      { year: "2022", event: "TechCrunch reports roughly $500 million in assets under management and a recently closed $150 million fund." },
      { year: "2026", event: "Floodgate files to raise a new $130 million fund." }
    ],
    holdings: []
  },
  {
    rank: 56,
    name: "Bullpen Capital",
    sectors: ["Post-Seed / Early-Stage Technology (Generalist)"],
    signatureExit: "No public exit yet documented — Bullpen's distinct 'post-seed' strategy focuses on backing overlooked companies after their earliest funding round",
    slug: "bullpen-capital",
    website: "https://www.bullpencapital.com",
    short: "Bullpen Capital",
    founded: 2010,
    hq: "San Francisco, CA",
    aum: "$145M+ (Fund VI)",
    thesis: "Paul Martino founded Bullpen Capital around a genuinely distinct strategy in venture capital: rather than specializing by sector, Bullpen specializes by timing, investing just after a company's earliest angel or seed round in businesses that have found real product-market fit but remain overlooked by other investors. That 'post-seed' and 'unloved gems' thesis has carried the firm through more than a decade of investing, including its largest fund yet, a $145 million Fund VI raised in 2022.",
    leadership: [
      { name: "Paul Martino", role: "Founder & Managing Partner", profileSlug: "paul-martino" }
    ],
    timeline: [
      { year: "2010s", event: "Paul Martino founds Bullpen Capital around a timing-based 'post-seed' investing strategy, rather than a sector specialization." },
      { year: "2022", event: "Raises Bullpen's largest fund yet, $145 million Fund VI." },
      { year: "2023", event: "Public reporting describes the fund as centered on backing overlooked 'unloved gems' that already have product-market fit." }
    ],
    holdings: []
  },
  {
    rank: 57,
    name: "Harlem Capital",
    sectors: ["Industry-Agnostic (Enterprise & Consumer Technology)", "Diverse Founders"],
    signatureExit: "No public exit yet — Harlem Capital has grown from a Harlem living-room angel syndicate into a $134 million institutional seed fund across two funds",
    slug: "harlem-capital",
    website: "https://www.harlem.capital",
    short: "Harlem Capital",
    founded: 2015,
    hq: "New York, NY",
    aum: "$134M+ (Fund II)",
    thesis: "Henri Pierre-Jacques co-founded Harlem Capital in 2015 as an angel syndicate started in a Harlem living room, after earlier work in private equity and investment banking and an education at Duke University and Harvard Business School. He has built the firm around a multi-decade mission — changing the face of entrepreneurship by backing diverse founders — while still operating with the discipline of a focused seed fund, writing roughly $750,000 to $1.5 million checks for meaningful ownership stakes. Harlem Capital grew from a $40 million inaugural fund in 2019 to a $134 million Fund II in 2021.",
    leadership: [
      { name: "Henri Pierre-Jacques", role: "Managing Partner & Co-Founder", profileSlug: "henri-pierre-jacques" }
    ],
    timeline: [
      { year: "2015", event: "Henri Pierre-Jacques co-founds Harlem Capital as an angel syndicate, launched in a Harlem living room." },
      { year: "2019", event: "Closes Harlem Capital's $40 million inaugural institutional fund." },
      { year: "2021", event: "Closes Harlem Capital's $134 million Fund II." },
      { year: "2023", event: "Harlem Capital has raised two funds and made 60 investments." }
    ],
    holdings: []
  },
  {
    rank: 58,
    name: "Freestyle",
    sectors: ["Generalist Early-Stage Technology"],
    signatureExit: "Digit's acquisition by Oportun for approximately $212.9 million — one of the clearest exits associated with Freestyle's broader seed-stage portfolio",
    slug: "freestyle",
    website: "https://freestyle.vc",
    short: "Freestyle",
    founded: 2009,
    hq: "San Francisco, CA",
    aum: "$130M+ (Fund VI)",
    thesis: "Jenny Lefcourt worked as a CPA in New York before co-founding WeddingChannel while attending Stanford Graduate School of Business, giving her direct founder experience before she became a full-time investor. She joined Freestyle as a General Partner in 2014, backing early-stage generalist technology companies including Discord, BetterUp, Crexi, and Narvar, and helped the firm close its $130 million Fund VI in 2022. Lefcourt was named to Business Insider's Seed 40 list in 2025, reflecting Freestyle's pitch to founders: experienced seed leadership grounded in real operator empathy rather than a narrow sector thesis.",
    leadership: [
      { name: "Jenny Lefcourt", role: "General Partner", profileSlug: "jenny-lefcourt" }
    ],
    timeline: [
      { year: "1999", event: "Jenny Lefcourt co-founds WeddingChannel while attending Stanford Graduate School of Business, after working as a CPA in New York." },
      { year: "2014", event: "Joins Freestyle as a General Partner." },
      { year: "2022", event: "Freestyle closes its $130 million Fund VI." },
      { year: "2025", event: "Named to Business Insider's Seed 40 list." }
    ],
    holdings: []
  },
  {
    rank: 59,
    name: "Baseline Ventures",
    sectors: ["Consumer Internet", "Mobile", "Early-Stage Software"],
    signatureExit: "Instagram's 2012 acquisition by Facebook for roughly $1 billion — founder Steve Anderson was Instagram's very first investor",
    slug: "baseline-ventures",
    website: "https://www.baselinev.com",
    short: "Baseline",
    founded: 2006,
    hq: "Jackson, WY",
    aum: "$100M+ (recent funds)",
    thesis: "Steve Anderson left roles at Microsoft, eBay, and Starbucks to found Baseline Ventures in 2006, running it ever since as a genuine one-person operation — sourcing, deciding, and closing every deal himself, often within 30 minutes of meeting a founder. His defining bet came in 2010, when he became the very first investor in a photo-sharing app called Instagram, backing founders Kevin Systrom and Mike Krieger before the company had much more than an idea. Anderson turned roughly $70 million raised across his first three funds into $700 million, and was the largest shareholder in Stitch Fix at its 2017 IPO.",
    leadership: [
      { name: "Steve Anderson", role: "Founder", profileSlug: "steve-anderson" }
    ],
    timeline: [
      { year: "2006", event: "Steve Anderson founds Baseline Ventures as a one-person firm." },
      { year: "2010", event: "Becomes Instagram's very first investor." },
      { year: "2012", event: "Facebook acquires Instagram." },
      { year: "2017", event: "Stitch Fix goes public; Baseline is the company's largest shareholder." },
      { year: "2019", event: "PagerDuty goes public." }
    ],
    holdings: [
      { name: "Stitch Fix", ticker: "SFIX", historicalPrice: null, price: null },
      { name: "PagerDuty", ticker: "PD", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 60,
    name: "Founder Collective",
    sectors: ["Seed-Stage", "Sector-Agnostic"],
    signatureExit: "PillPack's 2018 acquisition by Amazon for approximately $1 billion — Founder Collective was among the pharmacy startup's first seed investors",
    slug: "founder-collective",
    website: "https://foundercollective.com",
    short: "Founder Collective",
    founded: 2009,
    hq: "Cambridge, MA",
    aum: "$95M+ (latest fund)",
    thesis: "Founder Collective was founded in 2009 by David Frankel, Eric Paley, and Micah Rosenbloom on a deliberately founder-first philosophy: every full-time partner had been a startup founder first, and the firm has kept its fund sizes small by design rather than chasing scale, refusing to take the large pro-rata reserves that dilute the very founders it backs. That discipline led the firm to one of its earliest seed investments in Uber in 2010, and to being among the first investors in PillPack, the online pharmacy Amazon acquired for roughly $1 billion in 2018. Despite its small fund sizes, Founder Collective has backed more than 20 companies that went on to reach billion-dollar valuations, including The Trade Desk, Airtable, and WHOOP.",
    leadership: [
      { name: "David Frankel", role: "Co-Founder" },
      { name: "Eric Paley", role: "Co-Founder & Partner Emeritus", profileSlug: "eric-paley" },
      { name: "Micah Rosenbloom", role: "Co-Founder & Managing Partner" }
    ],
    timeline: [
      { year: "2009", event: "David Frankel, Eric Paley, and Micah Rosenbloom found Founder Collective in Cambridge, MA." },
      { year: "2010", event: "Leads a seed investment in Uber, one of the firm's earliest bets." },
      { year: "2016", event: "Closes a $75 million third fund; portfolio company The Trade Desk goes public." },
      { year: "2018", event: "Amazon acquires PillPack, an early Founder Collective investment, for roughly $1 billion." },
      { year: "2019", event: "Uber goes public." },
      { year: "2023", event: "Closes its fifth and largest fund at $95 million." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "The Trade Desk", ticker: "TTD", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 61,
    name: "K9 Ventures",
    sectors: ["Pre-Seed", "New Technology", "New Markets"],
    signatureExit: "Twilio's 2016 IPO — Manu Kumar was Twilio's earliest investor, backing the company years before it became a public cloud communications giant",
    slug: "k9-ventures",
    website: "https://www.k9ventures.com",
    short: "K9 Ventures",
    founded: 2009,
    hq: "Palo Alto, CA",
    aum: "$42M+ (current fund)",
    thesis: "Manu Kumar founded K9 Ventures in 2009 after selling two earlier companies and earning a PhD in Computer Science from Stanford, and the firm is widely credited with coining the term 'Pre-Seed' as its own distinct investment category. Kumar, who calls himself K9's 'Chief Firestarter,' invests 'frighteningly early' — often before a startup has a product, a team, or even a formal company — and by design makes just 4 to 6 investments a year rather than casting a wide net. That discipline made him the earliest investor in Twilio, years before its 2016 IPO, and an early backer of Lyft ahead of its 2019 public debut. K9 has kept its fund size deliberately tiny ever since, running one of the most concentrated portfolios of any firm on this page.",
    leadership: [
      { name: "Manu Kumar", role: "Founder & Chief Firestarter", profileSlug: "manu-kumar" }
    ],
    timeline: [
      { year: "2000", event: "Sells his first company, SneakerLabs." },
      { year: "2009", event: "Founds K9 Ventures, coining the term 'Pre-Seed' as an investment category." },
      { year: "2010s", event: "Becomes the earliest investor in Twilio." },
      { year: "2016", event: "Twilio goes public." },
      { year: "2019", event: "Lyft, another early K9 bet, goes public." }
    ],
    holdings: [
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 },
      { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 62,
    name: "Designer Fund",
    sectors: ["Design-Led Early-Stage Software", "Health", "Business Software"],
    signatureExit: "No public exit yet — Designer Fund's portfolio includes still-private companies like Stripe and Notion, both valued in the tens of billions, alongside Gusto and Framer",
    slug: "designer-fund",
    website: "https://designerfund.com",
    short: "Designer Fund",
    founded: 2014,
    hq: "San Francisco, CA",
    aum: "$40M+ (latest fund)",
    thesis: "Ben Blumenrose co-founded Designer Fund in 2014 after more than five years as a design lead at Facebook, built on the then-unusual premise that design should shape a company's formation from day one rather than get bolted on after product-market fit. The firm backs design-led early-stage software companies and has invested in Stripe, Notion, Gusto, Commure, Omada Health, and Framer, all still private. Designer Fund's own materials put the combined value of its portfolio above $80 billion as of its 2022 Fund III close, and the firm runs a fellowship program, Bridge, connecting designers directly to startups.",
    leadership: [
      { name: "Ben Blumenrose", role: "Co-Founder & Managing Partner", profileSlug: "ben-blumenrose" }
    ],
    timeline: [
      { year: "2014", event: "Ben Blumenrose co-founds Designer Fund after more than five years as a design lead at Facebook." },
      { year: "2017", event: "Launches the Bridge fellowship, connecting designers to startups." },
      { year: "2022", event: "Closes Designer Fund's $40 million Fund III." }
    ],
    holdings: []
  },
  {
    rank: 63,
    name: "M25",
    sectors: ["Midwest Early-Stage Tech", "Software", "Fintech", "Healthcare IT"],
    signatureExit: "No public exit yet — M25 has backed more than 150 Midwest startups since 2015, whose combined follow-on funding exceeds $600 million",
    slug: "m25",
    website: "https://m25vc.com",
    short: "M25",
    founded: 2015,
    hq: "Chicago, IL",
    aum: "$36.5M+ (latest fund)",
    thesis: "Victor Gutwein launched M25 in 2015 at age 23 with $1 million to invest exclusively in Midwest tech startups, a region he felt was constantly overlooked by coastal venture capital. Alongside founding partner Mike Asem, Gutwein grew M25 into the most active early-stage investor in the Midwest, backing more than 150 startups across 11 states spanning software, fintech, insurance, and healthcare IT. The firm closed its largest fund yet, $36.5 million, on its 10-year anniversary in 2025, and its portfolio has gone on to raise more than $600 million in follow-on funding.",
    leadership: [
      { name: "Victor Gutwein", role: "Founder & Managing Partner", profileSlug: "victor-gutwein" },
      { name: "Mike Asem", role: "Founding Partner" }
    ],
    timeline: [
      { year: "2015", event: "Victor Gutwein launches M25 at age 23 with $1 million to invest exclusively in Midwest tech startups." },
      { year: "2016", event: "Raises $11 million for M25's second fund." },
      { year: "2019", event: "Raises $31.8 million for M25's third fund alongside partner Mike Asem." },
      { year: "2025", event: "Closes M25's largest fund yet, $36.5 million Fund IV, on the firm's 10th anniversary." }
    ],
    holdings: []
  },
   {
    rank: 63,
    name: "Samsung NEXT",
    sectors: ["AI", "Fintech", "Healthcare", "Cloud Infrastructure"],
    signatureExit: "No single dollar-verified signature exit — Samsung NEXT's scale is cumulative instead: more than 230 investments and 330+ companies backed since inception, run by a 38-person team spanning Silicon Valley, Los Angeles, New York, Tel Aviv, and Seoul",
    slug: "samsung-next",
    website: "https://www.samsungnext.com",
    short: "Samsung NEXT",
    founded: 2012,
    hq: "Mountain View, CA",
    aum: "Not disclosed ($150M NEXT Fund, 2017; undisclosed AI-focused Q Fund, 2018)",
    thesis: "Samsung NEXT is Samsung's startup investing and ecosystem-building arm, founded in 2012 with a mission unusually broad for a corporate investor: it invests, acquires, and partners with companies to unlock value across Samsung's entire ecosystem, not just a single product line. That breadth shows up directly in its portfolio architecture, spanning AI, fintech, healthtech, infrastructure, media tech, and blockchain, backed by a team of 38 people — 20 investors, 12 in operational roles, and a six-person platform team dedicated to helping portfolio companies connect with Samsung's global network of engineers and designers. Rather than one marquee outcome, the firm's real track record is cumulative: more than 230 investments and 330-plus companies backed since inception.",
    leadership: [
      { name: "David Lee", role: "Head of Samsung NEXT", profileSlug: "david-lee-samsung-next" },
      { name: "Brendon Kim", role: "Head of Investments" }
    ],
    timeline: [
      { year: "2012", event: "Samsung founds Samsung NEXT (originally Samsung Global Innovation Center)." },
      { year: "2017", event: "Announces a $150 million NEXT Fund to support early-stage startups." },
      { year: "2018", event: "Launches the Q Fund, a dedicated AI-focused vehicle, without disclosing its size." },
      { year: "2026", event: "Firm's cumulative track record passes 230 investments and 330 companies backed." }
    ],
    holdings: []
  },
   {
    rank: 64,
    name: "M12",
    sectors: ["AI", "Enterprise Software", "Cybersecurity"],
    signatureExit: "Cloudflare's 2019 NYSE IPO, ranked by Dealroom as an M12 portfolio outcome valued at $4.4 billion — sourced from a secondary database rather than Microsoft's own materials, so treated as secondary-verified",
    slug: "m12",
    website: "https://m12.vc",
    short: "M12",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "Not disclosed (100+ companies backed, including 15 unicorns and 6 IPOs)",
    thesis: "M12 is Microsoft's venture fund, launched in 2016 as Microsoft Ventures and rebranded to M12 in 2018. Its proposition is explicit about being more than capital: portfolio companies get direct access to Microsoft's distribution, enterprise tooling, and — per the firm's own 'Advantage' materials — dedicated AI compute including supercomputer-scale GPU access for model training. The firm operates as a single evergreen fund capitalized directly off Microsoft's balance sheet, and removed restrictive corporate terms from its term sheets in 2019 specifically to stay founder-aligned rather than strategically entangled. In its first six years, Microsoft said M12 had invested in more than 100 companies, including 15 unicorns and 6 IPOs, focused on AI applications, AI security, AI cloud infrastructure, and deep tech systems.",
    leadership: [
      { name: "Michelle Gonzalez", role: "Corporate Vice President & Global Head", profileSlug: "michelle-gonzalez" },
      { name: "Todd Graham", role: "Investor" }
    ],
    timeline: [
      { year: "2016", event: "Microsoft launches Microsoft Ventures." },
      { year: "2018", event: "Microsoft Ventures rebrands to M12." },
      { year: "2019", event: "Removes restrictive corporate terms from its term sheets to stay founder-aligned; portfolio company Cloudflare goes public." },
      { year: "2022", event: "Michelle Gonzalez joins as Corporate Vice President and Global Head after leading Google's Area 120." },
      { year: "2023", event: "Microsoft marks M12's six-year track record: 100+ companies backed, 15 unicorns, 6 IPOs." }
    ],
    holdings: [
      { name: "TaskUs", ticker: "TASK", historicalPrice: null, price: 5.52 }
    ]
  },
   {
    rank: 65,
    name: "SKY VC",
    sectors: ["Mobility", "Climate", "Enterprise Software"],
    signatureExit: "Joby Aviation's August 2021 public listing — JetBlue Technology Ventures (now SKY VC) was an early backer of the electric air taxi company, and its former president Bonny Simi left the fund to join Joby directly as Head of People and Operations",
    slug: "sky-vc",
    website: "https://sky-vc.com",
    short: "SKY VC",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "Not disclosed (50+ portfolio companies)",
    thesis: "SKY VC was founded in 2016 as JetBlue Technology Ventures, JetBlue's wholly-owned corporate venture subsidiary, before becoming part of SKY Leasing and rebranding in May 2025. Unlike broad software-focused corporate VCs, the firm is intensely vertical — organized entirely around the future of travel, hospitality, and transportation, with a team that blends venture investing experience with real airline operating knowledge. That combination produced its clearest outcome: an early bet on Joby Aviation, the electric air taxi company, whose August 2021 public listing was significant enough that the fund's own founding president, Bonny Simi, left to join Joby directly. SKY VC has invested in more than 50 companies since inception.",
    leadership: [
      { name: "Amy Burr", role: "CEO", profileSlug: "amy-burr" },
      { name: "Arielle Ring", role: "President" }
    ],
    timeline: [
      { year: "2016", event: "JetBlue launches JetBlue Technology Ventures in Silicon Valley, led by founding president Bonny Simi." },
      { year: "2018", event: "Amy Burr joins as Managing Director of Operations and Partnerships." },
      { year: "2020", event: "Bonny Simi departs to join portfolio company Joby Aviation as Head of People and Operations." },
      { year: "2021", event: "Amy Burr is promoted to President; Joby Aviation goes public in August." },
      { year: "2025", event: "The fund becomes part of SKY Leasing and rebrands from JetBlue Technology Ventures to SKY VC." }
    ],
    holdings: [
      { name: "Joby Aviation", ticker: "JOBY", historicalPrice: 8.09, price: 7.24 }
    ]
  },
  {
    rank: 64,
    name: "Worldbuild",
    sectors: ["AI Infrastructure", "Developer Tools", "Aerospace", "Energy"],
    signatureExit: "No public exit yet — Worldbuild closed its debut fund in 2026 and is still building its earliest cohort, including SF Compute and Browserbase",
    slug: "worldbuild",
    website: "https://worldbuild.vc",
    short: "Worldbuild",
    founded: 2025,
    hq: "New York, NY",
    aum: "$30M+ (debut fund)",
    thesis: "Sumeet Singh founded Worldbuild after roles as an investor at Andreessen Horowitz and in operating and investing positions at Brigit and Nyca Partners, building the firm around the idea that the best early bets require genuine intellectual conviction rather than pattern-matching against what other investors are already doing. Worldbuild closed a $30 million debut fund in 2026, backing early-stage companies across AI infrastructure, developer tools, aerospace, and energy, including SF Compute and Browserbase — bets Singh has said he was able to make early precisely because his thesis-driven approach let him form a point of view before a company looked obvious to generalist investors.",
    leadership: [
      { name: "Sumeet Singh", role: "Founder & Managing Partner", profileSlug: "sumeet-singh" }
    ],
    timeline: [
      { year: "2025", event: "Sumeet Singh begins building Worldbuild after roles at a16z, Brigit, and Nyca Partners." },
      { year: "2026", event: "Closes Worldbuild's $30 million debut fund." }
    ],
    holdings: []
  },
  {
    rank: 65,
    name: "Female Founders Fund",
    sectors: ["Digital Health", "AI-First Vertical Software", "Beauty & Personal Care", "Deep Tech"],
    signatureExit: "Rent the Runway's 2021 Nasdaq IPO — Female Founders Fund was an early backer of Jennifer Hyman's marketplace years before its public debut",
    slug: "female-founders-fund",
    website: "https://femalefoundersfund.com",
    short: "Female Founders Fund",
    founded: 2014,
    hq: "New York, NY",
    aum: "$29M+ (latest fund)",
    thesis: "Anu Duggal founded Female Founders Fund in 2014 around a straightforward premise: female founders were being systematically underfunded relative to their performance, and a firm built specifically to be their first institutional check could both correct that gap and generate strong returns. The firm backed Jennifer Hyman's Rent the Runway years before its 2021 Nasdaq listing, along with Maven Clinic, Zola, and Tala. Duggal has scaled the firm to $140 million in total capital across its funds, most recently closing a $29 million Fund IV in December 2025, while keeping its core focus on seed-stage healthcare, AI-first software, and consumer categories underrepresented founders are building in.",
    leadership: [
      { name: "Anu Duggal", role: "Founding Partner", profileSlug: "anu-duggal" }
    ],
    timeline: [
      { year: "2014", event: "Anu Duggal founds Female Founders Fund in New York City." },
      { year: "2021", event: "Portfolio company Rent the Runway goes public on Nasdaq." },
      { year: "2025", event: "Closes Female Founders Fund's $29 million Fund IV, bringing total firm capital to $140 million." }
    ],
    holdings: [
      { name: "Rent the Runway", ticker: "RENT", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 66,
    name: "Modern Technical Fund",
    sectors: ["Infrastructure", "Data", "Security", "Developer Tooling"],
    signatureExit: "No public exit yet — Modern Technical Fund closed its debut fund in 2025 and is still building its earliest cohort of technical founders",
    slug: "modern-technical-fund",
    website: "https://moderntechnical.com",
    short: "Modern Technical Fund",
    founded: 2025,
    hq: "San Francisco, CA",
    aum: "$22M+ (debut fund)",
    thesis: "Amanda Robson started her career in investment banking at William Blair before moving into venture capital at Norwest Venture Partners and then Cowboy Ventures, where she became the youngest partner in the firm's history. In 2025, she left to found Modern Technical Fund as a solo general partner, built specifically to back highly technical founders — often in infrastructure, data, and security — who tend to look strongest to specialists long before they look obvious to generalist investors.",
    leadership: [
      { name: "Amanda Robson", role: "Founder (Solo GP)", profileSlug: "amanda-robson" }
    ],
    timeline: [
      { year: "2020s", event: "Amanda Robson becomes the youngest partner in Cowboy Ventures' history after roles at Norwest Venture Partners and William Blair." },
      { year: "2025", event: "Leaves Cowboy Ventures to found Modern Technical Fund, closing a $22 million debut fund." }
    ],
    holdings: []
  },
  {
    rank: 67,
    name: "Cambrian Ventures",
    sectors: ["Fintech", "Fintech Infrastructure"],
    signatureExit: "No public exit yet — Cambrian closed its second $20 million fintech-focused fund in 2025",
    slug: "cambrian-ventures",
    website: "https://cambrian.vc",
    short: "Cambrian Ventures",
    founded: 2022,
    hq: "San Francisco Bay Area, CA",
    aum: "$20M+ (latest fund)",
    thesis: "Rex Salisbury worked as a software engineer before becoming a fintech investor at Andreessen Horowitz, where he built one of the best-networked founder communities in the category. In 2022, he used that network to launch Cambrian Ventures as a solo general partner, built around the thesis that fintech has captured only a small share of global financial-services value and that meaningful new category formation is still ahead. Salisbury has kept Cambrian focused exclusively on early-stage fintech through two $20 million funds, even as the broader venture cycle made specialist strategies harder to sustain.",
    leadership: [
      { name: "Rex Salisbury", role: "Founder & General Partner", profileSlug: "rex-salisbury" }
    ],
    timeline: [
      { year: "2022", event: "Rex Salisbury founds Cambrian Ventures after a career as a software engineer and fintech investor at a16z, closing a $20 million debut fund." },
      { year: "2025", event: "Closes Cambrian's second $20 million fintech-focused fund." }
    ],
    holdings: []
  },
  {
    rank: 68,
    name: "Symphonic Capital",
    sectors: ["Health", "Wealth", "Climate Resilience"],
    signatureExit: "No public exit yet — Symphonic Capital closed its debut $13.5 million fund in April 2025",
    slug: "symphonic-capital",
    website: "https://symphoniccapital.com",
    short: "Symphonic Capital",
    founded: 2022,
    hq: "Oakland, CA",
    aum: "$13.5M+ (debut fund)",
    thesis: "Sydney Thomas built one of the most-cited resources in early-stage venture, the Black Women in VC list, before founding Symphonic Capital around a specific thesis: that the essential systems ordinary households depend on — healthcare access, financial resilience, climate adaptation — are chronically underbuilt and underfinanced relative to how much they matter. Symphonic closed its $13.5 million debut fund in April 2025, backing pre-seed and seed founders, often using AI, working to close access gaps in health and wealth.",
    leadership: [
      { name: "Sydney Thomas", role: "Founder & General Partner", profileSlug: "sydney-thomas" }
    ],
    timeline: [
      { year: "2022", event: "Sydney Thomas begins building the thesis behind Symphonic Capital." },
      { year: "2025", event: "Closes Symphonic Capital's $13.5 million debut fund in April." }
    ],
    holdings: []
  },
  {
    rank: 69,
    name: "The Fintech Fund",
    sectors: ["Fintech", "Crypto", "DeFi"],
    signatureExit: "No public exit yet — The Fintech Fund closed its $10 million second fund in September 2024",
    slug: "the-fintech-fund",
    website: "https://thefintechfund.com",
    short: "The Fintech Fund",
    founded: 2022,
    hq: "New York, NY",
    aum: "$10M+ (latest fund)",
    thesis: "Nik Milanović built This Week in Fintech into one of the most-read newsletters and communities in the fintech industry, then converted that platform into The Fintech Fund in 2022 — a genuinely unusual media-to-fund path in venture capital. The fund closed a $10 million second vehicle in September 2024, investing across fintech, crypto, and DeFi globally, with Milanović's global fintech network functioning as the firm's primary sourcing advantage.",
    leadership: [
      { name: "Nik Milanović", role: "Founder & General Partner", profileSlug: "nik-milanovic" }
    ],
    timeline: [
      { year: "2022", event: "Nik Milanović launches The Fintech Fund, building on the community from This Week in Fintech." },
      { year: "2024", event: "Closes The Fintech Fund's $10 million Fund II in September." }
    ],
holdings: []
  },
];

// Ranks are derived from array position, not hand-typed, so the array
// itself stays the single source of truth: insert a firm into the
// correct AUM-sorted slot and every rank recalculates automatically.
// Never hand-edit a `rank:` field on an individual firm object again.
firms.forEach((f, i) => { f.rank = i + 1; });
