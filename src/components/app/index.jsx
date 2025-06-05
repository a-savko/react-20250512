import { Layout } from '../_layout';
import { Restaurants } from '../../pages/restaurants';
import { restaurants } from '/data/mock';

import './global.css';

export const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
