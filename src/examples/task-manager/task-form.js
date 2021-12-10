import { useState } from "react";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  return (
    <form
      className="task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onCreate(title);
        setTitle("");
      }}
    >
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
