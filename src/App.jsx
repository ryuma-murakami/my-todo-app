import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { TaskList } from './components/TaskList';
import { TrashedTaskList } from './components/TrashedTaskList';

const router = createBrowserRouter([
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: '/',
        element: <TaskList />,
      },
      {
        path: '/trash',
        element: <TrashedTaskList />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
