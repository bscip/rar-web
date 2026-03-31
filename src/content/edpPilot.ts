/** Copy for /edp-pilot — keep strings aligned with stakeholder spec. */

export const hero = {
  title: 'Roll-A-Rack Pilot with EDP',
  subtitle: 'A deployable solar racking system that reduces land use and simplifies installation.',
  bullets: [
    '50% reduction in land use',
    'On-site roll forming eliminates staging and transport complexity',
    'Pilot-ready today with available inventory',
  ],
  ctaLabel: 'Review Pilot Plan',
} as const;

export const problem = {
  title: 'Why current solar deployment struggles',
  bullets: [
    'Large row spacing wastes usable land',
    'Projects are delayed by land-use constraints and permitting friction',
    'Installation requires significant staging, transport, and pre-planning',
  ],
  imageSrc: '/images/wide-solar-array.png',
  imageAlt: 'Wide row spacing at a solar installation',
} as const;

export const systemSteps = [
  {
    title: 'Roll Former Setup',
    body: 'A portable roll-forming machine is delivered to the site and positioned at the start of a row.',
    imageSrc: '/images/rar-Setup.png',
    imageAlt: 'Roll former machine at site',
  },
  {
    title: 'On-Site Fabrication',
    body: 'Steel coil is formed into continuous racking channels directly on-site, eliminating pre-fabricated transport.',
    imageSrc: '/images/rar-OnSiteFab.png',
    imageAlt: 'On-site roll forming process',
  },
  {
    title: 'Row Installation',
    body: 'Panels are installed immediately onto formed channels, reducing handling steps and staging requirements.',
    imageSrc: '/images/rar-RowInstall.png',
    imageAlt: 'Panel installation on formed channels',
  },
  {
    title: 'Integrated Water Flow',
    body: 'Rainwater is directed along the channel system into controlled runoff paths such as ponds or bioswales.',
    imageSrc: '/images/rar-Water.png',
    imageAlt: 'Water flow along racking channels',
  },
  {
    title: 'Finished Array',
    body: 'Rows are spaced inches apart instead of feet, maximizing land utilization and reducing site footprint.',
    imageSrc: '/images/rar-FinishedArray.png',
    imageAlt: 'Finished solar array with tight row spacing',
  },
] as const;

export const pilotPlan = {
  title: 'Proposed pilot with EDP',
  items: [
    { label: 'System size', value: '350 kW (available now)' },
    { label: 'Deployment', value: 'On-site roll forming and installation' },
    { label: 'Objective', value: 'Measure installation efficiency and site impact' },
    { label: 'Output', value: 'Quantified comparison against conventional systems' },
  ],
} as const;

export const metrics = {
  title: 'Metrics we will measure',
  bullets: [
    'Installation labor per kW',
    'Total install time',
    'Truckloads and transport requirements',
    'Staging area size',
    'Ease of field adjustments',
  ],
} as const;

/** Placeholder copy — replace when ready. */
export const whyEdp = {
  title: 'Why Roll-A-Rack and EDP Make Sense',
  intro: 'This pilot is intended to validate performance under real deployment conditions.',
  bullets: [
    'First-time deployment at project scale',
    'Site-specific variability and constraints',
    'Operator workflow and efficiency',
  ],
} as const;

export const relatedExample = {
  label: 'See landfill deployment example',
  to: '/landfill-solar',
} as const;
