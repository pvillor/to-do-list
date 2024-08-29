import styles from "./header.module.css";
import todoLogo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Todo" />
    </div>
  );
}
