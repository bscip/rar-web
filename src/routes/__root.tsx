import { createRootRoute, Outlet } from '@tanstack/react-router';
import { MantineProvider, Box } from '@mantine/core';
import { theme } from '../styles/theme';
import { SiteHeader } from '../components/site/SiteHeader';
import { SiteFooter } from '../components/site/SiteFooter';
import { NotFoundPage } from '../pages/NotFoundPage';
import '../styles/global.css';

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Outlet />
    </MantineProvider>
  );
}

function NotFound() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--rar-bg)' }}>
      <SiteHeader />
      <Box component="main" style={{ flex: 1, paddingTop: 64 }}>
        <NotFoundPage />
      </Box>
      <SiteFooter />
    </Box>
  );
}
