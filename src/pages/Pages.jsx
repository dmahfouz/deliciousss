import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Seached from './Seached';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence >
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Seached />} />
                <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
        </AnimatePresence>
    );
}

export default Pages;