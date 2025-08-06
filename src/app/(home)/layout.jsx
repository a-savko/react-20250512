"use client";

import { useContext } from "react";
import { usePathname } from "next/navigation";
import { ProgressBar } from "../../components/progress-bar/progress-bar";
import styles from "./layout.module.css";
import { ThemeContext } from "../../components/contexts/theme-context/theme-context";
import classNames from "classnames";
import { Account } from "../../components/account/account";
import { Basket } from "../../components/basket/basket";
import { AccountContext } from "../../components/contexts/account-context/account-context";
import Link from "next/link";
import { BackButton } from "../../components/buttons/back-button/back-button";
import { NavigationContext } from "../../components/contexts/navigation-context/navigation-context";
import { ROUTE_PATHS } from "../../constants/router-constants";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { isAuthorized } = useContext(AccountContext);
  const { backButton } = useContext(NavigationContext);
  const { isHidden, link, title } = backButton;
  const pathname = usePathname();

  const showTitle = pathname !== ROUTE_PATHS.Home;

  return (
    <div className={classNames(styles.container, theme)}>
      <ProgressBar />
      <header className={styles.header}>
        <div className={styles.leftContainer}>
          {!isHidden && <BackButton to={link} title={title} />}
        </div>
        <div className={styles.title}>
          {showTitle && (
            <Link href={ROUTE_PATHS.Home}>Express Food Delivery</Link>
          )}
        </div>
        <div className={styles.rightContainer}>
          <Account />
        </div>
      </header>

      <main className={styles.content}>{children}</main>

      {isAuthorized && (
        <div>
          <Basket />
        </div>
      )}
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Layout;
