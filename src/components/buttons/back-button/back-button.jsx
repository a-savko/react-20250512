import { useContext } from 'react';
import { Link } from 'react-router';
import styles from './back-button.module.css';
import classNames from 'classnames';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

export const BackButton = ({ to = '/', title }) => {
  const { theme } = useContext(ThemeContext);
  const backTitle = title ? title : to;

  return (
    <Link
      to={to}
      className={classNames(styles.backButton, theme)}
      aria-label={backTitle}
    >
      &larr; {backTitle}
    </Link>
  );
};
