import { useEffect } from 'react';
import Typed from 'typed.js';

function Home() {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ["Software Engineer", "Node.js Developer", "Project Manager", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Alfred Olumide Adenigba</div>
          <div className="text-3">And I&apos;m a <span className="typing"></span></div>
          <a href="#contact">Hire me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;

