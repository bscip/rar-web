import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';

interface ErrorPageProps {
  reset?: () => void;
}

export function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <Container size="sm" py={80} style={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(140px, 28vw, 280px)',
          fontWeight: 900,
          color: 'rgba(255, 60, 0, 0.08)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
        aria-hidden
      >
        500
      </Box>

      <Stack align="center" gap="xl" ta="center" style={{ position: 'relative', paddingTop: 80, paddingBottom: 80 }}>
        <Stack gap="sm" align="center">
          <Title
            order={2}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              color: 'var(--rar-text)',
            }}
          >
            Something went wrong.
          </Title>
          <Text size="lg" maw={420} style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
            An unexpected error occurred on our end. Try refreshing the page — if the problem continues, please get in touch.
          </Text>
        </Stack>
        <Button
          onClick={reset ?? (() => window.location.reload())}
          variant="filled"
          color="flame"
          size="md"
        >
          Refresh the page
        </Button>
      </Stack>
    </Container>
  );
}
