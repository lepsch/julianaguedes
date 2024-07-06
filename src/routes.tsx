import type { RouteObject } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Procedures from './pages/Procedures'
import Root from './root'

const routes: RouteObject[] = [
  {
    element: <Root />,
    children: [
      {
        element: <Home />,
        path: '/',
        handle: {
          canonicalPath: '/',
        },
      },
      {
        element: <Procedures />,
        path: '/tratamentos',
        handle: {
          canonicalPath: '/tratamentos',
        },
      },
      {
        element: <About />,
        path: '/sobre',
        handle: {
          canonicalPath: '/sobre',
        },
      },
      {
        element: <Contact />,
        path: '/contacto',
        handle: {
          canonicalPath: '/contacto',
        },
      },
    ],
  },
]

export default routes
