import styles from "./task-form.module.css";

export function TaskForm() {
  return (
    <form className={styles.form}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>Criar</button>
    </form>
  );
}
