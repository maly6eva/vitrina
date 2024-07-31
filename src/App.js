
import './App.css';
import React, {useState, useEffect} from 'react'
import {Header} from './/componts/Header';
import {Footer} from './/componts/Footer';
import {Shop} from './/componts/Shop';


function App() {
    return (
        <>
            <Header />
            <Shop />
            <Footer />
        </>
    )
}

export default App;
