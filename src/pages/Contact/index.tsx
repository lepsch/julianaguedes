import { Page, WorkPlaces } from '../../componets'
import { Cover } from './Cover'
import { SendMessage } from './SendMessage'
import styles from './index.module.scss'

function Contact() {
  return (
    <Page className={styles['Contact']} hideSchedule header={<Cover />}>
      <SendMessage />
      <WorkPlaces />
    </Page>
  )
}

export default Contact
