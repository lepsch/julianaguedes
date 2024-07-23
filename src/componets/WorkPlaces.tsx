import { Address } from './Address'
import rj from '../assets/dra-juliana-guedes-rj.jpg'
import senhoraABranca from '../assets/dra-juliana-guedes-senhora-a-branca.jpg'
import styles from './WorkPlaces.module.scss'

export function WorkPlaces() {
  return (
    <section className={styles['WorkPlaces']} aria-labelledby='workplaces-title'>
      <h2 id='workplaces-title' className={styles['title']}>Locais de atendimento</h2>
      <div className={styles['address-container']}>
        <Address
          id='workplaces'
          first={<img alt='Clínica Senhora a Branca' src={senhoraABranca} />}
          second={<img alt='Clínica RJ' src={rj} />}
        />
      </div>
    </section>
  )
}
