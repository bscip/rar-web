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
  '#e4a600', // [5] — primary
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
  '#ff3c00', // [5]
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
  '#4a7ba0', // [5] — slightly deeper for light bg readability
  '#3d6a8c',
  '#2e5270',
  '#1f3b54',
  '#112438',
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
  colors: { amber, flame, denim },
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
    Card: {
      defaultProps: {
        radius: 'md',
        padding: 'xl',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
    },
  },
});
