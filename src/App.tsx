import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Home from '@/pages/home/index.tsx'

function App() {
  const location = useLocation()
  console.log('当前环境：', import.meta.env.VITE_API_ENV)

  useEffect(() => {
    // 解决页面跳转时 滚动条不恢复置顶的问题
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <>{location.pathname === '/' ? <Home /> : <Outlet />}</>
}

export default App
