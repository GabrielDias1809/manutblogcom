import React from 'react';
import './App.css';
import Home from './components/Home';
import QuemSou from './components/QuemSou';
import Plans from './components/Plans';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Home />
      <QuemSou />
      <Plans />
      <Feedbacks />
      <Footer />
    </>
  );
}

export default App;
