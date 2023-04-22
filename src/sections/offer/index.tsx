import Image from 'next/image';
import styles from './styles/offer.module.scss';
import { Btn } from '@src/shared/ui/btn';
import headphonesImg from '@public/images/Headphones-2.png';
import clsx from 'clsx';

type Props = { className?: string };

export function Offer({ className }: Props) {
  return (
    <div className={clsx(className, styles['offer'])}>
      <div className={styles['offer__img']}>
        <div className={styles['offer__badge']}>
          20% <br /> off
        </div>
        <Image className={styles['offer__img-inner']} alt="product" src={headphonesImg} />
      </div>
      <div className={styles['offer__container-1']}>
        <h2 className={styles['offer__title']}>Exclusive Offer</h2>
        <span className={styles['offer__end-text']}>offer ends in</span>
        <div className={styles['offer__timer']}>
          <div className={styles['offer__timer-item']}>
            <div className={styles['offer__timer-number']}>02</div>
            <div className={styles['offer__timer-text']}>Hour</div>
          </div>
          <div className={styles['offer__timer-item']}>
            <div className={styles['offer__timer-number']}>38</div>
            <div className={styles['offer__timer-text']}>Min</div>
          </div>
          <div className={styles['offer__timer-item']}>
            <div className={styles['offer__timer-number']}>49</div>
            <div className={styles['offer__timer-text']}>Sec</div>
          </div>
        </div>
        <div className={styles['offer__container-2']}>
          <Btn className={styles['offer__btn']} size="m" variant="outlined" text="View details" />
          <Btn className={styles['offer__btn']} size="m" text="Shop now" />
        </div>
      </div>
    </div>
  );
}
