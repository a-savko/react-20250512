import styles from './not-found-page.module.css';
import { LinkButton } from '../../components/buttons/link-button/link-button.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context.js';
import classNames from 'classnames';
import {
  BLUE,
  GREEN,
} from '../../components/contexts/theme-context/theme-constants.js';
import { ROUTE_PATHS } from '../../constants/router-constants';

export const NotFoundPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.container, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
    >
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <LinkButton to={ROUTE_PATHS.Home} title='Go to Home' />
    </div>
  );
};
