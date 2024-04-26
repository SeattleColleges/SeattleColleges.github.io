import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;