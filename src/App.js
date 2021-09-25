import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import RouterComponent from './RouterComponent';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <RouterComponent />
            </div>
        </BrowserRouter>
    );
}

export default App;