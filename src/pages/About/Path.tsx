import styles from './Path.module.scss'

export function Path() {
  return (
    <article className={styles['Path']} aria-labelledby='path-title'>
      <h2 id='path-title' className={styles['title']}>Carreira</h2>
      <div className={styles['text-container']}>
        <div className={styles['text']}>
          <p>Médica formada pela Universidade Federal do Rio de Janeiro - Brasil (UFRJ) (2011).</p>

          <p>Especialização em Medicina de Família e Comunidade com 7 anos de atuação em Centros de Saúde da Família</p>

          <p>
            Pós-graduada em Endocrinologia e Metabologia com Título de Especialista pela Sociedade Brasileira de
            Endocrinologia e Metabologia (SBEM)
          </p>

          <p>Pós-graduada em Nutrologia - ABRAN</p>

          <p>Mestrado Integrado em Medicina pela Universidade de Lisboa.</p>

          <p>Pós-graduada em Medicina Estética pela Universidad de Alcalá de Henares - ES</p>

          <p>Mestra em Medicina Estética e Longevidade pela Universidad de Alcalá de Henares - ES</p>
        </div>
      </div>

    </article>
  )
}
