import classNames from 'classnames';
import { DishCounter } from '../counters/dish-counter/dish-counter';

import styles from './menu-item.module.css';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { LinkButton } from '../buttons/link-button/link-button';
import {
  ITEM_ID_ROUTE_TEMPLATE,
  ROUTE_PATHS,
} from '../../constants/router-constants';

export const MenuItem = ({
  id,
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
  const dishDetailsRoutePath = ROUTE_PATHS.DishDetails.replace(
    ITEM_ID_ROUTE_TEMPLATE,
    id
  );
  return (
    <div className={classNames(styles.menuItem, themeClassNames)}>
      <div className={styles.menuContent}>
        <h4>
          <LinkButton to={dishDetailsRoutePath} title={name} />
        </h4>
        <p>{ingredients.join(', ')}</p>
        <p
          className={classNames(styles.price, themeClassNames)}
        >{`${price} BYN`}</p>
      </div>
      {showDishCounter && (
        <div className={styles.dishCounter}>
          <DishCounter dishId={id} />
        </div>
      )}
    </div>
  );
};
