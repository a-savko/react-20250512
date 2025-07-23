import classNames from 'classnames';
import { DishCounter } from '../counters/dish-counter/dish-counter';

import styles from './menu-item.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { LinkButton } from '../buttons/link-button/link-button';
import { fillRouteId, ROUTE_PATHS } from '../../constants/router-constants';

export const MenuItem = ({
  id,
  name,
  price,
  ingredients,
  showDishCounter = false,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(styles.menuItem, theme)}>
      <div className={styles.menuContent}>
        <h4>
          <LinkButton
            to={fillRouteId(ROUTE_PATHS.DishDetails, id)}
            title={name}
          />
        </h4>
        <p>{ingredients?.join(', ')}</p>
        <p className={styles.price}>{`${price} BYN`}</p>
      </div>
      {showDishCounter && (
        <div className={styles.dishCounter}>
          <DishCounter dishId={id} dishName={name} />
        </div>
      )}
    </div>
  );
};
