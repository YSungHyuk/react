import classNames from "classnames/bind";
import styles from "./App.module.css";
export default function App() {
  const isLoggedIn = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <button className={styles.btn}>버튼</button>
      <button className={`${styles.btn} ${styles["is-active"]}`}>버튼</button>
      <button className={cx("btn")}>버튼</button>
      <button className={cx("btn", "is-active")}>버튼</button>
      <button className={cx("btn", { "is-active": isLoggedIn })}>버튼</button>
    </>
  );
}
