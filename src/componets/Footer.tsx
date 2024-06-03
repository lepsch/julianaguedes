import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Whatsapp from '../assets/Whatsapp.svg'
import Address from './Address'
import './Footer.scss'

function Footer() {
  return (
    <div className='Footer'>
      <p className='name'>Juliana Guedes</p>
      <p className='title'>Medicina Estética</p>
      <div className='social'>
        <a href='https://www.instagram.com/drajulianaguedes/' rel='noreferrer' target='_blank'><Instagram /></a>
        <a href='https://www.facebook.com/drajulianaguedes/' rel='noreferrer' target='_blank'><Facebook /></a>
        <a href='https://wa.me/351910160557' rel='noreferrer' target='_blank'><Whatsapp /></a>
      </div>
      <Address />
      <div className='copyright'>
        <p>© 2024 Juliana Guedes</p>
      </div>
    </div>
  )
}

export default Footer
