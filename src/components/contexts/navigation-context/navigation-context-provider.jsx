'use client';

import { useCallback, useState } from 'react';
import { NavigationContext, DEFAULT_BACK_BUTTON } from './navigation-context';

export const NavigationContextProvider = ({ children }) => {
  const [backButton, setBackButton] = useState(DEFAULT_BACK_BUTTON);

  const showBackButton = useCallback((to, title) => {
    setBackButton({ isHidden: false, link: to, title });
  }, []);

  const hideBackButton = useCallback(() => {
    setBackButton(DEFAULT_BACK_BUTTON);
  }, []);

  return (
    <NavigationContext
      value={{
        backButton,
        showBackButton,
        hideBackButton,
      }}
    >
      {children}
    </NavigationContext>
  );
};
