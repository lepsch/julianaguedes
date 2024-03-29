import React from 'react'
import classNames from 'classnames'

import Button from '../../componets/Button'
import './Section.scss'

function Section ({
  alt,
  href,
  id,
  name,
  photo,
  reverse,
  text,
}: {
  alt: string
  href?: string
  id: string
  name: string
  photo: string
  reverse?: boolean
  text: string
}) {
  return <section className={classNames('Section', { reverse: !!reverse })} id={ id }>
    <div className='info'>
      <div className='container'>
        <h2 className='name'>{ name }</h2>
        <p>{ text }</p>
        { href &&
          <Button href={ href }>
            Saiba Mais
          </Button>
        }
      </div>
    </div>
    <div className='photo'>
      <img alt={ alt } src={ photo } />
    </div>
  </section>
}

export default Section
