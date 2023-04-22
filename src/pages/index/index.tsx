import { useTheme } from '@src/shared/theme';
import styles from './styles/page.module.scss';
import { Header } from '@src/sections/header';
import { Banner } from '@src/sections/banner';
import { Trends } from '@src/sections/trends';
import { Buy } from '@src/sections/buy';
import { Offer } from '@src/sections/offer';
import { Accessories } from '@src/sections/accessories';
import { NewArrivals } from '@src/sections/new-arrivals';
import { AppDownload } from '@src/sections/app-download';
import { Footer } from '@src/sections/footer';
import clsx from 'clsx';

export function Page() {
  const { theme } = useTheme();

  return (
    <>
      <style>{`:root {${theme.cssVars}}`}</style>
      <div className={clsx(theme.className, styles['page'])} id="page">
        <div className={styles['page__container-1']}>
          <div className={styles['page__container-2']}>
            <Header className={styles['page__header']} />
            <Banner className={styles['page__banner']} />
          </div>
          <Trends className={styles['page__trends']} />
        </div>
        <Buy className={styles['page__buy']} />
        <Offer className={styles['page__offer']} />
        <Accessories className={styles['page__accessories']} />
        <NewArrivals className={styles['page__new-arrivals']} />
        <AppDownload className={styles['page__app-download']} />
        <Footer className={styles['page__footer']} />
      </div>
    </>
  );
}
