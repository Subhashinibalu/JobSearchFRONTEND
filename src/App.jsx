
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Job from './Pages/Job';
import Search from './Pages/Search';
import Login from './Pages/Login';
import Register from './Pages/Register';


import TrackApplication from './Pages/TrackApplication';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <div>
      <ToastContainer/>
    </div>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/job' element={<Job/>}/>
      <Route path='/track' element={<TrackApplication/>}/>
      <Route path='/search' element={<Search/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>} />
    </Routes>
 
    </BrowserRouter>
    </>
  );
};

export default App;