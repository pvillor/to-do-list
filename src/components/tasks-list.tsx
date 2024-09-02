import { ClipboardText } from "phosphor-react";
import styles from "./tasks-list.module.css";
import { Task } from "./tasks";
import { TaskCard } from "./task";

interface TasksListProps {
  tasks: Task[];
  handleFinishTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
}

export function TasksList({
  tasks,
  handleFinishTask,
  handleDeleteTask,
}: TasksListProps) {
  const isTaskListEmpty = tasks?.length === 0;

  return (
    <div className={styles.container}>
      {isTaskListEmpty ? (
        <div className={styles.empty}>
          <ClipboardText className={styles.clipboard} />
          <div className={styles.emptyDescription}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <TaskCard
                key={task.id}
                task={task}
                handleFinishTask={handleFinishTask}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
