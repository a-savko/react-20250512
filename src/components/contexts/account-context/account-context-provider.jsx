import { useState } from 'react';
import { AccountContext } from './account-context';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../../redux/entities/user/slice';

export const AccountContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const user = useSelector((store) => selectUserById(store, userId)) || null;

  const isAuthorized = () => {
    return userId !== null;
  };

  const login = (userId) => {
    if (!userId) {
      return;
    }

    setUserId(userId);
  };

  const logOut = () => {
    setUserId(null);
  };

  return (
    <AccountContext value={{ user, login, logOut, isAuthorized }}>
      {children}
    </AccountContext>
  );
};
