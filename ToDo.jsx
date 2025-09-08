import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Walk the Dog!"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTasks() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTasks}>
        Add
      </button>

      <ol>
        {" "}
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text"> {task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-task-up" onClick={moveTaskUp(index)}>
              Move Up
            </button>

            <button className="move-task-down" onClick={moveTaskDown(index)}>
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
