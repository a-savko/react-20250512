'use client';

import { useContext } from 'react';
import Link from 'next/link';
import styles from './back-button.module.css';
import classNames from 'classnames';
import { ThemeContext } from '@/components/contexts/theme-context/theme-context';
import { ROUTE_PATHS } from '@/constants/router-constants';

export const BackButton = ({ to = ROUTE_PATHS.Home, title }) => {
  const { theme } = useContext(ThemeContext);
  const backTitle = title ? title : to;

  return (
    <Link
      href={to}
      className={classNames(styles.backButton, theme)}
      aria-label={backTitle}
    >
      &larr; {backTitle}
    </Link>
  );
};
