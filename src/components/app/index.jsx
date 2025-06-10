import { Layout } from '../_layout';
import { Restaurants } from '../../pages/restaurants';
import { restaurants } from '/data/mock';

import './global.css';
import { ThemeContextProvider } from '../contexts/theme-context/theme-context-provider';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Restaurants restaurants={restaurants} />
      </Layout>
    </ThemeContextProvider>
  );
};
