import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  Group,
  Text,
  List,
  rem,
} from '@mantine/core';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { FaqAccordion } from '../components/marketing/FaqAccordion';
import {
  heroContent,
  credibilityTags,
  prioritiesContent,
  priorityItems,
  faqItems,
} from '../content/landfillSolar';

export function LandfillSolarPage() {
  useEffect(() => {
    document.title =
      'Landfill & Constrained-Site Solar — Roll-A-Rack';
  }, []);

  return (
    <>
      {/* Hero */}
      <PageHero
        label={heroContent.eyebrow}
        headline={heroContent.headline}
        subhead={heroContent.intro[0]}
        gridBg
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
              {heroContent.ctaPrimary}
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outline"
              color="gray"
              size="lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {heroContent.ctaSecondary}
            </Button>
          </>
        }
      />

      {/* Second intro paragraph + credibility tags */}
      <ContentSection py={48}>
        <Text
          size="lg"
          mb="xl"
          maw={700}
          style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}
        >
          {heroContent.intro[1]}
        </Text>

        <Group gap="sm" wrap="wrap">
          {credibilityTags.map((tag) => (
            <Box
              key={tag.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: rem(6),
                backgroundColor: 'var(--rar-panel)',
                border: '1px solid var(--rar-border)',
                borderRadius: 6,
                padding: `${rem(6)} ${rem(14)}`,
              }}
            >
              <IconCheck size={14} color="var(--rar-amber)" />
              <Text
                size="sm"
                fw={500}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'var(--rar-text)',
                }}
              >
                {tag.label}
              </Text>
            </Box>
          ))}
        </Group>
      </ContentSection>

      {/* What This Project Appears to Prioritize */}
      <ContentSection alt py={72}>
        <Box maw={700}>
          <SectionHeading
            label="Project context"
            title={prioritiesContent.title}
          />
          <Text
            size="lg"
            mb="xl"
            style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}
          >
            {prioritiesContent.body}
          </Text>
          <List
            spacing="sm"
            icon={
              <Box
                style={{
                  width: rem(8),
                  height: rem(8),
                  borderRadius: '50%',
                  backgroundColor: 'var(--rar-amber)',
                  marginTop: rem(8),
                }}
              />
            }
          >
            {priorityItems.map((item) => (
              <List.Item key={item.text}>
                <Text
                  fw={500}
                  style={{ color: 'var(--rar-text)', lineHeight: 1.65 }}
                >
                  {item.text}
                </Text>
              </List.Item>
            ))}
          </List>
        </Box>
      </ContentSection>

      {/* FAQ Accordion */}
      <Box id="fit" style={{ scrollMarginTop: rem(100) }}>
        <ContentSection py={80}>
          <SectionHeading
            label="Fit considerations"
            title="How Roll-A-Rack may address these constraints."
            maw={640}
          />
          <Box maw={800}>
            <FaqAccordion items={faqItems} />
          </Box>
        </ContentSection>
      </Box>
    </>
  );
}
