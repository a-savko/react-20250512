import { Rating } from '@/components/rating/rating';
import { useReviewForm } from './use-review-form';
import { ClearButton } from '@/components/buttons/clear-button/clear-button';
import { Button } from '@/components/buttons/default/button';

import styles from './review-form.module.css';
import globalStyles from '@/styles/common.module.css';
import { useContext } from 'react';
import { AccountContext } from '@/components/contexts/account-context/account-context';
import { useEffect } from 'react';
import { Loading } from '@/components/loading/loading';
import { LOADING_VARIANTS } from '@/components/loading/loading-constants';
import { ReviewContext } from '@/components/contexts/review-context/review-context';

export const ReviewForm = ({
  onSubmitForm,
  isSubmitDisabled,
  showFormLoader = false,
}) => {
  const {
    reviewForm,
    onUserIdChange,
    onTextChange,
    onRatingChange,
    clear,
    setForm,
    MAX_RATING,
  } = useReviewForm();
  const { user } = useContext(AccountContext);
  const { id: userId, name: userName } = user;
  const { editReview, setEditReview } = useContext(ReviewContext);
  const isEditMode = Boolean(editReview?.id);

  useEffect(() => {
    if (userId !== reviewForm.userId) {
      onUserIdChange(userId);
    }
  }, [onUserIdChange, reviewForm.userId, userId]);

  useEffect(() => {
    if (isEditMode && editReview.id != reviewForm?.id) {
      setForm(editReview);
    }
  }, [isEditMode, editReview, reviewForm?.id, setForm]);

  const handleFormSubmit = () => {
    onSubmitForm(reviewForm);
    clear();
  };

  const handleCancel = () => {
    setEditReview(null);
    clear();
  };

  return (
    <div className={styles.reviewForm}>
      <h4>{isEditMode ? 'Edit your review' : 'Leave your review'}</h4>
      {showFormLoader ? (
        <Loading variant={LOADING_VARIANTS.Default} />
      ) : (
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
            <ClearButton onClick={handleCancel}>
              {isEditMode ? 'Cancel' : 'Clear'}
            </ClearButton>
            <Button
              onClick={handleFormSubmit}
              disabled={isSubmitDisabled || showFormLoader}
            >
              {isEditMode ? 'Update' : 'Submit'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
