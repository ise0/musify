import { ThemeProvider } from '@src/shared/theme';
import { AppProps } from 'next/app';

export function App({ Component }: AppProps) {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}
