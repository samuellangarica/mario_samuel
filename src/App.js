import React from 'react';
import logo from './logo_up.png';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurProjects from './screens/OurProjects';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Resumes from './screens/Resumes';

function App() {
  return (
    
      <div className="App">
        <Router>
          <Navbar />
          <div className='app-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-projects" element={<OurProjects />} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/resumes" element={<Resumes/>} />
            </Routes>
          </div>
        </Router>
        
      </div>
    
    
  );
}

export default App;