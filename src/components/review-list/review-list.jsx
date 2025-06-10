import { NoData } from '../common/no-data';
import { Review } from '../review-item/review-item';
import { ReviewForm } from '../review-form/review-form';

import styles from './review-list.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';

export const Reviews = ({ reviews }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classNames(styles.reviews, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
    >
      <h3>Reviews</h3>
      {reviews?.length > 0 ? (
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
