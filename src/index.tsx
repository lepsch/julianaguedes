import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import CookieConsent from 'react-cookie-consent'

import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import About from './pages/About'
import Contact from './pages/Contact'
import Procedures from './pages/Procedures'
import './index.scss'

const router = createBrowserRouter([
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
])

const rootElement = document.getElementById('root') as HTMLElement

const CookieConsentSSR = () => {
  if (navigator.userAgent === 'ReactSnap') return null

  return <CookieConsent
    buttonClasses='cookie-consent-button'
    buttonText='Concordo'
    buttonWrapperClasses='cookie-consent-button-wrapper'
    containerClasses='cookie-consent'
    contentClasses='cookie-consent-content'
    disableStyles
  >
    Este sítio usa cookies para fornecer alguns recursos básicos. Ao continuar
    a navegar no sítio você concorda com o uso de cookies.
  </CookieConsent>
}

const app = <ParallaxProvider>
  <CookieConsentSSR />
  <RouterProvider router={ router } />
</ParallaxProvider>

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app)
} else {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      { app }
    </React.StrictMode>)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
