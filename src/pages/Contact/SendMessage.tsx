import { Form } from './Form'
import consultas from '../../assets/dra-juliana-guedes-consultas-medicas.jpg'

import './SendMessage.scss'

export function SendMessage() {
  return (
    <section className='SendMessage'>
      <img alt='Dra. Juliana Guedes - Consultas Médicas' src={consultas} />
      <Form />
    </section>
  )
}
