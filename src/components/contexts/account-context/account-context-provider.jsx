import { useCallback, useState } from 'react';
import { AccountContext } from './account-context';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../../redux/entities/user/slice';

export const AccountContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const user = useSelector((store) => selectUserById(store, userId)) || null;
  const isAuthorized = userId !== null;

  const login = useCallback((userId) => {
    if (!userId) {
      return;
    }

    setUserId(userId);
  }, []);

  const logOut = useCallback(() => {
    setUserId(null);
  }, []);

  return (
    <AccountContext value={{ user, login, logOut, isAuthorized }}>
      {children}
    </AccountContext>
  );
};
