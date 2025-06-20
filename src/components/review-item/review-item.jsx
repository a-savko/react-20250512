import { Rating } from '../rating/rating';

import styles from './review-item.module.css';
import globalStyles from '../../app/common.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';

export const Review = ({ name, text, rating }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames(styles.review, theme)}>
      <h4>{name}</h4>
      <div className={globalStyles.row}>{text}</div>
      <div className={globalStyles.row}>
        <Rating rating={rating} />
      </div>
    </div>
  );
};
