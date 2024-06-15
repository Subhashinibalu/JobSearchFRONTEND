
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Job from './Pages/Job';
import Search from './Pages/Search';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TrackApplication from './Pages/TrackApplication';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/job' element={<Job/>}/>
      <Route path='/track' element={<TrackApplication/>}/>
      <Route path='/search' element={<Search/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;