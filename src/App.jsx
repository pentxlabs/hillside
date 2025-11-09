import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import PageLayout from './components/PageLayout';
import './App.css';

function AppContent() {
  return (
    <div className="App">
      <ScrollProgressBar />
      <PageLayout />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
