import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Seached from './Seached';
import { Route, Routes } from 'react-router-dom';


function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Seached />} />
        </Routes>
    );
}

export default Pages;