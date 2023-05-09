import Navbar from '../components/Navbar.jsx';
import HomeHero from '../components/Hero.jsx';
import Plans from '../components/Plans.jsx';
import Staking from '../components/Staking.jsx';
import Contact, { Cryptocurency } from '../components/Contact.jsx';
import Mushee from '../components/Mushee.jsx';
import Footer from '../components/Footer.jsx';
import './Pages.scss'

function Home() {
  return (
    <div className="Home">
      <Navbar navActive='/'/>
      <HomeHero />
      <Plans />
      <Staking />
      <Contact />
      <Cryptocurency />
      <Mushee />
      <Footer />
    </div>
  );
}

export default Home;
