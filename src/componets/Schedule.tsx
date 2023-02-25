import React from 'react'

import Button, { ButtonTheme } from './Button'
import physicianDesk from '../assets/dra-juliana-guedes-desk.jpg'
import './Schedule.scss'

function Schedule () {
  return <div className='Schedule'>
    <div className='text'>
      <p>Ajudo-te a encontrar a tua melhor versão!</p>
      <Button href='/contacto' theme={ ButtonTheme.dark }>Agenda tua consulta</Button>
    </div>
    <img alt='Dra. Juliana Guedes na Clínica Senhora-a-Branca' src={ physicianDesk } />
  </div>
}

export default Schedule
