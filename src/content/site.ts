export interface NavItem {
  label: string;
  to: string;
}

export interface FooterGroup {
  heading: string;
  links: NavItem[];
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface CredibilityItem {
  title: string;
  body: string;
}

export interface InvestorReason {
  number: string;
  title: string;
  body: string;
}

export interface InstallerBenefit {
  title: string;
  body: string;
}

export const navItems: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Installers', to: '/for-installers' },
  { label: 'Investors', to: '/for-investors' },
  { label: 'Installations', to: '/installations' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export const heroStats: HeroStat[] = [
  { value: '~50%', label: 'Reduction in land requirement' },
  { value: 'Inches', label: 'Row gap instead of feet' },
  { value: 'On-site', label: 'Portable roll forming' },
  { value: 'Patent-backed', label: 'Technology platform' },
];

export const credibilityItems: CredibilityItem[] = [
  {
    title: 'Issued Patents',
    body: 'Core technology protected by issued and pending patent coverage.',
  },
  {
    title: 'DOE Grant Support',
    body: 'Department of Energy grant funding backing development and validation.',
  },
  {
    title: 'USDA Support',
    body: 'USDA support providing runway through the current development phase.',
  },
  {
    title: 'Engineering Partners',
    body: 'Manufacturing and engineering relationships to support deployment.',
  },
];

export const investorReasons: InvestorReason[] = [
  {
    number: '01',
    title: 'Land-Use Wedge',
    body: 'Roll-A-Rack is not a commodity racking variation. The core wedge is reducing land required for deployment — addressing a growing source of project friction across agricultural, commercial, and land-sensitive sites.',
  },
  {
    number: '02',
    title: 'System & Deployment Leverage',
    body: 'Portable on-site roll forming, simplified logistics, and installation efficiency create a more differentiated story than standard racking products. The system is designed to be adaptable and repeatable.',
  },
  {
    number: '03',
    title: 'Grant, Patent & Pilot Foundation',
    body: 'The company has patents, prior grant support from DOE and USDA, established partner relationships, and a concrete beta-site path — not a concept-stage pitch.',
  },
];

export const installerBenefits: InstallerBenefit[] = [
  {
    title: 'Differentiated Offering',
    body: 'Bring a land-efficient racking solution to customers who care about minimizing site footprint.',
  },
  {
    title: 'Improved Land Efficiency',
    body: "Designed to reduce row spacing from feet to inches — a compelling story for any land-sensitive project.",
  },
  {
    title: 'Simplified Logistics',
    body: 'On-site roll forming reduces the need to pre-order and transport large pre-formed racking components.',
  },
  {
    title: 'Pilot Visibility',
    body: 'Early partners help shape real-world deployments and build documented case studies alongside us.',
  },
  {
    title: 'Flexible Adaptation',
    body: 'Channel systems can be adjusted during installation — reducing waste and rework compared to rigid alternatives.',
  },
  {
    title: 'Farm & Agrivoltaic Fit',
    body: 'Strong fit for agricultural and land-sensitive sites where conventional row spacing is a barrier.',
  },
];

export const solutionFeatures: InstallerBenefit[] = [
  {
    title: 'Tighter Row Spacing',
    body: 'Row gap measured in inches rather than feet — designed to cut land requirements by approximately 50%.',
  },
  {
    title: 'Rainwater Management',
    body: 'Gutter-like channel design directs rainfall and helps manage runoff and erosion on-site.',
  },
  {
    title: 'Ballasted & Low-Disturbance',
    body: 'Minimal ground penetration. The system is designed for low permanent disturbance to the land beneath.',
  },
  {
    title: 'On-Site Roll Forming',
    body: 'Portable machinery produces channels on location — reducing transport complexity and pre-order lead times.',
  },
  {
    title: 'Adaptable During Install',
    body: 'Channels can be adjusted and recut on-site, reducing rework and material waste when conditions vary.',
  },
];

export const investorTraction = [
  { label: 'DOE grant support', status: 'Complete' },
  { label: 'USDA runway funding', status: 'Active' },
  { label: 'Patents issued / pending', status: 'Active' },
  { label: 'Engineering & manufacturing partners', status: 'Active' },
  { label: 'Beta site planning', status: 'In progress' },
  { label: 'Pilot deployments', status: 'Target' },
];
