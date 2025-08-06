'use client';

import { useCallback, useState } from 'react';
import { AccountContext } from './account-context';
import { useGetUsersQuery } from '../../../redux/api';
import { selectUserFromResultById } from '../../../redux/entities/user/selectors';

export const AccountContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => selectUserFromResultById(result, userId),
  });

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
