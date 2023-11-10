import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './Router/MainRoute'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
