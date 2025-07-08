import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/user/slice';
import { Review } from './review-item';

export const ReviewContainer = ({ review }) => {
  const { userId, text, rating } = review;

  const user = useSelector((store) => selectUserById(store, userId)) || {};
  const { name } = user;

  return <Review name={name} rating={rating} text={text} />;
};
