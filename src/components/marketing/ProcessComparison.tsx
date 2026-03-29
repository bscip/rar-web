import { Box, Group, List, Stack, Text, Title, rem } from '@mantine/core';

interface ProcessComparisonProps {
  traditional: string[];
  rar: string[];
  summary: string;
}

function StepList({ label, steps, accent }: { label: string; steps: string[]; accent?: boolean }) {
  return (
    <Box
      style={{
        flex: 1,
        minWidth: rem(280),
        backgroundColor: accent ? 'rgba(228, 166, 0, 0.06)' : 'var(--rar-panel)',
        border: `1px solid ${accent ? 'rgba(228, 166, 0, 0.25)' : 'var(--rar-border)'}`,
        borderRadius: rem(10),
        padding: `${rem(28)} ${rem(28)}`,
      }}
    >
      <Text
        size="sm"
        fw={600}
        mb="md"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: accent ? 'var(--rar-amber-ink)' : 'var(--rar-text-muted)',
        }}
      >
        {label}
      </Text>
      <List
        type="ordered"
        spacing={10}
        styles={{
          itemWrapper: { color: 'var(--rar-text-dim)' },
        }}
      >
        {steps.map((step, i) => (
          <List.Item key={i}>
            <Text size="sm" style={{ lineHeight: 1.65, color: 'var(--rar-text-dim)' }}>
              {step}
            </Text>
          </List.Item>
        ))}
      </List>
    </Box>
  );
}

export function ProcessComparison({ traditional, rar, summary }: ProcessComparisonProps) {
  return (
    <Stack gap="lg">
      <Title order={3} style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>
        Traditional Build vs. Roll-A-Rack Build
      </Title>
      <Group gap="lg" align="stretch" wrap="wrap">
        <StepList label="Traditional" steps={traditional} />
        <StepList label="Roll-A-Rack" steps={rar} accent />
      </Group>
      <Box
        style={{
          backgroundColor: 'var(--rar-panel)',
          border: '1px solid var(--rar-border)',
          borderLeft: `3px solid var(--rar-amber)`,
          borderRadius: rem(8),
          padding: `${rem(16)} ${rem(20)}`,
        }}
      >
        <Text fw={500} size="sm" style={{ color: 'var(--rar-text)', lineHeight: 1.6 }}>
          {summary}
        </Text>
      </Box>
    </Stack>
  );
}
