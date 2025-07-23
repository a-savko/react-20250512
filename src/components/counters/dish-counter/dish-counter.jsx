import { Counter } from '../counter/counter';
import { useDishCount } from './use-dish-count';

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const DishCounter = ({ dishId, dishName }) => {
  const { count, onDecrement, onIncrement } = useDishCount(
    dishId,
    dishName,
    MIN_COUNT,
    MAX_COUNT
  );

  return (
    <Counter
      count={count}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  );
};
