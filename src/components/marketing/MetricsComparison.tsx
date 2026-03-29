import { Box, Table, Text, Title, rem } from '@mantine/core';
import type { MetricRow } from '../../content/landfillSolar';

interface MetricsComparisonProps {
  rows: MetricRow[];
}

export function MetricsComparison({ rows }: MetricsComparisonProps) {
  return (
    <Box>
      <Title
        order={3}
        mb="lg"
        style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
      >
        Cost and Execution Comparison
      </Title>
      <Box
        style={{
          border: '1px solid var(--rar-border)',
          borderRadius: rem(10),
          overflow: 'hidden',
        }}
      >
        <Table
          verticalSpacing="sm"
          horizontalSpacing="lg"
          highlightOnHover
          styles={{
            table: {
              borderCollapse: 'collapse',
            },
            thead: {
              backgroundColor: 'var(--rar-panel-alt)',
            },
            th: {
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: rem(13),
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: 'var(--rar-text-muted)',
              borderBottom: '1px solid var(--rar-border-strong)',
              padding: `${rem(14)} ${rem(20)}`,
            },
            td: {
              borderBottom: '1px solid var(--rar-border)',
              padding: `${rem(12)} ${rem(20)}`,
            },
            tr: {
              '&:last-of-type td': { borderBottom: 'none' },
            },
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: '40%' }}>Category</Table.Th>
              <Table.Th style={{ width: '30%' }}>Traditional</Table.Th>
              <Table.Th style={{ width: '30%' }}>Roll-A-Rack</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((row) => (
              <Table.Tr key={row.category}>
                <Table.Td>
                  <Text fw={500} size="sm" style={{ color: 'var(--rar-text)' }}>
                    {row.category}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" style={{ color: 'var(--rar-text-dim)' }}>
                    {row.traditional}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={500} style={{ color: 'var(--rar-amber-ink)' }}>
                    {row.rar}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
    </Box>
  );
}
