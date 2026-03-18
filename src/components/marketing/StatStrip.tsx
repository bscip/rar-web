import { Box, SimpleGrid, Text, rem } from '@mantine/core';
import type { HeroStat } from '../../content/site';

interface StatStripProps {
  stats: HeroStat[];
}

export function StatStrip({ stats }: StatStripProps) {
  return (
    <Box
      style={{
        backgroundColor: 'var(--rar-bg)',
        border: '1px solid var(--rar-border)',
        borderRadius: 12,
        padding: `${rem(28)} ${rem(32)}`,
      }}
    >
      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing={0}>
        {stats.map((stat, i) => (
          <Box
            key={stat.label}
            style={{
              padding: `${rem(8)} ${rem(24)}`,
              borderLeft: i > 0 ? '1px solid var(--rar-border)' : undefined,
              borderTop: i >= 2 ? '1px solid var(--rar-border)' : undefined,
            }}
          >
            <Text
              fw={700}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: rem(26),
                color: 'var(--rar-amber)',
                lineHeight: 1.1,
                marginBottom: rem(4),
              }}
            >
              {stat.value}
            </Text>
            <Text size="sm" style={{ color: 'var(--rar-silver)', lineHeight: 1.3 }}>
              {stat.label}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
