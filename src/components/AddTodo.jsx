
import { useState } from "react";

function AddTodo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Practice JSX", done: true },
    { id: 3, text: "Build Todo App", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanText = newTodo.trim();
    if (cleanText === "") return;

    setTodos((previousTodos) => [
      ...previousTodos,
      {
        id: Date.now(),
        text: cleanText,
        done: false,
      },
    ]);

    setNewTodo("");
  }

  function toggleTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  }
  function clearCompleted() {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => !todo.done)
  );
  }

  function markAllDone() {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => ({
        ...todo,
        done: true,
        }))
    );
    }


  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <div>
      <h3>My Todo List</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>


        <div className="filter-buttons">
        <button
            className={filter === "all" ? "active-filter" : ""}
            onClick={() => setFilter("all")}
        >
            All
        </button>

        <button
            className={filter === "active" ? "active-filter" : ""}
            onClick={() => setFilter("active")}
        >
            Active
        </button>

        <button
            className={filter === "completed" ? "active-filter" : ""}
            onClick={() => setFilter("completed")}
        >
            Completed
        </button>

        <button onClick={clearCompleted}>
            Clear Completed
        </button>

        <button onClick={markAllDone}>
            Mark All Done
        </button>


        </div>

      

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
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

            <button onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <p>No tasks found.</p>
      )}
    </div>
  );
}

export default AddTodo;
