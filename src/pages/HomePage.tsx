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
import { AudienceSplit } from '../components/marketing/AudienceSplit';
import { CtaCard } from '../components/marketing/CtaCard';
import { FeatureGrid } from '../components/marketing/FeatureGrid';
import { VideoFeature } from '../components/marketing/VideoFeature';
import { credibilityItems, solutionFeatures } from '../content/site';

const HERO_HIGHLIGHTS = [
  '~50% less land required',
  'Row gap in inches, not feet',
  'On-site portable roll forming',
  'Patent-backed technology',
];

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
      {/* Hero */}
      <Box
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: 'var(--rar-panel)',
          borderBottom: '1px solid var(--rar-border)',
        }}
      >
        {/* Grid texture */}
        <Box
          className="rar-grid-bg"
          style={{ position: 'absolute', inset: 0, opacity: 0.8, pointerEvents: 'none' }}
        />
        {/* Soft amber warmth */}
        <Box
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(228,166,0,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Amber top line */}
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: rem(3),
            background: 'linear-gradient(to right, var(--rar-amber) 0%, rgba(228,166,0,0.15) 60%, transparent 100%)',
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
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--rar-text)',
              }}
            >
              Solar racking for landfill, brownfield, agricultural, and land-sensitive sites.
            </Title>
            <Text
              size="xl"
              mb="xl"
              style={{ color: 'var(--rar-text-dim)', maxWidth: 560, lineHeight: 1.65 }}
            >
              Roll-A-Rack combines tighter row spacing, on-site roll forming, and rainwater-aware channel design to support lower-disturbance solar deployment on constrained sites.
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
                to="/landfill-solar"
                variant="outline"
                color="gray"
                size="lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Landfill & Constrained-Site Solar
              </Button>
            </Group>

            <Group gap="sm" wrap="wrap">
              {HERO_HIGHLIGHTS.map((h) => (
                <Box
                  key={h}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: rem(8),
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    border: '1px solid var(--rar-border)',
                    borderRadius: 6,
                    padding: `${rem(8)} ${rem(16)}`,
                  }}
                >
                  <Box
                    style={{
                      width: rem(6),
                      height: rem(6),
                      borderRadius: '50%',
                      backgroundColor: 'var(--rar-amber)',
                      flexShrink: 0,
                    }}
                  />
                  <Text
                    size="sm"
                    fw={500}
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'var(--rar-text)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </Text>
                </Box>
              ))}
            </Group>
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
            Capped landfills, brownfields, and neighborhood-adjacent parcels demand more from a racking system than conventional row spacing allows. Runoff and erosion concerns, cap-integrity requirements, permitting friction, and community scrutiny all raise the bar.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Meanwhile, conventional row spacing wastes usable acreage — every foot of gap between rows is ground that produces nothing. On constrained sites, that trade-off can make projects harder to justify or impossible to fit.
          </Text>
        </Box>
      </ContentSection>

      {/* The Solution */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="The Solution"
          title="A gutter-like racking approach built for land efficiency."
          subtitle="Roll-A-Rack uses a channel-based system designed to reduce row spacing from feet to inches — while helping manage rainwater and supporting faster, more adaptable installation."
          maw={700}
        />
        <FeatureGrid features={SOLUTION_FEATURES} />
      </ContentSection>

      {/* Video */}
      <ContentSection py={80}>
        <VideoFeature
          label="See the system"
          title="A closer look at the on-site roll-forming approach."
          body="The portable Roll-A-Rack machine forms structural channel components directly on site — reducing shipping complexity and giving project teams more flexibility in the field."
          embedUrl="https://youtu.be/OAp-0qTner4"
        />
      </ContentSection>

      {/* Audience split */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="Two paths forward"
          title="Who's this for?"
          centered
          maw={540}
        />
        <AudienceSplit />
      </ContentSection>

      {/* Credibility strip */}
      <ContentSection py={72}>
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
                backgroundColor: 'var(--rar-panel)',
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
              <Text fw={600} mb="xs" style={{ color: 'var(--rar-text)', fontFamily: 'Space Grotesk, sans-serif' }}>
                {item.title}
              </Text>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                {item.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Featured: Landfill Solar */}
      <ContentSection alt py={72}>
        <Box
          style={{
            backgroundColor: 'var(--rar-bg)',
            border: '1px solid var(--rar-border)',
            borderRadius: 12,
            padding: `${rem(48)} ${rem(40)}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(16),
          }}
        >
          <span className="rar-label">Current focus</span>
          <Title
            order={3}
            style={{ letterSpacing: '-0.01em', color: 'var(--rar-text)' }}
          >
            Landfill and constrained-site solar
          </Title>
          <Text
            size="lg"
            style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65, maxWidth: 600 }}
          >
            Landfill and land-constrained solar projects are a particularly strong fit for Roll-A-Rack's lower-disturbance, rainwater-aware racking approach.
          </Text>
          <Button
            component={Link}
            to="/landfill-solar"
            variant="filled"
            color="denim"
            size="md"
            mt="xs"
            rightSection={<IconArrowRight size={16} />}
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Explore why it fits
          </Button>
        </Box>
      </ContentSection>

      {/* Final CTA */}
      <ContentSection py={80}>
        <CtaCard
          label="Get in touch"
          headline="Looking at a pilot or partnership opportunity?"
          subtext="We work with installers, project developers, and pilot partners. If Roll-A-Rack sounds like a fit for your project, let's talk."
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
