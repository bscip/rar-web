import { Outlet } from '@tanstack/react-router';
import { Box } from '@mantine/core';
import { SiteHeader } from '../components/site/SiteHeader';
import { SiteFooter } from '../components/site/SiteFooter';

export function MarketingLayout() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--rar-bg)',
      }}
    >
      <SiteHeader />
      <Box
        component="main"
        style={{
          flex: 1,
          paddingTop: 88, // header height
        }}
      >
        <Outlet />
      </Box>
      <SiteFooter />
    </Box>
  );
}
