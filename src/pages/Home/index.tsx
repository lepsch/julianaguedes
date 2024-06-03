import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import SelfDisplay from './SelfDisplay'
import Social from '../../componets/Social'
import Schedule from '../../componets/Schedule'
import Cover from './Cover'
import Section from '../Procedures/Section'
import tratamentos from '../../assets/dra-juliana-guedes-tratamentos-collage.jpg'
import './index.scss'

function Home() {
  return (
    <main className='Home'>
      <Menu />
      <Cover />
      <SelfDisplay />
      <Section
        alt='Colagem de fotos de tratamentos e Dra. Juliana Guedes'
        href='/tratamentos'
        id='tratamentos'
        name='Tratamentos'
        photo={tratamentos}
        reverse
        text='Ácido Hialurónico - Toxina Botulínica - Fios de PDO - Bioestimuladores
        de Colágeno - PronoKal® - Peeling Químico - Microneedling - Consultas Médicas - Mesoterapia'
      />
      <Social />
      <Schedule />
      <Footer />
    </main>
  )
}

export default Home
