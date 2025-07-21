import { NoData } from '../common/no-data';
import { Reviews } from '../review-list/review-list';
import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { Loading } from '../loading/loading';
import { useGetReviewsQuery, useGetUsersQuery } from '../../redux/api';

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const { isAuthorized } = useContext(AccountContext);
  const { data: reviews, isLoading: isReviewsLoading } =
    useGetReviewsQuery(restaurantId);

  const { isLoading: isUsersLoading } = useGetUsersQuery();

  if (isReviewsLoading || isUsersLoading) {
    return <Loading />;
  }

  if (!reviews?.length) {
    return <NoData />;
  }

  return <Reviews reviews={reviews} showReviewForm={isAuthorized} />;
};
