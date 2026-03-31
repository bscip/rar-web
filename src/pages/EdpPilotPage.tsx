import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  rem,
} from '@mantine/core';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import {
  hero,
  metrics,
  pilotPlan,
  problem,
  relatedExample,
  systemSteps,
  whyEdp,
} from '../content/edpPilot';

/** Raster assets are 500×354; never scale beyond this or they soften. */
const EDP_IMAGE_RATIO = 500 / 354;
const EDP_IMAGE_MAX_W = 500;

function EdpFigure({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <Box style={{ width: '100%', maxWidth: EDP_IMAGE_MAX_W, marginLeft: 'auto', marginRight: 'auto' }}>
      <AspectRatio ratio={EDP_IMAGE_RATIO} w="100%">
      <Box
        h="100%"
        w="100%"
        style={{
          border: '1px solid var(--rar-border)',
          borderRadius: rem(10),
          overflow: 'hidden',
          backgroundColor: 'var(--rar-panel)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {failed ? (
          <Text
            size="xs"
            ta="center"
            px="md"
            c="dimmed"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {src}
          </Text>
        ) : (
          <Image
            src={src}
            alt={alt}
            fit="contain"
            w="100%"
            h="100%"
            onError={() => setFailed(true)}
          />
        )}
      </Box>
    </AspectRatio>
    </Box>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <List spacing="sm" size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
      {items.map((line) => (
        <List.Item key={line}>{line}</List.Item>
      ))}
    </List>
  );
}

export function EdpPilotPage() {
  useEffect(() => {
    document.title = 'EDP Pilot — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        headline={hero.title}
        subhead={hero.subtitle}
        gridBg
        ctas={
          <Button component="a" href="#pilot-plan" size="md" variant="filled">
            {hero.ctaLabel}
          </Button>
        }
        stats={
          <List spacing="sm" mt="lg" size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
            {hero.bullets.map((line) => (
              <List.Item key={line}>{line}</List.Item>
            ))}
          </List>
        }
      />

      <ContentSection py={72}>
        <Card padding="xl" radius="md" withBorder style={{ backgroundColor: 'var(--rar-bg)' }}>
          <SectionHeading title={problem.title} maw={640} />
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={{ base: 'lg', lg: 'xl' }} mt={-8}>
            <Stack gap="md" maw={560}>
              <BulletList items={problem.bullets} />
            </Stack>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <EdpFigure src={problem.imageSrc} alt={problem.imageAlt} />
            </Box>
          </SimpleGrid>
        </Card>
      </ContentSection>

      <ContentSection alt py={72}>
        <SectionHeading title="How Roll-A-Rack works on site" maw={720} />
        <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }} spacing="lg" mt={-8}>
          {systemSteps.map((step, index) => (
            <Box
              key={step.title}
              style={{
                border: '1px solid var(--rar-border)',
                borderRadius: rem(12),
                backgroundColor: 'var(--rar-bg)',
                padding: rem(24),
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Copy lives in the image assets; hidden text keeps screen readers in sync. */}
              <VisuallyHidden>
                <span>
                  Step {index + 1}: {step.title}. {step.body}
                </span>
              </VisuallyHidden>
              <Box style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EdpFigure src={step.imageSrc} alt="" />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </ContentSection>

      <ContentSection alt py={72}>
        <Box id="pilot-plan" style={{ scrollMarginTop: rem(100) }}>
          <Card padding="xl" radius="md" withBorder style={{ backgroundColor: 'var(--rar-bg)' }}>
            <SectionHeading title={pilotPlan.title} maw={640} />
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt={-8}>
              {pilotPlan.items.map((row) => (
                <Box
                  key={row.label}
                  p="md"
                  style={{
                    border: '1px solid var(--rar-border)',
                    borderRadius: rem(8),
                    backgroundColor: 'var(--rar-panel)',
                  }}
                >
                  <Text size="sm" fw={600} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {row.label}
                  </Text>
                  <Text size="sm" mt={6} style={{ color: 'var(--rar-text-dim)', lineHeight: 1.55 }}>
                    {row.value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Card>
        </Box>
      </ContentSection>

      <ContentSection py={72}>
        <Card padding="xl" radius="md" withBorder style={{ backgroundColor: 'var(--rar-bg)' }}>
          <SectionHeading title={metrics.title} maw={640} />
          <BulletList items={metrics.bullets} />
        </Card>
      </ContentSection>

      <ContentSection alt py={72}>
        <Card padding="xl" radius="md" withBorder style={{ backgroundColor: 'var(--rar-bg)' }}>
          <SectionHeading title={whyEdp.title} maw={640} />
          <Stack gap="lg" maw={720} mt={-8}>
            <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
              {whyEdp.lead}
            </Text>
            <Stack gap="sm">
              <Text size="lg" fw={600} style={{ color: 'var(--rar-text)', lineHeight: 1.55 }}>
                {whyEdp.bridge}
              </Text>
              <BulletList items={whyEdp.bullets} />
            </Stack>
            <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
              {whyEdp.closing}
            </Text>
          </Stack>
        </Card>
      </ContentSection>

      <ContentSection alt py={56}>
        <Text size="sm">
          <Link
            to={relatedExample.to}
            style={{ color: 'var(--rar-amber)', fontWeight: 600, textDecoration: 'none' }}
          >
            {relatedExample.label}
          </Link>
        </Text>
      </ContentSection>
    </>
  );
}
