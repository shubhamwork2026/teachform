import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.js'
import Login from './pages/Login.jsx'
import Verify from './pages/Verify.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "auth/",
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "verify",
            Component: Verify,
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
