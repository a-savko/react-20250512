export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <span>
      <button onClick={onDecrement}>-</button>
      {count}
      <button onClick={onIncrement}>+</button>
    </span>
  );
};
