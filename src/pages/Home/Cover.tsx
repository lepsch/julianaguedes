import styles from './Cover.module.scss'

export function Cover() {
  return (
    <header className={styles['Cover']}>
      <div className={styles['title-container']}>
        <h1 className={styles['title']}>Juliana Guedes</h1>
        <h2 className={styles['sub-title']}>Medicina Estética</h2>
      </div>
    </header>
  )
}
