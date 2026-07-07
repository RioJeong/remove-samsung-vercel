import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import Router from './routes'

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>
)
