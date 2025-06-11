import classNames from 'classnames';
import { DishCounter } from '../counters/dish-counter';

import styles from './menu-item.module.css';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';

export const MenuItem = ({
  name,
  price,
  ingredients,
  showDishCounter = false,
}) => {
  const { theme } = useContext(ThemeContext);
  const themeClassNames = {
    [styles.blue]: theme === BLUE,
    [styles.green]: theme === GREEN,
  };

  return (
    <div className={classNames(styles.menuItem, themeClassNames)}>
      <div className={styles.menuContent}>
        <h4>{name}</h4>
        <p>{ingredients.join(', ')}</p>
        <p
          className={classNames(styles.price, themeClassNames)}
        >{`${price} BYN`}</p>
      </div>
      {showDishCounter && (
        <div className={styles.dishCounter}>
          <DishCounter />
        </div>
      )}
    </div>
  );
};
