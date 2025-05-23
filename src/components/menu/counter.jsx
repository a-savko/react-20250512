import { useCount } from '../../hooks/use-count';

export const Counter = () => {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <span>
      <button onClick={onDecrement}>-</button>
      {count}
      <button onClick={onIncrement}>+</button>
    </span>
  );
};
