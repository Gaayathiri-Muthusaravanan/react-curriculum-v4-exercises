export function filterTask(tasks, filter) {
  if (filter === 'completed') {
    tasks = tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    tasks = tasks.filter((task) => !task.completed);
  }
  return tasks;
}
