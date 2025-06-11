import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { Button } from '../buttons/default/button';
import { ThemeButton } from '../buttons/theme-button/theme-button';
import styles from './account.module.css';

export const Account = () => {
  const { user, login, logOut, isAuthorized } = useContext(AccountContext);

  if (!isAuthorized()) {
    const loginClick = () => {
      login({ name: 'John Doe', email: 'john.doe@example.com' });
    };

    return (
      <div>
        <Button onClick={loginClick}>Login</Button>
      </div>
    );
  }

  const logoutClick = () => {
    logOut();
  };

  return (
    <div className={styles.rowContainer}>
      <div className={styles.row}>
        <span className={styles.userName}>{user.name}</span>
      </div>
      <div className={styles.row}>
        <ThemeButton />
      </div>
      <div className={styles.row}>
        <Button onClick={logoutClick}>Logout</Button>
      </div>
    </div>
  );
};
