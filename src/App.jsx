import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { AppLayout } from './components/AppLayout';

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
        element: <div>タスク一覧</div>,
      },
      {
        path: '/trash',
        element: <div>ゴミ箱</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
