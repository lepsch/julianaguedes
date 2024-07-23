import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Bars from '../assets/bars-solid.svg'
import Xmark from '../assets/xmark-solid.svg'
import './Menu.scss'

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)

    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  })

  return (
    <nav className='Menu'>
      <div className='menu-mobile-icon'>
        <div className={classnames('icon', { hidden: menuOpen })}>
          <button
            onClick={(e) => {
              setMenuOpen(true)
              e.stopPropagation()
            }}
            aria-label='Abrir Menu'
            aria-hidden={menuOpen}
          >
            <Bars role='presentation' />
          </button>
        </div>
        <div className={classnames('icon', { hidden: !menuOpen })}>
          <button
            onClick={(e) => {
              setMenuOpen(false)
              e.stopPropagation()
            }}
            aria-label='Fechar Menu'
            aria-hidden={!menuOpen}
          >
            <Xmark role='presentation' />
          </button>
        </div>
      </div>
      <ul className={classnames('menu-content', { open: menuOpen })} role='menubar'>
        <li className='menu-item' role='presentation'><Link role='menuitem' to='/'>Início</Link></li>
        <li className='menu-item' role='presentation'><Link role='menuitem' to='/tratamentos'>Tratamentos</Link></li>
        <li className='menu-item' role='presentation'><Link role='menuitem' to='/sobre'>Sobre</Link></li>
        <li className='menu-item' role='presentation'><Link role='menuitem' to='/contacto'>Contacto</Link></li>
      </ul>
    </nav>
  )
}
