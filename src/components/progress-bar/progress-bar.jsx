import { useEffect } from 'react';
import styles from './progress-bar.module.css';

import { useScroll } from './use-scroll';

export const ProgressBar = () => {
  const { scrollPercent, scrollChange } = useScroll();

  useEffect(() => {
    // mount
    const scroll = () => {
      scrollChange();
    };
    window.addEventListener('scroll', scroll);

    return () => {
      // unmount
      window.removeEventListener('scroll', scroll);
    };
  }, [scrollChange]);

  return (
    <div
      className={styles.scrollProgressBar}
      style={{ width: `${scrollPercent}%` }}
    />
  );
};
