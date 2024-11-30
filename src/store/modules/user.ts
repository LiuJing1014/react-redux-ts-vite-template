import { createSlice, Dispatch } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    avatar_url: '',
  },
  reducers: {
    // 更新用户信息
    setUserInfo(state, action) {
      state.name = action.payload.name
      state.avatar_url = action.payload.avatar_url
    },
  },
})

// 解构出actions并导出
const { setUserInfo } = userSlice.actions

// 针对异步获取接口数据
const getUserInfo = () => {
  return async (dispath: Dispatch) => {
    const data = await fetch('https://api.github.com/users/octocat').then(res => res.json())
    dispath(setUserInfo(data))
  }
}

export { setUserInfo, getUserInfo }

export default userSlice.reducer
