import React from 'react'
import Form from './Form'
import consultas from '../../assets/dra-juliana-guedes-consultas-medicas.jpg'

import './SendMessage.scss'

function SendMessage () {
  return <div className='SendMessage'>
    <img alt='Dra. Juliana Guedes - Consultas Médicas' src={ consultas } />
    <Form />
  </div>
}

export default SendMessage
