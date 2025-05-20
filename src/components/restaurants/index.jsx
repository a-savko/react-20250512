import 'react-tabs/style/react-tabs.css';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import { Menu } from '../menu';
import { Reviews } from '../reviews';

export const Restaurants = ({ restaurants }) => {
  return (
    <div className='restaurants'>
      <Tabs>
        <TabList>
          {restaurants.map(({ id, name }) => {
            return <Tab key={id}>{name}</Tab>;
          })}
        </TabList>
        {restaurants.map(({ id, menu, reviews }) => {
          return (
            <TabPanel key={id}>
              <Menu menuItems={menu}></Menu>
              <Reviews reviews={reviews}></Reviews>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};
