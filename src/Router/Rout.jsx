import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../UI/Pages/Home/Home';
import SingleProduct from '../UI/Pages/SingleProduct/SingleProduct';
import Login from '../UI/Pages/Login/Login';
import Register from '../UI/Pages/Register/Register';

export default function Rout() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product' element={<SingleProduct />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter >
        </>
    )
}
