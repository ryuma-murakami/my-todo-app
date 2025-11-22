import { Plus } from 'lucide-react';
import { useRef } from 'react';

export function CreateTaskForm({ onSubmit }) {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (!inputRef.current) {
      return;
    }

    const inputValue = inputRef.current?.value.trim();
    if (!inputValue) {
      return;
    }

    onSubmit(inputValue);

    inputRef.current.value = '';
  };

  return (
    <form className="flex gap-0.5" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="新しいタスクを入力してください"
        className="grow rounded-s border border-gray-300 p-2 bg-white"
      />
      <button
        type="submit"
        className="rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        aria-label={'タスクを作成する'}
      >
        <Plus className="text-white" />
      </button>
    </form>
  );
}
