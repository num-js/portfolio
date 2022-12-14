import React from 'react';
import { Route, Switch } from 'react-router';
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
            <Switch>
                <Route exact path={INDEX}>
                    <Profile />
                    <Experiences />
                    <Skills />
                    <Projects />
                    <Academics />
                    {/* <ContactMe /> */}
                </Route>
                <Route exact path={EXPERIENCES}>
                    <div class="nmt-70">
                        <Experiences />
                    </div>
                </Route>
                <Route exact path={SKILLS}>
                    <div class="nmt-70">
                        <Skills />
                    </div>
                </Route>
                <Route exact path={PROJECTS}>
                    <div class="nmt-70">
                        <Projects />
                    </div>
                </Route>
                <Route exact path={ACADEMICS}>
                    <div class="nmt-70">
                        <Academics />
                    </div>
                </Route>
                <Route exact path={CONTACT_ME}>
                    <div class="nmt-70">
                        <ContactMe />
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default RouterComponent;