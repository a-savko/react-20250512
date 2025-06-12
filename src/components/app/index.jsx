import { Layout } from '../_layout';

import './global.css';
import { ThemeContextProvider } from '../contexts/theme-context/theme-context-provider';
import { AccountContextProvider } from '../contexts/account-context/account-context-provider';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RestaurantsContainer } from '../../pages/restaurants/restaurants-container';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AccountContextProvider>
          <Layout>
            <RestaurantsContainer />
          </Layout>
        </AccountContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
