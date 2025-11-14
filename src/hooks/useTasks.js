import { useLocalStorageState } from './useLocalStorageState';

export function useTasks() {
  const [taskList, setTaskList] = useLocalStorageState('taskList', []);

  const activeTaskList = taskList.filter(({ status }) => status !== 'trashed');

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

  const updateTask = (id, updatedTask) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      );
    });
  };

  const trashedTaskList = taskList.filter(({ status }) => status === 'trashed');

  const deleteTask = (id) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => task.id !== id);
    });
  };

  const deleteAllTrashedTasks = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => task.status !== 'trashed');
    });
  };

  return {
    activeTaskList,
    createTask,
    updateTask,
    trashedTaskList,
    deleteTask,
    deleteAllTrashedTasks,
  };
}
