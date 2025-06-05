import styles from './progress-bar.module.css';

import { useScroll } from './use-scroll';

export const ProgressBar = () => {
  const { scrollPercent } = useScroll();

  return (
    <div
      className={styles.scrollProgressBar}
      style={{ width: `${scrollPercent}%` }}
    />
  );
};
