import Navbar from '../components/Navbar';
import HomeHero from '../components/Hero';
import Plans from '../components/Plans';
import Staking from '../components/Staking';
import Contact, { Cryptocurency } from '../components/Contact';
import Mushee from '../components/Mushee';
import Footer from '../components/Footer';
import './Pages.scss'

function Home() {
  return (
    <div className="Home">
      <Navbar />
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
