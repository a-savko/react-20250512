import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { Button } from '../buttons/default/button';
import { ThemeButton } from '../buttons/theme-button/theme-button';
import styles from './account.module.css';

export const Account = () => {
  const { user, login, logOut, isAuthorized } = useContext(AccountContext);

  if (!isAuthorized) {
    const handleLogin = () => {
      login({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
    };

    return (
      <div>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    );
  }

  return (
    <div className={styles.rowContainer}>
      <div className={styles.row}>
        <span className={styles.userName}>{user.name}</span>
      </div>
      <div className={styles.row}>
        <ThemeButton />
      </div>
      <div className={styles.row}>
        <Button onClick={logOut}>Logout</Button>
      </div>
    </div>
  );
};
