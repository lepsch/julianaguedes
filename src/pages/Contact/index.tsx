import Menu from '../../componets/Menu'
import Footer from '../../componets/Footer'
import Social from '../../componets/Social'
import Cover from './Cover'
import WorkPlaces from '../../componets/WorkPlaces'
import SendMessage from './SendMessage'
import './index.scss'

function Contact() {
  return (
    <main className='Contact'>
      <Menu />
      <Cover />
      <SendMessage />
      <WorkPlaces />
      <Social />
      <Footer />
    </main>
  )
}

export default Contact
