import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import HomePage from './Home'
import SignIn from './SignIn'
import UserPage from './UserAccount'
import ErrorPage from './Error'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/page-de-connexion',
        element: <SignIn />,
      },
      {
        path: '/compte-utilisateur',
        element: <UserPage />,
      },
      {
        path: '/*',
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
