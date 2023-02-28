import React from 'react'

import './Cover.scss'

function Cover () {
  return <div className='Cover'>
    <div className='title-container'>
      <h1 className='title'>Tratamentos</h1>
      {/* <p className='sub-title'>Veja abaixo os tratamentos disponíveis.</p> */}
      <ul>
        <li><a href='#toxina-botulinica'>Toxina Botulínica</a></li>
        <li><a href='#acido-hialuronico'>Ácido Hialurônico</a></li>
        <li><a href='#fios-de-pdo'>Fios de PDO</a></li>
        <li><a href='#bioestimuladores-de-colageno'>Bioestimuladores de Colágeno</a></li>
        <li><a href='#pronokal'>Pronokal</a></li>
        <li><a href='#peeling-quimico'>Peeling Químico</a></li>
        <li><a href='#microneedling'>Microneedling</a></li>
        <li><a href='#consultas-medicas'>Consultas Médicas</a></li>
        <li><a href='#mesoterapia'>Mesoterapia</a></li>
      </ul>
    </div>
  </div>
}

export default Cover
