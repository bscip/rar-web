import { Box, Text, rem } from '@mantine/core';

interface TimelineItem {
  label: string;
  status: string;
}

interface TimelineBlockProps {
  items: TimelineItem[];
}

const STATUS_COLORS: Record<string, string> = {
  Complete: 'rgba(92, 141, 181, 0.15)',
  Active: 'rgba(228, 166, 0, 0.12)',
  'In progress': 'rgba(228, 166, 0, 0.08)',
  Target: 'rgba(255, 255, 255, 0.05)',
};

const STATUS_TEXT_COLORS: Record<string, string> = {
  Complete: 'var(--rar-flame)',
  Active: 'var(--rar-amber)',
  'In progress': 'var(--rar-amber)',
  Target: 'var(--rar-silver)',
};

export function TimelineBlock({ items }: TimelineBlockProps) {
  return (
    <Box>
      {items.map((item, i) => (
        <Box
          key={item.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${rem(16)} ${rem(20)}`,
            backgroundColor: i % 2 === 0 ? 'var(--rar-panel)' : 'transparent',
            border: '1px solid var(--rar-border)',
            borderRadius: 8,
            marginBottom: rem(8),
            gap: rem(16),
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 500,
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {item.label}
          </Text>
          <Box
            style={{
              flexShrink: 0,
              backgroundColor: STATUS_COLORS[item.status] ?? 'rgba(255,255,255,0.05)',
              color: STATUS_TEXT_COLORS[item.status] ?? 'var(--rar-silver)',
              padding: `${rem(4)} ${rem(12)}`,
              borderRadius: 4,
              fontSize: rem(12),
              fontWeight: 600,
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
            }}
          >
            {item.status}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
