import type { ReactNode } from 'react';
import { Container, Title, Text, Group, Box, rem } from '@mantine/core';

interface PageHeroProps {
  label?: string;
  headline: string;
  subhead?: string;
  ctas?: ReactNode;
  stats?: ReactNode;
  centered?: boolean;
  large?: boolean;
  gridBg?: boolean;
}

export function PageHero({
  label,
  headline,
  subhead,
  ctas,
  stats,
  centered = false,
  large = false,
  gridBg = false,
}: PageHeroProps) {
  return (
    <Box
      style={{
        position: 'relative',
        paddingTop: large ? rem(100) : rem(80),
        paddingBottom: large ? rem(84) : rem(64),
        overflow: 'hidden',
        backgroundColor: 'var(--rar-panel)',
        borderBottom: '1px solid var(--rar-border)',
      }}
    >
      {/* Grid texture */}
      {gridBg && (
        <Box
          className="rar-grid-bg"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Amber accent line at top */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: rem(3),
          background: 'linear-gradient(to right, var(--rar-amber) 0%, rgba(228,166,0,0.2) 60%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <Container size="xl" style={{ position: 'relative' }}>
        <Box
          maw={centered ? 720 : 760}
          mx={centered ? 'auto' : undefined}
          ta={centered ? 'center' : undefined}
        >
          {label && (
            <Box mb="md">
              <span className="rar-label">{label}</span>
            </Box>
          )}

          <Title
            order={1}
            style={{
              fontSize: large ? rem(60) : rem(46),
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--rar-text)',
            }}
          >
            {headline}
          </Title>

          {subhead && (
            <Text
              size="xl"
              mt="lg"
              style={{
                color: 'var(--rar-text-dim)',
                lineHeight: 1.65,
                maxWidth: centered ? rem(560) : rem(600),
                marginLeft: centered ? 'auto' : undefined,
                marginRight: centered ? 'auto' : undefined,
              }}
            >
              {subhead}
            </Text>
          )}

          {ctas && (
            <Group mt="xl" gap="md" justify={centered ? 'center' : 'flex-start'}>
              {ctas}
            </Group>
          )}
        </Box>

        {stats && <Box mt={56}>{stats}</Box>}
      </Container>
    </Box>
  );
}
