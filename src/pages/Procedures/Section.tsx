import classnames from 'classnames'

import { Button } from '../../componets'
import styles from './Section.module.scss'

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
    <section className={classnames(styles['Section'], { [styles['reverse'] as string]: !!reverse })} id={id} aria-labelledby={`${id}-title`}>
      <div className={styles['info']}>
        <div className={styles['container']}>
          <h2 id={`${id}-title`} className={styles['name']}>{name}</h2>
          <p>{text}</p>
          {href && <Button href={href}>Saiba Mais</Button>}
        </div>
      </div>
      <div className={styles['photo']}>
        <img alt={alt} src={photo} />
      </div>
    </section>
  )
}
