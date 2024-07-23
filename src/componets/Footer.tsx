import { Address } from './Address'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Whatsapp from '../assets/Whatsapp.svg'
import './Footer.scss'

export function Footer() {
  return (
    <footer className='Footer'>
      <p className='name'>Juliana Guedes</p>
      <p className='title'>Medicina Estética</p>
      <div className='social' aria-label='Social links'>
        <a
          aria-label='Perfil do Instagram'
          href='https://www.instagram.com/drajulianaguedes/'
          rel='noreferrer'
          target='_blank'
        >
          <Instagram role='presentation' />
        </a>
        <a
          aria-label='Perfil do Facebook'
          href='https://www.facebook.com/drajulianaguedes/'
          rel='noreferrer'
          target='_blank'
        >
          <Facebook role='presentation' />
        </a>
        <a
          aria-label='Contato Whatsapp'
          href='https://wa.me/351910160557'
          rel='noreferrer'
          target='_blank'
        >
          <Whatsapp role='presentation' />
        </a>
      </div>
      <Address id='footer' />
      <div className='copyright'>
        <p>© 2022-2024 Juliana Guedes</p>
      </div>
    </footer>
  )
}
