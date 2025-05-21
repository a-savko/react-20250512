import { Menu } from '../menu';
import { Reviews } from '../reviews';

export const Restaurant = ({ menu, reviews }) => {
  return (
    <>
      <Menu menuItems={menu}></Menu>
      <Reviews reviews={reviews}></Reviews>
    </>
  );
};
