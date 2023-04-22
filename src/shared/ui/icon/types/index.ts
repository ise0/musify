import { ThemeColors } from '@src/shared/theme';

export type IconProps<ExtraColors extends string = never> = {
  color?: keyof ThemeColors | ExtraColors;
  customColor?: string;
  size?: 's' | 'm' | 'l' | 'xl';
  customSize?: number;
  className?: string;
};
