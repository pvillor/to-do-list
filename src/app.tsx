import { Header } from "./components/header";
import { TaskForm } from "./components/task-form";
import { Tasks } from "./components/tasks";

import "./global.css";

import styles from "./app.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm />
        <main>
          <Tasks />
        </main>
      </div>
    </div>
  );
}

export default App;
