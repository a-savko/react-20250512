import { useContext } from 'react';
import { Link } from 'react-router';
import styles from './back-button.module.css';
import classNames from 'classnames';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';

export const BackButton = ({ to = '/', title }) => {
  const { theme } = useContext(ThemeContext);
  const backTitle = title ? title : to;

  return (
    <Link
      to={to}
      className={classNames(styles.backButton, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
      aria-label={backTitle}
    >
      &larr; {backTitle}
    </Link>
  );
};
