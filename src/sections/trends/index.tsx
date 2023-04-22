import { ProductCard } from '@src/widgets/product-card';
import styles from './styles/trends.module.scss';
import clsx from 'clsx';

const products = [
  {
    image: '/images/Headphones-1.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$145',
  },
  {
    image: '/images/Headphones-1.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$145',
  },
  {
    image: '/images/Headphones-1.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$145',
  },
  {
    image: '/images/Headphones-1.png',
    features: [
      'Truely Wireless',
      'Dolby Surround Sound',
      '13hrs of playback time',
      'Made in Germany',
    ],
    name: `Wireless Headphones with Dolby Surround Sound`,
    price: '$145',
  },
];

type Props = { className?: string };

export function Trends({ className }: Props) {
  return (
    <div className={clsx(className, styles['trends'])}>
      <h2 className={styles['trends__title']}>Popular Trends</h2>
      <ul className={styles['trends__list']}>
        {products.map((el, i) => (
          <li className={styles['trends__item']} key={i}>
            <ProductCard theme="gray" size="s" product={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}
