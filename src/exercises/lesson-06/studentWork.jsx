import { filterTask } from './src/utils/filterTask.js';
import { useTask } from './src/hooks/useTask';
import { useState } from 'react';
import UserProfileInfo from './src/components/UserProfileInfo.jsx';
import TaskFilterComp from './src/components/TaskFilterComp.jsx';
import TaskItemComp from './src/components/TaskItemComp.jsx';
export default function StudentWork() {
  const { tasks, loading } = useTask();
  const [filter, setFilter] = useState('all');
  let visibleTasks = filterTask(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <>
      <UserProfileInfo />
      <TaskFilterComp filter={filter} setFilter={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItemComp key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
