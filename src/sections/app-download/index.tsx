import clsx from 'clsx';
import styles from './styles/app-download.module.scss';
import Image from 'next/image';
import qrCodeImg from '@public/images/qr-code.png';
import playStoreImg from '@public/images/play-store-logo.png';
import appStoreImg from '@public/images/app-store-logo.png';

type Props = { className?: string };

export function AppDownload({ className }: Props) {
  return (
    <div className={clsx(className, styles['app-download'])}>
      <Image className={styles['app-download__qrcode']} alt="qr code" src={qrCodeImg} width={280} height={280}/>
      <div className={styles['app-download__container-1']}>
        <h2 className={styles['app-download__title']}>Scan QR code for more</h2>
        <span className={styles['app-download__text']}>
          Now you can download the official musify app.
        </span>
        <div className={styles['app-download__container-2']}>
          <Image
            className={styles['app-download__play-store']}
            alt="play store"
            src={playStoreImg}
            width={222}
            height={67}
          />
          <Image className={styles['app-download__app-store']} alt="app store" src={appStoreImg} 
          width={212}
          height={73}/>
        </div>
      </div>
    </div>
  );
}
