import { useGetUsersQuery } from '../../redux/api';
import { Review } from './review-item';
import { selectUserFromResultById } from '../../redux/entities/user/selectors';

export const ReviewContainer = ({ review }) => {
  const { userId, text, rating } = review;

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => selectUserFromResultById(result, userId),
  });
  const { name } = user || {};

  return <Review name={name} rating={rating} text={text} />;
};
