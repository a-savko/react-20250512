import { Rating } from '../rating/rating';
import { useReviewForm } from './use-review-form';
import { ClearButton } from '../buttons/clear-button/clear-button';
import { Button } from '../buttons/default/button';

import styles from './review-form.module.css';
import globalStyles from '../../app/common.module.css';
import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { useEffect } from 'react';

export const ReviewForm = ({ onSubmitForm, isSubmitDisabled }) => {
  const {
    reviewForm,
    onUserIdChange,
    onTextChange,
    onRatingChange,
    clear,
    MAX_RATING,
  } = useReviewForm();
  const { user } = useContext(AccountContext);
  const { id: userId, name: userName } = user;

  useEffect(() => {
    if (userId !== reviewForm.userId) {
      onUserIdChange(userId);
    }
  }, [onUserIdChange, reviewForm.userId, userId]);

  const handleFormSubmit = () => {
    onSubmitForm(reviewForm);
    clear();
  };

  return (
    <div className={styles.reviewForm}>
      <h4>Leave your review</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className={globalStyles.row}>
          <span>{userName}</span>
        </div>
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
          <Button onClick={handleFormSubmit} disabled={isSubmitDisabled}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
