// src/components/PlaceholderPage.js
import React from 'react';

const PlaceholderPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Coming Soon...</h1>
      <p style={styles.text}>Our students page is under construction. Please check back soon!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default PlaceholderPage;
