import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import WorkPlaces from '../../componets/WorkPlaces'
import Cover from './Cover'
import Path from './Path'
import './index.scss'

function About () {
  return <main className='About'>
    <Menu />
    <Cover />
    <Path />
    <WorkPlaces />
    <Social />
    <Schedule />
    <Footer />
  </main>
}

export default About
