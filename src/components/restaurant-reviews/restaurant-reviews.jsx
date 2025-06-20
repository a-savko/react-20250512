import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { NoData } from '../common/no-data';
import { Reviews } from '../review-list/review-list';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';

export const RestaurantReviewsContainer = () => {
  const { id } = useParams();
  const { isAuthorized } = useContext(AccountContext);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return <NoData />;
  }

  const { reviews } = restaurant;

  return <Reviews reviewIds={reviews} showReviewForm={isAuthorized} />;
};
