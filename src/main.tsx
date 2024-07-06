import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Procedures from './pages/Procedures'
import Root from './root'
import 'normalize.css'
import './index.scss'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Procedures />,
        path: '/tratamentos',
      },
      {
        element: <About />,
        path: '/sobre',
      },
      {
        element: <Contact />,
        path: '/contacto',
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>,
)
