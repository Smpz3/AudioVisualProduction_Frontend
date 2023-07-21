import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Store from './pages/Store';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* <Route path='/' element={<Shows />} />
        <Route path='/' element={<Characters />} /> */}
        <Route path='/pages/store' element={<Store />} />
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
