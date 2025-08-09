'use client';

import classNames from 'classnames';
import styles from './tab-button.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/components/contexts/theme-context/theme-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TabButton = ({ title, href }) => {
  const { theme } = useContext(ThemeContext);

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={classNames(styles.tabButton, theme, {
        [styles.active]: isActive,
      })}
    >
      {title}
    </Link>
  );
};
