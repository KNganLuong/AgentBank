import { RouterProvider } from 'react-router-dom'
import router from './pages/Routes.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
