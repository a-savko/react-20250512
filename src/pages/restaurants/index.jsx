import { useContext, useState } from 'react';
import { Restaurant } from '../../components/restaurant-item/restaurant-item';
import { TabButton } from '../../components/buttons/tab-button/tab-button';
import { NoData } from '../../components/common/no-data';

import styles from './restaurants.module.css';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context';
import classNames from 'classnames';
import {
  BLUE,
  GREEN,
} from '../../components/contexts/theme-context/theme-constants';

export const Restaurants = ({ restaurants }) => {
  const defaultTabId = restaurants[0]?.id;
  const [activeTabId, setActiveTabId] = useState(defaultTabId);
  const { theme } = useContext(ThemeContext);

  if (!restaurants?.length || restaurants.length < 1) {
    return <NoData />;
  }
  const activeRestaurant = restaurants.find(({ id }) => id === activeTabId);

  return (
    <>
      <div className={styles.restaurants}>
        <div
          className={classNames(styles.tabTitles, {
            [styles.blue]: theme === BLUE,
            [styles.green]: theme === GREEN,
          })}
        >
          {restaurants.map(({ id, name }) => {
            return (
              <TabButton
                key={id}
                title={name}
                isActive={id === activeTabId}
                onClick={() => setActiveTabId(id)}
              />
            );
          })}
        </div>

        <div className={styles.tabContent}>
          <Restaurant
            key={activeRestaurant.id}
            menu={activeRestaurant.menu}
            reviews={activeRestaurant.reviews}
          />
        </div>
      </div>
    </>
  );
};
