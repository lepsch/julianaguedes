import { useParallax } from 'react-scroll-parallax'

import { Button } from '../../componets/Button'
import photo from '../../assets/dra-juliana-guedes-photo.jpg'
import styles from './SelfDisplay.module.scss'

export function SelfDisplay() {
  const parallax = useParallax<HTMLImageElement>({
    speed: 10,
  })

  return (
    <article className={styles['SelfDisplay']} aria-label='Apresentação'>
      <div className={styles['info']}>
        <div className={styles['container']}>
          <h2 className={styles['name']}>Dra. Juliana Guedes</h2>
          <p>Medicina Estética - OM 70651</p>
          <p>Procedimentos - Tecnologias - Beleza - Ciência - Saúde - Estética - Lifestyle</p>
          <Button href='/sobre'>
            Conheça a Médica
          </Button>
        </div>
      </div>
      <div className={styles['photo']}>
        <img alt='Foto da Dra. Juliana Guedes' ref={parallax.ref} src={photo} />
      </div>
    </article>
  )
}
