
import './App.css'
import SignUpPage from './pages/signup'
import Dashboard from './pages/dashboard'
import { RouterProvider } from 'react-router'
import routes from './routes/routes'
function App() {

  return (
    <>
   <RouterProvider router={routes} />
 
    </>
  )
}

export default App
