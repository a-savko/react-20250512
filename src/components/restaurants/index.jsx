import { useState } from 'react';
import { Restaurant } from './restaurant';
import { TabButton } from './tab-button';

export const Restaurants = ({ restaurants }) => {
  const defaultTabId = restaurants[0]?.id;
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  if (!restaurants || !restaurants.length) {
    return <>no data</>;
  }
  const activeRestaurant = restaurants.find(({ id }) => id === activeTabId);

  return (
    <div className='restaurants'>
      <div className='tab-titles'>
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

      <div className='tab-content'>
        <Restaurant
          id={activeRestaurant.id}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      </div>
    </div>
  );
};
