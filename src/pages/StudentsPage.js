// src/pages/StudentsPage.js
import React from 'react';
import Student from '../components/Student';

const students = [
  {
    name: 'Alice Johnson',
    photo: 'anon-profile-image.png',
    about: 'Alice is a computer science major with a passion for AI.',
    email: 'alice@example.com',
    github: 'https://github.com/alice',
    linkedin: 'https://linkedin.com/in/alice',
  },
  {
    name: 'Bob Smith',
    photo: 'Bennett-Fife.png',
    about: 'Bob is a software engineer who loves open source projects.',
    email: 'bob@example.com',
    github: 'https://github.com/bob',
    linkedin: 'https://linkedin.com/in/bob',
  },
];

const StudentsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Students</h1>
      {students.map((student, index) => (
        <Student key={index} {...student} />
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
    textAlign: 'center',
  },
};

export default StudentsPage;
