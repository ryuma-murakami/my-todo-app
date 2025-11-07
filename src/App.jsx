import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: (
          <div>
            <div>タスク一覧</div>
            <Link to="trash">ゴミ箱へ</Link>
          </div>
        ),
      },
      {
        path: '/trash',
        element: (
          <div>
            <div>ゴミ箱</div>
            <Link to="/">タスク一覧へ</Link>
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
