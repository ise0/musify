import { ProductCard } from '@src/widgets/product-card';
import styles from './styles/new-arrivals.module.scss';
import clsx from 'clsx';

const products = [
  {
    image: '/images/arr-1.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$149.80',
  },
  {
    image: '/images/arr-2.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$149.80',
  },
  {
    image: '/images/arr-3.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$149.80',
  },
];

type Props = { className?: string };

export function NewArrivals({ className }: Props) {
  return (
    <div className={clsx(className, styles['new-arrivals'])}>
      <h2 className={styles['new-arrivals__title']}>New Arrivals</h2>
      <ul className={styles['new-arrivals__list']}>
        {products.map((el, i) => (
          <li className={styles['new-arrivals__item']} key={i}>
            <ProductCard theme="secondary" size="m" product={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}
