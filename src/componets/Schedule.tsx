import React from 'react'

import Button, { ButtonTheme } from './Button'
import suaMelhorVersao from '../assets/dra-juliana-guedes-sua-melhor-versao.jpg'
import './Schedule.scss'

function Schedule () {
  return <div className='Schedule'>
    <div className='text'>
      <p>Ajudo-o(a) a encontrar a sua melhor versão!</p>
      <Button href='/contacto' theme={ ButtonTheme.dark }>Agenda sua consulta</Button>
    </div>
    <img alt='Dra. Juliana Guedes na Clínica Senhora-a-Branca' src={ suaMelhorVersao } />
  </div>
}

export default Schedule
