'use client';

import Link from 'next/link';
import styles from './link-button.module.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { ROUTE_PATHS } from '../../../constants/router-constants';

export const LinkButton = ({ to = ROUTE_PATHS.Home, title }) => {
  const { theme } = useContext(ThemeContext);
  const linkTitle = title ? title : to;

  return (
    <Link
      href={to}
      className={classNames(styles.linkButton, theme)}
      aria-label={linkTitle}
    >
      {linkTitle}
    </Link>
  );
};
