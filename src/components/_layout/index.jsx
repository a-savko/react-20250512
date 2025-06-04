import { ProgressBar } from '../progress-bar/progress-bar';
import styles from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header className={styles.header}>Header</header>
      {children}
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};
