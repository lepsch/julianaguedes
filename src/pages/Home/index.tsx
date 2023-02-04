import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import Front from './Front'
import SelfDisplay from './SelfDisplay'
import './index.scss'

function Home() {
  return <main className='Home'>
    <Menu />
    <Front />
    <SelfDisplay />
    <Footer />
  </main>
}

export default Home
