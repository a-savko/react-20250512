'use client';

import { useContext } from 'react';
import styles from './button.module.css';
import { ThemeContext } from '@/components/contexts/theme-context/theme-context';
import classNames from 'classnames';

export const Button = ({ children, onClick, disabled }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type='button'
      className={classNames(styles.button, theme)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
