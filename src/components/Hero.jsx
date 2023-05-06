
import './../styles/Hero.css';
import{ useRef, useEffect } from 'react';


const Hero = () => {
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
    <section ref={sectionRef} className="full-screen-section hero">
      <div className="content">
        <h1>Hero</h1>
        <p>Contenido de la sección Hero</p>
      </div>
    </section>
  );
};

export default Hero;