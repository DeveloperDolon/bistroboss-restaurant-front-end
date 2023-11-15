import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './Router/MainRoute'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={MainRoute}>
        </RouterProvider>
        <Toaster></Toaster>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
