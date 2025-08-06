'use client';

import { createContext } from "react";
import { ROUTE_PATHS } from "../../../constants/router-constants";

export const DEFAULT_BACK_BUTTON = {
    isHidden: true,
    link: ROUTE_PATHS.Home,
    title: 'Back',
};

export const NavigationContext = createContext({
    backButton: DEFAULT_BACK_BUTTON,
    showBackButton: () => { },
    hideBackButton: () => { },
});

