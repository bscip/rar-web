import { useEffect } from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  rem,
} from '@mantine/core';
import {
  IconMaximize,
  IconDroplet,
  IconLeaf,
  IconTruck,
  IconTopologyFull,
} from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { AudienceSplit } from '../components/marketing/AudienceSplit';
import { FeatureGrid } from '../components/marketing/FeatureGrid';

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Portable roll forming on site',
    body: 'A portable machine forms gutter-like channels directly at the project site — eliminating the need to pre-order and ship large racking components.',
  },
  {
    number: '02',
    title: 'Panel attachment to the channel system',
    body: 'Solar panels attach to the on-site formed channels, which are positioned to reduce row spacing while keeping panels at appropriate angles.',
  },
  {
    number: '03',
    title: 'Rainfall directed, land preserved',
    body: 'The channel design manages water runoff and reduces erosion risk — while the tighter layout leaves more usable land beneath and around the array.',
  },
];

const WHY_DIFFERENT = [
  {
    title: 'Less land required',
    body: 'Designed to reduce land requirements by approximately 50% compared to conventional row spacing — directly addressing a growing source of project friction.',
    icon: <IconMaximize size={20} />,
  },
  {
    title: 'Reduced erosion concerns',
    body: 'The gutter-like channel system is designed to manage rainwater runoff, reducing the erosion and drainage challenges common on ground-mounted installations.',
    icon: <IconDroplet size={20} />,
  },
  {
    title: 'Strong fit for farms & brownfields',
    body: 'Tighter row spacing and low-disturbance installation make Roll-A-Rack a strong fit for agricultural, brownfield, and landfill sites where land use is critical.',
    icon: <IconLeaf size={20} />,
  },
  {
    title: 'Simplified logistics',
    body: 'On-site forming removes much of the pre-order complexity and shipping burden associated with large, pre-formed racking systems.',
    icon: <IconTruck size={20} />,
  },
  {
    title: 'Less permanent disturbance',
    body: 'A ballasted, low-penetration design reduces the permanent impact on the land surface — a meaningful advantage in sensitive or multi-use environments.',
    icon: <IconTopologyFull size={20} />,
  },
];

export function AboutPage() {
  useEffect(() => {
    document.title = 'About — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="About Roll-A-Rack"
        headline="About Roll-A-Rack"
        subhead="Roll-A-Rack is developing a land-based solar racking approach aimed at reducing land use, managing runoff, and making installation simpler and more adaptable."
        gridBg
      />

      {/* Why it exists */}
      <ContentSection py={80}>
        <Box maw={700}>
          <SectionHeading label="Why it exists" title="Land use is a real and growing problem for solar." />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Ground-mounted solar projects face a persistent tension: the land they require is often the same land that farmers, landowners, and communities care most about preserving. Wide row spacing — a convention of standard racking systems — makes this worse.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            For farms, brownfields, landfills, and land-sensitive commercial sites, the question isn't just whether solar fits. It's whether the land use tradeoff makes sense. Roll-A-Rack was developed to change that calculus — reducing the space required while managing the environmental concerns that come with ground-mounted installation.
          </Text>
        </Box>
      </ContentSection>

      {/* How it works */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="How it works"
          title="Three steps from machine to array."
          maw={600}
        />
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {HOW_IT_WORKS.map((step) => (
            <Box
              key={step.number}
              style={{
                backgroundColor: 'var(--rar-bg)',
                border: '1px solid var(--rar-border)',
                borderRadius: 10,
                padding: rem(32),
              }}
            >
              <Box
                mb="lg"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: rem(40),
                  fontWeight: 700,
                  color: 'rgba(228,166,0,0.2)',
                  lineHeight: 1,
                }}
              >
                {step.number}
              </Box>
              <Text fw={600} mb="sm" size="md" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>
                {step.title}
              </Text>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                {step.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Why different */}
      <ContentSection py={80}>
        <SectionHeading
          label="What makes it different"
          title="Designed around what the land needs."
          maw={600}
        />
        <FeatureGrid features={WHY_DIFFERENT} cols={{ base: 1, sm: 2, md: 3 }} />
      </ContentSection>

      {/* Focus area */}
      <ContentSection alt py={72}>
        <Box maw={640}>
          <SectionHeading label="Current focus" title="Land-based projects first." />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Roll-A-Rack's current development emphasis is on land-based solar installations — specifically sites where row spacing, land use, and runoff management are active concerns. This includes farms, brownfields, landfills, and commercial land-sensitive projects.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            The system may have applicability in other contexts over time, but the land-based deployment story is where the strongest differentiation and pilot opportunities exist right now.
          </Text>
        </Box>
      </ContentSection>

      {/* Audience split CTA */}
      <ContentSection py={80}>
        <SectionHeading
          label="Next steps"
          title="What kind of conversation are you looking for?"
          centered
          maw={500}
        />
        <AudienceSplit />
      </ContentSection>
    </>
  );
}
