import { Box, Text, Title, SimpleGrid, rem } from '@mantine/core';
import type { Installation } from '../../content/installations';

interface InstallationCardProps {
  installation: Installation;
}

const STATUS_BG: Record<string, string> = {
  Planning: 'rgba(255,60,0,0.08)',
  'In Progress': 'rgba(228, 166, 0, 0.1)',
  Completed: 'rgba(74,123,160,0.1)',
  Placeholder: 'rgba(0,0,0,0.05)',
};
const STATUS_TEXT: Record<string, string> = {
  Planning: 'var(--rar-flame)',
  'In Progress': 'var(--rar-amber)',
  Completed: 'var(--rar-denim)',
  Placeholder: 'var(--rar-silver)',
};

export function InstallationCard({ installation }: InstallationCardProps) {
  return (
    <Box
      className="rar-panel rar-card-hover"
      style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image placeholder */}
      <Box
        style={{
          height: rem(180),
          backgroundColor: 'var(--rar-panel-alt)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--rar-border)',
          position: 'relative',
        }}
      >
        {installation.imageUrl ? (
          <Box
            component="img"
            src={installation.imageUrl}
            alt={installation.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Text size="xs" style={{ color: 'var(--rar-text-muted)', fontFamily: 'Space Grotesk, sans-serif' }}>
            Photo coming
          </Text>
        )}
        <Box
          style={{
            position: 'absolute',
            top: rem(12),
            right: rem(12),
            backgroundColor: STATUS_BG[installation.status] ?? 'rgba(0,0,0,0.05)',
            color: STATUS_TEXT[installation.status] ?? 'var(--rar-silver)',
            padding: `${rem(4)} ${rem(10)}`,
            borderRadius: 4,
            fontSize: rem(11),
            fontWeight: 600,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.04em',
          }}
        >
          {installation.status}
        </Box>
      </Box>

      <Box style={{ padding: rem(24), flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Text size="xs" style={{ color: 'var(--rar-amber)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: rem(6) }}>
          {installation.type}
        </Text>
        <Title order={4} mb="sm" style={{ color: 'var(--rar-text)' }}>
          {installation.title}
        </Title>
        <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7, flex: 1 }}>
          {installation.summary}
        </Text>

        {installation.metrics && installation.metrics.length > 0 && (
          <Box
            mt="md"
            style={{
              backgroundColor: 'var(--rar-panel-alt)',
              borderRadius: 6,
              padding: `${rem(12)} ${rem(16)}`,
              borderTop: '1px solid var(--rar-border)',
            }}
          >
            <SimpleGrid cols={installation.metrics.length} spacing="sm">
              {installation.metrics.map((m) => (
                <Box key={m.label}>
                  <Text fw={700} size="sm" style={{ color: 'var(--rar-amber)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {m.value}
                  </Text>
                  <Text size="xs" style={{ color: 'var(--rar-text-muted)' }}>
                    {m.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </Box>
  );
}
