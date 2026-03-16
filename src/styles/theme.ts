import { createTheme, type MantineColorsTuple, rem } from '@mantine/core';

// RAR Brand Palette
// Amber Honey  #E4A600
// Blazing Flame #FF3C00
// Dusty Denim  #5C8DB5
// Charcoal     #4B4F54
// Silver       #AEAEAE

const amber: MantineColorsTuple = [
  '#fff9e6',
  '#ffefc0',
  '#ffe499',
  '#ffd966',
  '#f5c333',
  '#e4a600', // [5] — Amber Honey primary
  '#c98f00',
  '#a37200',
  '#7d5800',
  '#573c00',
];

const flame: MantineColorsTuple = [
  '#fff1ec',
  '#ffd9cc',
  '#ffbba8',
  '#ff9478',
  '#ff6040',
  '#ff3c00', // [5] — Blazing Flame
  '#d93400',
  '#b32b00',
  '#8c2200',
  '#661900',
];

const denim: MantineColorsTuple = [
  '#eef3f8',
  '#d4e2ee',
  '#b5cde3',
  '#90b3d3',
  '#6e99c2',
  '#5c8db5', // [5] — Dusty Denim
  '#4d7ba0',
  '#3d6289',
  '#2e4b6b',
  '#1e324d',
];

// Dark surface palette — remapped for RAR
// dark[9] = body background, dark[7] = panel surface
const dark: MantineColorsTuple = [
  '#c9cdd2',  // [0] lightest
  '#9ea4ab',
  '#747c85',
  '#4b4f54', // [3] Charcoal
  '#393d42',
  '#2c2f33',
  '#23262a',  // [6] panelAlt
  '#1a1c1e',  // [7] panel
  '#141618',
  '#0d0f10',  // [9] background
];

export const theme = createTheme({
  // Typography
  fontFamily: 'Inter, system-ui, sans-serif',
  fontFamilyMonospace: 'monospace',
  headings: {
    fontFamily: 'Space Grotesk, system-ui, sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(56), lineHeight: '1.1' },
      h2: { fontSize: rem(40), lineHeight: '1.15' },
      h3: { fontSize: rem(28), lineHeight: '1.2' },
      h4: { fontSize: rem(22), lineHeight: '1.3' },
      h5: { fontSize: rem(18), lineHeight: '1.4' },
    },
  },

  // Palette
  colors: { amber, flame, denim, dark },
  primaryColor: 'amber',
  primaryShade: 5,

  // Radius
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(12),
    xl: rem(16),
  },

  // Spacing
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },

  // Component defaults
  components: {
    Button: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        root: {
          fontFamily: 'Space Grotesk, system-ui, sans-serif',
          fontWeight: '600',
          letterSpacing: '0.01em',
        },
      },
    },
    Title: {
      styles: {
        root: {
          color: 'var(--mantine-color-white)',
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        padding: 'xl',
      },
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-dark-7)',
          borderColor: 'rgba(255, 255, 255, 0.07)',
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-dark-7)',
          borderColor: 'rgba(255, 255, 255, 0.07)',
        },
      },
    },
    Divider: {
      styles: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
    },
  },
});
