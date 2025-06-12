import { useContext, useState } from 'react';
import { RestaurantTabButton } from '../../components/buttons/restaurant-tab-button/restaurant-tab-button';
import { NoData } from '../../components/common/no-data';

import styles from './restaurants.module.css';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context';
import classNames from 'classnames';
import {
  BLUE,
  GREEN,
} from '../../components/contexts/theme-context/theme-constants';
import { RestaurantContainer } from '../../components/restaurant-item/restaurant-item-container';

export const Restaurants = ({ restaurantIds }) => {
  const defaultActiveId = restaurantIds[0];
  const [activeRestaurantId, setActiveRestaurantId] = useState(defaultActiveId);
  const { theme } = useContext(ThemeContext);

  if (!restaurantIds?.length) {
    return <NoData />;
  }

  return (
    <>
      <div className={styles.restaurants}>
        <div
          className={classNames(styles.tabTitles, {
            [styles.blue]: theme === BLUE,
            [styles.green]: theme === GREEN,
          })}
        >
          {restaurantIds.map((id) => {
            return (
              <RestaurantTabButton
                key={id}
                id={id}
                isActive={id === activeRestaurantId}
                onClick={() => setActiveRestaurantId(id)}
              />
            );
          })}
        </div>

        <div className={styles.tabContent}>
          <RestaurantContainer
            key={activeRestaurantId}
            id={activeRestaurantId}
          />
        </div>
      </div>
    </>
  );
};
