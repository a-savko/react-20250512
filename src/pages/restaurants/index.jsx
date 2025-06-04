import { useState } from 'react';
import { Restaurant } from '../../components/restaurant-item/restaurant-item';
import { TabButton } from '../../components/buttons/tab-button/tab-button';
import { NoData } from '../../components/common/no-data';

import styles from './restaurants.module.css';

export const Restaurants = ({ restaurants }) => {
  const defaultTabId = restaurants[0]?.id;
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  if (!restaurants || restaurants.length < 1) {
    return <NoData />;
  }
  const activeRestaurant = restaurants.find(({ id }) => id === activeTabId);

  return (
    <>
      <div className={styles.restaurants}>
        <div className={styles.tabTitles}>
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
            id={activeRestaurant.id}
            menu={activeRestaurant.menu}
            reviews={activeRestaurant.reviews}
          />
        </div>
      </div>
    </>
  );
};
