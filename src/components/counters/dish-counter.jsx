import { useCount } from './use-count';
import { Counter } from './counter';

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const DishCounter = () => {
  const { count, onDecrement, onIncrement } = useCount(MIN_COUNT, MAX_COUNT);

  return (
    <span>
      <Counter
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </span>
  );
};
