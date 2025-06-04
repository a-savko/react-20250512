import { ReactSVG } from 'react-svg';
import starRatingSelectedSVG from '/public/star-rating-selected.svg';
import starRatingEmptySVG from '/public/star-rating-empty.svg';

import styles from './rating.module.css';

export const Rating = ({ rating, onClick = () => {}, maxRating = 5 }) => {
  const ratingValues = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div className={styles.rating}>
      {ratingValues.map((ratingStarValue) => {
        return (
          <ReactSVG
            key={ratingStarValue}
            src={
              ratingStarValue <= rating
                ? starRatingSelectedSVG
                : starRatingEmptySVG
            }
            className={styles.star}
            onClick={(event) => {
              onClick(event, ratingStarValue);
            }}
          />
        );
      })}
    </div>
  );
};
