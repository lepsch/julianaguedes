import React from 'react'

import { ReactComponent as Instagram } from '../assets/Instagram.svg'
import './Social.scss'

function Social () {
  return <div className='Social'>
    <Instagram />
    <a href='https://www.instagram.com/drajulianaguedes/' rel="noreferrer" target="_blank">@drajulianaguedes</a>
  </div>
}

export default Social
