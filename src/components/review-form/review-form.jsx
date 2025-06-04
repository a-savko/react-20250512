import { Rating } from '../rating/rating';
import { useReviewForm } from './use-review-form';
import { ClearButton } from '../buttons/clear-button/clear-button';

import styles from './review-form.module.css';
import globalStyles from '../app/common.module.css';

export const ReviewForm = ({ restaurantId }) => {
  const { reviewForm, onTextChange, onRatingChange, clear, MAX_RATING } =
    useReviewForm(restaurantId);

  return (
    <div className={styles.reviewForm}>
      <h4>Leave your review</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className={globalStyles.row}>
          <textarea
            name='text'
            value={reviewForm.text}
            onChange={(event) => {
              onTextChange(event.target.value);
            }}
          />
        </div>
        <div className={globalStyles.row}>
          <span>Rating:</span>
          <Rating
            rating={reviewForm.rating}
            maxRating={MAX_RATING}
            onClick={(_, rating) => {
              onRatingChange(rating);
            }}
          />
        </div>
        <div className={globalStyles.row}>
          <ClearButton onClick={clear}>Clear</ClearButton>
        </div>
      </form>
    </div>
  );
};
