import { Layout } from '../_layout';
import { Restaurants } from '../restaurants';
import { restaurants } from '/data/mock';

export const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants}></Restaurants>
    </Layout>
  );
};
