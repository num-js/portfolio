import React from 'react';
import { Route, Switch } from 'react-router';
import ProfilePicture from './components/Profile/ProfilePicture/ProfilePicture';
import ProfileText from './components/Profile/ProfileText/ProfileText';
import Skills from './components/Skills/Skills';
import { INDEX, SKILLS } from './helpers/routesURL';

const RouterComponent = () => {
    return (
        <>
            <Switch>
                <Route exact path={INDEX}>
                    <div className="App">
                        <ProfileText />
                        <ProfilePicture />
                    </div>
                </Route>
                <Route exact path={SKILLS}>
                    <div className="App">
                        <Skills />
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default RouterComponent;