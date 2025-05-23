import { Restaurant } from './restaurant';
import { Tabs } from '../common/tab';

export const Restaurants = ({ restaurants }) => {
  return (
    <div className='restaurants'>
      <Tabs>
        {restaurants.map(({ id, name, menu, reviews }) => {
          return {
            id,
            title: name,
            content: <Restaurant menu={menu} reviews={reviews} />,
          };
        })}
      </Tabs>
    </div>
  );
};
