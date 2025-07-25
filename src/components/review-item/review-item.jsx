import { Rating } from '../rating/rating';
import { Button } from '../buttons/default/button';

import styles from './review-item.module.css';
import globalStyles from '../../components/app/common.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { AccountContext } from '../contexts/account-context/account-context';
import classNames from 'classnames';
import { ReviewContext } from '../contexts/review-context/review-context';

export const Review = ({ id, name, text, rating, userId }) => {
  const { theme } = useContext(ThemeContext);
  const { user, isAuthorized } = useContext(AccountContext);
  const { editReview, setEditReview } = useContext(ReviewContext);

  const canEdit = isAuthorized && user?.id === userId;
  const handleEditClick = () => {
    setEditReview({ id, userId, text, rating });
  };

  return (
    <div className={classNames(styles.review, theme)}>
      <div className={styles.reviewContent}>
        <h4>{name}</h4>
        <div className={globalStyles.row}>{text}</div>
        <div className={globalStyles.row}>
          <Rating rating={rating} />
        </div>
      </div>
      {canEdit && (
        <div className={styles.editButton}>
          <Button onClick={handleEditClick} disabled={id == editReview?.id}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};
