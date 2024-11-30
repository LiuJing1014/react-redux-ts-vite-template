import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import user from './modules/user'

// 合并reducers
const rootReducer = combineReducers({
  user,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

// 导出state和dispatch的类型，方便在页面中使用时不用做类型推断
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
