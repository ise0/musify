import {
  useState,
  useMemo,
  createContext,
  PropsWithChildren,
  useContext,
  useCallback,
} from 'react';
import { defaultThemes } from './theme';
import { type Theme } from './types';
import { createThemeVars } from './lib/create-theme-vars';

type ThemeContextType = {
  theme: Theme;
  setTheme: (themeType: Theme['type']) => void;
  customizeTheme: (colors: {
    primary?: string;
    primaryAlt?: string;
    secondary?: string;
    secondaryAlt?: string;
  }) => void;
};

const themeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themes, setThemes] = useState(defaultThemes);
  const [currentTheme, setCurrentTheme] = useState(defaultThemes.dark);

  const customizeTheme = useCallback<ThemeContextType['customizeTheme']>(
    (colors) => {
      const newThemes = { ...defaultThemes };
      newThemes.dark = { ...newThemes.dark, colors: { ...newThemes.dark.colors, ...colors } };
      newThemes.light = { ...newThemes.light, colors: { ...newThemes.light.colors, ...colors } };
      newThemes.dark.cssVars = createThemeVars(newThemes.dark.colors);
      newThemes.light.cssVars = createThemeVars(newThemes.light.colors);
      setThemes(newThemes);
      setCurrentTheme((p) => (p.type === 'dark' ? newThemes.dark : newThemes.light));
    },
    [setThemes]
  );
  const contextValue = useMemo((): ThemeContextType => {
    return {
      theme: currentTheme,
      setTheme: (themeType) => setCurrentTheme(themes[themeType]),
      customizeTheme,
    };
  }, [currentTheme, themes, customizeTheme]);
  return <themeContext.Provider value={contextValue}>{children}</themeContext.Provider>;
}

export function useTheme() {
  const theme = useContext(themeContext);
  if (theme === undefined) throw new Error('useTheme must be used within a ThemeProvider');
  return theme;
}
