import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers/Careers';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import BlogLive from './pages/Blogs/BlogLive';

function App() {


  return (
      <div className="App">
    <Router>
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<BlogLive />} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;