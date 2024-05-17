// src/App.js
import React from 'react';
import StudentsPage from './pages/StudentsPage';
import PlaceholderPage from './components/PlaceholderPage';

function App() {
  return (
    <div className="App">
      {/* Uncomment the line below to view the placeholder page */}
      {/* <PlaceholderPage /> */}
      <StudentsPage />
    </div>
  );
}

export default App;

