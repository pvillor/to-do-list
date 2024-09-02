import { Task } from "./tasks";
import styles from "./task.module.css";
import { Check, Trash } from "phosphor-react";

interface TaskProps {
  task: Task;
  handleFinishTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
}

export function TaskCard({
  task,
  handleFinishTask,
  handleDeleteTask,
}: TaskProps) {
  const taskStyle = task.isFinished ? styles.finishedTask : styles.task;

  return task.isFinished ? (
    <div key={task.id} className={taskStyle}>
      <label htmlFor="checkbox" onClick={() => handleFinishTask(task)}>
        <input type="checkbox" />
        <span>
          <Check size={12} />
        </span>
      </label>
      <p>{task.title}</p>
      <button
        className={styles.trashButton}
        onClick={() => handleDeleteTask(task)}
      >
        <Trash />
      </button>
    </div>
  ) : (
    <div key={task.id} className={taskStyle}>
      <label htmlFor="checkbox" onClick={() => handleFinishTask(task)}>
        <input type="checkbox" />
        <span></span>
      </label>
      <p>{task.title}</p>
      <button
        className={styles.trashButton}
        onClick={() => handleDeleteTask(task)}
      >
        <Trash />
      </button>
    </div>
  );
}
