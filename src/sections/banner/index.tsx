import clsx from 'clsx';
import styles from './styles/banner.module.scss';
import { Btn } from '@src/shared/ui/btn';
import { ArrowIcon, CartIcon } from '@src/shared/ui/icon';
import { ProductCardMini } from '@src/widgets/product-card-mini';

type Props = { className?: string };

const products = [
  {
    image: '/images/Headphone-Hasnain.png',
    name: 'Wireless Headphones',
    price: '$120',
    oldPrice: '$185',
  },
  {
    image: '/images/Headphone-Hasnain.png',
    name: 'Wireless Headphones',
    price: '$120',
    oldPrice: '$185',
  },
  {
    image: '/images/Headphone-Hasnain.png',
    name: 'Wireless Headphones',
    price: '$120',
    oldPrice: '$185',
  },
];

export function Banner({ className }: Props) {
  return (
    <div className={clsx(className, styles['banner'])}>
      <div className={styles['banner__container-1']}>
        <h2 className={styles['banner__title']}>
          Let’s Dive in <span className={styles['banner__title-highlight']}>Music</span> World
        </h2>
        <p className={styles['banner__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus
          imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse fermentum{' '}
        </p>
        <div className={styles['banner__container-2']}>
          <Btn className={styles['banner__btn']} text="Shop now" />
          <Btn
            className={styles['banner__btn']}
            text="Add to cart"
            icon={<CartIcon color="primary" />}
            variant="outlined"
          />
        </div>
      </div>
      <div className={styles['banner__container-3']}>
        <button className={styles['banner__scroll-btn']} aria-label="scroll down">
          <ArrowIcon size="l" />
        </button>
        <ul className={styles['banner__products']}>
          {products.map((el, i) => (
            <li className={styles['banner__products-item']} key={i}>
              <ProductCardMini
                product={{
                  image: '/images/Headphone-Hasnain.png',
                  name: 'Wireless Headphones',
                  price: '$120',
                  oldPrice: '$185',
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
