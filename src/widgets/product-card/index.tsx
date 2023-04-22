import clsx from 'clsx';
import styles from './styles/product-card.module.scss';
import Image from 'next/image';
import { Btn } from '@src/shared/ui/btn';
import { CartIcon } from '@src/shared/ui/icon';

type Product = {
  image: string;
  name: string;
  features: string[];
  price: string;
  oldPrice?: string;
};

type Props = {
  className?: string;
  product: Product;
  size?: 's' | 'm';
  theme?: 'gray' | 'secondary';
};

export function ProductCard({ className, product, size = 's', theme = 'secondary' }: Props) {
  return (
    <div
      className={clsx(className, styles['product-card'], {
        [styles['product-card_theme_secondary']]: theme === 'secondary',
        [styles['product-card_theme_gray']]: theme === 'gray',
        [styles['product-card_size_s']]: size === 's',
        [styles['product-card_size_m']]: size === 'm',
      })}
    >
      <Image
        className={styles['product-card__image']}
        alt="product image"
        src={product.image}
        width={size === 's' ? 300 : 400}
        height={size === 's' ? 264 : 332}
      />
      <div className={styles['product-card__container-1']}>
        <h3 className={styles['product-card__name']}>{product.name}</h3>
        <ul className={styles['product-card__features']}>
          {product.features.map((el) => (
            <li className={styles['product-card__feature']} key={el}>
              {el}
            </li>
          ))}
        </ul>
        <div className={styles['product-card__price']}>{product.price}</div>
        <div className={styles['product-card__container-2']}>
          <Btn
            className={styles['product-card__btn']}
            text="Add to cart"
            icon={<CartIcon color="primary" size={size} />}
            variant="outlined"
            size={size}
          />
          <Btn className={styles['product-card__btn']} text="Buy now" size={size} />
        </div>
      </div>
    </div>
  );
}
