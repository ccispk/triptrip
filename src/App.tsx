import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Prepare from './Pages/Prepare';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/prepare" element={<Prepare/>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
