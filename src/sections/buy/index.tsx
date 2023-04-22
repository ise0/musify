import clsx from 'clsx';
import styles from './styles/buy.module.scss';
import { CustomerServiceIcon, DeliveryTruckIcon, SharpCheckIcon } from '@src/shared/ui/icon';

type Props = { className?: string };

export function Buy({ className }: Props) {
  return (
    <div className={clsx(className, styles['buy'])}>
      <h3 className={styles['buy__title']}>Why buy directly from Musify?</h3>
      <ul className={styles['buy__list']}>
        <li className={styles['buy__item']}>
          <DeliveryTruckIcon
            className={styles['buy__item-icon']}
            customSize={68}
            color="onSecondary"
          />
          Free delivery
        </li>
        <li className={styles['buy__item']}>
          <SharpCheckIcon
            className={styles['buy__item-icon']}
            customSize={56}
            color="onSecondary"
          />
          Verified Products
        </li>
        <li className={styles['buy__item']}>
          <CustomerServiceIcon
            className={styles['buy__item-icon']}
            customSize={54}
            color="onSecondary"
          />{' '}
          24/7 Customer support
        </li>
      </ul>
    </div>
  );
}
