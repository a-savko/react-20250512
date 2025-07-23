import styles from './basket-item.module.css';

export const BasketItem = ({ dishId, dishName, quantity }) => {
  return (
    <div key={dishId} className={styles.basketItem}>
      <span className={styles.title}>{dishName}</span>
      <span className={styles.quantity}>x{quantity}</span>
    </div>
  );
};
