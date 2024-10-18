import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
         <Slider className="project-carousel owl-theme" {...settings}>     
          <div className="card">
            <div className="box">
              <h3>UrlChop</h3>
              <p>
                Developed a URL shortening service using Node.js and TypeScript with features like custom short URLs, 
                analytics tracking, and QR code generation.
              </p>
              <p><strong>Technologies:</strong> React, Vite, TypeScript, Redis, Jest, MongoDB</p>
              <a href="https://github.com/7maylord/urlchop" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h3>Blog API</h3>
              <p>
                Built a blog content management API with Express and MongoDB, allowing users to create, update, delete, 
                and manage blog posts. Features include authentication, categories, tags, and content search.
              </p>
              <p><strong>Technologies:</strong> Express, Node.js, MongoDB, JWT, Git, Redis</p>
              <a href="https://github.com/7maylord/blogApi" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>          
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
