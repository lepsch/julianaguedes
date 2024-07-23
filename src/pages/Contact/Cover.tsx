import styles from './Cover.module.scss'

export function Cover() {
  return (
    <header className={styles['Cover']}>
      <div className={styles['title']}>
        <p>Agenda sua consulta</p>
        <p className={styles['sub-title']}>Veja abaixo os contactos necessários para agendar a sua primeira consulta.</p>
      </div>
    </header>
  )
}
