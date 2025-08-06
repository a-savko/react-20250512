"use client";

import styles from "./global-not-found.module.css";
import "./global.css";
import "./themes/blue-theme.css";

const GlobalNotFound = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
        <title>404 - Page Not Found | Food Delivery Service</title>
      </head>
      <body className="blue">
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.description}>
              Sorry, the page you are looking for does not exist.
            </p>
            <a href="/" className={styles.button}>
              Go to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalNotFound;
