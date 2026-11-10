function TodoItem({ text, done = false, priority }) {
  return (
    <li className={done ? "todo-item done" : "todo-item"}>
      {done ? "✓ " : "○ "}
      {text}

      {priority === "high" && (
        <span className="priority-badge"> High </span>
      )}
    </li>
  );
}

export default TodoItem;