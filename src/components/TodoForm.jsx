function TodoForm() {
  return (
    <form className="todo-form">
      <label htmlFor="task">New task</label>
      <input id="task" type="text" />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;