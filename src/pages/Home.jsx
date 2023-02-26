import Navbar from '../components/Navbar';
import HomeHero from '../components/Hero';
import Plans from '../components/Plans';
import Solution from '../components/Solution';
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
      <Solution />
      <Contact />
      <Cryptocurency />
      <Mushee />
      <Footer />
    </div>
  );
}

export default Home;
