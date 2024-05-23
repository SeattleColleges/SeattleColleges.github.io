// src/pages/PortfolioPage.js
import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    screenshots: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    about: 'This is a brief description of Project One.',
    liveDemo: 'https://example.com/project-one',
    github: 'https://github.com/user/project-one',
  },
  {
    title: 'Project Two',
    screenshots: ['https://via.placeholder.com/150'],
    video: '',
    about: 'This is a brief description of Project Two.',
    liveDemo: 'https://example.com/project-two',
    github: 'https://github.com/user/project-two',
  },
];

const PortfolioPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}> Portfolio Page</h1>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '24px',
  },
};

export default PortfolioPage;
