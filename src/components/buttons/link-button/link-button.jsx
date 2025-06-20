import { Link } from 'react-router';
import styles from './link-button.module.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

export const LinkButton = ({ to = '/', title }) => {
  const { theme } = useContext(ThemeContext);
  const linkTitle = title ? title : to;

  return (
    <Link
      to={to}
      className={classNames(styles.linkButton, theme)}
      aria-label={linkTitle}
    >
      {linkTitle}
    </Link>
  );
};
