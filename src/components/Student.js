// src/components/Student.js
import React from 'react';

const Student = ({ name, photo, about, email, github, linkedin }) => {
  return (
    <div style={styles.container}>
      <img src={require('../images/students/'+photo)} alt={name} style={styles.photo} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.about}>{about}</p>
      <p style={styles.contact}><a href={`mailto:${email}`} style={styles.link}>{email}</a></p>
      <div style={styles.socialLinks}>
        {github && <a href={github} style={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {linkedin && <a href={linkedin} style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
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
    textAlign: 'center',
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
  },
  name: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  about: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  contact: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Student;
