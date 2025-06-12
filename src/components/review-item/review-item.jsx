import { Rating } from '../rating/rating';

import styles from './review-item.module.css';
import globalStyles from '../app/common.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';

export const Review = ({ user, text, rating }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.review, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
    >
      <h4>{user}</h4>
      <div className={globalStyles.row}>{text}</div>
      <div className={globalStyles.row}>
        <Rating rating={rating} />
      </div>
    </div>
  );
};
