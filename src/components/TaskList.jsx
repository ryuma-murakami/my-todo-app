import { useEffect, useState } from 'react';
import { CreateTaskForm } from './CreateTaskForm';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const [taskList, setTaskList] = useState(() => {
    const taskListStorage = localStorage.getItem('taskList');
    return JSON.parse(taskListStorage ?? '[]');
  });

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

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const activeTaskList = taskList.filter(({ status }) => status !== 'trashed');

  const updateTask = (id, updatedTask) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      );
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
        {activeTaskList.length === 0 ? (
          <p className="text-center text-sm">タスクがありません</p>
        ) : (
          activeTaskList.map((task) => (
            <TaskItem key={task.id} task={task} onChange={updateTask} />
          ))
        )}
      </div>
    </div>
  );
}
