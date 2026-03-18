import { Box, Container, Title, Text, Stack, Anchor, rem } from '@mantine/core';
import type { LegalDoc } from '../../content/legal';

interface LegalPageProps {
  doc: LegalDoc;
}

export function LegalPage({ doc }: LegalPageProps) {
  const formatted = new Date(doc.lastUpdated).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Container size="md" py={80}>
      {/* Header */}
      <Box mb={56}>
        <span className="rar-label">Legal</span>
        <Title order={1} mt="sm" style={{ letterSpacing: '-0.02em', color: 'var(--rar-text)' }}>
          {doc.title}
        </Title>
        <Text size="sm" mt="md" style={{ color: 'var(--rar-text-muted)' }}>
          Last updated: {formatted}
        </Text>
        {doc.intro && (
          <Text mt="lg" size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
            {doc.intro}
          </Text>
        )}
      </Box>

      {/* Table of contents */}
      <Box
        mb={56}
        style={{
          backgroundColor: 'var(--rar-panel)',
          border: '1px solid var(--rar-border)',
          borderRadius: 10,
          padding: rem(24),
        }}
      >
        <Text
          fw={600}
          mb="md"
          size="sm"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--rar-charcoal)', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: rem(11) }}
        >
          Contents
        </Text>
        <Stack gap="xs">
          {doc.sections.map((section) => (
            <Anchor
              key={section.id}
              href={`#${section.id}`}
              size="sm"
              style={{ color: 'var(--rar-text-dim)' }}
              underline="hover"
            >
              {section.heading}
            </Anchor>
          ))}
        </Stack>
      </Box>

      {/* Sections */}
      <Stack gap={56}>
        {doc.sections.map((section) => (
          <Box key={section.id} id={section.id}>
            <Title order={3} mb="lg" style={{ color: 'var(--rar-text)' }}>
              {section.heading}
            </Title>
            <Stack gap="md">
              {section.body.map((item, i) => {
                if (item.type === 'p') {
                  return (
                    <Text key={i} style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}>
                      {item.content as string}
                    </Text>
                  );
                }
                if (item.type === 'h3') {
                  return (
                    <Title key={i} order={4} style={{ color: 'var(--rar-text)' }}>
                      {item.content as string}
                    </Title>
                  );
                }
                if (item.type === 'list') {
                  return (
                    <Box key={i} component="ul" style={{ paddingLeft: rem(20), margin: 0 }}>
                      {(item.content as string[]).map((li, j) => (
                        <Box
                          key={j}
                          component="li"
                          style={{
                            color: 'var(--rar-text-dim)',
                            lineHeight: 1.75,
                            marginBottom: rem(4),
                          }}
                        >
                          {li}
                        </Box>
                      ))}
                    </Box>
                  );
                }
                return null;
              })}
            </Stack>
            <Anchor
              href="#"
              size="xs"
              mt="xl"
              display="block"
              style={{ color: 'var(--rar-text-muted)' }}
              underline="hover"
            >
              ↑ Back to top
            </Anchor>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
