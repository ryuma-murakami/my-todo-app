import { dummyTaskList } from '../data/dummyTaskList';
import { TaskItem } from './TaskItem';

export function TaskList() {
  return (
    <div className="relative">
      <div className="space-y-3 px-10 pb-10">
        {dummyTaskList.length === 0 ? (
          <p className="text-center text-sm">タスクがありません</p>
        ) : (
          dummyTaskList.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
