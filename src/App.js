import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import TextProfile from './components/text-profile/text-profile';
import VisualProfile from './components/visual-profile/visual-profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <TextProfile />
                <VisualProfile />
            </div>
        </BrowserRouter>
    );
}

export default App;