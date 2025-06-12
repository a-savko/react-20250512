import { useContext } from 'react';
import { ThemeButton } from '../buttons/theme-button/theme-button';
import { ProgressBar } from '../progress-bar/progress-bar';
import styles from './layout.module.css';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import { AccountContextProvider } from '../contexts/account-context/account-context-provider';
import { Account } from '../account/account';
import { Basket } from '../basket/basket';
import { AccountContext } from '../contexts/account-context/account-context';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const themeClassNames = {
    [styles.blue]: theme === BLUE,
    [styles.green]: theme === GREEN,
  };
  const { isAuthorized } = useContext(AccountContext);

  return (
    <>
      <ProgressBar />
      <header className={classNames(styles.header, themeClassNames)}>
        <div>Food Delivery Service</div>
        <div>
          <Account />
        </div>
      </header>
      {children}
      {isAuthorized && (
        <div>
          <Basket />
        </div>
      )}
      <footer className={classNames(styles.footer, themeClassNames)}>
        Footer
      </footer>
    </>
  );
};
