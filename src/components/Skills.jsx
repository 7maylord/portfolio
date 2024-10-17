import React from 'react';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p> I am proficient in a variety of programming languages and frameworks, with a focus on backend development.
              My experience includes building scalable web applications, working with databases, and deploying applications
              to the cloud. I also bring a problem-solving mindset from my civil engineering background.
           .</p>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>60%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>NestJS</span>
                <span>50%</span>
              </div>
              <div className="line nestjs"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MySQL</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
