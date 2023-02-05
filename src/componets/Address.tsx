import React from 'react'

import './Address.scss'

const Address: React.FC<{
  first?: React.ReactNode
  second?: React.ReactNode
}> = ({
  first,
  second,
}) => {
  return <div className='Address'>
    <div>
      { first }
      <p className='locale'>Clínica Senhora a Branca - Braga</p>
      <p>Avenida 31 de Janeiro nº 310/324</p>
      <p>Telefone: (+351) 253 216 268</p>
      <p>WhatsApp: (+351) 910 160 557</p>
    </div>
    <div>
      { second }
      <p className='locale'>Bambuse - Braga</p>
      <p>Rua do Raio, 339</p>
      <p>Telefone: (+351) 253 173 160</p>
      <p>WhatsApp: (+351) 910 160 557</p>
    </div>
  </div>
}

export default Address