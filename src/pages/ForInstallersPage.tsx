import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Text,
  SimpleGrid,
  rem,
} from '@mantine/core';
import {
  IconArrowRight,
  IconHelmet,
  IconChartBar,
  IconTool,
  IconFileText,
  IconMapPin,
  IconLeaf,
} from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { CtaCard } from '../components/marketing/CtaCard';
import { FeatureGrid } from '../components/marketing/FeatureGrid';
import { installerBenefits } from '../content/site';

const BENEFITS_WITH_ICONS = installerBenefits.map((b, i) => ({
  ...b,
  icon: [
    <IconHelmet size={20} />,
    <IconChartBar size={20} />,
    <IconTool size={20} />,
    <IconFileText size={20} />,
    <IconHelmet size={20} />,
    <IconLeaf size={20} />,
  ][i],
}));

const GOOD_FIT = [
  { icon: <IconLeaf size={20} />, title: 'Farms & agrivoltaic-adjacent sites', body: "Projects where land under and around the array is still valued. Roll-A-Rack's spacing reduction directly improves the land use story." },
  { icon: <IconMapPin size={20} />, title: 'Landfills', body: 'Capped landfill sites with surface constraints benefit from ballasted, low-penetration racking and tight spacing.' },
  { icon: <IconMapPin size={20} />, title: 'Brownfields', body: 'Remediated land with area constraints. Less sprawl means more of the usable surface goes toward production.' },
  { icon: <IconChartBar size={20} />, title: 'Land-sensitive commercial sites', body: 'Sites where land-use agreements, zoning, or environmental requirements create friction with wide-row conventional systems.' },
  { icon: <IconHelmet size={20} />, title: 'Pilot-friendly projects', body: "Owners who understand the early-adopter context and are interested in being part of documenting the technology's real-world performance." },
];

const COLLABORATION_STEPS = [
  { number: '01', title: 'Project fit discussion', body: 'An initial conversation to understand your project type, site constraints, and timeline.' },
  { number: '02', title: 'Technical review & feasibility', body: 'We walk through the system requirements and evaluate whether Roll-A-Rack is a match for the site.' },
  { number: '03', title: 'Pilot planning', body: 'If the fit is strong, we scope a pilot deployment together — including logistics, equipment, and timeline.' },
  { number: '04', title: 'Deployment support', body: 'Roll-A-Rack works alongside your crew to support the installation and address field conditions as they arise.' },
  { number: '05', title: 'Documentation & case study development', body: 'We document the deployment together, building the kind of real-world proof that helps both parties.' },
];

export function ForInstallersPage() {
  useEffect(() => {
    document.title = 'For Installers — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="For Installers"
        headline="Bring Roll-A-Rack to real projects."
        subhead="We are looking for installer and development partners who want to evaluate a differentiated land-based racking system through pilot and beta deployments."
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
        gridBg
      />

      {/* Why installers should care */}
      <ContentSection py={80}>
        <SectionHeading
          label="Why it matters"
          title="What Roll-A-Rack brings to your projects."
          subtitle="A differentiated system for installers who work on land-sensitive or land-constrained sites."
          maw={640}
        />
        <FeatureGrid features={BENEFITS_WITH_ICONS} cols={{ base: 1, sm: 2, md: 3 }} />
      </ContentSection>

      {/* Good fit */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="Project fit"
          title="Good fit projects."
          subtitle="Roll-A-Rack is best suited for specific project types where land use, spacing, or on-site adaptability is an active consideration."
          maw={640}
        />
        <FeatureGrid features={GOOD_FIT} cols={{ base: 1, sm: 2, md: 3 }} />
      </ContentSection>

      {/* Collaboration steps */}
      <ContentSection py={80}>
        <SectionHeading
          label="How it works"
          title="What collaboration may include."
          maw={580}
        />
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="sm">
          {COLLABORATION_STEPS.map((step) => (
            <Box
              key={step.number}
              style={{
                display: 'flex',
                gap: rem(24),
                alignItems: 'flex-start',
                padding: `${rem(20)} ${rem(24)}`,
                backgroundColor: 'var(--rar-panel)',
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
                <Text fw={600} mb={4} style={{ color: 'var(--rar-text)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {step.title}
                </Text>
                <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                  {step.body}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Why now */}
      <ContentSection alt py={72}>
        <Box maw={640}>
          <SectionHeading label="Why now" title="Early partners help shape real deployments." />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Roll-A-Rack has grant support, patents, and manufacturing relationships in place. The next step is real-world pilot deployments — and that requires installer partners who are willing to work with an emerging system.
          </Text>
          <Text size="lg" mt="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Early partners get the most direct access to the team, the most influence over how the system develops, and the opportunity to be part of the documented case studies that demonstrate it works.
          </Text>
        </Box>
      </ContentSection>

      {/* Final CTA */}
      <ContentSection py={80}>
        <CtaCard
          headline="Interested in piloting Roll-A-Rack on a project?"
          subtext="If you're working on a land-sensitive or land-constrained solar project, let's talk about whether it's a fit."
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
              Contact Us
            </Button>
          }
        />
      </ContentSection>
    </>
  );
}
