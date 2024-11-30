import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import './index.css'
import Router from '@/router/index.tsx'
import store from '@/store/index.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
