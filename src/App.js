import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/main.css';
import Menu from './components/Menu';

import Footer from './components/Footer';
import Store from './pages/Store';
import Characters from './pages/Characters';
import Register from './pages/admin/Register';
import Login from './pages/admin/Login';
import Shows from './pages/Shows';




function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/pages/shows' element={<Shows />} />
        <Route path='/pages/characters' element={<Characters />} />
        <Route path='/pages/store' element={<Store />} />
        <Route path='/pages/admin/register' element={<Register />} />
        <Route path='/pages/admin/login' element={<Login />} />
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
