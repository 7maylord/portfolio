import { useEffect, useState } from 'react';

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#">May<span>lord.</span></a>
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="menu-btn" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="menu-btn" onClick={closeMenu}>About</a></li>
          <li><a href="#services" className="menu-btn" onClick={closeMenu}>Services</a></li>
          <li><a href="#skills" className="menu-btn" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="menu-btn" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" className="menu-btn" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
