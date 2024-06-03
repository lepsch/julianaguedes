import { useParallax } from 'react-scroll-parallax'

import photo from '../../assets/dra-juliana-guedes-photo.jpg'
import Button from '../../componets/Button'
import './SelfDisplay.scss'

function SelfDisplay() {
  const parallax = useParallax<HTMLImageElement>({
    speed: 10,
  })

  return (
    <div className='SelfDisplay'>
      <div className='info'>
        <div className='container'>
          <h2 className='name'>Dra. Juliana Guedes</h2>
          <p>Medicina Estética - OM 70651</p>
          <p>Procedimentos - Tecnologias - Beleza - Ciência - Saúde - Estética - Lifestyle</p>
          <Button href='/sobre'>
            Conheça a Médica
          </Button>
        </div>
      </div>
      <div className='photo'>
        <img alt='Foto da Dra. Juliana Guedes' ref={parallax.ref} src={photo} />
      </div>
    </div>
  )
}

export default SelfDisplay
