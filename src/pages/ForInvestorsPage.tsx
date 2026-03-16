import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Text,
  SimpleGrid,
  Title,
  rem,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { CtaCard } from '../components/marketing/CtaCard';
import { TimelineBlock } from '../components/marketing/TimelineBlock';
import { investorReasons, investorTraction } from '../content/site';

export function ForInvestorsPage() {
  useEffect(() => {
    document.title = 'For Investors — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="For Investors"
        headline="A cleantech bet aimed at a real physical bottleneck: land use."
        subhead="Roll-A-Rack is building a patent-backed solar racking platform centered on land efficiency, simpler deployment, and pilot-driven validation."
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
              Start the conversation
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outline"
              color="flame"
              size="lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              About the company
            </Button>
          </>
        }
        gridBg
      />

      {/* Three reasons */}
      <ContentSection py={80}>
        <SectionHeading
          label="The investment case"
          title="Three reasons to look at Roll-A-Rack."
          maw={600}
        />
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {investorReasons.map((reason) => (
            <Box
              key={reason.number}
              className="rar-panel"
              style={{
                padding: rem(36),
                borderTop: `3px solid var(--rar-flame)`,
                height: '100%',
              }}
            >
              <Box
                mb="md"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: rem(48),
                  fontWeight: 700,
                  color: 'rgba(255,60,0,0.18)',
                  lineHeight: 1,
                }}
              >
                {reason.number}
              </Box>
              <Title order={4} mb="md" style={{ color: 'white' }}>
                {reason.title}
              </Title>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
                {reason.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Current traction */}
      <ContentSection alt py={80}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={64}>
          <Box>
            <SectionHeading
              label="Traction"
              title="Where the company stands today."
            />
            <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
              Roll-A-Rack is not at the concept stage. The company has secured meaningful external validation — through grants, patents, and partner relationships — and is working toward pilot deployments that will generate real-world proof.
            </Text>
          </Box>
          <Box>
            <TimelineBlock items={investorTraction} />
          </Box>
        </SimpleGrid>
      </ContentSection>

      {/* Use of funds */}
      <ContentSection py={80}>
        <Box maw={660}>
          <SectionHeading label="Capital" title="What investment supports." />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Capital would support broader beta deployment, documentation of real project performance, and advancement toward commercial scale. The primary goal of the next phase is to move from a validated concept with patents and engineering support to a demonstrated system with documented real-world installations.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            That transition — from pilot to proof — is what unlocks a stronger commercial and strategic position.
          </Text>
        </Box>
      </ContentSection>

      {/* Exit / scale */}
      <ContentSection alt py={72}>
        <Box maw={660}>
          <SectionHeading label="The longer view" title="How the platform scales." />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            If beta deployments validate the land-efficiency story at real project scale, Roll-A-Rack is positioned as a differentiated platform in a market where land-constrained solar deployment is a growing challenge — not a niche case.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Strategic acquisition interest from racking manufacturers, EPC firms, or infrastructure investors who understand the land-use tension is a reasonable exit framing — not a primary pitch, but a realistic one as the installation base grows.
          </Text>
          <Text size="sm" mt="xl" style={{ color: 'var(--rar-text-muted)', fontStyle: 'italic' }}>
            All forward-looking statements represent development-stage projections and should not be read as guarantees of performance or outcomes.
          </Text>
        </Box>
      </ContentSection>

      {/* Final CTA */}
      <ContentSection py={80}>
        <CtaCard
          headline="Want the fuller investment story?"
          subtext="We're happy to share more detail with serious inquiries — including patents, grant history, and the pilot roadmap."
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
