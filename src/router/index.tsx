import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@/App.tsx'
import ErrorPage from '@/pages/errorPage/index.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'about',
          async lazy() {
            // 懒加载页面
            const { About } = await import('@/pages/about/index.tsx')
            return {
              Component: About,
            }
          },
        },
      ],
    },
  ],
  {
    basename: '/',
    future: {
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true, // 当一个路由动作（例如：数据获取）发生错误时，是否应该跳过重新验证
      // v7_startTransition: true,
    },
  }
)

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>
}
