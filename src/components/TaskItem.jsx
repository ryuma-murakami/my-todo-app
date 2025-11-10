import { cva } from 'class-variance-authority';

const inputVariants = cva('flex-1 border px-2 py-1 border-gray-300 bg-white', {
  variants: {
    completed: {
      true: 'text-gray-400 line-through disabled:cursor-not-allowed',
    },
  },
});

export function TaskItem({ task }) {
  return (
    <div className="flex items-center gap-3 rounded bg-white px-4 py-2">
      <input
        type="text"
        className={inputVariants({ completed: task.status === 'completed' })}
        defaultValue={task.title}
        disabled={task.status === 'completed'}
      />
    </div>
  );
}
