import React from 'react';
import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navigation from './pages/Navigation';
import BlogForm from './pages/BlogForm';
import Blogs from './pages/Blogs';
import Contactus from './pages/Contactus';
import Destination from './pages/Destination';
import History from './pages/History';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Signup from './pages/Signup';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return(
    <div>
        <Navigation />
        <Routes>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/Destination' element={<Destination />}/>
            <Route path='/Blogs' element={<Blogs />}/>
            <Route path='/BlogForm' element={<BlogForm />}/>
            <Route path='/History' element={<History />}/>
            <Route path='/Contactus' element={<Contactus />}/>
            <Route path='/Payment' element={<Payment />}/>
        </Routes>
        <Footer />
    </div>
);
}

export default App;
