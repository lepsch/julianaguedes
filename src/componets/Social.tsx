import Instagram from '../assets/Instagram.svg'
import './Social.scss'

export function Social() {
  return (
    <section className='Social' aria-label='Perfil do Instagram'>
      <Instagram role='presentation' />
      <a href='https://www.instagram.com/drajulianaguedes/' rel='noreferrer' target='_blank'>@drajulianaguedes</a>
    </section>
  )
}
