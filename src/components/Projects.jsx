import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Colorstark",
      description:
        "ColorStark is a decentralized, on-chain game built on StarkNet for Starknet Africa Cairo Bootcamp IV, where players match colored bottles to a target configuration to earn points.",
      technologies: "NextJs, UI/UX, Web3, Cairo",
      githubLink: "https://github.com/7maylord/colorstark",
      liveLink: "https://colorstark.vercel.app/",
      image: null,
    },
    {
      title: "Prism finance",
      description:
        "A modern decentralized, AI-Powered, Multi-Tier DeFi Lending Protocol.",
      technologies: "NextJs, Solidity Smart Contracts, DeFi, TypeScript",
      githubLink: "https://github.com/7maylord/prism-finance",
      liveLink: "https://prism-finance-ten.vercel.app/",
      image: null,
    },
    {
      title: "Paytroix",
      description:
        "PayTroix is designed to transform traditional payroll systems into decentralized, transparent, and efficient Web3 solutions. Whether you're a startup, enterprise, or DAO, PayTroix provides the tools you need to manage payroll, benefits, and financial wellness programs seamlessly on the blockchain.",
      technologies:
        "NextJs, Fast Api, Supabase,Solidity Smart Contracts, DeFi, TypeScript",
      githubLink: "https://github.com/7maylord/Paytroix",
      liveLink: "https://paytroix.xyz/",
      image: null,
    },
    {
      title: "Lien Markets",
      description:
        "AI-powered prediction markets with autonomous settlement, dispute resolution, and real-time odds — built on Chainlink CRE, Gemini AI, and World ID.",
      technologies: " Next.js, Solidity, Chainlink CRE, Tailwind",
      githubLink: "https://github.com/7maylord/lien-markets",
      liveLink: "https://lien-markets.vercel.app/",
      image: null,
    },
    {
      title: "BitRaise",
      description:
        "A comprehensive Clarity Crowdfunding DApp seamlessly migrated into a modern Next.js App Router structure.",
      technologies: "Next.js, React, Clarity, TypeScript",
      githubLink: "https://github.com/7maylord/bit-raise",
      liveLink: "https://bit-raise.vercel.app",
      image: null,
    },
    {
      title: "LaunchGuard",
      description:
        "FHE-powered encrypted auction platform with a Next.js frontend, integrating Turbopack and on-chain encryption.",
      technologies: "FHE, NodeJs, Solidity, Uniswap V4 hooks",
      githubLink: "https://github.com/7maylord/LaunchGuard",
      liveLink: "#",
      image: null,
    },
    {
      title: "UrlChop - URL Shortener App",
      description:
        "Developed a URL shortening service using Node.js and TypeScript with features like analytics tracking, and QR code generation.",
      technologies: "React, Vite, TypeScript, Redis, MongoDB",
      githubLink: "https://github.com/7maylord/urlchop",
      liveLink: "https://urlchop.vercel.app",
      image: null,
    },
    {
      title: "Giftzap",
      description:
        "A digital gifting platform designed to simplify presenting, managing, and sending tokens of appreciation seamlessly.",
      technologies: "React, Next.js, Node.js, Solidity, IPFS, NFT",
      githubLink: "https://github.com/7maylord/giftzap",
      liveLink: "https://giftzap.vercel.app",
      image: null,
    },
  ];

  const isValidLiveLink = (link) => {
    return link && link !== "#" && link.startsWith("http");
  };

  const DefaultProjectImage = () => (
    <div
      className="default-project-image"
      style={{
        width: "100%",
        height: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-glass-heavy)",
        borderRadius: "12px",
        border: "1px solid var(--border-glass)",
        marginBottom: "20px",
      }}
    >
      <FaCode size={50} style={{ color: "var(--text-secondary)", marginBottom: "10px" }} />
      <span style={{ color: "var(--text-secondary)", fontSize: "14px", fontWeight: "500" }}>
        Live Preview Unavailable
      </span>
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
              effect: "slide",
            },
            768: {
              slidesPerView: 2,
              effect: "slide",
            },
            1024: {
              slidesPerView: 3,
              effect: "coverflow",
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
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : isValidLiveLink(project.liveLink) ? (
                    <div
                      className="iframe-preview-container"
                      style={{
                        width: "100%",
                        height: "220px",
                        overflow: "hidden",
                        position: "relative",
                        borderRadius: "12px",
                        border: "1px solid var(--border-glass)",
                        marginBottom: "20px",
                        background: "var(--bg-dark)",
                      }}
                    >
                      <iframe
                        src={project.liveLink}
                        title={`Live preview of ${project.title}`}
                        loading="lazy"
                        style={{
                          width: "400%",
                          height: "400%",
                          transform: "scale(0.25)",
                          transformOrigin: "0 0",
                          border: "none",
                          pointerEvents: "none",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          background: "#ffffff",
                        }}
                      />
                    </div>
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
