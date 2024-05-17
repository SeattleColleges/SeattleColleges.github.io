// src/components/Project.js
import React from 'react';

const Project = ({ title, screenshots, video, about, liveDemo, github }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.screenshots}>
        {screenshots.map((image, index) => (
          <img key={index} src={image} alt={`Screenshot ${index + 1}`} style={styles.image} />
        ))}
      </div>
      {video && (
        <div style={styles.video}>
          <iframe
            src={video}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.videoIframe}
          ></iframe>
        </div>
      )}
      <p style={styles.about}>{about}</p>
      <div style={styles.links}>
        {liveDemo && (
          <a href={liveDemo} style={styles.link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {github && (
          <a href={github} style={styles.link} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  screenshots: {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
  },
  image: {
    width: '100px',
    height: 'auto',
    borderRadius: '4px',
  },
  video: {
    marginBottom: '8px',
  },
  videoIframe: {
    width: '100%',
    height: '315px',
  },
  about: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  links: {
    display: 'flex',
    gap: '8px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Project;
