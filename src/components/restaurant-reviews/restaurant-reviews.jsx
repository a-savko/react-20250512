import { useSelector } from 'react-redux';
import { NoData } from '../common/no-data';
import { Reviews } from '../review-list/review-list';
import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { isLoading } from '../../helpers/statuses-helper';
import { getReviewsThunk } from '../../redux/entities/reviews/get-reviews';
import { selectReviewsByRestaurantId } from '../../redux/entities/reviews/slice';
import { getUsersThunk } from '../../redux/entities/user/get-users';
import { Loading } from '../loading/loading';
import { useRequest } from '../../redux/hooks/use-request';

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const { isAuthorized } = useContext(AccountContext);

  const reviewsRequestStatus = useRequest(getReviewsThunk, restaurantId);

  const usersRequestStatus = useRequest(getUsersThunk);
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, restaurantId)
  );

  if (isLoading(reviewsRequestStatus) || isLoading(usersRequestStatus)) {
    return <Loading />;
  }

  if (!reviews?.length) {
    return <NoData />;
  }

  return <Reviews reviews={reviews} showReviewForm={isAuthorized} />;
};
