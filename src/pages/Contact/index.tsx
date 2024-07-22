import { Page, Social, WorkPlaces } from '../../componets'
import { Cover } from './Cover'
import { SendMessage } from './SendMessage'
import './index.scss'

function Contact() {
  return (
    <Page className='Contact'>
      <Cover />
      <SendMessage />
      <WorkPlaces />
      <Social />
    </Page>
  )
}

export default Contact
