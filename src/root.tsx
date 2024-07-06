import { Helmet } from 'react-helmet'
import { Outlet, useMatches, type UIMatch } from 'react-router-dom'

const Root = () => {
  const matches = useMatches()
  const match = matches[matches.length - 1] as UIMatch<unknown, { canonicalPath: string }> | undefined
  const canonicalPath = match?.handle?.canonicalPath ?? '/'

  return (
    <>
      <Helmet defer={false}>
        <link
          rel='canonical'
          href={`https://www.julianaguedes.com${canonicalPath}`}
        />
      </Helmet>
      <Outlet />
    </>
  )
}

export default Root
