import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers/Careers';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import BlogLive from './pages/Blogs/BlogLive';
import Terms from './pages/Company/Terms';
import PrivacyPolicy from './pages/Company/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {


  return (
      <div className="App">
    <Router>
        <Routes>
           <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<BlogLive />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;