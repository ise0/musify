import Image from 'next/image';
import styles from './styles/accessories.module.scss';
import clsx from 'clsx';
import accessoryImg1 from '@public/images/accessories-1.png';
import accessoryImg2 from '@public/images/accessories-2.png';
import accessoryImg3 from '@public/images/accessories-3.png';
import accessoryImg4 from '@public/images/accessories-4.png';

type Props = { className?: string };

export function Accessories({ className }: Props) {
  return (
    <div className={clsx(className, styles['accessories'])}>
      <h2 className={styles['accessories__title']}>Try our other Accessories</h2>
      <ul className={styles['accessories__list']}>
        <li className={styles['accessories__item']}>
          <Image
            className={styles['accessories__img']}
            alt="product"
            src={accessoryImg1}
            width={576}
            height={320}
          />
        </li>
        <li className={styles['accessories__item']}>
          <Image
            className={styles['accessories__img']}
            alt="product"
            src={accessoryImg2}
            width={576}
            height={320}
          />
        </li>
        <li className={styles['accessories__item']}>
          <Image
            className={styles['accessories__img']}
            alt="product"
            src={accessoryImg3}
            width={576}
            height={320}
          />
        </li>
        <li className={styles['accessories__item']}>
          <Image
            className={styles['accessories__img']}
            alt="product"
            src={accessoryImg4}
            width={576}
            height={320}
          />
        </li>
      </ul>
    </div>
  );
}
