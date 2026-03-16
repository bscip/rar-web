import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Text,
  SimpleGrid,
} from '@mantine/core';
import {
  IconArrowRight,
  IconLeaf,
  IconMapPin,
  IconBuildingFactory,
  IconSolarPanel,
} from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { CtaCard } from '../components/marketing/CtaCard';
import { InstallationCard } from '../components/installations/InstallationCard';
import { UseCaseCard } from '../components/installations/UseCaseCard';
import { installations, useCaseTypes } from '../content/installations';

const USE_CASE_ICONS = [
  <IconLeaf size={20} />,
  <IconMapPin size={20} />,
  <IconBuildingFactory size={20} />,
  <IconSolarPanel size={20} />,
];

export function InstallationsPage() {
  useEffect(() => {
    document.title = 'Installations — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="Installations"
        headline="Roll-A-Rack in the field."
        subhead="A place to show pilot deployments, example installation types, and real-world progress as Roll-A-Rack expands."
        gridBg
      />

      {/* Current status */}
      <ContentSection py={72}>
        <Box maw={640}>
          <SectionHeading label="Current status" title="Pilots in planning. Documentation in progress." />
          <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            Roll-A-Rack is working toward its first pilot deployments. This page will grow as installations are scoped, executed, and documented. Early installer partners will be featured here as the project record develops.
          </Text>
          <Text size="lg" mt="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
            If you're interested in being one of the first documented installations, reach out through the contact page.
          </Text>
        </Box>
      </ContentSection>

      {/* Pilot cards */}
      <ContentSection alt py={80}>
        <SectionHeading
          label="Pilot progress"
          title="Installation pipeline."
          subtitle="These entries reflect the current state of Roll-A-Rack's pilot and planning activity."
          maw={600}
        />
        <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="lg">
          {installations.map((inst) => (
            <InstallationCard key={inst.id} installation={inst} />
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* Use case types */}
      <ContentSection py={80}>
        <SectionHeading
          label="Installation types"
          title="Where Roll-A-Rack fits."
          subtitle="These site types represent the strongest fit for the current system — where land use, spacing, or environmental impact are active project concerns."
          maw={680}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {useCaseTypes.map((uc, i) => (
            <UseCaseCard
              key={uc.id}
              title={uc.title}
              body={uc.body}
              icon={USE_CASE_ICONS[i]}
            />
          ))}
        </SimpleGrid>
      </ContentSection>

      {/* CTA */}
      <ContentSection py={80}>
        <CtaCard
          headline="Interested in becoming a pilot site?"
          subtext="If you're an installer or project developer with a land-sensitive site, let's talk about whether a Roll-A-Rack pilot is a fit."
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
