import { useEffect } from 'react';
import Typed from 'typed.js';
import profileImage from '../assets/profile-1.jpeg';

function About() {
  useEffect(() => {
    // Initialize Typed.js for the profession typing effect
    const typed = new Typed('.typing-2', {
      strings: ["Software Engineer", "Blockchain Developer", "Node.js Developer", "Project Manager", "Freelancer"],
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
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="column right">
            <div className="text">
              I&apos;m Alfred and I&apos;m a <span className="typing-2"></span>
            </div>
            <p>
              A versatile software engineer with a background in civil engineering, offering strong problem-solving, analytical thinking, 
              and project management skills. As a graduate of Altschool Africa&apos;s Backend Engineering program, I am passionate about building 
              impactful software solutions that solve real-world problems. While I once focused on designing structural foundations, I now channel 
              that problem-solving mindset into writing code to create reliable and scalable software. I am driven by the desire to work in environments 
              that value innovation and collaboration, where I can leverage my skills to develop products that improve everyday experiences.            
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

