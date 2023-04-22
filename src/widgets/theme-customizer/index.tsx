import { hexIsLight, useTheme } from '@src/shared/theme';
import styles from './styles/theme-customizer.module.scss';
import { useEffect, useState } from 'react';
import { Btn } from '@src/shared/ui/btn';
import clsx from 'clsx';

type CustomColors = {
  primary?: string;
  onPrimary?: string;
  primaryAlt?: string;
  onPrimaryAlt?: string;
  secondary?: string;
  onSecondary?: string;
  secondaryAlt?: string;
  onSecondaryAlt?: string;
};

function getOnColor(hex: string) {
  return hexIsLight(hex) ? '#000000' : '#FFFFFF';
}

type Props = { className?: string; onClose: () => void };

export function ThemeCustomizer({ className, onClose }: Props) {
  const [customColors, setCustomColors] = useState<CustomColors>({});
  const { theme, customizeTheme } = useTheme();

  useEffect(() => {
    if (Object.values(customColors).length === 0) return;
    customizeTheme(customColors);
  }, [customColors, customizeTheme]);

  return (
    <div className={clsx(className, styles['theme-customizer'])}>
      <div className={styles['theme-customizer__colors']}>
        <label className={styles['theme-customizer__color']}>
          primary color
          <input
            className={styles['theme-customizer__input']}
            type="color"
            value={customColors.primary ? customColors.primary : theme.colors.primary}
            onChange={(e) =>
              setCustomColors((el) => ({
                ...el,
                primary: e.target.value,
                onPrimary: getOnColor(e.target.value),
              }))
            }
          />
        </label>
        <label className={styles['theme-customizer__color']}>
          primary alt color
          <input
            className={styles['theme-customizer__input']}
            type="color"
            value={customColors.primaryAlt ? customColors.primaryAlt : theme.colors.primaryAlt}
            onChange={(e) =>
              setCustomColors((el) => ({
                ...el,
                primaryAlt: e.target.value,
                onPrimaryAlt: getOnColor(e.target.value),
              }))
            }
          />
        </label>
        <label className={styles['theme-customizer__color']}>
          secondary color
          <input
            className={styles['theme-customizer__input']}
            type="color"
            value={customColors.secondary ? customColors.secondary : theme.colors.secondary}
            onChange={(e) =>
              setCustomColors((el) => ({
                ...el,
                secondary: e.target.value,
                onSecondary: getOnColor(e.target.value),
              }))
            }
          />
        </label>
        <label className={styles['theme-customizer__color']}>
          secondary alt color
          <input
            className={styles['theme-customizer__input']}
            type="color"
            value={
              customColors.secondaryAlt ? customColors.secondaryAlt : theme.colors.secondaryAlt
            }
            onChange={(e) =>
              setCustomColors((el) => ({
                ...el,
                secondaryAlt: e.target.value,
                onSecondaryAlt: getOnColor(e.target.value),
              }))
            }
          />
        </label>
      </div>
      <Btn
        className={styles['theme-customizer__reset']}
        text="reset"
        onClick={() => {
          setCustomColors({});
          customizeTheme({});
        }}
      />
      <button className={styles['theme-customizer__close']} onClick={onClose} aria-label="close">
        close
      </button>
    </div>
  );
}
