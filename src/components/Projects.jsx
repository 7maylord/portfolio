import React from 'react';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <h3>UrlChop - URL Shortener App</h3>
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
              <h3>Blog API - Content Management Platform</h3>
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
