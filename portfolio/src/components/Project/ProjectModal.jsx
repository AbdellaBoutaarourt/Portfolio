import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.5s ease;
`;

const ModalContent = styled.div`
  background: rgba(0, 0, 0, 1);
  padding: 2rem;
  border-radius: 1rem;
  width: 80%;
  max-width: 800px;
  position: relative;
  animation: ${fadeIn} 0.4s ease-out;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #4caf50 #f1f1f1;
  max-height: 90vh;
  overflow: overlay

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4caf50;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #000000;
    border-radius: 8px;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  h2 {
    margin-top: 0;
  }

  img {
    width: 720px;
    height: 350px;
    object-fit: contain;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    line-height: 1.6;
  }

  .demo-btn {
    display: inline-block;
    background-color: #4caf50;
    color: white;
    padding: 12px 24px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .image-carousel{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .demo-btn:hover {
    background-color: #45a049;
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #bbb;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background-color: #4caf50;
  }

  .skills {
    margin-top: 2rem;
  }

  .skills h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill {
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    width: 90%;
    max-width: 90%;
    .close-btn {
      font-size: 1.2rem;
    }
    .demo-btn {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
`;

export function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeydown);

    const interval = setInterval(() => {
      if (project.images && project.images.length > 0) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      clearInterval(interval);
    };
  }, [onClose, project.images]);

  const hasImages = project.images && project.images.length > 0;

  const handleImageChange = (index) => {
    if (index < 0) {
      setCurrentImageIndex(project.images.length - 1);
    } else if (index >= project.images.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(index);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </span>
        <h2>{project.title}</h2>

        <div className="image-carousel">
          {project.videoSrc ? (
            <video
              src={project.videoSrc}
              controls
              autoPlay
              loop
              muted
              style={{
                width: "720px",
                height: "350px",
                objectFit: "contain",
                borderRadius: "0.5rem",
                marginTop: "1rem",
              }}
            />
          ) : (
            <>
              <img
                src={
                  hasImages
                    ? project.images[currentImageIndex]
                    : project.imageSrc || "fallback-image-url.jpg"
                }
                alt={project.title}
              />
              {hasImages && (
                <div className="dots">
                  {project.images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      onClick={() => handleImageChange(index)}
                      aria-label={`Select image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <h3 style={{ fontSize: "1.5em" }}>Description</h3>
        <p>{project.fullDescription}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="skills">
            <h3>Skills Used</h3>
            <div className="skills-list">
              {project.technologies.map((skill, index) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.authentication && (
          <div className="auth-info">
            <h3>Authentication Info</h3>
            <p>
              <strong>Email:</strong> {project.authentication.email}
            </p>
            <p>
              <strong>Password:</strong> {project.authentication.password}
            </p>
          </div>
        )}

        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button className="demo-btn">Try It Live</button>
          </a>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
