import styles from './Cover.module.scss'

export function Cover() {
  return (
    <header className={styles['Cover']}>
      <div className={styles['title-container']}>
        <h1 className={styles['title']}>Agenda sua consulta</h1>
        <h2 className={styles['sub-title']}>Veja abaixo os contactos necessários para agendar a sua primeira consulta.</h2>
      </div>
    </header>
  )
}
