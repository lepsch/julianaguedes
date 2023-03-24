import React from 'react'

import Address from './Address'
// import bambuse from '../assets/clinica-bambuse.jpg'
import senhoraABranca from '../assets/dra-juliana-guedes-senhora-a-branca.jpg'
import './WorkPlaces.scss'

function WorkPlaces () {
  return <div className='WorkPlaces'>
    <h2 className='title'>Locais de atendimento</h2>
    <div className='address-container'>
      <Address
        first={ <img alt='Clínica Senhora a Branca' src={ senhoraABranca } /> }
        // second={ <img alt='Clínica Bambuse' src={ bambuse } /> }
      />
    </div>
  </div>
}

export default WorkPlaces
