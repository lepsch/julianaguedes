import { Page, WorkPlaces } from '../../componets'
import { Cover } from './Cover'
import { Path } from './Path'
import styles from './index.module.scss'

function About() {
  return (
    <Page className={styles['About']} header={<Cover />}>
      <Path />
      <WorkPlaces />
    </Page>
  )
}

export default About
