// src/App.js
import React from 'react';
import PortfolioPage from './pages/PortfolioPage';
import PlaceholderPage from './components/PlaceholderPage';

function App() {
  return (
    <div className="App">
      {/* Uncomment the line below to view the placeholder page */}
      {/* <PlaceholderPage /> */}
      <PortfolioPage />
    </div>
  );
}

export default App;

