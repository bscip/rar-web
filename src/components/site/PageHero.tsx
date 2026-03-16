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
      }}
    >
      {/* Grid texture */}
      {gridBg && (
        <>
          <Box
            className="rar-grid-bg"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          />
          {/* Subtle amber glow */}
          <Box
            style={{
              position: 'absolute',
              top: '-30%',
              right: '10%',
              width: '40vw',
              height: '40vw',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(228,166,0,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      {/* Bottom fade to main bg */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: rem(64),
          background: 'linear-gradient(to bottom, transparent, var(--rar-bg))',
          pointerEvents: 'none',
        }}
      />

      {/* Top separator line */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: rem(1),
          background: 'linear-gradient(to right, transparent, rgba(228,166,0,0.3), transparent)',
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
              color: 'white',
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
