import classnames from 'classnames'

import { Button } from '../../componets'
import './Section.scss'

export function Section({
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
  return (
    <section className={classnames('Section', { reverse: !!reverse })} id={id} aria-labelledby={`${id}-title`}>
      <div className='info'>
        <div className='container'>
          <h2 id={`${id}-title`} className='name'>{name}</h2>
          <p>{text}</p>
          {href && <Button href={href}>Saiba Mais</Button>}
        </div>
      </div>
      <div className='photo'>
        <img alt={alt} src={photo} />
      </div>
    </section>
  )
}
