
import './../styles/Contact.css';

import{ useRef, useEffect } from 'react';
import { useChange } from '../context/useChange';
const Contact = () => {
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
    <section ref={sectionRef} className="full-screen-section contact">
      <div className="content">
        <h1>Contact</h1>
        <p>Contenido de la sección Contact</p>
      </div>
    </section>
  );
};

export default Contact;