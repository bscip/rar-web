import { Link } from '@tanstack/react-router';
import { Grid, Box, Title, Text, Button, rem } from '@mantine/core';
import {
  IconHelmet,
  IconTrendingUp,
} from '@tabler/icons-react';

export function AudienceSplit() {
  return (
    <Grid gutter="lg">
      {/* Installer card */}
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Box
          className="rar-panel rar-card-hover"
          style={{
            padding: rem(40),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '3px solid var(--rar-amber)',
          }}
        >
          <Box
            mb="lg"
            style={{
              width: rem(48),
              height: rem(48),
              backgroundColor: 'rgba(228, 166, 0, 0.12)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--rar-amber)',
            }}
          >
            <IconHelmet size={24} />
          </Box>
          <span className="rar-label" style={{ marginBottom: rem(12) }}>For Installers</span>
          <Title order={3} mb="md" style={{ color: 'white' }}>
            Bring a differentiated system to real projects.
          </Title>
          <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7, flex: 1 }}>
            Pilot with a land-efficient racking system designed to reduce complexity, improve project economics, and create compelling case studies.
          </Text>
          <Button
            component={Link}
            to="/for-installers"
            variant="outline"
            color="amber"
            mt="xl"
            size="sm"
            style={{ alignSelf: 'flex-start' }}
          >
            Explore installer opportunities
          </Button>
        </Box>
      </Grid.Col>

      {/* Investor card */}
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Box
          className="rar-panel rar-card-hover"
          style={{
            padding: rem(40),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '3px solid var(--rar-flame)',
          }}
        >
          <Box
            mb="lg"
            style={{
              width: rem(48),
              height: rem(48),
              backgroundColor: 'rgba(255, 60, 0, 0.1)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--rar-flame)',
            }}
          >
            <IconTrendingUp size={24} />
          </Box>
          <span className="rar-label" style={{ marginBottom: rem(12), color: 'var(--rar-flame)' }}>For Investors</span>
          <Title order={3} mb="md" style={{ color: 'white' }}>
            Back a patent-backed cleantech platform.
          </Title>
          <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7, flex: 1 }}>
            A land-use wedge in solar deployment, backed by patents, grant support, and a concrete path from pilot to proof.
          </Text>
          <Button
            component={Link}
            to="/for-investors"
            variant="outline"
            color="flame"
            mt="xl"
            size="sm"
            style={{ alignSelf: 'flex-start' }}
          >
            Explore the investor case
          </Button>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
