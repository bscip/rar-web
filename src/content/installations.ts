export type InstallationStatus = 'Planning' | 'In Progress' | 'Completed' | 'Placeholder';
export type InstallationType = 'Farm' | 'Brownfield' | 'Landfill' | 'Commercial' | 'Pilot';

export interface Installation {
  id: string;
  title: string;
  status: InstallationStatus;
  summary: string;
  type: InstallationType;
  location?: string;
  imageUrl?: string;
  metrics?: { label: string; value: string }[];
}

export const installations: Installation[] = [
  {
    id: 'urban-farm-pilot',
    title: 'Urban Farm Pilot',
    status: 'Planning',
    summary:
      'A planned pilot deployment at an urban farming site, demonstrating land-efficient racking that preserves usable ground area beneath the panels.',
    type: 'Farm',
    metrics: [
      { label: 'Estimated land savings', value: '~50%' },
      { label: 'Row spacing', value: 'Inches' },
    ],
  },
  {
    id: 'beta-site-planning',
    title: 'Beta Site in Planning',
    status: 'Planning',
    summary:
      'An early-phase beta installation being scoped with an installer partner. Details will be shared as the project advances toward deployment.',
    type: 'Pilot',
  },
  {
    id: 'land-constrained-example',
    title: 'Land-Constrained Commercial Project',
    status: 'Placeholder',
    summary:
      'An example of the type of commercial project where Roll-A-Rack provides a meaningful land-efficiency advantage. This entry will be replaced with a real case study.',
    type: 'Commercial',
  },
  {
    id: 'future-case-study',
    title: 'Future Case Study',
    status: 'Placeholder',
    summary:
      'This page will expand as pilot installations are documented. Early installer partners will be featured here.',
    type: 'Pilot',
  },
];

export const useCaseTypes = [
  {
    id: 'farms',
    title: 'Farms & Agricultural Sites',
    body: 'Agrivoltaic-adjacent projects where land beneath and around solar arrays still holds value. Tighter row spacing means more of the land remains usable.',
  },
  {
    id: 'brownfields',
    title: 'Brownfields',
    body: 'Remediated or underutilized land where minimizing the physical footprint of racking infrastructure reduces cost and complication.',
  },
  {
    id: 'landfills',
    title: 'Landfills',
    body: 'Capped landfill sites with surface area constraints. Low-disturbance ballasted racking and minimal ground penetration are strong fits here.',
  },
  {
    id: 'land-sensitive',
    title: 'Land-Sensitive Commercial Sites',
    body: 'Projects where land-use agreements, zoning, or environmental considerations create friction with conventional wide-row racking.',
  },
];
