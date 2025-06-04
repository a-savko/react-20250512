import { Rating } from '../rating/rating';

import styles from './review-item.module.css';
import globalStyles from '../app/common.module.css';

export const Review = ({ user, text, rating }) => {
  return (
    <div className={styles.review}>
      <h4>{user}</h4>
      <div className={globalStyles.row}>{text}</div>
      <div className={globalStyles.row}>
        <Rating rating={rating} />
      </div>
    </div>
  );
};
