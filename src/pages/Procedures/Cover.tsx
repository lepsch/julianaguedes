import styles from './Cover.module.scss'

export function Cover() {
  return (
    <header className={styles['Cover']}>
      <nav className={styles['title-container']} aria-labelledby='tratamentos-title'>
        <h1 id='tratamentos-title' className={styles['title']}>Tratamentos</h1>
        <ul role='menu'>
          <li role='none'><a role='menuitem' href='#acido-hialuronico'>Ácido Hialurónico</a></li>
          <li role='none'><a role='menuitem' href='#toxina-botulinica'>Toxina Botulínica</a></li>
          <li role='none'><a role='menuitem' href='#bioestimuladores-de-colageno'>Bioestimuladores de Colagénio</a></li>
          <li role='none'><a role='menuitem' href='#fios-de-pdo'>Fios de PDO</a></li>
          <li role='none'><a role='menuitem' href='#pronokal'>PronoKal®</a></li>
          <li role='none'><a role='menuitem' href='#peeling-quimico'>Peeling Químico</a></li>
          <li role='none'><a role='menuitem' href='#microneedling'>Microneedling</a></li>
          <li role='none'><a role='menuitem' href='#consultas-medicas'>Consultas Médicas</a></li>
          <li role='none'><a role='menuitem' href='#mesoterapia'>Mesoterapia</a></li>
        </ul>
      </nav>
    </header>
  )
}
