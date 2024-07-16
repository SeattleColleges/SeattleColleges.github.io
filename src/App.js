import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'
import Contact from './pages/Contact'
import About from './pages/About'
import PortfolioPage from './pages/PortfolioPage'
import StudentsPage from './pages/StudentsPage'
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-G27MNF49YJ");
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Main />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Portfolio' element={<PortfolioPage />} />
            <Route path='/Students' element={<StudentsPage />} />
        </Routes>
    </Router>
  );
}

export default App;