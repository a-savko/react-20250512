import styles from './home-page.module.css';
import { ReactSVG } from 'react-svg';
import expressFoodDeliverySVG from '../../../public/express-food-delivery.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context';
import classNames from 'classnames';
import { OrderNowButton } from '../../components/buttons/order-now-button/order-now-button';
import { ROUTE_PATHS } from '../../constants/router-constants';

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(styles.logo, theme)}>
      <ReactSVG src={expressFoodDeliverySVG} />
      <h3 className={styles.slogan}>
        Get Your Favourite Meals Delivered Fast!
      </h3>
      <OrderNowButton title='Order Now' to={ROUTE_PATHS.Restaurants} />
    </div>
  );
};
