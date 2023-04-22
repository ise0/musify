export type ThemeColors = {
  primary: string;
  onPrimary: string;
  primaryAlt: string;
  onPrimaryAlt: string;
  secondary: string;
  onSecondary: string;
  secondaryAlt: string;
  onSecondaryAlt: string;
  surface: string;
  onSurface: string;
  background: string;
  onBackground: string;
};

export type Theme = {
  type: 'dark' | 'light';
  className: string;
  cssVars: string;
  colors: ThemeColors;
};
