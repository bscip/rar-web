import { Box, Title, Text, rem } from '@mantine/core';

interface UseCaseCardProps {
  title: string;
  body: string;
  icon?: React.ReactNode;
}

export function UseCaseCard({ title, body, icon }: UseCaseCardProps) {
  return (
    <Box
      className="rar-panel rar-card-hover"
      style={{ padding: rem(28), height: '100%' }}
    >
      {icon && (
        <Box
          mb="md"
          style={{
            width: rem(40),
            height: rem(40),
            backgroundColor: 'rgba(228,166,0,0.1)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--rar-amber)',
          }}
        >
          {icon}
        </Box>
      )}
      <Title order={4} mb="sm" style={{ color: 'white' }}>
        {title}
      </Title>
      <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
        {body}
      </Text>
    </Box>
  );
}
