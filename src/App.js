import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Info from './components/Info';
import Structure from './components/Structure';
import UseCases from './components/UseCases';
import ArithmoWorks from './components/ArithmoWorks';
import GetReady from './components/GetReady';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div>
      <header className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <Navbar />
      </header>
      <main className="min-h-[80vh] pt-16 md:pt-32">
        <Hero />
        <Stats />
      </main>
      <div className="min-h-[80vh]">
        <Info />
        <Structure />
      </div>
      <UseCases />
      <ArithmoWorks />
      <GetReady />
      <Features />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
