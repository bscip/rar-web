import type { ReactNode } from 'react';
import { SimpleGrid, Box, Text, Title, rem } from '@mantine/core';

export interface FeatureItem {
  title: string;
  body: string;
  icon?: ReactNode;
}

interface FeatureGridProps {
  features: FeatureItem[];
  cols?: { base: number; sm?: number; md?: number };
}

export function FeatureGrid({ features, cols = { base: 1, sm: 2, md: 3 } }: FeatureGridProps) {
  return (
    <SimpleGrid cols={cols} spacing="lg">
      {features.map((feature) => (
        <Box
          key={feature.title}
          className="rar-panel rar-card-hover"
          style={{ padding: `${rem(28)} ${rem(28)}` }}
        >
          {feature.icon && (
            <Box
              mb="md"
              style={{
                width: rem(40),
                height: rem(40),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(228, 166, 0, 0.1)',
                borderRadius: 8,
                color: 'var(--rar-amber)',
              }}
            >
              {feature.icon}
            </Box>
          )}
          <Title order={4} mb="sm" style={{ color: 'var(--rar-text)' }}>
            {feature.title}
          </Title>
          <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
            {feature.body}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
