import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/App.css';
import Menu from './components/Menu';

import Footer from './components/Footer';
import Store from './pages/Store';
import Characters from './pages/Characters';
import Register from './pages/admin/Register';
import Login from './pages/admin/Login';
import Shows from './pages/Shows';
import Audios from './pages/Audios';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import UpdateProfile from './pages/profile/UpdateProfile';



const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='container'>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages/shows' element={<Shows />} />
            <Route path='/pages/audios' element={<Audios />} />
            <Route path='/pages/characters' element={<Characters />} />
            <Route path='/pages/store' element={<Store />} />
            <Route path='/pages/admin/register' element={<Register />} />
            <Route path='/pages/admin/login' element={<Login />} />
            <Route element={<ProtectedRoute redirectPath='/pages/admin/login' />}>
              <Route path='/pages/usersList' element={<UsersList />} />
              <Route path='/pages/profile' element={<Profile />} />
              <Route path='/pages/profile/edit/:userID' element={<UpdateProfile />} />
            </Route>
            <Route path="*" element={<div><p> 404 Not Found </p></div>} />
          </Routes >
        </div>
        <div className="page-container">
          <div className="content-wrap">

          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>

  );
}


export default App;
