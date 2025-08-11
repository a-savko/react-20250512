import classNames from 'classnames';
import { DishCounter } from '@/components/counters/dish-counter/dish-counter';

import styles from './dish.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/components/contexts/theme-context/theme-context';

export const Dish = ({
  id,
  name,
  price,
  ingredients = [],
  restaurantName,
  showDishCounter = false,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h3>{restaurantName}</h3>
      <div className={classNames(styles.dish, theme)}>
        <div className={styles.menuContent}>
          <h4>{name}</h4>
          <p>{ingredients.join(', ')}</p>
          <p className={styles.price}>{`${price} BYN`}</p>
        </div>
        {showDishCounter && (
          <div className={styles.dishCounter}>
            <DishCounter dishId={id} dishName={name} />
          </div>
        )}
      </div>
    </>
  );
};
