import { Menu } from '../menu';
import { Reviews } from '../reviews';

export const Restaurants = ({ restaurants }) => {
  return (
    <div className='restaurants'>
      {restaurants.map(({ id, name, menu, reviews }) => {
        return (
          <div className='restaurant' key={id}>
            <h2>{name}</h2>
            <Menu menuItems={menu}></Menu>
            <Reviews reviews={reviews}></Reviews>
          </div>
        );
      })}
    </div>
  );
};
