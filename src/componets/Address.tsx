import React from 'react'

import './Address.scss'

export const Address: React.FC<{
  id: string
  first?: React.ReactNode
  second?: React.ReactNode
}> = ({
  id,
  first,
  second,
}) => {
  /* eslint-disable @stylistic/jsx-one-expression-per-line */
  return (
    <div className='Address'>
      <address aria-labelledby={`${id}-address-senhora-a-branca`}>
        {first}
        <h3 id={`${id}-address-senhora-a-branca`} className='locale'>Clínica Senhora a Branca - Braga</h3>
        <p>Avenida 31 de Janeiro nº 310/324</p>
        <p>Telefone: <a href='tel:+351253216268' rel='noreferrer' target='_blank'>(+351) 253 216 268</a></p>
        <p>WhatsApp: <a href='https://wa.me/351910160557' rel='noreferrer' target='_blank'>(+351) 910 160 557</a></p>
      </address>
      <address aria-labelledby={`${id}-address-rj`}>
        {second}
        <h3 id={`${id}-address-rj`} className='locale'>Clínica RJ - Matosinhos</h3>
        <p>R. Brito e Cunha 123, 1º andar, Loja 1</p>
        <p>Telefone: <a href='tel:+351913183910' rel='noreferrer' target='_blank'>(+351) 913 183 910</a></p>
        <p>WhatsApp: <a href='https://wa.me/351913183910' rel='noreferrer' target='_blank'>(+351) 913 183 910</a></p>
      </address>
    </div>
  )
}
