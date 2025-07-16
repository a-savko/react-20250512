import { TabButton } from '../tab-button/tab-button';

export const RestaurantTabButton = ({ id, name }) => {
  return <TabButton href={id} title={name} />;
};
