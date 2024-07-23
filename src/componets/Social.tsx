import Instagram from '../assets/Instagram.svg'
import styles from './Social.module.scss'

export function Social() {
  return (
    <section className={styles['Social']} aria-label='Perfil do Instagram'>
      <Instagram role='presentation' />
      <a href='https://www.instagram.com/drajulianaguedes/' rel='noreferrer' target='_blank'>@drajulianaguedes</a>
    </section>
  )
}
