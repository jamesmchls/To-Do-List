import "./styles.css";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div>
      <header>
        <nav>
          <a href="#">J A M E S</a>
        </nav>
      </header>

      <section className="hero">
        <h1 style={{ color: "#fff" }}>To-Do List</h1>
        <p style={{ color: "#fff" }}>Stay organized and productive!</p>    
    </section>

      <main>
        <form className="new-item-form" onSubmit={handleAddTask}>
          <div className="form-row">
            <label htmlFor="item">New Task</label>
            <input
              type="text"
              id="item"
              value={newTask}
              onChange={handleTaskChange}
            />
            <button type="submit">Add</button>
          </div>
        </form>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task" key={index}>
              <input type="checkbox" />
              <span>{task}</span>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Copyright &copy; 2023 My First React Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
