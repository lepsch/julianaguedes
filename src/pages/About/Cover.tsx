import styles from './Cover.module.scss'

export function Cover() {
  return (
    <header className={styles['Cover']}>
      <div className={styles['title-container']}>
        <h1 className={styles['title']}>Paixão pela Medicina Estética</h1>
      </div>
    </header>
  )
}
