import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import ProfilePicture from './components/Profile/ProfilePicture/ProfilePicture';
import ProfileText from './components/Profile/ProfileText/ProfileText';
import Skills from './components/Skills/Skills';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <ProfileText />
                <ProfilePicture />
            </div>
            <Skills />
        </BrowserRouter>
    );
}

export default App;