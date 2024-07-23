import { Page } from '../../componets'
import { Cover } from './Cover'
import { Section } from '../Procedures/Section'
import { SelfDisplay } from './SelfDisplay'
import tratamentos from '../../assets/dra-juliana-guedes-tratamentos-collage.jpg'
import styles from './index.module.scss'

function Home() {
  return (
    <Page className={styles['Home']} header={<Cover />}>
      <SelfDisplay />
      <Section
        alt='Colagem de fotos de tratamentos e Dra. Juliana Guedes'
        href='/tratamentos'
        id='tratamentos'
        name='Tratamentos'
        photo={tratamentos}
        reverse
        text='Ácido Hialurónico - Toxina Botulínica - Fios de PDO - Bioestimuladores
        de Colagénio - Dieta Cetogênica (PronoKal® / Proteifine®) - Peeling
        Químico - Microneedling - Consultas Médicas - Mesoterapia'
      />
    </Page>
  )
}

export default Home
