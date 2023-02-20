import Tasks from './Tasks';
import NewTask from './NewTask';

function TaskList() {
  return (
    <div className='block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700'>
      <NewTask/>
      <ul className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        <Tasks/>
      </ul>
    </div>
  );
}

export default TaskList;
