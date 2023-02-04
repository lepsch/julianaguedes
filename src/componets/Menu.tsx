import React, { useState } from 'react';
import classnames from 'classnames'

import { ReactComponent as Bars } from '../assets/bars-solid.svg'
import { ReactComponent as Xmark } from '../assets/xmark-solid.svg'
import './Menu.scss';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return <div className='Menu'>
    <div className='menu-mobile-icon'>
      <div className={classnames('icon', { hidden: menuOpen })}>
        <button onClick={(e) => {
          setMenuOpen(true)
          e.stopPropagation()
        }}><Bars /></button>
      </div>
      <div className={classnames('icon', { hidden: !menuOpen })}>
      <button onClick={(e) => {
        setMenuOpen(false)
        e.stopPropagation()
      }}><Xmark /></button>
      </div>
    </div>
    <ul className={classnames('menu-content', { open: menuOpen })}>
      <li className='menu-item'><a href='#'>Início</a></li>
      <li className='menu-item'><a href='#'>Sobre</a></li>
      <li className='menu-item'><a href='#'>Contacto</a></li>
    </ul>
  </div>
}

export default Menu;
