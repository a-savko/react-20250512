import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { selectUserById } from '../../redux/entities/user/slice';
import { Review } from './review-item';

export const ReviewContainer = ({ id }) => {
  const review = useSelector((store) => selectReviewById(store, id)) || {};
  const { userId, text, rating } = review;

  const user = useSelector((store) => selectUserById(store, userId)) || {};
  const { name } = user;

  return <Review name={name} rating={rating} text={text} />;
};
