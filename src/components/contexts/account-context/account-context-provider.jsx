import { useCallback, useState } from 'react';
import { AccountContext } from './account-context';

export const AccountContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isAuthorized = () => {
    return user !== null;
  };

  const login = useCallback((user) => {
    if (!user) {
      return;
    }

    setUser(user);
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AccountContext value={{ user, login, logOut, isAuthorized }}>
      {children}
    </AccountContext>
  );
};
