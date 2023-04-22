import clsx from 'clsx';
import styles from './styles/product-card.module.scss';
import Image from 'next/image';

type Product = {
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
};

type Props = { className?: string; product: Product };

export function ProductCardMini({ className, product }: Props) {
  return (
    <div className={clsx(className, styles['product-card'])}>
      <div className={styles['product-card__inner']}>
        <Image
          className={styles['product-card__image']}
          alt="product image"
          src={product.image}
          width={320}
          height={185}
        />
        <h3 className={styles['product-card__name']}>{product.name}</h3>
        <span className={styles['product-card__price']}>{product.price}</span>
        <span className={styles['product-card__old-price']}>{product.oldPrice}</span>
      </div>
    </div>
  );
}
