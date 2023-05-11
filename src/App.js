import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<Wrapper_Checkout />} />
          <Route path="/" element={<Wrapper_Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

function Wrapper_Checkout() {
  return (
    <div>
      <Header />
      <Checkout />
    </div>
  );
}

function Wrapper_Home() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
