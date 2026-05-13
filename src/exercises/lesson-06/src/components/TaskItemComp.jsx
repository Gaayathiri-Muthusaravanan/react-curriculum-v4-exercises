function TaskItemComp({ task }) {
  return (
    <li>
      {' '}
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}
export default TaskItemComp;
