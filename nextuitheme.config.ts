/** @type {import('tailwindcss').Config} */
import { type LayoutTheme, nextui, type ConfigThemes } from '@nextui-org/react';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blueLight: {
    50: '#e6f1fe',
    100: '#cce3fd',
    200: '#99c7fb',
    300: '#66aaf9',
    400: '#338ef7',
    500: '#006FEE',
    600: '#005bc4',
    700: '#004493',
    800: '#002e62',
    900: '#001731',
  },
  blueBlack: {
    50: '#001731',
    100: '#002e62',
    200: '#004493',
    300: '#005bc4',
    400: '#006FEE',
    500: '#338ef7',
    600: '#66aaf9',
    700: '#99c7fb',
    800: '#cce3fd',
    900: '#e6f1fe',
  },
};

export const layout: LayoutTheme = {
  spacingUnit: 4,
  disabledOpacity: '.5',
  dividerWeight: '1px',
  fontSize: {
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
  },
  lineHeight: {
    tiny: '1rem',
    small: '1.25rem',
    medium: '1.5rem',
    large: '1.75rem',
  },
  radius: {
    small: '8px',
    medium: '12px',
    large: '14px',
  },
  borderWidth: {
    small: '1px',
    medium: '2px',
    large: '3px',
  },
};

export const themes: ConfigThemes = {
  light: {
    colors: {
      background: colors.white,
      foreground: colors.black,
      primary: {
        DEFAULT: colors.black,
        foreground: colors.white,
      },
      secondary: {
        DEFAULT: colors.blueLight[500],
        ...colors.blueLight,
      },
    },
  },
  dark: {
    colors: {
      background: colors.black,
      foreground: colors.white,
      primary: {
        DEFAULT: colors.white,
        foreground: colors.black,
      },
      secondary: {
        DEFAULT: colors.blueBlack[500],
        ...colors.blueBlack,
      },
    },
  },
};

export default {
  plugins: [
    nextui({
      layout,
      themes,
    }),
  ],
};
