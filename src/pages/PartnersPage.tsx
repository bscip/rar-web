import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Group,
  Text,
  SimpleGrid,
  Stack,
  Title,
  rem,
} from '@mantine/core';
import {
  IconArrowRight,
  IconHelmet,
  IconBuildingFactory2,
  IconPlant2,
  IconUsers,
  IconCheck,
} from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { CtaCard } from '../components/marketing/CtaCard';

const PARTNER_TYPES = [
  {
    icon: <IconHelmet size={22} />,
    color: 'var(--rar-amber)',
    colorBg: 'rgba(228, 166, 0, 0.1)',
    label: 'EPCs / Design-Build Bidders',
    title: 'Evaluating racking for constrained or sensitive sites.',
    bullets: [
      'Bidding on landfill, brownfield, or capped-site projects',
      'Looking for racking that can support cap protection and runoff management',
      'Open to differentiated or complementary racking approaches',
    ],
  },
  {
    icon: <IconBuildingFactory2 size={22} />,
    color: 'var(--rar-denim)',
    colorBg: 'rgba(74, 123, 160, 0.1)',
    label: 'Developers',
    title: 'Sites where land constraints change the equation.',
    bullets: [
      'Landfill, brownfield, or land-constrained solar projects',
      'Exploring agrivoltaic or dual-use configurations',
      'Evaluating ways to maximize usable site capacity',
    ],
  },
  {
    icon: <IconPlant2 size={22} />,
    color: 'var(--rar-amber)',
    colorBg: 'rgba(228, 166, 0, 0.08)',
    label: 'Municipalities / Public Entities',
    title: 'Public-sector solar with community and site sensitivity.',
    bullets: [
      'Solar on public land with neighborhood visibility concerns',
      'Projects requiring domestic-content or Buy American alignment',
      'Interested in practical, low-disturbance deployment approaches',
    ],
  },
  {
    icon: <IconUsers size={22} />,
    color: 'var(--rar-flame)',
    colorBg: 'rgba(255, 60, 0, 0.08)',
    label: 'Strategic Partners',
    title: 'Manufacturing, engineering, or integration collaboration.',
    bullets: [
      'Manufacturing or supply chain alignment',
      'Engineering or integration collaboration',
      'Long-term deployment or distribution partnership',
    ],
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: '01',
    title: 'Identify a suitable project or use case',
    body: 'Start with a project where site constraints, land use, or deployment complexity make standard racking approaches difficult.',
  },
  {
    number: '02',
    title: 'Evaluate fit based on site constraints and goals',
    body: 'We discuss whether Roll-A-Rack is the right match — based on terrain, project type, timeline, and what you are trying to accomplish.',
  },
  {
    number: '03',
    title: 'Define pilot scope or deployment approach',
    body: 'If the fit is strong, we scope the engagement together — whether that is a pilot deployment, a technical review, or a longer-term collaboration.',
  },
  {
    number: '04',
    title: 'Collaborate on implementation and evaluation',
    body: 'We work alongside you through deployment and document the outcomes — building real-world proof that serves both parties.',
  },
];

