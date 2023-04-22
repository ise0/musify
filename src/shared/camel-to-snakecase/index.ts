export const camelToKebabCaseStr = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

export const camelToKebabCase = (arg: unknown): unknown => {
  if (typeof arg === 'object') {
    if (Array.isArray(arg)) return arg.map(camelToKebabCase);
    if (arg === null) return arg;
    return Object.fromEntries(
      Object.entries(arg).map(([key, value]) => [camelToKebabCaseStr(key), camelToKebabCase(value)])
    );
  }
  return arg;
};
