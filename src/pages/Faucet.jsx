import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Pages.scss'
import FaucetBody from '../components/FaucetBody.jsx';

function Faucet() {
  return (
    <div className="Faucet">
      <Navbar navActive='/faucet'/>
      <FaucetBody />
      <Footer />
    </div>
  );
}

export default Faucet;
