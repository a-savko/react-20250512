import { Button } from '../default/button';

import styles from './clear-button.module.css';

export const ClearButton = ({ children, onClick }) => {
  return (
    <Button className={styles.clearButton} onClick={onClick}>
      {children}
    </Button>
  );
};
