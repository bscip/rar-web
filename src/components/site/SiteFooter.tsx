import { Link } from '@tanstack/react-router';
import {
  Box,
  Container,
  Grid,
  Text,
  Group,
  Stack,
  Anchor,
  Divider,
} from '@mantine/core';

const FOOTER_NAV = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Installations', to: '/installations' },
    ],
  },
  {
    heading: 'Work With Us',
    links: [
      { label: 'For Installers', to: '/for-installers' },
      { label: 'For Investors', to: '/for-investors' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Use', to: '/terms' },
    ],
  },
];

export function SiteFooter() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: 'var(--rar-panel)',
        borderTop: '1px solid var(--rar-border)',
        marginTop: 'auto',
      }}
    >
      <Container size="xl" py={64}>
        <Grid gutter={48}>
          {/* Brand column */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Group gap="xs">
                <Box
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: 'var(--rar-amber)',
                    borderRadius: 4,
                    flexShrink: 0,
                  }}
                />
                <Text
                  fw={700}
                  size="md"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: 'white',
                  }}
                >
                  Roll-A-Rack
                </Text>
              </Group>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)', maxWidth: 280, lineHeight: 1.7 }}>
                Land-based solar racking designed to reduce land use, manage
                rainwater, and simplify deployment for installers and developers.
              </Text>
              <Text size="sm" style={{ color: 'var(--rar-text-dim)' }}>
                <Anchor
                  href="mailto:info@roll-a-rack.com"
                  style={{ color: 'var(--rar-amber)' }}
                  underline="hover"
                >
                  info@roll-a-rack.com
                </Anchor>
              </Text>
            </Stack>
          </Grid.Col>

          {/* Nav columns */}
          {FOOTER_NAV.map((group) => (
            <Grid.Col key={group.heading} span={{ base: 6, sm: 4, md: 'auto' }}>
              <Stack gap="sm">
                <Text
                  size="xs"
                  fw={600}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--rar-silver)',
                  }}
                >
                  {group.heading}
                </Text>
                {group.links.map((link) => (
                  <Anchor
                    key={link.to}
                    component={Link}
                    to={link.to}
                    underline="hover"
                    size="sm"
                    style={{ color: 'var(--rar-text-dim)' }}
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </Grid.Col>
          ))}
        </Grid>

        <Divider mt={48} mb={24} color="rgba(255,255,255,0.06)" />

        <Group justify="space-between" wrap="wrap" gap="sm">
          <Text size="xs" style={{ color: 'var(--rar-text-muted)' }}>
            © {new Date().getFullYear()} Roll-A-Rack. All rights reserved.
          </Text>
          <Text size="xs" style={{ color: 'var(--rar-text-muted)' }}>
            Patent-backed solar racking technology.
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
