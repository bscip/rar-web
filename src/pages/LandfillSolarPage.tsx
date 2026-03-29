import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Accordion,
  Box,
  Button,
  CloseButton,
  Group,
  Image,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { IconArrowRight, IconInfoCircle } from '@tabler/icons-react';
import { PageHero } from '../components/site/PageHero';
import { SectionHeading } from '../components/site/SectionHeading';
import { ContentSection } from '../components/site/ContentSection';
import { FaqAccordion } from '../components/marketing/FaqAccordion';
import { ProcessComparison } from '../components/marketing/ProcessComparison';
import { MetricsComparison } from '../components/marketing/MetricsComparison';
import {
  heroContent,
  anchorNav,
  accordionGroups,
  processComparison,
  metricsComparison,
  q36Content,
  ctaContent,
} from '../content/landfillSolar';

function TechImage({ src, alt, caption, maxH }: { src: string; alt: string; caption?: string; maxH?: number }) {
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
        <Image src={src} alt={alt} fit="contain" mah={maxH ?? 260} p={12} />
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
          <Image
            src={src}
            alt={alt}
            fit="contain"
            p="md"
            style={{ maxHeight: '80vh' }}
          />
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

export function LandfillSolarPage() {
  useEffect(() => {
    document.title = 'Landfill & Constrained-Site Solar — Roll-A-Rack';
  }, []);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
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

      {/* ── Intro + section navigation cards ─────────────────── */}
      <ContentSection py={56}>
        <Text
          size="lg"
          mb="xl"
          maw={700}
          style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}
        >
          {heroContent.intro[1]}
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {anchorNav.map((item) => (
            <Box
              key={item.anchor}
              component="a"
              href={`#${item.anchor}`}
              className="rar-panel rar-card-hover"
              style={{
                padding: `${rem(20)} ${rem(22)}`,
                textDecoration: 'none',
                borderLeft: '3px solid var(--rar-amber)',
                cursor: 'pointer',
              }}
            >
              <Text
                size="xs"
                fw={600}
                mb={4}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  color: 'var(--rar-amber-ink)',
                }}
              >
                {item.label}
              </Text>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.55 }}>
                {item.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
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
                fontSize: rem(13),
                letterSpacing: '0.01em',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Group>
      </Box>

      {/* ── Grouped Accordion Sections ─────────────────────── */}
      {accordionGroups.map((group, gi) => (
        <Box
          key={group.anchor}
          id={group.anchor}
          style={{ scrollMarginTop: rem(140) }}
        >
          <ContentSection alt={gi % 2 === 0} py={80}>
            <SectionHeading
              label={group.label}
              title={group.title}
              maw={640}
            />

            {/* Images for Performance & Design section */}
            {group.anchor === 'performance-design' && (
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mb="xl" maw={700}>
                <TechImage
                  src="/images/rar-tech-002a.png"
                  alt="Roll-A-Rack low-profile tilt design"
                  caption="5° low-profile tilt design — reduced wind loads and higher site density"
                />
                <TechImage
                  src="/images/rar-tech-002b.png"
                  alt="Roll-A-Rack density comparison"
                  caption="Row spacing comparison vs. conventional racking"
                />
              </SimpleGrid>
            )}

            {/* Images before Construction & Execution accordion */}
            {group.anchor === 'construction-execution' && (
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mb="xl" maw={700}>
                <TechImage
                  src="/images/rar-machine.jpg"
                  alt="Roll-A-Rack portable roll-forming machine"
                  caption="Portable roll-forming equipment brought directly to the project site"
                  maxH={220}
                />
                <TechImage
                  src="/images/rar-tech-001.png"
                  alt="Roll-A-Rack system overview"
                  caption="Two-component system: gutter channel + clamp bracket"
                  maxH={220}
                />
              </SimpleGrid>
            )}

            <Box maw={800}>
              <FaqAccordion items={group.items} />
            </Box>

            {/* Detail images after Construction & Execution accordion */}
            {group.anchor === 'construction-execution' && (
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl" maw={700}>
                <TechImage
                  src="/images/rar-tech-003.png"
                  alt="Roll-A-Rack channel dimensions"
                  caption="Gutter channel cross-section and dimensions"
                  maxH={220}
                />
                <TechImage
                  src="/images/rar-tech-005.png"
                  alt="Roll-A-Rack clamp detail"
                  caption="Clamp bracket attachment detail"
                  maxH={220}
                />
              </SimpleGrid>
            )}
          </ContentSection>
        </Box>
      ))}

      {/* ── Deep Proof: Process Comparison ──────────────────── */}
      <ContentSection py={80}>
        <Box maw={900}>
          <SectionHeading
            label="Build comparison"
            title="How the build process differs."
          />
          <ProcessComparison
            traditional={processComparison.traditional}
            rar={processComparison.rar}
            summary={processComparison.summary}
          />
        </Box>
      </ContentSection>

      {/* ── Deep Proof: Metrics Comparison ──────────────────── */}
      <ContentSection alt py={80}>
        <Box maw={900}>
          <SectionHeading
            label="Metrics"
            title="Total installed cost — not just racking cost."
          />
          <MetricsComparison rows={metricsComparison} />
        </Box>
      </ContentSection>

      {/* ── Deep Proof: Question 36 ────────────────────────── */}
      <ContentSection py={72}>
        <Box maw={800}>
          <SectionHeading
            label="Procurement context"
            title="City of Cleveland: Question 36 Response"
          />
          <Text
            size="lg"
            mb="lg"
            style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}
          >
            {q36Content.summary}
          </Text>
          <Accordion
            variant="separated"
            radius="md"
            styles={{
              item: {
                backgroundColor: 'var(--rar-panel)',
                border: '1px solid var(--rar-border)',
                borderLeft: '3px solid var(--rar-amber)',
              },
              control: {
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: rem(16),
                color: 'var(--rar-text)',
                padding: `${rem(18)} ${rem(20)}`,
              },
              content: {
                padding: `${rem(4)} ${rem(20)} ${rem(20)}`,
              },
              chevron: {
                color: 'var(--rar-amber)',
              },
            }}
          >
            <Accordion.Item value="q36">
              <Accordion.Control icon={<IconInfoCircle size={18} color="var(--rar-amber)" />}>
                View the Question and Response
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text size="xs" fw={600} mb={4} style={{ color: 'var(--rar-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Space Grotesk, sans-serif' }}>
                      Question
                    </Text>
                    <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7, fontStyle: 'italic' }}>
                      {q36Content.question}
                    </Text>
                  </Box>
                  <Box>
                    <Text size="xs" fw={600} mb={4} style={{ color: 'var(--rar-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Space Grotesk, sans-serif' }}>
                      Response
                    </Text>
                    <Text size="sm" fw={500} style={{ color: 'var(--rar-text)', lineHeight: 1.7 }}>
                      {q36Content.response}
                    </Text>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>
      </ContentSection>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <ContentSection alt py={80}>
        <Box ta="center" maw={600} mx="auto">
          <Title
            order={2}
            mb="md"
            style={{ letterSpacing: '-0.015em' }}
          >
            {ctaContent.headline}
          </Title>
          <Text
            size="lg"
            mb="xl"
            style={{ color: 'var(--rar-text-dim)', lineHeight: 1.65 }}
          >
            {ctaContent.subtext}
          </Text>
          <Group justify="center" gap="md" mb="xl">
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
          </Group>
          <Box
            style={{
              backgroundColor: 'var(--rar-panel)',
              border: '1px solid var(--rar-border)',
              borderRadius: rem(10),
              padding: `${rem(20)} ${rem(24)}`,
              display: 'inline-block',
            }}
          >
            <Text fw={600} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {ctaContent.contactName}
            </Text>
            <Text size="sm" style={{ color: 'var(--rar-text-dim)' }}>
              {ctaContent.contactPhone} ·{' '}
              <a
                href={`mailto:${ctaContent.contactEmail}`}
                style={{ color: 'var(--rar-denim)', textDecoration: 'none' }}
              >
                {ctaContent.contactEmail}
              </a>
            </Text>
          </Box>
        </Box>
      </ContentSection>
    </>
  );
}
