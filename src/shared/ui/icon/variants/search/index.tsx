import { useTheme } from '@src/shared/theme';
import { IconProps } from '../../types';
import { IconSize } from '../../icon-size';
import { iconConfig } from '../../config';

export function SearchIcon({
  color = iconConfig.defaulColor,
  customColor,
  size = iconConfig.defaultSize,
  customSize,
  className,
}: IconProps) {
  const {
    theme: { colors },
  } = useTheme();

  const iconColor = customColor || colors[color];
  const iconSize = customSize ? { width: customSize, height: customSize } : IconSize[size];
  return (
    <svg
      className={className}
      {...iconSize}
      stroke={iconColor}
      fill={iconColor}
      viewBox="-2 -3 26 26"
    >
      <path d="M8.19546398,0 C12.7216937,0 16.390928,3.61950128 16.390928,8.08438239 C16.390928,10.0960164 15.6461041,11.9360453 14.4136555,13.3507563 L19.8015213,18.8243429 C20.0717775,19.0989162 20.0652194,19.5376183 19.7868733,19.8042115 C19.5085273,20.0708046 19.0637973,20.0643354 18.7935411,19.7897621 L13.4110382,14.3206504 C11.9940161,15.4751548 10.1768537,16.1687648 8.19546398,16.1687648 C3.6692342,16.1687648 0,12.5492635 0,8.08438239 C0,3.61950128 3.6692342,0 8.19546398,0 Z M8.19546398,1.38589412 C4.44515931,1.38589412 1.40493668,4.38490947 1.40493668,8.08438239 C1.40493668,11.7838553 4.44515931,14.7828707 8.19546398,14.7828707 C11.9457686,14.7828707 14.9859913,11.7838553 14.9859913,8.08438239 C14.9859913,4.38490947 11.9457686,1.38589412 8.19546398,1.38589412 Z" />
    </svg>
  );
}
