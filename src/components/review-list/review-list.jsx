import { NoData } from '@/components/common/no-data';
import { ReviewForm } from '@/components/review-form/review-form';

import styles from './review-list.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/components/contexts/theme-context/theme-context';
import classNames from 'classnames';
import { ReviewContainer } from '@/components/review-item/review-item-container';
import { useAddReviewMutation, useUpdateReviewMutation } from '@/redux/api';
import { useParams } from 'next/navigation';
import { ReviewContext } from '@/components/contexts/review-context/review-context';

export const Reviews = ({ reviews, showReviewForm = false }) => {
  const { theme } = useContext(ThemeContext);
  const { id: restaurantId } = useParams();
  const { editReview, setEditReview } = useContext(ReviewContext);

  const [addReviewMutation, { isLoading: isAdding }] = useAddReviewMutation();
  const [updateReviewMutation, { isLoading: isUpdating }] =
    useUpdateReviewMutation();

  const isLoading = isAdding || isUpdating;

  const handleSubmitForm = (review) => {
    if (editReview?.id) {
      updateReviewMutation({
        reviewId: editReview.id,
        review: {
          text: review.text,
          rating: review.rating,
          userId: review.userId,
        },
      });
      // clear the editing state after updating
      setEditReview(null);
    } else {
      addReviewMutation({ restaurantId, review });
    }
  };

  return (
    <div className={classNames(styles.reviews, theme)}>
      {reviews?.length > 0 ? (
        <div>
          {reviews.map((review) => (
            <ReviewContainer key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
      {showReviewForm && (
        <ReviewForm
          onSubmitForm={handleSubmitForm}
          showFormLoader={isLoading}
        />
      )}
    </div>
  );
};
