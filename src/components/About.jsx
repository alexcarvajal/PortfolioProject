import "./../styles/About.css";
import miFoto from "./../assets/FotoAbout.jpg";
import { useRef, useEffect } from "react";
import { useChange } from "../context/useChange";
const About = () => {
  const sectionRef = useRef(null);
  const { change, setChange } = useChange();
  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = (event) => {
      event.preventDefault();
      /* setChange(true); */
      if (event.deltaY < 0) {
        const prevSection = section.previousElementSibling;
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        section.nextElementSibling.scrollIntoView({ behavior: "smooth" });
      }
    };

    section.addEventListener("wheel", handleScroll);
    return () => {
      section.removeEventListener("wheel", handleScroll);
    };
  }, []);


  return (
    <section ref={sectionRef} className="full-screen-section about">
      <div className="contentAbout">
        <img
          src={miFoto}
          className="foto"
          id={change ? "fade-in" : "fade-on"}
          alt="Mi foto"
        />
        <div className="texto">
          <p>Hola! Soy Alex!</p>
          <p>Lorem ipsumasdjsjd</p>
        </div>
      </div>
    </section>
  );
};

export default About;
