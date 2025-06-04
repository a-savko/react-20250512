import { NoData } from '../common/no-data';
import { Review } from '../review-item/review-item';
import { ReviewForm } from '../review-form/review-form';

import styles from './review-list.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      {reviews && reviews.length > 0 ? (
        <div>
          {reviews.map(({ id, user, text, rating }) => (
            <Review key={id} user={user} text={text} rating={rating} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
      <ReviewForm />
    </div>
  );
};
