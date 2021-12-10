import { useState } from "react";
import TaskForm from "./task-form";
import "./styles.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Todo List</h1>
        <p>Pending tasks: {tasks.length}</p>
        <p>Completed tasks: {completedTasks}</p>
        <TaskForm
          onCreate={(title) => {
            setTasks([...tasks, title]);
          }}
        />
        <ul className="task-list">
          {tasks.map((task) => {
            return (
              <li
                className="task-item"
                onClick={() => {
                  setTasks(tasks.filter((t) => t !== task));
                  setCompletedTasks(completedTasks + 1);
                }}
              >
                {task}
              </li>
            );
          })}
        </ul>
        {tasks.length > 0 ? (
          <button
            className="complete-button"
            onClick={() => {
              setTasks([]);
              setCompletedTasks(completedTasks + tasks.length);
            }}
          >
            Complete all tasks
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default TaskManager;
