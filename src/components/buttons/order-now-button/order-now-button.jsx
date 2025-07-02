import { Link } from 'react-router';
import styles from './order-now-button.module.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { ROUTE_PATHS } from '../../../constants/router-constants';

export const OrderNowButton = ({ to = ROUTE_PATHS.Home, title }) => {
  const { theme } = useContext(ThemeContext);
  const linkTitle = title ? title : to;

  return (
    <Link
      to={to}
      className={classNames(styles.orderButton, theme)}
      aria-label={linkTitle}
    >
      {linkTitle}
    </Link>
  );
};
