import classNames from 'classnames';
import styles from './tab-button.module.css';

export const TabButton = ({ title, isActive, onClick }) => {
  return (
    <button
      className={classNames(styles.tabButton, {
        [styles.active]: isActive,
      })}
      disabled={isActive}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
