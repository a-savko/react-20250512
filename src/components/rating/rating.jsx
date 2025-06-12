import { ReactSVG } from 'react-svg';
import starRatingSelectedSVG from '/public/star-rating-selected.svg';
import starRatingEmptySVG from '/public/star-rating-empty.svg';

import styles from './rating.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import classNames from 'classnames';

export const Rating = ({ rating, onClick = () => {}, maxRating = 5 }) => {
  const { theme } = useContext(ThemeContext);

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
            className={classNames(styles.star, {
              [styles.blue]: theme === BLUE,
              [styles.green]: theme === GREEN,
            })}
            onClick={(event) => {
              onClick(event, ratingStarValue);
            }}
          />
        );
      })}
    </div>
  );
};
