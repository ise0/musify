import clsx from 'clsx';
import styles from './styles/btn.module.scss';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  icon?: ReactNode;
  text: string;
  variant?: 'filled' | 'outlined';
  size?: 's' | 'm';
  onClick?: () => void;
};

export function Btn({ className, icon, text, variant = 'filled', size = 'm', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(className, styles['btn'], {
        [styles['btn_style_filled']]: variant === 'filled',
        [styles['btn_style_outlined']]: variant === 'outlined',
        [styles['btn_size_s']]: size === 's',
        [styles['btn_size_m']]: size === 'm',
      })}
    >
      <div className={styles['btn__inner']}>
        {icon && <div className={styles['btn__icon']}>{icon}</div>}
        {text}
      </div>
    </button>
  );
}
