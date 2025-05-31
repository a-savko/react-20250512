import { Menu } from '../menu';
import { Reviews } from '../reviews';

export const Restaurant = ({ id, menu, reviews }) => {
  return (
    <>
      <Menu menuItems={menu} />
      <Reviews restaurantId={id} reviews={reviews} />
    </>
  );
};
