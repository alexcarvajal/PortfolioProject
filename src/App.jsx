
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default App;