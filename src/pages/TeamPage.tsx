import { useEffect } from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { TeamCard } from '../components/team/TeamCard';
import { teamMembers } from '../content/team';

const PARTNERS = [
  'MAGNET — Northeast Ohio Manufacturing Advocacy & Growth Network',
  'New Tech Machinery — Portable roll-forming equipment',
  'DOE — Department of Energy grant support',
  'USDA — Development phase funding',
];

export function TeamPage() {
  useEffect(() => {
    document.title = 'Team — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="Team"
        headline="The team behind Roll-A-Rack."
        subhead="Roll-A-Rack combines founder-led vision, installer experience, engineering support, and manufacturing relationships to move a new physical system toward real deployment."
        gridBg
      />

      {/* Team grid */}
      <ContentSection py={80}>
        <SectionHeading
          label="Core team"
          title="People building the system."
          maw={580}
        />
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Supporting network */}
      <ContentSection alt py={72}>
        <SectionHeading
          label="Supporting network"
          title="Partners & development support."
          maw={560}
        />
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: rem(12),
            maxWidth: 600,
          }}
        >
          {PARTNERS.map((partner) => (
            <Box
              key={partner}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: rem(16),
                padding: `${rem(16)} ${rem(20)}`,
                backgroundColor: 'var(--rar-bg)',
                border: '1px solid var(--rar-border)',
                borderRadius: 8,
              }}
            >
              <Box
                style={{
                  width: rem(8),
                  height: rem(8),
                  borderRadius: '50%',
                  backgroundColor: 'var(--rar-amber)',
                  flexShrink: 0,
                }}
              />
              <Text size="sm" style={{ color: 'var(--rar-text)' }}>
                {partner}
              </Text>
            </Box>
          ))}
        </Box>
        <Text size="sm" mt="xl" style={{ color: 'var(--rar-text-muted)' }}>
          Team composition reflects the current development stage. Advisors and additional contributors may be added as the company advances.
        </Text>
      </ContentSection>
    </>
  );
}
