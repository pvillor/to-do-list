import { ChangeEvent, FormEvent, useState } from "react";
import { TasksList } from "./tasks-list";
import styles from "./tasks.module.css";
import { PlusCircle } from "phosphor-react";

export type Task = {
  id: number;
  title: string;
  isFinished: boolean;
  progress: number;
};

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const tasksCount = tasks.length;
  const finishedTasksCount = tasks.filter((task) => task.isFinished).length;

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    const newTask = {
      id: tasksCount === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1,
      title: newTaskTitle,
      isFinished: false,
      progress: 0,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  function handleFinishTask(targetTask: Task) {
    const tasksWithDifferentId = tasks.filter(
      (task) => task.id !== targetTask.id
    );

    setTasks([
      ...tasksWithDifferentId,
      { ...targetTask, isFinished: !targetTask.isFinished },
    ]);
  }

  function handleDeleteTask(targetTask: Task) {
    const tasksWithDifferentId = tasks.filter(
      (task) => task.id !== targetTask.id
    );
    setTasks(tasksWithDifferentId);
  }

  return (
    <main className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleCreateNewTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          id="task"
          autoComplete="off"
          onChange={handleNewTaskTitleChange}
          value={newTaskTitle}
        />
        <button type="submit">
          <span>Criar</span>
          <PlusCircle />
        </button>
      </form>

      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.created}>
            <p>Tarefas criadas</p>
            <span>{tasksCount}</span>
          </div>
          <div className={styles.done}>
            <p>Concluídas</p>
            <span>
              {finishedTasksCount} de {tasksCount}
            </span>
          </div>
        </div>

        <TasksList
          tasks={tasks}
          handleFinishTask={handleFinishTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </main>
  );
}
