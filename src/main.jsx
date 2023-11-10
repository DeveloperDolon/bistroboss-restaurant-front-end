import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './assets/Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './assets/Router/MainRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
