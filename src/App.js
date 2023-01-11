import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import SignUp from './components/pages/Signup';
import Footer from './components/Footer';

function App() {
    return ( 
        <>
        <Router >
        <Navbar />
        <Routes >
        <Route exact path="/" element={<Home /> } /> 
        <Route exact path="/contact" element={<Contact /> }/>
        <Route exact path="/services" element={<Services /> }/>
        <Route exact path="/sign-up" element={<SignUp /> }/>
        </Routes> 
        <Footer />
        </Router> 
        </>
    );
}

export default App;