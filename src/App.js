import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import HomePage from './pages/HomePage';
// import HowItWorks from './pages/HowItWorks';
// import Technology from './pages/Technology';
// import Values from './pages/Values';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/values" element={<Values />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
