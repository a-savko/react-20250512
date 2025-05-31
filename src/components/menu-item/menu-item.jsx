import { DishCounter } from '../counters/dish-counter';

export const MenuItem = ({ name }) => {
  return (
    <li>
      {name} <DishCounter />
    </li>
  );
};
