import { Box, Text, rem } from '@mantine/core';

interface TimelineItem {
  label: string;
  status: string;
}

interface TimelineBlockProps {
  items: TimelineItem[];
}

const STATUS_BG: Record<string, string> = {
  Complete: 'rgba(74,123,160,0.1)',
  Active: 'rgba(228, 166, 0, 0.1)',
  'In progress': 'rgba(228, 166, 0, 0.07)',
  Target: 'rgba(0,0,0,0.04)',
};

const STATUS_TEXT: Record<string, string> = {
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
              color: 'var(--rar-text)',
              fontWeight: 500,
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {item.label}
          </Text>
          <Box
            style={{
              flexShrink: 0,
              backgroundColor: STATUS_BG[item.status] ?? 'rgba(0,0,0,0.04)',
              color: STATUS_TEXT[item.status] ?? 'var(--rar-silver)',
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
