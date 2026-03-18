import { Link } from '@tanstack/react-router';
import { Container, Title, Text, Button, Stack, Box } from '@mantine/core';

export function NotFoundPage() {
  return (
    <Container size="sm" py={120}>
      <Stack align="center" gap="xl" ta="center">
        <Box>
          <Text
            size="xl"
            fw={700}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '6rem',
                color: 'var(--rar-text-muted)',
              lineHeight: 1,
            }}
          >
            404
          </Text>
        </Box>
        <Stack gap="sm" align="center">
          <Title order={2}>Page not found</Title>
          <Text style={{ color: 'var(--rar-text-dim)' }}>
            The page you're looking for doesn't exist or has been moved.
          </Text>
        </Stack>
        <Button component={Link} to="/" variant="filled" color="amber" size="md">
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}
