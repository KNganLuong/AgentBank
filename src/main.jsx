// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from './redux/store.js'
import router from './pages/Routes.jsx'
import './assets/sass/main.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
