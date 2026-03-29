export interface AccordionItemData {
  value: string;
  title: string;
  body: string[];
}

export interface CredibilityTag {
  label: string;
}

export interface PriorityItem {
  text: string;
}

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

export const credibilityTags: CredibilityTag[] = [
  { label: 'Cap-sensitive' },
  { label: 'Land-constrained' },
  { label: 'Low-disturbance' },
  { label: 'ITC-aware' },
  { label: 'Domestic-content aligned' },
];

export const prioritiesContent = {
  title: 'What This Project Appears to Prioritize',
  body: "Cleveland's public project materials suggest that bidders are being evaluated against a practical set of constraints — not just standard utility-scale assumptions. These include site sensitivity, constructability, schedule, procurement timing, and neighborhood fit.",
};

export const priorityItems: PriorityItem[] = [
  { text: 'Do not disturb landfill caps' },
  { text: 'Allow practical, site-specific design approaches' },
  { text: 'Preserve buffers and minimize unnecessary disruption' },
  { text: 'Keep procurement moving to support ITC timing' },
  {
    text: 'Accommodate constrained and environmentally sensitive site conditions',
  },
];

export const faqItems: AccordionItemData[] = [
  {
    value: 'cap-sensitive',
    title: 'Designed for Cap-Sensitive Sites',
    body: [
      'Cleveland has made clear that landfill caps at both sites should not be disturbed. Roll-A-Rack is designed around a low-disturbance deployment philosophy that can support capped landfill and similarly sensitive site conditions.',
      'Depending on final engineering and site layout, that may help teams evaluate approaches that are more compatible with landfill-specific constraints than standard assumptions alone.',
    ],
  },
  {
    value: 'density',
    title: 'Higher Density on Constrained Sites',
    body: [
      'For sites where usable acreage is limited or fragmented, array density matters. Roll-A-Rack is designed to support more compact deployment strategies that can help maximize usable solar capacity within constrained site footprints.',
      'This can be especially relevant where site boundaries, buffers, utility constraints, or environmental exclusions reduce the amount of practical buildable area.',
    ],
  },
  {
    value: 'installation',
    title: 'Fast, Simplified Field Installation',
    body: [
      'Roll-A-Rack uses a simplified two-component structural approach designed to reduce field complexity, logistics overhead, and installation friction.',
      'That matters on difficult sites where minimizing handling, staging, and rework can materially improve execution.',
    ],
  },
  {
    value: 'itc-timing',
    title: 'Supports Early Procurement and ITC Timing',
    body: [
      "Cleveland's procurement places unusual importance on early design and equipment procurement to support federal Investment Tax Credit timing.",
      "Because Roll-A-Rack's structural material planning can be tied closely to project capacity rather than fully locked final layout, it may support earlier procurement decisions and more flexible deployment sequencing.",
    ],
  },
  {
    value: 'community',
    title: 'Lower-Profile and Community-Sensitive',
    body: [
      'At neighborhood-adjacent sites like West 11th, visual profile and site fit matter. Roll-A-Rack can support lower-profile deployment approaches that may better align with community, buffer, and visibility concerns than more conventional field layouts.',
      'This is not just a structural question — it is also a project acceptance and site-context question.',
    ],
  },
  {
    value: 'logistics',
    title: 'Reduced Logistics and Material Handling Complexity',
    body: [
      'By bringing roll-forming capability to the project site, Roll-A-Rack can reduce transportation inefficiencies, simplify last-minute field adjustments, and lower handling complexity compared with more rigid prefabricated structural workflows.',
      'That flexibility may be especially useful where final site layouts evolve late in design.',
    ],
  },
  {
    value: 'domestic',
    title: 'Local Manufacturing and Domestic Content Alignment',
    body: [
      "Cleveland's project must consider domestic-content and Buy American / Build American requirements. Roll-A-Rack's local manufacturing story may help support bidders looking for practical ways to strengthen domestic sourcing alignment.",
      'This can be relevant both from a compliance perspective and from a project-story / public-benefit perspective.',
    ],
  },
];

export const flexibleFitContent = {
  title: 'Flexible Fit for Real Project Teams',
  intro:
    'Roll-A-Rack does not need to be treated as an all-or-nothing proposition.',
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

export const ctaContent = {
  headline: 'Evaluating landfill or constrained-site solar?',
  subtext:
    "If you're bidding, developing, or scoping a project with these constraints, we'd be glad to discuss where Roll-A-Rack may fit.",
};
