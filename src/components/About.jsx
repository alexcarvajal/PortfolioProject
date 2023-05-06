
import './../styles/About.css';

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
      <div className="content">
        <h1>About</h1>
        <p>Contenido de la sección About</p>
      </div>
    </section>
  );
};

export default About;