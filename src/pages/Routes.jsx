import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import HomePage from './Home'
import Connexion from './Connexion'
import UserPage from './User'
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
        element: <Connexion />,
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
