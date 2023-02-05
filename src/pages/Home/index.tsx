import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import Front from './Front'
import SelfDisplay from './SelfDisplay'
import Social from '../../componets/Social'
import './index.scss'

function Home() {
  return <main className='Home'>
    <Menu />
    <Front />
    <SelfDisplay />
    <Social />
    <Footer />
  </main>
}

export default Home
