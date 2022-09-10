import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App