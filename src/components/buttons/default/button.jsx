import classNames from 'classnames';

import styles from './button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button
      type='button'
      className={classNames(styles.button)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
