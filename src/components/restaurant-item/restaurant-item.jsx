import { Menu } from '../menu-list/menu-list';
import { Reviews } from '../review-list/review-list';

export const Restaurant = ({ menu, reviews }) => {
  return (
    <>
      <Menu menuItems={menu} />
      <Reviews reviews={reviews} />
    </>
  );
};
