// ─────────────────────────────────────────────────────────────────────────────
// Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface MetricRow {
  category: string;
  traditional: string;
  rar: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Anchor nav (6 sections matching PDF TOC)
// ─────────────────────────────────────────────────────────────────────────────

export const anchorNav = [
  { label: 'Design / Build as a Service', anchor: 'design-build' },
  { label: 'Traditional vs RAR', anchor: 'build-comparison' },
  { label: '5\u00B0 Tilt & Land Density', anchor: 'tilt-density' },
  { label: 'Fast to Install', anchor: 'fast-install' },
  { label: 'Metrics Comparison', anchor: 'metrics' },
  { label: 'Neighborhood Friendly', anchor: 'neighborhood' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hero / intro
// ─────────────────────────────────────────────────────────────────────────────

export const heroContent = {
  eyebrow: 'Cleveland Landfill Solar Projects',
  headline: "Roll-A-Rack Is a Strong Fit for Cleveland\u2019s Landfill Solar Projects",
  tagline:
    'The RAR design/build model allows procurement, fabrication, and installation to proceed in parallel.',
  tocLabel: 'How Roll-A-Rack Can Differentiate a Cleveland Landfill Solar Proposal',
  tocItems: [
    'Design/Build Racking Brings Factory to Project Site',
    'Comparison of Traditional vs Roll-A-Rack Model',
    '5\u00B0 Tilt Requires 50% Less Land and Minimal Ballast',
    'Fast to Install',
    'Comparison of Traditional and RAR Metrics',
    'Old Brooklyn Neighborhood Friendly',
  ],
  contactName: 'Don Scipione',
  contactPhone: '216-346-6955',
  contactEmail: 'don@roll-a-rack.com',
  contactLabel: 'Contact Don Scipione to discuss how Roll-A-Rack can support your bid:',
  contactSupport: [
    'Layout guidance',
    'Bid input support',
    'Technical consultation',
    'Roll-forming machine and staff to produce the racking channels at the project site',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section 1: Design / Build as a Service
// ─────────────────────────────────────────────────────────────────────────────

export const designBuildContent = {
  title: '1. Design/Build Solar Racking as a Service',
  systemDesc: [
    'The Roll-A-Rack\u2122 racking system uses a portable roll-forming machine to produce its gutter-like channel rack from coils of flat metal.',
    'The solar panel is attached to the rack channel with two clamp brackets.',
  ],
  serviceTitle: 'Design/Build Solar Racking as a Service',
  serviceBody:
    'We call this racking model Design/Build because the procurement, array design, and installation can proceed in parallel. It is a \u201CService\u201D because RAR will bring the factory to the project site and generate the racking to spec.',
  bomBody:
    'The Bill of Material depends only on the total energy of the system. For example, the Cleveland landfill project is 10 MW. If you specify 500 W solar panels of length 80 inches for the project, you need:',
  bomItems: [
    '20,000 solar panels',
    '140,000 feet of roll-forming metal',
    '40,000 bracket clamps',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section 2: Process Comparison
// ─────────────────────────────────────────────────────────────────────────────

export const processComparison = {
  title: '2. Comparison of Traditional Build vs. Roll-A-Rack Build',
  traditional: [
    'Detailed Design Required First',
    'Factory Fabrication (Off-Site)',
    'Trucking to Site (Multiple Shipments)',
    'Large Staging Area Required',
    'Installation Begins After Delivery',
    'Installation Halts for Modifications and Supply Chain Problems',
  ],
  rar: [
    'Procure Materials (Coil + Clamps) without Detailed Design',
    'Bring Portable Roll-Forming to Site',
    'Manufacture On-Site (5 kW per Minute)',
    'Install Continuously as Produced',
    'Adapt Layout in Real Time',
  ],
  summary: 'Key Difference: procurement, fabrication, and installation proceed in parallel',
};

// ─────────────────────────────────────────────────────────────────────────────
// Section 3: 5° Tilt
// ─────────────────────────────────────────────────────────────────────────────

export const densityContent = {
  title: '3. RAR 5\u00B0 Tilt Requires 50% Less Land and Minimal Ballast',
  landTitle: '50% Less Land',
  landSubtitle: 'Cleveland could double its energy generation.',
  landBody:
    'Our 5\u00B0 tilt has minimal shading issues and RAR manages rainfall so there is no need for erosion control vegetation between rows. The RAR gutter channel gap is 15 inches compared to several feet for traditional racking systems.',
  ballastTitle: 'Minimal Ballast',
  ballastSubtitle: 'Protects the landfill cap.',
  ballastBody:
    'Being low profile greatly reduces wind uplift as wind speeds close to the ground are much less than at 5\u201310 feet above ground. RAR rack channels act as wind shields. RAR needs additional ballast only at the periphery of the array.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Section 4: Fast to Install
// ─────────────────────────────────────────────────────────────────────────────

export const fastInstallContent = {
  title: '4. Roll-A-Rack is Fast to Install',
  intro:
    'Roll-A-Rack is a two-component racking system: the roll-formed gutter channel and the clamp bracket that secures the solar panel to the gutter channel. The array is constructed in four steps.',
  steps: [
    'Roll-form the gutter channels.',
    'Attach the bracket clamps to the solar panel.',
    'Snap the solar panel into the gutter channels.',
    'Secure the clamp bracket to the gutter channel.',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section 5: Metrics
// ─────────────────────────────────────────────────────────────────────────────

export const metricsTitle = '5. Comparison of Traditional and RAR Metrics';

export const metricsComparison: MetricRow[] = [
  { category: 'Material Cost', traditional: 'Lower', rar: 'Higher' },
  { category: 'Labor', traditional: 'Higher', rar: 'Lower' },
  { category: 'Logistics', traditional: 'Higher', rar: 'Lower' },
  { category: 'Waste', traditional: '2\u20138%', rar: '\u223C0%' },
  { category: 'Handling', traditional: '3\u20135 steps', rar: '\u223C1.5 steps' },
  { category: 'Cleanup', traditional: '20\u201360 hrs/MW', rar: '\u223C3 hrs/MW' },
  { category: 'Schedule', traditional: 'Sequential', rar: 'Parallel' },
  { category: 'Procurement Risk', traditional: 'Higher', rar: 'Lower' },
  { category: 'Landfill Cap Impact', traditional: 'Higher', rar: 'Lower' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Section 6: Neighborhood Friendly
// ─────────────────────────────────────────────────────────────────────────────

export const neighborhoodContent = {
  title: '6. Old Brooklyn Neighborhood Friendly',
  body: [
    'The Old Brooklyn Landfill is adjacent to a neighborhood community. Roll-A-Rack\u2019s low-profile racking is much less invasive, obtrusive, and less visible to the surrounding community. Compare RAR\u2019s ground-hugging array to 6\u201312 feet tall rows of solar panels that are like giants waving their hands and taunting the community. RAR arrays are less visible and can much more easily be hidden from sight.',
    'As an outreach to the neighborhood, a small pollinator habitat array could be installed in the adjacent park area. RAR can grow bee-friendly mushrooms under the panel and pollinator-friendly clover in the gutters or adjacent bioswale.',
  ],
};
