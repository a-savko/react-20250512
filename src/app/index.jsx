import { Layout } from '../components/_layout';

import './global.css';
import './themes/green-theme.css';
import './themes/blue-theme.css';

import { ThemeContextProvider } from '../components/contexts/theme-context/theme-context-provider';
import { AccountContextProvider } from '../components/contexts/account-context/account-context-provider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { DishPage } from '../pages/dish/dish-page';
import { HomePage } from '../pages/home/home-page';
import { RestaurantsPage } from '../pages/restaurants/restaurants-page';
import { NotFoundPage } from '../pages/not-found/not-found-page';
import { RestaurantPage } from '../pages/restaurants/restaurant/restaurant-page';
import { NavigationContextProvider } from '../components/contexts/navigation-context/navigation-context-provider';
import { RestaurantReviewsPage } from '../pages/restaurants/reviews/restaurant-reviews-page';
import { RestaurantMenuPage } from '../pages/restaurants/menu/restaurant-menu-page';
import { ROUTE_PATHS } from '../constants/router-constants';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <NavigationContextProvider>
          <AccountContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout showTitle={false} />}>
                  <Route index element={<HomePage />} />
                </Route>
                <Route element={<Layout />}>
                  <Route
                    path={ROUTE_PATHS.Restaurants}
                    element={<RestaurantsPage />}
                  />
                  <Route
                    path={ROUTE_PATHS.RestaurantDetails}
                    element={<RestaurantPage />}
                  >
                    <Route
                      index
                      element={
                        <Navigate to={ROUTE_PATHS.RestaurantMenu} replace />
                      }
                    />
                    <Route
                      path={ROUTE_PATHS.RestaurantMenu}
                      element={<RestaurantMenuPage />}
                    />
                    <Route
                      path={ROUTE_PATHS.RestaurantReviews}
                      element={<RestaurantReviewsPage />}
                    />
                  </Route>
                  <Route path={ROUTE_PATHS.Dish}>
                    <Route
                      path={ROUTE_PATHS.DishDetails}
                      element={<DishPage />}
                    />
                  </Route>
                  <Route
                    path={ROUTE_PATHS.NotFound}
                    element={<NotFoundPage />}
                  />
                  <Route
                    path={ROUTE_PATHS.NotSpecified}
                    element={<Navigate to={ROUTE_PATHS.NotFound} replace />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </AccountContextProvider>
        </NavigationContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
