import { useEffect } from 'react';
import Typed from 'typed.js';

function About() {
  useEffect(() => {
    // Initialize Typed.js for the profession typing effect
    const typed = new Typed('.typing-2', {
      strings: ["Software Engineer", "Node.js Developer", "Project Manager", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => typed.destroy(); // Cleanup Typed.js on component unmount
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="src\assets\profile-1.jpeg" alt="Profile" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Alfred and I'm a <span className="typing-2"></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi ut voluptatum eveniet doloremque autem excepturi eaque, 
              sit laboriosam voluptatem nisi delectus. Facere explicabo hic 
              minus accusamus alias fuga nihil dolorum quae.
            </p>
            <a href="/Alfred-Olumide-Adenigba-Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a> {/* View CV */}
             {/* <a href="/Alfred-Olumide-Adenigba-Resume.pdf" download>Download CV</a> Link to CV */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

