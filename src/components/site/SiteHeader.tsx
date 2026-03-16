import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import {
  Box,
  Container,
  Group,
  Text,
  Button,
  Burger,
  Drawer,
  Stack,
  Anchor,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Installers', to: '/for-installers' },
  { label: 'Investors', to: '/for-investors' },
  { label: 'Installations', to: '/installations' },
  { label: 'Team', to: '/team' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <Box
        component="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: rem(64),
          backgroundColor: transparent
            ? 'transparent'
            : 'rgba(13, 15, 16, 0.85)',
          backdropFilter: transparent ? 'none' : 'blur(12px)',
          borderBottom: transparent
            ? '1px solid transparent'
            : '1px solid rgba(255,255,255,0.07)',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Container size="xl" h="100%">
          <Group h="100%" justify="space-between" wrap="nowrap">
            {/* Logo */}
            <Anchor component={Link} to="/" underline="never">
              <Group gap="xs" wrap="nowrap">
                <Box
                  style={{
                    width: 28,
                    height: 28,
                    backgroundColor: 'var(--rar-amber)',
                    borderRadius: 4,
                    flexShrink: 0,
                  }}
                />
                <Text
                  fw={700}
                  size="lg"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: 'white',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Roll-A-Rack
                </Text>
              </Group>
            </Anchor>

            {/* Desktop nav */}
            <Group gap="xl" visibleFrom="md" wrap="nowrap">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 500,
                    fontSize: rem(14),
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    color: 'var(--rar-text-dim)',
                  }}
                  activeProps={{
                    style: {
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 500,
                      fontSize: rem(14),
                      letterSpacing: '0.01em',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      color: 'var(--rar-amber)',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Group>

            {/* CTA + mobile burger */}
            <Group gap="md" wrap="nowrap">
              <Button
                component={Link}
                to="/contact"
                variant="filled"
                color="denim"
                visibleFrom="md"
                size="sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Contact Us
              </Button>
              <Burger
                opened={drawerOpened}
                onClick={openDrawer}
                hiddenFrom="md"
                color="white"
                size="sm"
              />
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="xl"
        styles={{
          content: { backgroundColor: 'var(--rar-panel)' },
          header: { backgroundColor: 'var(--rar-panel)' },
        }}
      >
        <Stack gap="lg" mt="xl">
          {NAV_LINKS.map((link) => (
            <Anchor
              key={link.to}
              component={Link}
              to={link.to}
              underline="never"
              onClick={closeDrawer}
              style={{
                color: 'white',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: rem(22),
              }}
            >
              {link.label}
            </Anchor>
          ))}
              <Button
                component={Link}
                to="/contact"
                variant="filled"
                color="denim"
                size="lg"
                mt="md"
                onClick={closeDrawer}
              >
            Contact Us
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
