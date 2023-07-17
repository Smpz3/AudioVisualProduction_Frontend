import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 

      
      <div className="page-container">
        <div className="content-wrap">
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}


export default App;
