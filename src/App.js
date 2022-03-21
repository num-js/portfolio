import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './styles.css';
import Header from './components/Header/Header';
import RouterComponent from './RouterComponent';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <RouterComponent />
            <Footer />
        </BrowserRouter>
    );
}

export default App;