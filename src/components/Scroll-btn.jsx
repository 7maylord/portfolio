import{ useEffect, useState } from 'react';

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-up-btn ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <i className="fas fa-angle-up"></i>
    </div>
  );
}

export default ScrollUpButton;
