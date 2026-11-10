function TaskCount({ todos }) {
  const remaining = todos.filter(
    (todo) => !todo.done
  ).length;

  return (
    <p>{remaining} tasks remaining</p>
  );
}

export default TaskCount;