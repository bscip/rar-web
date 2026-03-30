import { Box, Group, List, Stack, Text, rem } from '@mantine/core';

interface ProcessComparisonProps {
  traditional: string[];
  rar: string[];
  summary: string;
  traditionalPainPoints?: string[];
  rarAdvantages?: string[];
}

function StepList({
  label,
  steps,
  accent,
  subLabel,
  subItems,
}: {
  label: string;
  steps: string[];
  accent?: boolean;
  subLabel?: string;
  subItems?: string[];
}) {
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
        fw={700}
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

      {subItems && subItems.length > 0 && (
        <Box
          mt="lg"
          pt="md"
          style={{ borderTop: `1px solid ${accent ? 'rgba(228, 166, 0, 0.2)' : 'var(--rar-border)'}` }}
        >
          <Text
            size="xs"
            fw={600}
            mb={8}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              color: accent ? 'var(--rar-amber-ink)' : 'var(--rar-text-muted)',
            }}
          >
            {subLabel}
          </Text>
          <List spacing={6}>
            {subItems.map((item, i) => (
              <List.Item key={i}>
                <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.55 }}>
                  {item}
                </Text>
              </List.Item>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export function ProcessComparison({
  traditional,
  rar,
  summary,
  traditionalPainPoints,
  rarAdvantages,
}: ProcessComparisonProps) {
  return (
    <Stack gap="lg">
      <Group gap="lg" align="stretch" wrap="wrap">
        <StepList
          label="Traditional"
          steps={traditional}
          subLabel="Pain Points"
          subItems={traditionalPainPoints}
        />
        <StepList
          label="Roll-A-Rack"
          steps={rar}
          accent
          subLabel="Advantages"
          subItems={rarAdvantages}
        />
      </Group>
      <Box
        style={{
          backgroundColor: 'var(--rar-panel)',
          border: '1px solid var(--rar-border)',
          borderLeft: '3px solid var(--rar-amber)',
          borderRadius: rem(8),
          padding: `${rem(16)} ${rem(20)}`,
        }}
      >
        <Text fw={600} size="sm" style={{ color: 'var(--rar-text)', lineHeight: 1.6 }}>
          Key Difference: {summary}
        </Text>
      </Box>
    </Stack>
  );
}
