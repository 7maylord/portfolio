import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'UrlChop - URL Shortener App',
      description:
        'Developed a URL shortening service using Node.js and TypeScript with features like custom short URLs, analytics tracking, and QR code generation.',
      technologies: 'React, Vite, TypeScript, Redis, Jest, MongoDB',
      githubLink: 'https://github.com/7maylord/urlchop',
      liveLink: 'https://urlchop.vercel.app',
      image: '/src/assets/urlchop.png'
    },
    {
      title: 'Blog API - Content Management Platform',
      description:
        'Built a blog content management API with Express and MongoDB, allowing users to create, update, delete, and manage blog posts.',
      technologies: 'Express, Node.js, MongoDB, JWT, Git, Redis',
      githubLink: 'https://github.com/7maylord/blogApi',
      liveLink: 'https://blog-api-7maylord.vercel.app',
      image: '/src/assets/blog-api.png'
    },
    // Add more projects as needed
  ];

  const DefaultProjectImage = () => (
    <div className="default-project-image">
      <FaCode size={50} />
      <span>Project Image</span>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <Swiper
          className="project-carousel"
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              effect: "slide"
            },
            768: {
              slidesPerView: 2,
              effect: "slide"
            },
            1024: {
              slidesPerView: 3,
              effect: "coverflow"
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="box">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <DefaultProjectImage />
                  )}
                  <div className="text">{project.title}</div>
                  <div className="description">{project.description}</div>
                  <div className="technologies">
                    <small>{project.technologies}</small>
                  </div>
                  <div className="links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
