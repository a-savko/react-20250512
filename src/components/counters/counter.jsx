import { Button } from '../buttons/default/button';

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <span>
      <Button onClick={onDecrement}>-</Button>
      <span>{count}</span>
      <Button onClick={onIncrement}>+</Button>
    </span>
  );
};