export function PartnersPage() {
  useEffect(() => {
    document.title = 'Partners — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="Partners & Pilot Opportunities"
        headline="Work With Roll-A-Rack"
        subhead="Deploy, evaluate, or explore Roll-A-Rack in real-world solar projects. Focused on practical deployment, pilot validation, and strategic collaboration."
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
              Start a Conversation
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
          </>
        }
        gridBg
      />

      {/* Who This Is For */}
      <ContentSection py={80}>
        <SectionHeading
          label="Who this is for"
          title="Four types of partners we work with."
          subtitle="Roll-A-Rack is best suited for specific project types. If any of these describe your situation, it is worth a conversation."
          maw={680}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {PARTNER_TYPES.map((pt) => (
            <Box
              key={pt.label}
              className="rar-panel"
              style={{
                padding: rem(36),
                borderTop: `3px solid ${pt.color}`,
                height: '100%',
              }}
            >
              <Box
                mb="lg"
                style={{
                  width: rem(48),
                  height: rem(48),
                  backgroundColor: pt.colorBg,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: pt.color,
                }}
              >
                {pt.icon}
              </Box>
              <span
                className="rar-label"
                style={{ marginBottom: rem(10), display: 'block', color: pt.color }}
              >
                {pt.label}
              </span>
              <Title order={4} mb="md" style={{ color: 'var(--rar-text)' }}>
                {pt.title}
              </Title>
              <Box component="ul" style={{ margin: 0, paddingLeft: rem(18) }}>
                {pt.bullets.map((b) => (
                  <Box
                    component="li"
                    key={b}
                    style={{
                      color: 'var(--rar-text-dim)',
                      fontSize: rem(14),
                      lineHeight: 1.75,
                      marginBottom: rem(4),
                    }}
                  >
                    {b}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* How We Work Together */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="Engagement"
          title="How we work together."
          maw={560}
        />
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="sm">
          {ENGAGEMENT_STEPS.map((step) => (
            <Box
              key={step.number}
              style={{
                display: 'flex',
                gap: rem(24),
                alignItems: 'flex-start',
                padding: `${rem(20)} ${rem(24)}`,
                backgroundColor: 'var(--rar-bg)',
                border: '1px solid var(--rar-border)',
                borderRadius: 10,
              }}
            >
              <Box
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: rem(13),
                  fontWeight: 700,
                  color: 'var(--rar-amber)',
                  letterSpacing: '0.05em',
                  minWidth: rem(28),
                  paddingTop: rem(2),
                }}
              >
                {step.number}
              </Box>
              <Box>
                <Text
                  fw={600}
                  mb={4}
                  style={{ color: 'var(--rar-text)', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {step.title}
                </Text>
                <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                  {step.body}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Text
          size="sm"
          mt="xl"
          style={{ color: 'var(--rar-text-muted)', fontStyle: 'italic' }}
        >
          Designed for real-world deployment, not theoretical exploration.
        </Text>
      </ContentSection>

      {/* Good near-term fit */}
      <ContentSection py={72}>
        <SectionHeading
          label="Good near-term fit"
          title="Where Roll-A-Rack may be especially relevant."
          maw={600}
        />
        <Stack gap="sm">
          {[
            'Landfill and capped sites',
            'Brownfields and remediated land',
            'Public-sector solar with neighborhood sensitivity',
            'Agrivoltaic and farm applications',
            'Projects where logistics simplicity matters',
          ].map((item) => (
            <Group key={item} gap="sm" wrap="nowrap">
              <IconCheck size={16} color="var(--rar-amber)" style={{ flexShrink: 0 }} />
              <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                {item}
              </Text>
            </Group>
          ))}
        </Stack>
      </ContentSection>

      {/* Landfill solar link */}
      <ContentSection alt py={64}>
        <Box
          style={{
            backgroundColor: 'var(--rar-bg)',
            border: '1px solid var(--rar-border)',
            borderRadius: 12,
            padding: `${rem(36)} ${rem(36)}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(12),
          }}
        >
          <span className="rar-label">Current focus</span>
          <Title order={4} style={{ color: 'var(--rar-text)' }}>
            Landfill and constrained-site solar
          </Title>
          <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65, maxWidth: 560 }}>
            Learn why Roll-A-Rack may be a strong fit for landfill, brownfield, and cap-sensitive solar projects.
          </Text>
          <Button
            component={Link}
            to="/landfill-solar"
            variant="filled"
            color="denim"
            size="sm"
            mt="xs"
            rightSection={<IconArrowRight size={16} />}
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Explore why it fits
          </Button>
        </Box>
      </ContentSection>

      {/* CTA */}
      <ContentSection py={80}>
        <CtaCard
          label="Get in touch"
          headline="Start a Conversation"
          subtext="If you're working on a project where Roll-A-Rack could fit, we'd like to hear from you."
          variant="flame"
          ctas={
            <Button
              component={Link}
              to="/contact"
              variant="filled"
              color="denim"
              size="lg"
              rightSection={<IconArrowRight size={18} />}
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Contact Roll-A-Rack
            </Button>
          }
        />
      </ContentSection>
    </>
  );
}
