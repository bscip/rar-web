import type { ReactNode } from 'react';
import { Container, Box, rem } from '@mantine/core';

interface ContentSectionProps {
  children: ReactNode;
  py?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: boolean;
  style?: React.CSSProperties;
}

export function ContentSection({ children, py = 80, size = 'xl', alt = false, style }: ContentSectionProps) {
  return (
    <Box
      style={{
        backgroundColor: alt ? 'var(--rar-panel)' : 'transparent',
        borderTop: alt ? '1px solid var(--rar-border)' : undefined,
        borderBottom: alt ? '1px solid var(--rar-border)' : undefined,
        paddingTop: rem(py),
        paddingBottom: rem(py),
        ...style,
      }}
    >
      <Container size={size}>{children}</Container>
    </Box>
  );
}
