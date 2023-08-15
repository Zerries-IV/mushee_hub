import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './Pages.scss'
// import PresaleCard from '../components/PresaleCard';

function Presale() {
  return (
    <div className='Presale'>
        <Navbar navActive='presale'/>
        <div style={{ textAlign: 'center', color: 'white', fontSize: '30px', fontWeight: '800', margin: '50px 0 -50px 0'}}>ENDED</div>
        {/* <PresaleCard /> */}
        <Footer />
    </div>
  )
}

export default Presale