export interface AccordionItemData {
  value: string;
  title: string;
  body: string[];
  bullets?: string[];
}

export interface AccordionGroup {
  anchor: string;
  label: string;
  title: string;
  items: AccordionItemData[];
}

export interface GlanceCard {
  title: string;
  body: string;
}

export interface ComparisonStep {
  text: string;
}

export interface MetricRow {
  category: string;
  traditional: string;
  rar: string;
}

export interface CredibilityTag {
  label: string;
}

export interface PriorityItem {
  text: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const heroContent = {
  eyebrow: 'Landfill / Brownfield / Constrained-Site Solar',
  headline:
    "Why Roll-A-Rack May Be a Strong Fit for Cleveland's Landfill Solar Projects",
  intro: [
    "Cleveland's landfill solar procurement highlights a set of real project constraints: protecting landfill caps, minimizing site disturbance, preserving buffers and neighborhood fit, accommodating constrained layouts, and keeping procurement and construction timelines moving toward federal tax-credit deadlines.",
    'Roll-A-Rack was developed for exactly these kinds of real-world deployment challenges.',
  ],
  ctaPrimary: 'Request a Technical Discussion',
  ctaSecondary: 'Discuss Project Fit',
};

// ---------------------------------------------------------------------------
// Credibility tags
// ---------------------------------------------------------------------------

export const credibilityTags: CredibilityTag[] = [
  { label: 'Cap-sensitive' },
  { label: 'Land-constrained' },
  { label: 'Low-disturbance' },
  { label: 'ITC-aware' },
  { label: 'Domestic-content aligned' },
];

// ---------------------------------------------------------------------------
// At-a-glance cards
// ---------------------------------------------------------------------------

export const glanceCards: GlanceCard[] = [
  {
    title: 'On-Site Roll Forming',
    body: 'Portable fabrication brought directly to the project site.',
  },
  {
    title: '5\u00B0 Low-Profile Design',
    body: 'Designed for denser layouts, reduced uplift, and constrained sites.',
  },
  {
    title: 'Higher Site Density',
    body: 'Supports materially denser deployment than conventional 20\u201330\u00B0 landfill layouts.',
  },
  {
    title: 'Minimal Ballast',
    body: 'Additional ballast primarily at the array periphery.',
  },
  {
    title: 'Early Procurement',
    body: 'Coil + clamps can be procured based on MW before final layout is fully locked.',
  },
  {
    title: 'Landfill / Neighborhood Fit',
    body: 'Low-disturbance, low-profile approach relevant to landfill and neighborhood-adjacent conditions.',
  },
];

// ---------------------------------------------------------------------------
// Anchor navigation items (used for both nav cards and sticky strip)
// ---------------------------------------------------------------------------

export const anchorNav = [
  { label: 'Performance & Design', anchor: 'performance-design', desc: 'Cap protection, density, wind/snow, and module compatibility.' },
  { label: 'Construction & Execution', anchor: 'construction-execution', desc: 'Two-component system, on-site roll forming, real-time adaptability.' },
  { label: 'Procurement, Cost & Schedule', anchor: 'procurement-cost', desc: 'Early procurement, ITC timing, and total installed cost.' },
  { label: 'Community & Site Fit', anchor: 'community-site', desc: 'Low-profile design, neighborhood fit, optional ecological enhancements.' },
  { label: 'Readiness & Support', anchor: 'readiness-support', desc: 'TRL 8, UL2702 certified, pilot availability, and bidder support.' },
];

// ---------------------------------------------------------------------------
// Cleveland priorities
// ---------------------------------------------------------------------------

export const prioritiesContent = {
  title: 'What This Project Appears to Prioritize',
  body: "Cleveland's public project materials suggest that bidders are being evaluated against a practical set of constraints \u2014 not just standard utility-scale assumptions. These include site sensitivity, constructability, schedule, procurement timing, and neighborhood fit.",
};

export const priorityItems: PriorityItem[] = [
  { text: 'Do not disturb landfill caps' },
  { text: 'Allow practical, site-specific design approaches' },
  { text: 'Preserve buffers and minimize unnecessary disruption' },
  { text: 'Keep procurement moving to support ITC timing' },
  { text: 'Accommodate constrained and environmentally sensitive site conditions' },
];

// ---------------------------------------------------------------------------
// Grouped accordion sections
// ---------------------------------------------------------------------------

export const accordionGroups: AccordionGroup[] = [
  {
    anchor: 'performance-design',
    label: 'Performance & Design',
    title: 'System design for landfill and constrained-site conditions.',
    items: [
      {
        value: 'cap-sensitive',
        title: 'Designed for Cap-Sensitive Sites',
        body: [
          'Roll-A-Rack is designed around a low-disturbance deployment philosophy that can support capped landfill and similarly sensitive site conditions. Reduced ballast requirements, lower wind loads, minimal ground disturbance, and a smaller staging footprint are all part of what makes the system relevant where landfill caps should not be disturbed.',
        ],
        bullets: [
          'Reduced ballast requirements \u2014 additional ballast only at array periphery',
          'Lower wind loads from 5\u00B0 low-profile design',
          'Minimal ground disturbance during installation',
          'Smaller staging footprint than conventional racking',
        ],
      },
      {
        value: 'density',
        title: 'Higher Density on Constrained Sites',
        body: [
          'Roll-A-Rack\u2019s 5\u00B0 fixed-tilt design supports materially higher site density than conventional 20\u201330\u00B0 landfill layouts. The row gap is approximately 15 inches compared to several feet for traditional racking. A modest per-panel energy reduction of roughly 5\u201310% annually is offset by a small increase in panel count, preserving total energy production while using significantly less land.',
        ],
        bullets: [
          '5\u00B0 fixed tilt with minimal shading between rows',
          'Modest annual output tradeoff per panel, offset with additional panels',
          'Approximately 50% less land claim than conventional spacing',
          'Potential expansion headroom on the same site footprint',
        ],
      },
      {
        value: 'wind-snow-compat',
        title: 'Wind, Snow, and Standard Module Compatibility',
        body: [
          'Roll-A-Rack is compatible with standard PV modules and typical EPC electrical layouts. The low-profile aerodynamic design minimizes uplift forces, and the gutter channels prevent wind from reaching under panels. Winter snow losses are higher than steeper arrays, but winter contributes a relatively small share of annual production in Cleveland \u2014 November through February accounts for about 17.6% of annual output, and December\u2013January only about 7.8%.',
        ],
        bullets: [
          'Works with standard PV modules and electrical layouts',
          'UL2702 certified for snow loads of 50 psf',
          'Patented design relieves pressure buildup under panels',
          'Snow tradeoffs are modest relative to density and site-fit gains',
        ],
      },
    ],
  },
  {
    anchor: 'construction-execution',
    label: 'Construction & Execution',
    title: 'A simpler build model for difficult sites.',
    items: [
      {
        value: 'installation',
        title: 'Fast, Simplified Field Installation',
        body: [
          'Roll-A-Rack is a two-component racking system: the roll-formed gutter channel and the clamp bracket that secures the solar panel. This simplicity reduces material handling steps, staging requirements, and field complexity compared to multi-component prefabricated systems.',
        ],
        bullets: [
          'Two-component system: gutter channel + clamp bracket',
          'Handling reduced from 3\u20135 steps to approximately 1.5',
          'Continuous install workflow with reduced staging burden',
          'Cleanup reduced from 20\u201360 hrs/MW to approximately 3 hrs/MW',
        ],
      },
      {
        value: 'on-site-fab',
        title: 'On-Site Fabrication and Real-Time Adaptability',
        body: [
          'Roll-A-Rack uses portable roll-forming equipment to manufacture racking components directly at the project site. This means fabrication, layout adjustments, and installation can proceed in parallel. Array design details can change late because rack channels are formed to the required length for each row on-site during installation.',
        ],
        bullets: [
          'Roll forming operates at approximately 5 kW per minute',
          'Final channel lengths can be adjusted in real time',
          'Reduced reliance on pre-fabricated components and fixed designs',
          'Layout can adapt to field conditions discovered during construction',
        ],
      },
    ],
  },
  {
    anchor: 'procurement-cost',
    label: 'Procurement, Cost & Schedule',
    title: 'Procurement flexibility and honest cost framing.',
    items: [
      {
        value: 'itc-timing',
        title: 'Supports Early Procurement and ITC Timing',
        body: [
          "Cleveland's procurement places unusual importance on early design and equipment procurement to support federal Investment Tax Credit timing. Because Roll-A-Rack\u2019s bill of materials depends on total project MW rather than a fully locked final layout, materials can be procured early while design continues in parallel.",
        ],
        bullets: [
          'BOM depends on total MW, not final layout',
          'Coil + clamps can be procured before design is complete',
          'Procurement, fabrication, and installation proceed in parallel',
          'Example: 10 MW with 500W panels = 20,000 panels, 40,000 clamps, ~133,333 ft of coil',
        ],
      },
      {
        value: 'total-cost',
        title: 'Total Installed Cost, Labor, and Logistics',
        body: [
          'Roll-A-Rack\u2019s racking material cost may be higher than conventional systems. That is a direct and honest statement. But project economics should be evaluated on total installed cost \u2014 including labor, logistics, waste, handling, cleanup, schedule certainty, and procurement risk. On most of those dimensions, Roll-A-Rack may offer meaningful advantages.',
        ],
        bullets: [
          'Material cost: higher',
          'Labor, logistics, waste, and handling: lower',
          'Field scrap: near elimination (~0% vs. 2\u20138% conventional)',
          'Schedule: parallel execution vs. sequential',
        ],
      },
    ],
  },
  {
    anchor: 'community-site',
    label: 'Community & Site Integration',
    title: 'Neighborhood fit and optional enhancements.',
    items: [
      {
        value: 'community',
        title: 'Lower-Profile and Community-Sensitive',
        body: [
          'At neighborhood-adjacent sites like West 11th, visual profile and site fit matter. Roll-A-Rack\u2019s 5\u00B0 tilt results in a lower-profile installation that may better align with community, buffer, and visibility concerns than more conventional field layouts. This is not just a structural question \u2014 it is a project acceptance and site-context question.',
        ],
      },
      {
        value: 'solar-edge',
        title: 'Productive Solar Edge and Optional Ecological Enhancements',
        body: [
          'Roll-A-Rack enables a designed buffer zone between the solar array and surrounding land uses. These enhancements are not required to make the system work, but may help strengthen project narratives, site integration, and community acceptance where relevant.',
        ],
        bullets: [
          'Pollinator-supporting vegetation in buffer zones',
          'Managed water runoff via gutter channels and bioswale integration',
          'Optional under-array productive use',
          'Can strengthen proposal narratives and community acceptance',
        ],
      },
    ],
  },
  {
    anchor: 'readiness-support',
    label: 'Readiness & Support',
    title: 'How real is this, and how can RAR help.',
    items: [
      {
        value: 'readiness',
        title: 'Technology Readiness and Pilot Availability',
        body: [
          'Roll-A-Rack is at Technology Readiness Level 8 \u2014 ready for implementation. The system is UL2702 certified and pilot deployments are underway. Up to 400 kW of pilot or demonstration support is available for qualified projects.',
        ],
        bullets: [
          'TRL 8: system qualified through testing and demonstration',
          'UL2702 certified',
          'Pilot deployments underway',
          'Up to 400 kW pilot/demonstration support available',
        ],
      },
      {
        value: 'bidder-support',
        title: 'Support Available to Bidders',
        body: [
          'Roll-A-Rack can participate in your bid process without becoming a burden. RAR provides the roll-forming machine and staff to procure and fabricate the racking channels. Support is available at every stage from preliminary design through construction.',
        ],
        bullets: [
          'Preliminary design assumptions and layout guidance',
          'Bid input support and technical consultation',
          'RAR provides machine and staff for on-site fabrication',
          'Contact Don Scipione: 216-346-6955 or don@roll-a-rack.com',
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Deep proof: process comparison
// ---------------------------------------------------------------------------

export const processComparison = {
  traditional: [
    'Final design required first',
    'Factory fabrication off-site',
    'Multiple shipments to site',
    'Large staging area required',
    'Installation begins after delivery',
    'Changes and supply issues create delays',
  ],
  rar: [
    'Procure materials early (coil + clamps)',
    'Bring portable roll-forming to site',
    'Manufacture on-site (5 kW per minute)',
    'Install continuously as produced',
    'Adapt layout in real time',
  ],
  summary:
    'Key difference: RAR enables procurement, fabrication, and installation to proceed in parallel.',
};

// ---------------------------------------------------------------------------
// Deep proof: metrics comparison
// ---------------------------------------------------------------------------

export const metricsComparison: MetricRow[] = [
  { category: 'Material Cost', traditional: 'Lower', rar: 'Higher' },
  { category: 'Labor', traditional: 'Higher', rar: 'Lower' },
  { category: 'Logistics', traditional: 'Higher', rar: 'Lower' },
  { category: 'Waste', traditional: '2\u20138%', rar: '~0%' },
  { category: 'Handling Steps', traditional: '3\u20135 steps', rar: '~1.5 steps' },
  { category: 'Cleanup', traditional: '20\u201360 hrs/MW', rar: '~3 hrs/MW' },
  { category: 'Schedule', traditional: 'Sequential', rar: 'Parallel' },
  { category: 'Procurement Risk', traditional: 'Higher', rar: 'Lower' },
  { category: 'Landfill Cap Impact', traditional: 'Higher', rar: 'Lower' },
];

// ---------------------------------------------------------------------------
// Deep proof: Question 36
// ---------------------------------------------------------------------------

export const q36Content = {
  summary:
    'The City of Cleveland explicitly welcomed proposals with alternative tilt ranges and ballasting options, confirming that low-tilt approaches like Roll-A-Rack\u2019s 5\u00B0 design are eligible for evaluation.',
  question:
    'Question 36: The RFP indicates a preferred module tilt range of approximately 20\u201330 degrees. For capped landfill installations where ballast weight, wind loading, and protection of the landfill cap are key design considerations, would the City consider alternative fixed-tilt configurations if they demonstrate advantages such as reduced ballast loading on the landfill cap, reduced wind loads, acceptable energy production, and increased solar power density (MW per acre)?',
  response:
    'City of Cleveland Response: The City welcomes proposals from design-build vendors based on what they consider to be the most effective approaches to meet the requirements specified in the RFP, including different tilt ranges and ballasting options.',
};

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

export const ctaContent = {
  headline: 'Evaluating landfill or constrained-site solar?',
  subtext:
    "If you\u2019re bidding, developing, or scoping a project with these constraints, we\u2019d be glad to discuss where Roll-A-Rack may fit.",
  contactName: 'Don Scipione',
  contactPhone: '216-346-6955',
  contactEmail: 'don@roll-a-rack.com',
};

// ---------------------------------------------------------------------------
// Legacy exports (kept for other pages that may import them)
// ---------------------------------------------------------------------------

export const faqItems: AccordionItemData[] = accordionGroups.flatMap(
  (g) => g.items,
);

export const flexibleFitContent = {
  title: 'Flexible Fit for Real Project Teams',
  intro: 'Roll-A-Rack does not need to be treated as an all-or-nothing proposition.',
  lead: 'Depending on project design, priorities, and engineering decisions, it may be relevant as:',
  options: [
    'A primary racking approach',
    'A site-specific solution for constrained areas',
    'A complement to more conventional array sections',
    'A value-engineering or alternate design path',
  ],
};

export const disclaimerContent = {
  title: 'Practical Relevance, Not Speculation',
  body: 'This page is not intended to prescribe a final engineering solution. It is intended to highlight why Roll-A-Rack may be especially relevant to landfill and environmentally constrained solar projects like the Cleveland sites now under consideration.',
};
