
import { useState } from "react";

function ArrayUpdate() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Practice JavaScript", done: false },
    { id: 3, text: "Build Todo App", done: false },
  ]);

  function toggleTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  return (
    <div>
      <h3>Todo Array Update</h3>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.done
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => toggleTodo(todo.id)}>
            {todo.done ? "Undo" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ArrayUpdate;
