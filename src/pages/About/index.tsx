import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import Front from '../../componets/Front'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import './index.scss'

function About() {
  return <main className='About'>
    <Menu />
    <Front />

    <Social />
    <Schedule />
    <Footer />
  </main>
}

export default About
