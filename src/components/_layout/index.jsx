import { useContext } from 'react';
import { ProgressBar } from '../progress-bar/progress-bar';
import styles from './layout.module.css';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { Account } from '../account/account';
import { Basket } from '../basket/basket';
import { AccountContext } from '../contexts/account-context/account-context';
import { Link, Outlet } from 'react-router';
import { BackButton } from '../buttons/back-button/back-button';
import { NavigationContext } from '../contexts/navigation-context/navigation-context';
import { ROUTE_PATHS } from '../../constants/router-constants';

export const Layout = ({ showTitle = true }) => {
  const { theme } = useContext(ThemeContext);
  const { isAuthorized } = useContext(AccountContext);
  const { backButton } = useContext(NavigationContext);
  const { isHidden, link, title } = backButton;

  return (
    <div className={classNames(styles.container, theme)}>
      <ProgressBar />
      <header className={styles.header}>
        <div className={styles.leftContainer}>
          {!isHidden && <BackButton to={link} title={title} />}
        </div>
        <div className={styles.title}>
          {showTitle && (
            <Link to={ROUTE_PATHS.Home}>Express Food Delivery</Link>
          )}
        </div>
        <div className={styles.rightContainer}>
          <Account />
        </div>
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>

      {isAuthorized && (
        <div>
          <Basket />
        </div>
      )}
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};
