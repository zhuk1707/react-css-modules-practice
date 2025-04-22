import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <h1 className={styles.logo}>FIW</h1>

          <div className={styles.navigation}>
            <a href="" className={styles.navigationLink}>Favorite</a>
            <a href="" className={styles.navigationLink}>Comparison</a>
          </div>
        </div>

      </div>
    </header>
  );
};