import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Bars from '../assets/bars-solid.svg'
import Xmark from '../assets/xmark-solid.svg'
import './Menu.scss'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)

    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  })

  return (
    <div className='Menu'>
      <div className='menu-mobile-icon'>
        <div className={classnames('icon', { hidden: menuOpen })}>
          <button onClick={(e) => {
            setMenuOpen(true)
            e.stopPropagation()
          }}
          >
            <Bars />
          </button>
        </div>
        <div className={classnames('icon', { hidden: !menuOpen })}>
          <button onClick={(e) => {
            setMenuOpen(false)
            e.stopPropagation()
          }}
          >
            <Xmark />
          </button>
        </div>
      </div>
      <ul className={classnames('menu-content', { open: menuOpen })}>
        <li className='menu-item'><Link to='/'>Início</Link></li>
        <li className='menu-item'><Link to='/tratamentos'>Tratamentos</Link></li>
        <li className='menu-item'><Link to='/sobre'>Sobre</Link></li>
        <li className='menu-item'><Link to='/contacto'>Contacto</Link></li>
      </ul>
    </div>
  )
}

export default Menu
