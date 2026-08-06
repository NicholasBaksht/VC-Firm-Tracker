/**
 * FAMILY-TREE-DATA.JS
 * Real, independently verified spinout relationships between firms
 * already tracked on this page - not a complete map of every VC
 * lineage in existence, just the connections that were specifically
 * fact-checked while each firm was researched and added to the
 * site. New relationships should only be added here once verified
 * the same way every other fact on this site is.
 */

const FAMILY_TREE = [
  {
    parentSlug: 'kleiner-perkins',
    children: [
      {
        slug: 'bond-capital',
        founders: ['Mary Meeker'],
        year: 2018,
        note: 'Meeker led Kleiner Perkins\' growth investing practice for nearly a decade before leaving in September 2018.'
      },
      {
        slug: 'cowboy-ventures',
        founders: ['Aileen Lee'],
        year: 2012,
        note: 'Lee spent 13 years at Kleiner Perkins before leaving to found one of the first venture firms founded by a woman.'
      }
    ]
  },
  {
    parentSlug: 'tiger-global-management',
    children: [
      {
        slug: 'addition',
        founders: ['Lee Fixel'],
        year: 2020,
        note: 'Fixel led Tiger Global\'s private equity business for 13 years before departing in 2019 to found Addition.'
      }
    ]
  },
  {
    parentSlug: 'social-capital',
    children: [
      {
        slug: 'tribe-capital',
        founders: ['Arjun Sethi', 'Jonathan Hsu', 'Ted Maidenberg'],
        year: 2018,
        note: 'All three co-founders were Social Capital partners who left together in July 2018.'
      }
    ]
  },
  {
    parentSlug: 'earlybird-venture-capital',
    children: [
      {
        slug: 'blueyard-capital',
        founders: ['Ciarán O\'Leary', 'Jason Whitmire'],
        year: 2016,
        note: 'Both co-founders were partners at Earlybird before breaking off to found BlueYard.'
      }
    ]
  },
  {
    parentSlug: 'accel',
    children: [
      {
        slug: 'dcm-ventures',
        founders: ['Dixon Doll'],
        year: 1996,
        note: 'Doll was a partner at Accel, where he launched the venture industry\'s first telecom-focused fund, before co-founding DCM.'
      }
    ]
  },
  {
    parentSlug: 'tcv',
    children: [
      {
        slug: 'iconiq-growth',
        founders: ['Will Griffith'],
        year: 2013,
        note: 'Griffith was recruited from TCV to help launch and lead Iconiq Growth.'
      }
    ]
  },
  {
    parentSlug: 'insight-partners',
    children: [
      {
        slug: 'openview-venture-partners',
        founders: ['Scott Maxwell'],
        year: 2006,
        note: 'Maxwell spent six years as Insight Venture Partners\' COO before founding OpenView.'
      }
    ]
  }
];
