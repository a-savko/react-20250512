'use client';

import styles from './not-found.module.css';
import { LinkButton } from '../../components/buttons/link-button/link-button.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context.js';
import classNames from 'classnames';
import { ROUTE_PATHS } from '../../constants/router-constants.js';

const NotFoundPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames(styles.container, theme)}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <LinkButton to={ROUTE_PATHS.Home} title='Go to Home' />
    </div>
  );
};

export default NotFoundPage;
