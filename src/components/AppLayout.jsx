import { cva } from 'class-variance-authority';
import { Trash2, BookCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const sideMenu = [
  {
    path: '/',
    label: 'タスク一覧',
    icon: <BookCheck />,
  },
  {
    path: '/trash',
    label: 'ゴミ箱',
    icon: <Trash2 />,
  },
];

const linkVariants = cva('flex items-center gap-2 rounded px-5 py-3', {
  variants: {
    active: {
      true: 'bg-blue-400 text-white',
      false: 'hover:bg-slate-100',
    },
  },
});

export function AppLayout({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen">
      <div className="flex min-64 flex-col gap-5 p-6">
        <h1 className="text-3xl">Todo App</h1>
        <nav>
          <ul className="flex flex-col gap-2">
            {sideMenu.map(({ path, label, icon }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={linkVariants({ active: pathname === path })}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main className="mx-auto h-screen flex-1 overflow-y-auto overscroll-none bg-slate-100">
        {children}
      </main>
    </div>
  );
}
