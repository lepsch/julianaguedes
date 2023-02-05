import React from 'react'

import { ReactComponent as Instagram } from '../assets/Instagram.svg'
import { ReactComponent as Facebook } from '../assets/Facebook.svg'
import { ReactComponent as Whatsapp } from '../assets/Whatsapp.svg'
import Address from './Address'
import './Footer.scss'

function Footer () {
  return <div className='Footer'>
    <p className='name'>Juliana Guedes</p>
    <p className='title'>Medicina Estética</p>
    <div className='social'>
      <a href='#'><Instagram /></a>
      <a href='#'><Facebook /></a>
      <a href='#'><Whatsapp /></a>
    </div>
    <Address />
    <div className='copyright'>
      <p>© 2023 Juliana Guedes</p>
    </div>
  </div>
}

export default Footer
