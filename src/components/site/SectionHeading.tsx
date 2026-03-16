import { Box, Title, Text, rem } from '@mantine/core';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  maw?: number;
}

export function SectionHeading({ label, title, subtitle, centered = false, maw }: SectionHeadingProps) {
  const accentLine = (
    <Box
      style={{
        width: rem(48),
        height: rem(3),
        backgroundColor: 'var(--rar-amber)',
        borderRadius: rem(2),
        marginBottom: rem(20),
        ...(centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
      }}
    />
  );

  return (
    <Box
      maw={maw}
      mx={centered ? 'auto' : undefined}
      ta={centered ? 'center' : undefined}
      mb={48}
    >
      {label ? (
        <Box mb="sm">
          <span className="rar-label">{label}</span>
        </Box>
      ) : (
        accentLine
      )}
      <Title order={2} style={{ letterSpacing: '-0.015em' }}>
        {title}
      </Title>
      {subtitle && (
        <Text
          size="lg"
          mt="md"
          style={{
            color: 'var(--rar-text-dim)',
            lineHeight: 1.65,
            maxWidth: maw ? undefined : rem(600),
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
