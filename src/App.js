import './App.scss';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Plans from './pages/Plans';
import Solution from './pages/Solution';
import Contact, { Cryptocurency } from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Plans />
      <Solution />
      <Contact />
      <Cryptocurency />
    </div>
  );
}

export default App;
