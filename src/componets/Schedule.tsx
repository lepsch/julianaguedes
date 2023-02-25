import React from 'react'

import Button, { ButtonTheme } from './Button'
import physicianDesk from '../assets/dra-juliana-guedes-desk.jpg'
import './Schedule.scss'

function Schedule () {
  return <div className='Schedule'>
    <div className='text'>
      <p>Chegou a hora de realçar ainda mais a beleza que já existe em você!</p>
      <Button href='/contacto' theme={ ButtonTheme.dark }>Agende sua consulta</Button>
    </div>
    <img alt='Dra. Juliana Guedes na Clínica Senhora-a-Branca' src={ physicianDesk } />
  </div>
}

export default Schedule
