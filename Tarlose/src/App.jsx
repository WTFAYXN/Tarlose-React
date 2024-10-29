import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers/Careers';

function App() {


  return (
      <div className="App">
    <Router>
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="career" element={<Careers />} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;