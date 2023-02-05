import React from 'react'

import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import Cover from './Cover'
import WorkPlaces from '../../componets/WorkPlaces'
import './index.scss'

function Contact () {
  return <main className='Contact'>
    <Menu />
    <Cover />
    <WorkPlaces />
    <Social />
    <Schedule />
    <Footer />
  </main>
}

export default Contact
