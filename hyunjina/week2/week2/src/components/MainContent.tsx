import styles from "../styles/MainContent.module.css";

interface MainContentProps {
  left?: React.ReactNode;
  right: React.ReactNode;
}

const MainContent = ({ left, right }: MainContentProps) => {
  return (
    <div className={styles["main-container"]}>
      {left && <div className={styles["main-left"]}>{left}</div>}
      <div className={styles["main-right"]}>{right}</div>
    </div>
  );
};

export default MainContent;
