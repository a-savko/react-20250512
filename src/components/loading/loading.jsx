import classNames from 'classnames';
import styles from './loading.module.css';
import { LOADING_VARIANTS } from './loading-constants.js';

export const Loading = ({
  variant = LOADING_VARIANTS.Default,
  text = 'Loading...',
  subtext = null,
}) => {
  return (
    <div
      className={classNames(styles.loadingContainer, {
        [styles.inline]: variant === LOADING_VARIANTS.Inline,
        [styles.overlay]: variant === LOADING_VARIANTS.Overlay,
      })}
      role='status'
      aria-live='polite'
    >
      <div className={styles.spinner} aria-hidden='true'></div>
      <p className={styles.loadingText}>{text}</p>
      {subtext && <p className={styles.loadingSubtext}>{subtext}</p>}
    </div>
  );
};
