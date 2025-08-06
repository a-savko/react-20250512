'use client';

import './global.css';
import './themes/green-theme.css';
import './themes/blue-theme.css';
import { ThemeContextProvider } from '../components/contexts/theme-context/theme-context-provider';
import { AccountContextProvider } from '../components/contexts/account-context/account-context-provider';
import { NavigationContextProvider } from '../components/contexts/navigation-context/navigation-context-provider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/svg+xml' href='/public/react.svg' />
        <title>Food Delivery Service</title>
      </head>
      <body>
        <Provider store={store}>
          <ThemeContextProvider>
            <AccountContextProvider>
              <NavigationContextProvider>{children}</NavigationContextProvider>
            </AccountContextProvider>
          </ThemeContextProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
