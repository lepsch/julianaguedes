import { Page, Social, Schedule, WorkPlaces } from '../../componets'
import { Cover } from './Cover'
import { Path } from './Path'
import styles from './index.module.scss'

function About() {
  return (
    <Page className={styles['About']}>
      <Cover />
      <Path />
      <WorkPlaces />
      <Social />
      <Schedule />
    </Page>
  )
}

export default About
