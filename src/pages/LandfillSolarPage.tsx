import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Box,
  Button,
  CloseButton,
  Group,
  Image,
  List,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { ProcessComparison } from '../components/marketing/ProcessComparison';
import { MetricsComparison } from '../components/marketing/MetricsComparison';
import {
  heroContent,
  anchorNav,
  designBuildContent,
  processComparison,
  densityContent,
  fastInstallContent,
  metricsTitle,
  metricsComparison,
  neighborhoodContent,
} from '../content/landfillSolar';

// ─── Zoomable tech image ──────────────────────────────────────────────────────

function TechImage({
  src,
  alt,
  caption,
  maxH,
}: {
  src: string;
  alt: string;
  caption?: string;
  maxH?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        style={{
          border: '1px solid var(--rar-border)',
          borderRadius: rem(10),
          overflow: 'hidden',
          backgroundColor: '#fff',
          cursor: 'zoom-in',
        }}
      >
        <Image src={src} alt={alt} fit="contain" mah={maxH ?? 240} p={12} />
        {caption && (
          <Text
            size="xs"
            ta="center"
            py={8}
            px={12}
            style={{
              color: 'var(--rar-text-muted)',
              fontFamily: 'Space Grotesk, sans-serif',
              borderTop: '1px solid var(--rar-border)',
              backgroundColor: 'var(--rar-panel)',
            }}
          >
            {caption}
          </Text>
        )}
      </Box>

      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        size="xl"
        centered
        withCloseButton={false}
        padding={0}
        radius="md"
        overlayProps={{ backgroundOpacity: 0.65, blur: 3 }}
        styles={{
          body: { padding: 0 },
          content: { backgroundColor: 'transparent', boxShadow: 'none' },
        }}
      >
        <Box
          style={{
            backgroundColor: '#fff',
            borderRadius: rem(10),
            overflow: 'hidden',
            border: '1px solid var(--rar-border)',
            position: 'relative',
          }}
        >
          <CloseButton
            onClick={() => setOpen(false)}
            size="lg"
            style={{
              position: 'absolute',
              top: rem(10),
              right: rem(10),
              zIndex: 10,
              backgroundColor: 'rgba(255,255,255,0.85)',
              borderRadius: '50%',
            }}
          />
          <Image src={src} alt={alt} fit="contain" p="md" style={{ maxHeight: '80vh' }} />
          {caption && (
            <Text
              size="sm"
              ta="center"
              py={12}
              px={16}
              style={{
                color: 'var(--rar-text-dim)',
                fontFamily: 'Space Grotesk, sans-serif',
                borderTop: '1px solid var(--rar-border)',
                backgroundColor: 'var(--rar-panel)',
              }}
            >
              {caption}
            </Text>
          )}
        </Box>
      </Modal>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function LandfillSolarPage() {
  useEffect(() => {
    document.title = 'Landfill & Constrained-Site Solar — Roll-A-Rack';
  }, []);

  return (
    <>
      {/* ── Hero / Intro ────────────────────────────────────── */}
      <PageHero
        label={heroContent.eyebrow}
        headline={heroContent.headline}
        subhead={heroContent.tagline}
        gridBg
      />

      {/* ── TOC + Contact ───────────────────────────────────── */}
      <ContentSection py={56}>
        <Group gap={48} align="flex-start" wrap="wrap">

          {/* TOC */}
          <Box style={{ flex: 1, minWidth: rem(280) }}>
            <Text
              fw={600}
              mb="md"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'var(--rar-text)',
              }}
            >
              {heroContent.tocLabel}
            </Text>
            <List
              type="ordered"
              spacing={8}
              styles={{ itemWrapper: { color: 'var(--rar-text-dim)' } }}
            >
              {heroContent.tocItems.map((item, i) => (
                <List.Item key={i}>
                  <Text
                    component="a"
                    href={`#${anchorNav[i]?.anchor ?? ''}`}
                    size="sm"
                    fw={500}
                    style={{
                      color: 'var(--rar-denim)',
                      textDecoration: 'none',
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Text>
                </List.Item>
              ))}
            </List>
          </Box>

          {/* Contact */}
          <Box
            style={{
              flex: '0 0 auto',
              minWidth: rem(260),
              backgroundColor: 'var(--rar-panel)',
              border: '1px solid var(--rar-border)',
              borderLeft: '3px solid var(--rar-amber)',
              borderRadius: rem(10),
              padding: `${rem(22)} ${rem(24)}`,
            }}
          >
            <Text fw={600} mb="sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {heroContent.contactLabel}
            </Text>
            <List spacing={6} mb="md">
              {heroContent.contactSupport.map((item, i) => (
                <List.Item key={i}>
                  <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.55 }}>
                    {item}
                  </Text>
                </List.Item>
              ))}
            </List>
            <Text fw={600} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {heroContent.contactName}
            </Text>
            <Text size="sm" style={{ color: 'var(--rar-text-dim)' }}>
              {heroContent.contactPhone} ·{' '}
              <a
                href={`mailto:${heroContent.contactEmail}`}
                style={{ color: 'var(--rar-denim)', textDecoration: 'none' }}
              >
                {heroContent.contactEmail}
              </a>
            </Text>
          </Box>
        </Group>
      </ContentSection>

      {/* ── Sticky section nav ─────────────────────────────── */}
      <Box
        style={{
          borderTop: '1px solid var(--rar-border)',
          borderBottom: '1px solid var(--rar-border)',
          backgroundColor: 'var(--rar-panel)',
          position: 'sticky',
          top: 80,
          zIndex: 90,
        }}
      >
        <Group
          gap={4}
          wrap="wrap"
          justify="center"
          py={10}
          px="md"
          maw={1200}
          mx="auto"
        >
          {anchorNav.map((item) => (
            <Button
              key={item.anchor}
              component="a"
              href={`#${item.anchor}`}
              variant="subtle"
              color="dark"
              size="compact-sm"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: rem(12),
                letterSpacing: '0.01em',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Group>
      </Box>

      {/* ── 1. Design / Build as a Service ─────────────────── */}
      <Box id="design-build" style={{ scrollMarginTop: rem(140) }}>
        <ContentSection alt py={72}>
          <SectionHeading title={designBuildContent.title} maw={700} />
          <Group gap={48} align="flex-start" wrap="wrap">
            <Stack gap="md" style={{ flex: 1, minWidth: rem(280) }}>
              {designBuildContent.systemDesc.map((line, i) => (
                <Text key={i} size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                  {line}
                </Text>
              ))}
              <Title order={3} mt="md" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
                {designBuildContent.serviceTitle}
              </Title>
              <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                {designBuildContent.serviceBody}
              </Text>
              <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                {designBuildContent.bomBody}
              </Text>
              <List spacing={4}>
                {designBuildContent.bomItems.map((item, i) => (
                  <List.Item key={i}>
                    <Text fw={500} style={{ color: 'var(--rar-text)', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item}
                    </Text>
                  </List.Item>
                ))}
              </List>
            </Stack>

            <Box style={{ flex: '0 0 auto', width: rem(300) }}>
              <TechImage
                src="/images/rar-machine.jpg"
                alt="Roll-A-Rack portable roll-forming machine"
                caption="Portable roll-forming factory brought to the project site"
                maxH={240}
              />
            </Box>
          </Group>
        </ContentSection>
      </Box>

      {/* ── 2. Traditional vs RAR ───────────────────────────── */}
      <Box id="build-comparison" style={{ scrollMarginTop: rem(140) }}>
        <ContentSection py={72}>
          <SectionHeading title={processComparison.title} maw={700} />
          <ProcessComparison
            traditional={processComparison.traditional}
            rar={processComparison.rar}
            summary={processComparison.summary}
          />
        </ContentSection>
      </Box>

      {/* ── 3. 5° Tilt ─────────────────────────────────────── */}
      <Box id="tilt-density" style={{ scrollMarginTop: rem(140) }}>
        <ContentSection alt py={72}>
          <SectionHeading title={densityContent.title} maw={700} />
          <Group gap={48} align="flex-start" wrap="wrap">
            <Stack gap="xl" style={{ flex: 1, minWidth: rem(280) }}>
              <Box>
                <Title order={3} mb={4} style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
                  {densityContent.landTitle}
                </Title>
                <Text size="sm" fw={600} mb="sm" style={{ color: 'var(--rar-amber-ink)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {densityContent.landSubtitle}
                </Text>
                <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                  {densityContent.landBody}
                </Text>
              </Box>
              <Box>
                <Title order={3} mb={4} style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
                  {densityContent.ballastTitle}
                </Title>
                <Text size="sm" fw={600} mb="sm" style={{ color: 'var(--rar-amber-ink)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {densityContent.ballastSubtitle}
                </Text>
                <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                  {densityContent.ballastBody}
                </Text>
              </Box>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ flex: '0 0 auto', width: rem(380) }}>
              <TechImage
                src="/images/rar-tech-002a.png"
                alt="5° low-profile tilt design"
                caption="5° low-profile tilt"
                maxH={180}
              />
              <TechImage
                src="/images/rar-tech-002b.png"
                alt="Row spacing comparison"
                caption="Row spacing vs. conventional"
                maxH={180}
              />
            </SimpleGrid>
          </Group>
        </ContentSection>
      </Box>

      {/* ── 4. Fast to Install ──────────────────────────────── */}
      <Box id="fast-install" style={{ scrollMarginTop: rem(140) }}>
        <ContentSection py={72}>
          <SectionHeading title={fastInstallContent.title} maw={640} />
          <Group gap={48} align="flex-start" wrap="wrap">
            <Stack gap="md" style={{ flex: 1, minWidth: rem(280) }}>
              <Text size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                {fastInstallContent.intro}
              </Text>
              <List
                type="ordered"
                spacing="sm"
                styles={{ itemWrapper: { color: 'var(--rar-text)' } }}
              >
                {fastInstallContent.steps.map((step, i) => (
                  <List.Item key={i}>
                    <Text fw={500} size="md" style={{ color: 'var(--rar-text)', lineHeight: 1.6 }}>
                      {step}
                    </Text>
                  </List.Item>
                ))}
              </List>
            </Stack>

            <Stack gap="md" style={{ flex: '0 0 auto', width: rem(320) }}>
              <TechImage
                src="/images/rar-tech-001.png"
                alt="Two-component system overview"
                caption="Two-component system: gutter channel + clamp bracket"
                maxH={180}
              />
              <SimpleGrid cols={2} spacing="sm">
                <TechImage
                  src="/images/rar-tech-003.png"
                  alt="Channel dimensions"
                  caption="Channel cross-section"
                  maxH={140}
                />
                <TechImage
                  src="/images/rar-tech-005.png"
                  alt="Clamp bracket detail"
                  caption="Clamp attachment"
                  maxH={140}
                />
              </SimpleGrid>
            </Stack>
          </Group>
        </ContentSection>
      </Box>

      {/* ── 5. Metrics ──────────────────────────────────────── */}
      <Box id="metrics" style={{ scrollMarginTop: rem(140) }}>
        <ContentSection alt py={72}>
          <Box maw={900}>
            <SectionHeading title={metricsTitle} />
            <MetricsComparison rows={metricsComparison} />
          </Box>
        </ContentSection>
      </Box>

      {/* ── 6. Neighborhood Friendly ────────────────────────── */}
      <Box id="neighborhood" style={{ scrollMarginTop: rem(140) }}>
        <ContentSection py={72}>
          <Box maw={700}>
            <SectionHeading title={neighborhoodContent.title} />
            <Stack gap="md">
              {neighborhoodContent.body.map((para, i) => (
                <Text key={i} size="lg" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
                  {para}
                </Text>
              ))}
            </Stack>
          </Box>
        </ContentSection>
      </Box>

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <ContentSection alt py={64}>
        <Box ta="center" maw={560} mx="auto">
          <Title order={3} mb="sm" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
            Discuss how Roll-A-Rack can support your bid
          </Title>
          <Text size="md" mb="xl" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}>
            {heroContent.contactName} &middot; {heroContent.contactPhone} &middot;{' '}
            <a href={`mailto:${heroContent.contactEmail}`} style={{ color: 'var(--rar-denim)', textDecoration: 'none' }}>
              {heroContent.contactEmail}
            </a>
          </Text>
          <Button
            component={Link}
            to="/contact"
            variant="filled"
            color="denim"
            size="lg"
            rightSection={<IconArrowRight size={18} />}
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Request a Technical Discussion
          </Button>
        </Box>
      </ContentSection>
    </>
  );
}
