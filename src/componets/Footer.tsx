import React from 'react';

import { ReactComponent as Instagram } from '../assets/Instagram.svg'
import { ReactComponent as Facebook } from '../assets/Facebook.svg'
import { ReactComponent as Whatsapp } from '../assets/Whatsapp.svg'
import './Footer.scss';

function Footer() {
  return <div className='Footer'>
    <p className='name'>Juliana Guedes</p>
    <p className='title'>Medicina Estética</p>
    <div className='social'>
      <a href='#'><Instagram /></a>
      <a href='#'><Facebook /></a>
      <a href='#'><Whatsapp /></a>
    </div>
    <div className='address'>
      <div>
        <p className='locale'>Clínica Senhora a Branca - Braga</p>
        <p>Avenida 31 de Janeiro nº 310/324</p>
        <p>Telefone: (+351) 253 216 268</p>
        <p>WhatsApp: (+351) 910 160 557</p>
      </div>
      <div>
        <p className='locale'>Bambuse - Braga</p>
        <p>Rua do Raio, 339</p>
        <p>Telefone: (+351) 253 173 160</p>
        <p>WhatsApp: (+351) 910 160 557</p>
      </div>
    </div>
    <div className='copyright'>
      <p>© 2023 Juliana Guedes</p>
    </div>
  </div>
}

export default Footer
