import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { Button } from '../buttons/default/button';
import { ThemeButton } from '../buttons/theme-button/theme-button';
import styles from './account.module.css';

export const Account = () => {
  const { user, login, logOut, isAuthorized } = useContext(AccountContext);

  if (!isAuthorized) {
    const handleLogin = () => {
      login('a304959a-76c0-4b34-954a-b38dbf310360');
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
