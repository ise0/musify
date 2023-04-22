export function hexIsLight(color: string) {
  const hex = color.replace('#', '');
  const cR = parseInt(hex.substring(0, 0 + 2), 16);
  const cG = parseInt(hex.substring(2, 2 + 2), 16);
  const cB = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (cR * 299 + cG * 587 + cB * 114) / 1000;
  return brightness > 155;
}
