import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import ProfilePicture from './components/Profile/ProfilePicture/ProfilePicture';
import ProfileText from './components/Profile/ProfileText/ProfileText';
import Skills from './components/Skills/Skills';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <ProfileText />
                <ProfilePicture />
            </div>
            <Skills />
        </BrowserRouter>
    );
}

export default App;