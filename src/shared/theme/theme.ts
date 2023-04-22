import { Theme } from './types';

const cssVarsDark = `
  --primary: #F14A16;
  --primary-rgb: 241, 74, 22;
  --on-primary: #FFFFFF;
  --on-primary-rgb: 255, 255, 255;
  --primary-alt: #FC9918;
  --primary-alt-rgb: 252, 153, 24;
  --on-primary-alt: #FFFFFF;
  --on-primary-alt-rgb: 255, 255, 255;
  --secondary: #370665;
  --secondary-rgb: 55, 6, 101;
  --on-secondary: #FFFFFF;
  --on-secondary-rgb: 255, 255, 255;
  --secondary-alt: #35589A;
  --secondary-alt-rgb: 53, 88, 154;
  --on-secondary-alt: #FFFFFF;
  --on-secondary-alt-rgb: 255, 255, 255;
  --surface: #3d3938;
  --surface-rgb: 61, 57, 56;
  --on-surface: #FFFFFF;
  --on-surface-rgb: 255, 255, 255;
  --background: #FFFFFF;
  --background-rgb: 255, 255, 255;
  --on-background: #000000;
  --on-background-rgb: 0, 0, 0;
`;

const cssVarsLight = `
  --primary: #F14A16;
  --primary-rgb: 241, 74, 22;
  --on-primary: #FFFFFF;
  --on-primary-rgb: 255, 255, 255;
  --primary-alt: #FC9918;
  --primary-alt-rgb: 252, 153, 24;
  --on-primary-alt: #FFFFFF;
  --on-primary-alt-rgb: 255, 255, 255;
  --secondary: #370665;
  --secondary-rgb: 55, 6, 101;
  --on-secondary: #FFFFFF;
  --on-secondary-rgb: 255, 255, 255;
  --secondary-alt: #35589A;
  --secondary-alt-rgb: 53, 88, 154;
  --on-secondary-alt: #FFFFFF;
  --on-secondary-alt-rgb: 255, 255, 255;
  --surface: #3d3938;
  --surface-rgb: 61, 57, 56;
  --on-surface: #FFFFFF;
  --on-surface-rgb: 255, 255, 255;
  --background: #000000;
  --background-rgb: 0, 0, 0;
  --on-background: #FFFFFF;
  --on-background-rgb: 255, 255, 255;
`;

const light = {
  primary: '#F14A16',
  onPrimary: '#FFFFFF',
  primaryAlt: '#FC9918',
  onPrimaryAlt: '#FFFFFF',
  secondary: '#370665',
  onSecondary: '#FFFFFF',
  secondaryAlt: '#35589A',
  onSecondaryAlt: '#FFFFFF',
  surface: '#FFFFFF',
  onSurface: '#000000',
  background: '#FFFFFF',
  onBackground: '#000000',
};

const dark = {
  primary: '#F14A16',
  onPrimary: '#FFFFFF',
  primaryAlt: '#FC9918',
  onPrimaryAlt: '#FFFFFF',
  secondary: '#370665',
  onSecondary: '#FFFFFF',
  secondaryAlt: '#35589A',
  onSecondaryAlt: '#FFFFFF',
  surface: '#3d3938',
  onSurface: '#FFFFFF',
  background: '#000000',
  onBackground: '#FFFFFF',
};

export const defaultThemes: Record<Theme['type'], Theme> = {
  light: {
    type: 'light',
    className: 'theme_light',
    cssVars: cssVarsDark,
    colors: light,
  },
  dark: {
    type: 'dark',
    className: 'theme_dark',
    cssVars: cssVarsLight,
    colors: dark,
  },
};
