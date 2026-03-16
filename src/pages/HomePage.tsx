import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Text,
  Title,
  Group,
  rem,
} from '@mantine/core';
import {
  IconArrowRight,
  IconShield,
  IconDroplet,
  IconMaximize,
  IconTool,
  IconRefresh,
} from '@tabler/icons-react';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { StatStrip } from '../components/marketing/StatStrip';
import { AudienceSplit } from '../components/marketing/AudienceSplit';
import { CtaCard } from '../components/marketing/CtaCard';
import { FeatureGrid } from '../components/marketing/FeatureGrid';
import { heroStats, credibilityItems, solutionFeatures } from '../content/site';

const SOLUTION_FEATURES = solutionFeatures.map((f, i) => ({
  ...f,
  icon: [
    <IconMaximize size={20} />,
    <IconDroplet size={20} />,
    <IconShield size={20} />,
    <IconTool size={20} />,
    <IconRefresh size={20} />,
  ][i],
}));

export function HomePage() {
  return (
    <>
      {/* Hero — full viewport with grid bg */}
      <Box
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Grid texture */}
        <Box
          className="rar-grid-bg"
          style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}
        />
        {/* Amber radial glow */}
        <Box
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(228,166,0,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: rem(120),
            background: 'linear-gradient(to bottom, transparent, var(--rar-bg))',
            pointerEvents: 'none',
          }}
        />

        <Container size="xl" style={{ position: 'relative', zIndex: 1, paddingTop: rem(80), paddingBottom: rem(80) }}>
          <Box maw={760}>
            <span className="rar-label">Land-based solar racking</span>
            <Title
              order={1}
              mt="md"
              mb="xl"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'white',
              }}
            >
              Solar racking that cuts land use, simplifies installation, and fits where conventional systems struggle.
            </Title>
            <Text
              size="xl"
              mb="xl"
              style={{ color: 'var(--rar-text-dim)', maxWidth: 560, lineHeight: 1.65 }}
            >
              Roll-A-Rack is a land-based solar racking system designed to reduce row spacing, manage rainwater, and support faster, more adaptable deployment.
            </Text>
            <Group gap="md" mb={56}>
              <Button
                component={Link}
                to="/contact"
                variant="filled"
                color="denim"
                size="lg"
                rightSection={<IconArrowRight size={18} />}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Talk to Roll-A-Rack
              </Button>
              <Button
                component={Link}
                to="/for-installers"
                variant="outline"
                color="amber"
                size="lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                For Installers
              </Button>
              <Button
                component={Link}
                to="/for-investors"
                variant="outline"
                color="flame"
                size="lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                For Investors
              </Button>
            </Group>

            {/* Stat strip */}
            <StatStrip stats={heroStats} />
          </Box>
        </Container>
      </Box>

      {/* The Problem */}
      <ContentSection py={80}>
        <Box maw={680}>
          <SectionHeading
            label="The Problem"
            title="Solar development keeps running into a land-use wall."
          />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Conventional row spacing consumes more land, increases friction in sensitive environments, and can make projects harder to permit or justify. This is especially important for farms and other sites where land use matters — where every foot of spacing between rows represents ground that can't be used for anything else.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            As solar deployment expands into land-constrained areas, the gap between what conventional racking demands and what sites can actually offer is only growing.
          </Text>
        </Box>
      </ContentSection>

      {/* The Solution */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="The Solution"
          title="A gutter-like racking approach built for land efficiency."
          subtitle="Roll-A-Rack uses a channel-based system that reduces row spacing from feet to inches — while managing rainwater and supporting faster, more adaptable installation."
          maw={700}
        />
        <FeatureGrid features={SOLUTION_FEATURES} />
      </ContentSection>

      {/* Audience split */}
      <ContentSection py={80}>
        <SectionHeading
          label="Two paths forward"
          title="Who's this for?"
          centered
          maw={540}
        />
        <AudienceSplit />
      </ContentSection>

      {/* Credibility strip */}
      <ContentSection alt py={72}>
        <SectionHeading
          label="Foundation"
          title="Not a concept. A developing platform."
          subtitle="Roll-A-Rack is backed by real intellectual property, grant support, and engineering relationships."
          maw={600}
        />
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
          {credibilityItems.map((item) => (
            <Box
              key={item.title}
              style={{
                backgroundColor: 'var(--rar-bg)',
                border: '1px solid var(--rar-border)',
                borderRadius: 10,
                padding: rem(24),
              }}
            >
              <Box
                mb="sm"
                style={{
                  width: rem(8),
                  height: rem(8),
                  borderRadius: '50%',
                  backgroundColor: 'var(--rar-amber)',
                }}
              />
              <Text fw={600} mb="xs" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>
                {item.title}
              </Text>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                {item.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Final CTA */}
      <ContentSection py={80}>
        <CtaCard
          label="Get in touch"
          headline="Looking at a pilot, partnership, or investment conversation?"
          subtext="We work with installers, project developers, and investors. If Roll-A-Rack sounds like a fit, let's talk."
          variant="flame"
          ctas={
            <>
              <Button
                component={Link}
                to="/contact"
                variant="filled"
                color="denim"
                size="lg"
                rightSection={<IconArrowRight size={18} />}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Contact Us
              </Button>
              <Button
                component={Link}
                to="/about"
                variant="outline"
                color="gray"
                size="lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                About Roll-A-Rack
              </Button>
            </>
          }
        />
      </ContentSection>
    </>
  );
}
