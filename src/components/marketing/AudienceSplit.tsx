import { Link } from '@tanstack/react-router';
import { Grid, Box, Title, Text, Button, rem } from '@mantine/core';
import { IconHelmet, IconUsers } from '@tabler/icons-react';

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
              backgroundColor: 'rgba(228, 166, 0, 0.1)',
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
          <Title order={3} mb="md" style={{ color: 'var(--rar-text)' }}>
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

      {/* Partners card */}
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
              backgroundColor: 'rgba(255, 60, 0, 0.08)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--rar-flame)',
            }}
          >
            <IconUsers size={24} />
          </Box>
          <span className="rar-label" style={{ marginBottom: rem(12), color: 'var(--rar-flame)' }}>Partners & Pilots</span>
          <Title order={3} mb="md" style={{ color: 'var(--rar-text)' }}>
            Deploy on a real project.
          </Title>
          <Text size="md" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7, flex: 1 }}>
            Pilot-ready racking for land-constrained or complex sites. Open to project-specific collaboration with developers, EPCs, and strategic partners.
          </Text>
          <Button
            component={Link}
            to="/partners"
            variant="outline"
            color="flame"
            mt="xl"
            size="sm"
            style={{ alignSelf: 'flex-start' }}
          >
            Explore partnership opportunities
          </Button>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
