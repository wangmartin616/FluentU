import { createTheme } from '@shopify/restyle';

const palette = {
  blue: '#4F55EA',
  blueDark: '#2E35D6',
  green: '#4AD118',
  greenDark: '#05AA1F',
  black: '#000000',
  gray: '#707070',
  white: '#FFFFFF',
  blackLight: 'rgba(0, 0, 0, 0.5)',
  whiteDark: 'rgba(255, 255, 255, 0.5)',
};

export const theme = createTheme({
  colors: {
    primary: palette.blue,
    primaryDark: palette.blueDark,
    success: palette.green,
    successDark: palette.greenDark,
    backgroundPrimary: palette.white,
    textPrimary: palette.black,
    textSecondary: palette.blackLight,
    progressBackground: palette.gray,
    black: palette.black,
    white: palette.white,
    whiteDark: palette.whiteDark,
  },
  spacing: {
    '0': 0,
    '4': 4,
    '6': 6,
    '8': 8,
    '10': 10,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '28': 28,
    '32': 32,
    '36': 36,
    '40': 40,
    '44': 44,
    '48': 48,
    '56': 56,
    '60': 60,
    '64': 64,
    '72': 72,
    '80': 80,
    '92': 92,
    '120': 120,
  },
  breakpoints: {},
  textVariants: {
    defaults: {
      fontSize: 16,
    },
  },
  buttonColorSchemes: {
    defaults: {
      paddingVertical: '12',
      borderRadius: 16,
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowOffset: { width: 4, height: 4 },
      shadowRadius: 4,
      elevation: 4,
    },
    primary: {
      backgroundColor: 'primary',
    },
    success: {
      backgroundColor: 'success',
    },
  },
  buttonTextColorSchemes: {
    defaults: {
      color: 'white',
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 24,
      textAlign: 'center',
    },
    primary: {
      color: 'white',
    },
    success: {
      color: 'white',
    },
  },
});

export type Theme = typeof theme;
