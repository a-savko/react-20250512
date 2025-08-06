'use client';

import { AccountContextProvider } from '../../components/contexts/account-context/account-context-provider';
import { NavigationContextProvider } from '../../components/contexts/navigation-context/navigation-context-provider';
import { ThemeContextProvider } from '../../components/contexts/theme-context/theme-context-provider';

const ContextProviders = ({ children }) => {
  return (
    <ThemeContextProvider>
      <AccountContextProvider>
        <NavigationContextProvider>{children}</NavigationContextProvider>
      </AccountContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProviders;
