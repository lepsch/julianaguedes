import React from 'react'

import Address from './Address'
import bambuse from '../assets/bambuse.jpg'
import senhoraABranca from '../assets/senhora-a-branca.png'
import './WorkPlaces.scss'

function WorkPlaces () {
  return <div className='WorkPlaces'>
    <p className='title'>Locais de atendimento</p>
    <div className='address-container'>
      <Address
        first={ <img alt='Clínica Senhora a Branca' src={ senhoraABranca } /> }
        second={ <img alt='Bambuse' src={ bambuse } /> }
      />
    </div>
  </div>
}

export default WorkPlaces
