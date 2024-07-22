import { Page, Social, Schedule, WorkPlaces } from '../../componets'
import { Cover } from './Cover'
import { Path } from './Path'
import './index.scss'

function About() {
  return (
    <Page className='About'>
      <Cover />
      <Path />
      <WorkPlaces />
      <Social />
      <Schedule />
    </Page>
  )
}

export default About
