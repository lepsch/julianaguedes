import { Page, Social, WorkPlaces } from '../../componets'
import { Cover } from './Cover'
import { SendMessage } from './SendMessage'
import styles from './index.module.scss'

function Contact() {
  return (
    <Page className={styles['Contact']}>
      <Cover />
      <SendMessage />
      <WorkPlaces />
      <Social />
    </Page>
  )
}

export default Contact
