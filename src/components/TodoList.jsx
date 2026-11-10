import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
  <ul className="todo-list">
    {todos.length === 0 && (
      <p>No tasks yet</p>
    )}

    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        text={todo.text}
        done={todo.done}
        priority={todo.priority}
      />
    ))}
  </ul>
);
}

export default TodoList;