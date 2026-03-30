import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Academics from './components/Academics/Academics';
import ContactMe from './components/ContactMe/ContactMe';
import Experiences from './components/Experiences/Experiences';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { ACADEMICS, CONTACT_ME, EXPERIENCES, INDEX, PROJECTS, SKILLS } from './helpers/routesURL';

const RouterComponent = () => {
    return (
        <>
            <Routes>
                <Route path={INDEX} element={
                    <>
                        <Profile />
                        <Experiences />
                        <Skills />
                        <Projects />
                        <Academics />
                        {/* <ContactMe /> */}
                    </>
                } />
                <Route path={EXPERIENCES} element={
                    <div className="nmt-70">
                        <Experiences />
                    </div>
                } />
                <Route path={SKILLS} element={
                    <div className="nmt-70">
                        <Skills />
                    </div>
                } />
                <Route path={PROJECTS} element={
                    <div className="nmt-70">
                        <Projects />
                    </div>
                } />
                <Route path={ACADEMICS} element={
                    <div className="nmt-70">
                        <Academics />
                    </div>
                } />
                <Route path={CONTACT_ME} element={
                    <div className="nmt-70">
                        <ContactMe />
                    </div>
                } />
            </Routes>
        </>
    );
}

export default RouterComponent;
