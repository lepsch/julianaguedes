import React from 'react'
import classNames from 'classnames'
// import Button from '../../componets/Button'

import './Section.scss'

function Section ({
  alt,
  name,
  photo,
  reverse,
  text,
}: {
  alt: string
  name: string
  photo: string
  reverse?: boolean
  text: string
}) {
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
      <img alt={ alt } src={ photo } />
    </div>
  </div>
}

export default Section
