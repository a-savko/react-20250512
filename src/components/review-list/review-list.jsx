import { NoData } from '../common/no-data';
import { ReviewForm } from '../review-form/review-form';

import styles from './review-list.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { ReviewContainer } from '../review-item/review-item-container';
import { useAddReviewMutation } from '../../redux/api';
import { useParams } from 'react-router';

export const Reviews = ({ reviews, showReviewForm = false }) => {
  const { theme } = useContext(ThemeContext);
  const { id: restaurantId } = useParams();

  const [addReviewMutation, { isSuccess, isLoading }] = useAddReviewMutation();
  const handleSubmitForm = (review) => {
    addReviewMutation({ restaurantId, review });
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
          isSubmitDisabled={isLoading}
        />
      )}
    </div>
  );
};
