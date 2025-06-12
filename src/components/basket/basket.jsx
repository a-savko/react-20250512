import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../redux/entities/basket/slice';
import styles from './basket.module.css';
import { ReactSVG } from 'react-svg';
import foodDeliverySVG from '../../../public/food-delivery-left.svg';
import classNames from 'classnames';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import { BasketItem } from '../basket-item/basket-item';

export const Basket = () => {
  const { theme } = useContext(ThemeContext);
  const [isFolded, setIsFolded] = useState(false);

  const basketItems = useSelector(selectBasketItems);
  const totalCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={styles.basket}
      onMouseEnter={() => setIsFolded(true)}
      onMouseLeave={() => setIsFolded(false)}
    >
      {!isFolded && (
        <div className={styles.collapsed}>
          <ReactSVG
            src={foodDeliverySVG}
            className={classNames(styles.basketIcon, {
              [styles.blue]: theme === BLUE,
              [styles.green]: theme === GREEN,
            })}
          />
          <span className={styles.totalCount}>{totalCount}</span>
        </div>
      )}
      {isFolded && (
        <div
          className={classNames(styles.expanded, {
            [styles.blue]: theme === BLUE,
            [styles.green]: theme === GREEN,
          })}
        >
          <h3 className={styles.title}>Basket Summary</h3>
          {!basketItems?.length ? (
            <div className={styles.emptyBasket}>Basket is empty</div>
          ) : (
            <div className={styles.basketItems}>
              {basketItems.map(({ id }) => (
                <BasketItem key={id} dishId={id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
