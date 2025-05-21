import 'react-tabs/style/react-tabs.css';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import { Restaurant } from './restaurant';

export const Restaurants = ({ restaurants }) => {
  return (
    <div className='restaurants'>
      <Tabs forceRenderTabPanel>
        <TabList>
          {restaurants.map(({ id, name }) => {
            return <Tab key={id}>{name}</Tab>;
          })}
        </TabList>
        {restaurants.map(({ id, menu, reviews }) => {
          return (
            <TabPanel key={id}>
              <Restaurant menu={menu} reviews={reviews}></Restaurant>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};
