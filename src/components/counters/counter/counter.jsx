import styles from './counter.module.css';
import { Button } from '@/components/buttons/default/button';

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counter}>
      <Button onClick={onDecrement}>-</Button>
      <span>{count}</span>
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};
