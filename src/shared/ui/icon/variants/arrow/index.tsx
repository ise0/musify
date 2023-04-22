import { useTheme } from '@src/shared/theme';
import { IconProps } from '../../types';
import { IconSize } from '../../icon-size';
import { iconConfig } from '../../config';

export function ArrowIcon({
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
      viewBox="0 0 12 44"
    >
      <path d="m6 43.333 5.774-10H.226l5.774 10ZM5 .667v33.666h2V.667H5Z" />
    </svg>
  );
}
