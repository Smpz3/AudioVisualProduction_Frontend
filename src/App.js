import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <NavBar/> 
      <div classname="container"> 
    </div>
</BrowserRouter>
 
  );
}


export default App;
