import { useCallback, useState } from 'react';
import {
  NavigationContext,
  DEFAULT_BACK_TITLE,
  DEFAULT_BACK_LINK,
} from './navigation-context';

export const NavigationContextProvider = ({ children }) => {
  const [isBackButtonHidden, setIsBackButtonHidden] = useState(true);
  const [backButtonLink, setBackButtonLink] = useState(DEFAULT_BACK_LINK);
  const [backButtonTitle, setBackButtonTitle] = useState(DEFAULT_BACK_TITLE);

  const showBackButton = useCallback((to, title) => {
    setIsBackButtonHidden(false);
    setBackButtonLink(to);
    setBackButtonTitle(title);
  }, []);

  const hideBackButton = useCallback(() => {
    setIsBackButtonHidden(true);
    setBackButtonLink(DEFAULT_BACK_LINK);
    setBackButtonTitle(DEFAULT_BACK_TITLE);
  }, []);

  return (
    <NavigationContext
      value={{
        isBackButtonHidden,
        backButtonLink,
        backButtonTitle,
        showBackButton,
        hideBackButton,
      }}
    >
      {children}
    </NavigationContext>
  );
};
