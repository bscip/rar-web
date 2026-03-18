import type { ReactNode } from 'react';
import { Box, Container, Title, Text, Group, rem } from '@mantine/core';

interface CtaCardProps {
  label?: string;
  headline: string;
  subtext?: string;
  ctas: ReactNode;
  variant?: 'default' | 'flame';
}

export function CtaCard({ label, headline, subtext, ctas, variant = 'default' }: CtaCardProps) {
  const isFlame = variant === 'flame';

  return (
    <Box
      style={{
        background: isFlame
          ? 'linear-gradient(135deg, rgba(255,60,0,0.06) 0%, rgba(228,166,0,0.06) 100%)'
          : 'var(--rar-panel)',
        border: `1px solid ${isFlame ? 'rgba(255,60,0,0.2)' : 'var(--rar-border)'}`,
        borderRadius: 16,
        padding: `${rem(64)} ${rem(48)}`,
        textAlign: 'center',
      }}
    >
      <Container size="sm">
        {label && (
          <Box mb="md">
            <span className="rar-label">{label}</span>
          </Box>
        )}
        <Title
          order={2}
          mb="md"
          style={{
            fontSize: rem(36),
            letterSpacing: '-0.015em',
            color: 'var(--rar-text)',
          }}
        >
          {headline}
        </Title>
        {subtext && (
          <Text
            size="lg"
            mb="xl"
            style={{ color: 'var(--rar-text-dim)', lineHeight: 1.6 }}
          >
            {subtext}
          </Text>
        )}
        <Group justify="center" gap="md">
          {ctas}
        </Group>
      </Container>
    </Box>
  );
}
