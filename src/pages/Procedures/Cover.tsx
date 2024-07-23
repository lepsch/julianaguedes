import styles from './Cover.module.scss'

export function Cover() {
  return (
    <header className={styles['Cover']}>
      <nav className={styles['title-container']} aria-label='tratamentos-title'>
        <h1 id='tratamentos-title' className={styles['title']}>Tratamentos</h1>
        <ul>
          <li><a href='#acido-hialuronico'>Ácido Hialurónico</a></li>
          <li><a href='#toxina-botulinica'>Toxina Botulínica</a></li>
          <li><a href='#bioestimuladores-de-colageno'>Bioestimuladores de Colagénio</a></li>
          <li><a href='#fios-de-pdo'>Fios de PDO</a></li>
          <li><a href='#pronokal'>PronoKal®</a></li>
          <li><a href='#peeling-quimico'>Peeling Químico</a></li>
          <li><a href='#microneedling'>Microneedling</a></li>
          <li><a href='#consultas-medicas'>Consultas Médicas</a></li>
          <li><a href='#mesoterapia'>Mesoterapia</a></li>
        </ul>
      </nav>
    </header>
  )
}
