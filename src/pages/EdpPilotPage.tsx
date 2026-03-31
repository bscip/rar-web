import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import {
  bestFit,
  closing,
  hero,
  metrics,
  pilotPlan,
  problem,
  relatedExample,
  risks,
  systemSteps,
} from '../content/edpPilot';

/** Native asset ratio (500×354). Keeps frames consistent without cropping. */
const EDP_IMAGE_RATIO = 500 / 354;

function EdpFigure({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <AspectRatio ratio={EDP_IMAGE_RATIO} maw={rem(500)} w="100%" mx={{ base: 'auto', md: 0 }}>
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

function StepIndex({ n }: { n: number }) {
  return (
    <Flex
      align="center"
      justify="center"
      flex="none"
      style={{
        width: rem(32),
        height: rem(32),
        borderRadius: rem(6),
        border: '1px solid var(--rar-border)',
        backgroundColor: 'var(--rar-panel)',
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: rem(14),
        fontWeight: 700,
        color: 'var(--rar-amber)',
      }}
    >
      {n}
    </Flex>
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
            <Box style={{ justifySelf: 'stretch' }}>
              <EdpFigure src={problem.imageSrc} alt={problem.imageAlt} />
            </Box>
          </SimpleGrid>
        </Card>
      </ContentSection>

      <ContentSection alt py={72}>
        <SectionHeading title="How Roll-A-Rack works on site" maw={720} />
        <Stack gap="xl" mt={-8}>
          {systemSteps.map((step, index) => (
            <Box
              key={step.title}
              style={{
                border: '1px solid var(--rar-border)',
                borderRadius: rem(12),
                backgroundColor: 'var(--rar-bg)',
                padding: rem(24),
              }}
            >
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'lg', md: 'xl' }} verticalSpacing="lg">
                <Box>
                  <EdpFigure src={step.imageSrc} alt={step.imageAlt} />
                </Box>
                <Stack gap="md" justify="center" style={{ minWidth: 0 }}>
                  <Group gap="md" wrap="nowrap" align="flex-start">
                    <StepIndex n={index + 1} />
                    <Title order={3} style={{ letterSpacing: '-0.02em', fontSize: rem(20), lineHeight: 1.3 }}>
                      {step.title}
                    </Title>
                  </Group>
                  <Text size="sm" pl={{ md: rem(48) }} style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                    {step.body}
                  </Text>
                </Stack>
              </SimpleGrid>
            </Box>
          ))}
        </Stack>
      </ContentSection>

      <ContentSection py={72}>
        <Card padding="xl" radius="md" withBorder style={{ backgroundColor: 'var(--rar-bg)' }}>
          <SectionHeading title={bestFit.title} subtitle={bestFit.intro} maw={640} />
          <BulletList items={bestFit.bullets} />
        </Card>
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
          <SectionHeading title={risks.title} subtitle={risks.intro} maw={640} />
          <BulletList items={risks.bullets} />
        </Card>
      </ContentSection>

      <ContentSection py={72}>
        <Card padding="xl" radius="md" withBorder style={{ backgroundColor: 'var(--rar-bg)' }}>
          <SectionHeading title={closing.title} maw={560} />
          <Stack gap="md" mt={-8}>
            {closing.body.map((para) => (
              <Text key={para} size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
                {para}
              </Text>
            ))}
            <Box pt="sm">
              <Button component={Link} to="/contact" size="md" variant="filled">
                {closing.ctaLabel}
              </Button>
            </Box>
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
