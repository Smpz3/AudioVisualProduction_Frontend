import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Characters from './pages/Characters';
import Store from './pages/Store';
import Shows from './pages/Shows';
import Audios from './pages/Audios';
import Home from './pages/Home';
import UsersList from './pages/admin/UsersList';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/profile/Profile';
import UpdateProfile from './pages/profile/UpdateProfile';
import Register from './pages/admin/Register';
import Login from './pages/admin/Login';
import UserDetails from './pages/admin/UserDetails';


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='container'>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shows' element={<Shows />} />
            <Route path='/audios' element={<Audios />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/store' element={<Store />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit/:userID' element={<UpdateProfile />} />
            <Route element={<ProtectedRoute redirectPath='/login' />}>
              <Route path='/usersList' element={<UsersList />} />
              <Route path='/usersList/userDetails/:userID' element={<UserDetails />} />
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
