import { DishCounter } from '../restaurants/dish-counter';

export const MenuItem = ({ name }) => {
  return (
    <li>
      {name} <DishCounter />
    </li>
  );
};
