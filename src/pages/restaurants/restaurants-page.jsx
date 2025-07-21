import { Restaurants } from '../../components/restaurants/restaurants';
import { Loading } from '../../components/loading/loading';
import { useGetRestaurantsQuery } from '../../redux/api';

export const RestaurantsPage = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return <Restaurants restaurants={restaurants} />;
};
