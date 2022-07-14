import styles from "components/header/header.module.css";

type HeaderProprs = {
  title: string;
};

export const Header = ({ title }: HeaderProprs) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  );
};
