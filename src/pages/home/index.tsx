import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/store/index.ts'
import { getUserInfo } from '@/store/modules/user'
export default function Home() {
  const useState = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getInfo = () => {
    dispatch(getUserInfo()).then(val => {
      console.log(useState, val)
    })
  }

  const getAbout = () => {
    navigate('/about')
  }

  return (
    <div>
      <h1>home</h1>
      <p>用户名：{useState.name}</p>
      <p>{useState.avatar_url}</p>
      <div onClick={getInfo}>获取用户信息</div>
      <div onClick={getAbout}>去about页</div>
    </div>
  )
}
