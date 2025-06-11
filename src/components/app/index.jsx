import { Layout } from '../_layout';
import { Restaurants } from '../../pages/restaurants';
import { restaurants } from '/data/mock';

import './global.css';
import { ThemeContextProvider } from '../contexts/theme-context/theme-context-provider';
import { AccountContextProvider } from '../contexts/account-context/account-context-provider';

export const App = () => {
  return (
    <ThemeContextProvider>
      <AccountContextProvider>
        <Layout>
          <Restaurants restaurants={restaurants} />
        </Layout>
      </AccountContextProvider>
    </ThemeContextProvider>
  );
};
