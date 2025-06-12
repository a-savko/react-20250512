import { createContext } from "react";

export const AccountContext = createContext({
    user: null,
    isAuthorized: false,
    login: () => { },
    logOut: () => { },
});

