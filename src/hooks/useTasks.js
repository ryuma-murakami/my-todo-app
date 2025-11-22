import { useLocalStorageState } from './useLocalStorageState';

export function useTasks() {
  const [taskList, setTaskList] = useLocalStorageState('taskList', []);

  const activeTaskList = taskList.filter(({ status }) => status !== 'trashed');

  const createTask = title => {
    setTaskList(prev => {
      const newTask = {
        id: crypto.randomUUID(),
        title,
        status: 'notStarted',
      };
      return [...prev, newTask];
    });
  };

  const updateTask = (id, update) => {
    setTaskList(prev =>
      prev.map(task => (task.id === id ? { ...task, ...update } : task)),
    );
  };

  const trashedTaskList = taskList.filter(({ status }) => status === 'trashed');

  const deleteTask = id => {
    setTaskList(prev => prev.filter(task => task.id !== id));
  };

  const deleteAllTrashedTasks = () => {
    setTaskList(prev => prev.filter(task => task.status !== 'trashed'));
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
