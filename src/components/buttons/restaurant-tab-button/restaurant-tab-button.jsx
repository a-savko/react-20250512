import { fillRouteId, ROUTE_PATHS } from '@/constants/router-constants';
import { TabButton } from '@/components/buttons/tab-button/tab-button';

export const RestaurantTabButton = ({ id, name }) => {
  return (
    <TabButton
      href={fillRouteId(ROUTE_PATHS.RestaurantDetails, id)}
      title={name}
    />
  );
};
