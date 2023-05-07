
import './../styles/About.css';
import miFoto from './../assets/FotoAbout.jpg'
import { useRef, useEffect } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = (event) => {
      event.preventDefault();
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
    <section ref={sectionRef} className="full-screen-section about">
      <div className="contentAbout">
      <img src={miFoto} className="foto fade-in" alt="Mi foto" />
        <div className="texto">
          <h2>¡Hola! Soy Alex!</h2>
          <p>Aquí puedes colocar una descripción tuya.</p>
      </div>
      </div>
    </section>
  );


};

export default About;