import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


function Projects() {
  const projects = [
    {
      title: 'UrlChop - URL Shortener App',
      description:
        'Developed a URL shortening service using Node.js and TypeScript with features like custom short URLs, analytics tracking, and QR code generation.',
      technologies: 'React, Vite, TypeScript, Redis, Jest, MongoDB',
      link: 'https://github.com/7maylord/urlchop',
    },
    {
      title: 'Blog API - Content Management Platform',
      description:
        'Built a blog content management API with Express and MongoDB, allowing users to create, update, delete, and manage blog posts.',
      technologies: 'Express, Node.js, MongoDB, JWT, Git, Redis',
      link: 'https://github.com/7maylord/blogApi',
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <Swiper
          className="project-carousel"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Space between slides
          slidesPerView={3} // Default number of slides on larger screens
          loop={true} // Enable looping
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} // Enable autoplay
          pagination={{ clickable: true }} // Enable pagination dots
          navigation={true} // Enable navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on mobile
            },
            768: {
              slidesPerView: 2, // 2 slides on tablets
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="box">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>View Project</strong>
                  </a>
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
