import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import SelfDisplay from './SelfDisplay'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import Cover from './Cover'
import './index.scss'

function Home () {
  return <main className='Home'>
    <Menu />
    <Cover />
    <SelfDisplay />
    <Social />
    <Schedule />
    <Footer />
  </main>
}

export default Home
