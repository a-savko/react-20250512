import { Link } from 'react-router';
import styles from './link-button.module.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';

export const LinkButton = ({ to = '/', title }) => {
  const { theme } = useContext(ThemeContext);
  const linkTitle = title ? title : to;

  return (
    <Link
      to={to}
      className={classNames(styles.linkButton, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
      aria-label={linkTitle}
    >
      {linkTitle}
    </Link>
  );
};
