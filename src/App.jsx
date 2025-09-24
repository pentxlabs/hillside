import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
