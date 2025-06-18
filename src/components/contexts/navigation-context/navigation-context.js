import { createContext } from "react";
import { ROUTE_PATHS } from "../../../constants/router-constants";

export const DEFAULT_BACK_TITLE = 'Back';
export const DEFAULT_BACK_LINK = ROUTE_PATHS.Home;

export const NavigationContext = createContext({
    isBackButtonHidden: false,
    backButtonLink: DEFAULT_BACK_LINK,
    backButtonTitle: DEFAULT_BACK_TITLE,
    showBackButton: () => { },
    hideBackButton: () => { },
});

