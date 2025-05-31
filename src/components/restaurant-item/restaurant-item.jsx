import { Menu } from '../menu-list/menu-list';
import { Reviews } from '../review-list/review-list';

export const Restaurant = ({ id, menu, reviews }) => {
  return (
    <>
      <Menu menuItems={menu} />
      <Reviews restaurantId={id} reviews={reviews} />
    </>
  );
};
