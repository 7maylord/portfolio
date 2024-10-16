import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="service-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">API Development</div>
              <p>Designing and implementing RESTful APIs services to allow front-end applications to communicate with the server</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-database"></i>
              <div className="text">Database Management</div>
              <p>Designing, optimizing, and managing databases (SQL and NoSQL) while ensuring data integrity and security.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-file-alt"></i>
              <div className="text">Documentation</div>
              <p>Writing documentation for APIs, system architecture, and deployment processes to assist other developers and stakeholders</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">Performance Optimization</div>
              <p>Analyzing and optimizing the performance of applications, including server response times and database queries.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-lock"></i>
              <div className="text">Security Implementation</div>
              <p>Implementing security best practices, including rate limiting, data encryption, logging and monitoring, and data sanitation.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-clipboard-list"></i>
              <div className="text">Project Management</div>
              <p>Defining project scope and timelines while implementing agile methodologies to facilitate iterative development and effective team collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
