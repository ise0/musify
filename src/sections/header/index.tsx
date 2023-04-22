import clsx from 'clsx';
import styles from './styles/header.module.scss';
import { CartIcon, SearchIcon } from '@src/shared/ui/icon';
import { Btn } from '@src/shared/ui/btn';
import Link from 'next/link';
import { useTheme } from '@src/shared/theme';
import { useRef, useState } from 'react';
import { Popup } from '@src/shared/ui/popup';
import { ThemeCustomizer } from '@src/widgets/theme-customizer';

type Props = { className?: string };

const navItems = ['Home', 'Explore', 'Contact Us'];

export function Header({ className }: Props) {
  const { theme, setTheme } = useTheme();
  const [showCustomizer, setShowCustomizer] = useState(true);
  const themeSwitcherRef = useRef(null);

  return (
    <div className={clsx(className, styles['header'])}>
      <div className={styles['header__logo']} />
      <nav className={styles['header__nav']}>
        <ul className={styles['header__nav-list']}>
          {navItems.map((el) => (
            <li className={styles['header__nav-item']} key={el}>
              <Link className={styles['header__nav-link']} href="/">
                {el}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles['header__theme-switcher']}
        ref={themeSwitcherRef}
        aria-label="change theme"
        onClick={() => {
          setTheme(theme.type === 'dark' ? 'light' : 'dark');
          setShowCustomizer(true);
        }}
      />
      {showCustomizer && (
        <Popup target={themeSwitcherRef} relative="page" offset={8}>
          <ThemeCustomizer onClose={() => setShowCustomizer(false)} />
        </Popup>
      )}
      <button className={styles['header__search']}>
        <SearchIcon size="l" />
      </button>
      <button className={styles['header__cart']}>
        <CartIcon size="l" />
      </button>
      <Btn className={styles['header__login-btn']} text="Login" size="s" variant="outlined" />
    </div>
  );
}
