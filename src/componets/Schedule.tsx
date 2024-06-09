import Button from './Button'
import suaMelhorVersao from '../assets/dra-juliana-guedes-sua-melhor-versao.jpg'
import './Schedule.scss'

function Schedule() {
  return (
    <div className='Schedule'>
      <div className='text'>
        <p>Por uma beleza elegante e natural</p>
        <Button href='/contacto' theme={Button.Theme.dark}>Agenda sua consulta</Button>
      </div>
      <img alt='Dra. Juliana Guedes na Clínica Senhora-a-Branca' src={suaMelhorVersao} />
    </div>
  )
}

export default Schedule
