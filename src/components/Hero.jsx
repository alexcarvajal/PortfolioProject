
import './../styles/Hero.css';
import{ useRef, useEffect } from 'react';
import ContentHero from '../content/ContentHero';
import { useChange } from '../context/useChange';
const Hero = () => {
  const sectionRef = useRef(null);
  const {change,setChange}= useChange();
  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = (event) => {
      event.preventDefault();
      setChange(false);
      if (event.deltaY < 0) {
        const prevSection = section.previousElementSibling;
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        section.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
      }
    };
    section.addEventListener('wheel', handleScroll);
    return () => {
      section.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="full-screen-section hero">
      <div className="content">
        <h1>Hero</h1>
        <p>Contenido de la sección Hero</p>
        <ContentHero />
      </div>
    </section>
  );
};

export default Hero;