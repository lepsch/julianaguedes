import { Form } from './Form'
import consultas from '../../assets/dra-juliana-guedes-consultas-medicas.jpg'
import styles from './SendMessage.module.scss'

export function SendMessage() {
  return (
    <section className={styles['SendMessage']} aria-label='Envia uma mensagem'>
      <img alt='Dra. Juliana Guedes - Consultas Médicas' src={consultas} />
      <Form />
    </section>
  )
}
