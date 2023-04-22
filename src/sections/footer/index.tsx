import clsx from 'clsx';
import styles from './styles/footer.module.scss';
import { Btn } from '@src/shared/ui/btn';

type Props = { className?: string };

const shopLinks = [
  'Wireless',
  'Headphone',
  'Gaming',
  'Speakers',
  'Soundbars',
  'professional',
  'Offer Zone',
];

const supportLinks = [
  'Order Status',
  'Bulk Purchase Program',
  'Buy Authentic',
  'Product Support',
  'Shipping & Delivery policy',
  'Cancellation & Refund Policy',
  'Service Center',
  'Brand Stores',
];

const AboutUs = [
  'Harman Corporate',
  'Privacy Policy',
  'Terms of Use',
  'Why Buy Direct',
  'JBL Sound Partners',
];

export function Footer({ className }: Props) {
  return (
    <div className={clsx(className, styles['footer'])}>
      <div className={clsx(className, styles['footer__inner'])}>
        <div className={styles['footer__logo']}>jj</div>

        <div className={styles['footer__container-column-1']}>
          <div className={styles['footer__container-shop']}>
            <div className={styles['footer__links']}>
              <h4 className={styles['footer__links-title']}>Shop</h4>
              <ul className={styles['footer__links-list']}>
                {shopLinks.map((el, i) => (
                  <li className={styles['footer__links-item']} key={i}>
                    <a className={styles['footer__link']} href="/">
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['footer__country']}>
              <div className={styles['footer__country-title']}>Country</div>
              <p className={styles['footer__country-text']}>India</p>
            </div>
          </div>

          <div className={clsx(styles['footer__links'], styles['footer__container-support'])}>
            <h4 className={styles['footer__links-title']}>Support</h4>
            <ul className={styles['footer__links-list']}>
              {supportLinks.map((el, i) => (
                <li className={styles['footer__links-item']} key={i}>
                  <a className={styles['footer__link']} href="/">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer__subscribe']}>
            <h4 className={styles['footer__subscribe-title']}>Subscribe to our Newsletter</h4>
            <input className={styles['footer__subscribe-input']} placeholder="Enter your mail id" />
            <Btn className={styles['footer__subscribe-btn']} size="m" text="Subscribe" />
          </div>
        </div>

        <div className={styles['footer__container-column-2']}>
          <div className={styles['footer__links']}>
            <h4 className={styles['footer__links-title']}>About us</h4>
            <ul className={styles['footer__links-list']}>
              {AboutUs.map((el, i) => (
                <li className={styles['footer__links-item']} key={i}>
                  <a className={styles['footer__link']} href="/">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer__contacts']}>
            <div className={styles['footer__contacts-title']}>Contact Us</div>
            <p className={styles['footer__contacts-text']}>
              1800-102-0525 <br /> Mon-Sun- 10AM-7PM
            </p>
          </div>

          <div className={styles['footer__manufacture']}>
            <div className={styles['footer__manufacture-title']}>Manufactured by:</div>
            <p className={styles['footer__manufacture-text']}>
              Harman International Industries, Inc. 8500, Balboa Blvd, Northridge, CA 91329,USA
            </p>
          </div>
        </div>

        <div className={styles['footer__copyright']}>© 2022.Musify.All Rights Reserved</div>
      </div>
    </div>
  );
}
