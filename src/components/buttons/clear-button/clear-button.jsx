import styles from './clear-button.module.css';

export const ClearButton = ({ children, onClick }) => {
  return (
    <button type='reset' className={styles.clearButton} onClick={onClick}>
      {children}
    </button>
  );
};
