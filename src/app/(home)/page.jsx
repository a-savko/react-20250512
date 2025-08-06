'use client';

import styles from './page.module.css';
import { ReactSVG } from 'react-svg';
import { useContext } from 'react';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context';
import classNames from 'classnames';
import { OrderNowButton } from '../../components/buttons/order-now-button/order-now-button';
import { ROUTE_PATHS } from '../../constants/router-constants';
import ContextProviders from './context-providers';

const expressFoodDeliverySVG = '/express-food-delivery.svg';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContextProviders>
      <div className={classNames(styles.logo, theme)}>
        <ReactSVG src={expressFoodDeliverySVG} />
        <h3 className={styles.slogan}>
          Get Your Favourite Meals Delivered Fast!
        </h3>
        <OrderNowButton title='Order Now' to={ROUTE_PATHS.Restaurants} />
      </div>
    </ContextProviders>
  );
};

export default HomePage;
