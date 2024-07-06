import { Helmet } from 'react-helmet'
import { Outlet, useLocation } from 'react-router-dom'

const Root = () => {
  const { pathname } = useLocation()
  return (
    <>
      <Helmet defer={false}>
        <link
          rel='canonical'
          href={`https://www.julianaguedes.com${pathname}`}
        />
      </Helmet>
      <Outlet />
    </>
  )
}

export default Root
