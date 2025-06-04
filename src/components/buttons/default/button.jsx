import classNames from 'classnames';
import styles from './button.module.css';

export const Button = ({ children, className, onClick }) => {
  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};
