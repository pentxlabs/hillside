import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Service from './pages/Service';
import FunCity from './pages/FunCity';
import Villas from './pages/Villas';
import WeddingHires from './pages/WeddingHires';
import Residencies from './pages/Residencies';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <ScrollProgressBar />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/funcity" element={<FunCity />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/wedding-hires" element={<WeddingHires />} />
            <Route path="/residencies" element={<Residencies />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
