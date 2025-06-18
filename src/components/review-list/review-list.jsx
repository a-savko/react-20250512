import { NoData } from '../common/no-data';
import { ReviewForm } from '../review-form/review-form';

import styles from './review-list.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import { ReviewContainer } from '../review-item/review-item-container';

export const Reviews = ({ reviewIds, showReviewForm = false }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classNames(styles.reviews, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
    >
      {reviewIds?.length > 0 ? (
        <div>
          {reviewIds.map((id) => (
            <ReviewContainer key={id} id={id} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
      {showReviewForm && <ReviewForm />}
    </div>
  );
};
