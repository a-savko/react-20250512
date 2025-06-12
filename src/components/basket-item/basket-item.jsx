import { useSelector } from 'react-redux';
import styles from './basket-item.module.css';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { selectBasketAmountById } from '../../redux/entities/basket/slice';

export const BasketItem = ({ dishId }) => {
  const amount = useSelector((state) => selectBasketAmountById(state, dishId));

  const dish = useSelector((state) => selectDishById(state, dishId));
  const { name } = dish;

  return (
    <div key={dishId} className={styles.basketItem}>
      <span className={styles.title}>{name}</span>
      <span className={styles.quantity}>x{amount}</span>
    </div>
  );
};
