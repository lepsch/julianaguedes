import React from 'react'
import classNames from 'classnames'
// import Button from '../../componets/Button'

import './Section.scss'

function Section ({ name, photo, reverse, text }: { name: string, photo: string, reverse?: boolean, text: string }) {
  return <div className={classNames('Section', { reverse: !!reverse })}>
    <div className='info'>
      <div className='container'>
        <h2 className='name'>{ name }</h2>
        <p>{ text }</p>
        {/* <Button>
          Conheça a Doutora
        </Button> */}
      </div>
    </div>
    <div className='photo'>
      <img alt='Foto da Dra. Juliana Guedes' src={ photo } />
    </div>
  </div>
}

export default Section
