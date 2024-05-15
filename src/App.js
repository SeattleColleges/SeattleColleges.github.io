import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Main />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;