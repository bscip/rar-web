import { useEffect } from 'react';
import {
  Box,
  Text,
  Title,
  Group,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { TeamCard } from '../components/team/TeamCard';
import { teamMembers } from '../content/team';

const founder = teamMembers.find((m) => m.role === 'Founder')!;
const restOfTeam = teamMembers.filter((m) => m.role !== 'Founder');

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

      {/* Founder */}
      <ContentSection py={80}>
        <SectionHeading
          label="Founder"
          title="The vision behind Roll-A-Rack."
          maw={580}
        />
        <Box
          style={{
            backgroundColor: 'var(--rar-panel)',
            border: '1px solid var(--rar-border)',
            borderLeft: '3px solid var(--rar-amber)',
            borderRadius: 10,
            padding: `${rem(40)} ${rem(40)}`,
            maxWidth: 720,
          }}
        >
          <Group gap="lg" mb="lg" wrap="nowrap" align="flex-start">
            {founder.imageUrl ? (
              <Box
                component="img"
                src={founder.imageUrl}
                alt={founder.name}
                style={{
                  width: rem(72),
                  height: rem(72),
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
            ) : (
              <Box
                style={{
                  width: rem(72),
                  height: rem(72),
                  borderRadius: '50%',
                  backgroundColor: 'rgba(228, 166, 0, 0.1)',
                  border: '1px solid rgba(228, 166, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--rar-amber)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: rem(22),
                }}
              >
                DS
              </Box>
            )}
            <Box>
              <Title order={3} style={{ color: 'var(--rar-text)' }}>
                {founder.name}
              </Title>
              <Text
                size="md"
                fw={500}
                style={{
                  color: 'var(--rar-amber)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  marginTop: rem(2),
                }}
              >
                {founder.role}
              </Text>
            </Box>
          </Group>
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            {founder.bio}
          </Text>
        </Box>
      </ContentSection>

      {/* Rest of team */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="Core team"
          title="People building the system."
          maw={580}
        />
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {restOfTeam.map((member) => (
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
