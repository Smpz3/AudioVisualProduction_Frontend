import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/shows' element={<Shows />} />
        <Route path='/charcters' element={<Characters />} />
        <Route path='/store' element={<Store />} />
      </Routes >
      <div className="page-container">
        <div className="content-wrap">

        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}


export default App;
