export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  company?: string;
  linkedinUrl?: string;
  email?: string;
  imageUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Don Scipione',
    role: 'Founder',
    bio: "Don conceived and developed the Roll-A-Rack system from the ground up, driving the patent process and building the partnerships and grant support that underpin the company. His focus is on solving a real physical bottleneck in solar land use — not building a me-too product.",
  },
  {
    name: 'Brian Scipione',
    role: 'Business Development',
    bio: 'Brian leads business development efforts, connecting Roll-A-Rack with installer partners, pilot partners, and strategic relationships. He focuses on translating the technology story into real project opportunities.',
  },
  {
    name: 'Mike Keller',
    role: 'Mechanical Engineer',
    company: 'MAGNET',
    bio: 'Mike provides mechanical engineering support through MAGNET, contributing to the system design, structural validation, and readiness for real-world deployment conditions.',
  },
  {
    name: 'Adam Mazella',
    role: 'President, New Tech Machinery',
    company: 'New Tech Machinery',
    bio: "Adam brings deep expertise in portable roll-forming technology through New Tech Machinery. His relationship with RAR supports the manufacturing side of the on-site forming approach that makes the system distinctive.",
  },
  {
    name: 'Jamie Doyle',
    role: 'Solar Installer',
    bio: 'Jamie brings hands-on solar installation experience to the team, grounding product development in the practical realities of field deployment and installer workflow.',
  },
  {
    name: 'Jeff Kalt',
    role: 'Solar Installer',
    bio: 'Jeff contributes installer perspective and field knowledge, helping shape the system around what actually works when crews are on-site.',
  },
];
