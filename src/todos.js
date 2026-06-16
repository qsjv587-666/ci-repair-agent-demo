export function getActiveTodos(todos) {
  return todos.filter((todo) => !todo.completed);
}
