import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dex from '../pages/Dex'
import Details from './../pages/Details';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/dex' element={<Dex/>} />
        <Route path='/details/:id'element={<Details/>} />

    </Routes>
    </BrowserRouter>
  );};
export default Router;
