import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './styles.css';
import Header from './components/Header/Header';
import RouterComponent from './RouterComponent';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <RouterComponent />
        </BrowserRouter>
    );
}

export default App;