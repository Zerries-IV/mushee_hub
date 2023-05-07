import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './Pages.scss'
import PresaleCard from '../components/PresaleCard';

function Businesses() {
  return (
    <div className='Businesses'>
        <Navbar />
        <PresaleCard />
        <Footer />
    </div>
  )
}

export default Businesses