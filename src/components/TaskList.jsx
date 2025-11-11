import { useState } from 'react';
import { CreateTaskForm } from './CreateTaskForm';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const createTask = (title) => {
    setTaskList((prevTaskList) => {
      const newTask = {
        id: Date.now(),
        title,
        status: 'notStarted',
      };
      return [...prevTaskList, newTask];
    });
  };

  return (
    <div className="relative">
      <div className="sticky top-0 flex flex-col items-end gap-2 bg-slate-100 px-10 py-5">
        <div className="w-full">
          <CreateTaskForm onSubmit={createTask} />
        </div>
      </div>
      <div className="space-y-3 px-10 pb-10">
        {taskList.length === 0 ? (
          <p className="text-center text-sm">タスクがありません</p>
        ) : (
          taskList.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
