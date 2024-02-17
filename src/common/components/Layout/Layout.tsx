import { LayoutProps } from './Layout.types';

import logo from '../../../assets/logo.svg';

import styles from './Layout.module.css';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </nav>
      <main className={styles.content}>{children}</main>
    </>
  );
}
