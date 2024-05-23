import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'
import Contact from './pages/Contact'
import About from './pages/About'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Main />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Portfolio' element={<PortfolioPage />} />
        </Routes>
    </Router>
  );
}

export default App;