import { camelToKebabCase } from '@src/shared/camel-to-snakecase';

function hexToRGB(hex: string) {
  const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  if (m === null) return m;
  return `${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}`;
}

export function createThemeVars(themeColors: Record<string, string>) {
  const colors = camelToKebabCase(themeColors) as Record<string, string>;
  const vars: string[] = [];

  Object.entries(colors).forEach(([key, value]) => {
    vars.push(`--${key}: ${value};`);
    const rgb = hexToRGB(value);
    if (rgb !== null) vars.push(`--${key}-rgb: ${hexToRGB(value)};`);
  });

  return vars.join('\n');
}
