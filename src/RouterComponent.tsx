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
                <Route
                    path={INDEX}
                    element={
                        <>
                            <Profile />
                            <Experiences />
                            <Skills />
                            <Projects />
                            <Academics />
                        </>
                    }
                />
                <Route
                    path={EXPERIENCES}
                    element={
                        <div className="mt-header">
                            <Experiences />
                        </div>
                    }
                />
                <Route
                    path={SKILLS}
                    element={
                        <div className="mt-header">
                            <Skills />
                        </div>
                    }
                />
                <Route
                    path={PROJECTS}
                    element={
                        <div className="mt-header">
                            <Projects />
                        </div>
                    }
                />
                <Route
                    path={ACADEMICS}
                    element={
                        <div className="mt-header">
                            <Academics />
                        </div>
                    }
                />
                <Route
                    path={CONTACT_ME}
                    element={
                        <div className="mt-header">
                            <ContactMe />
                        </div>
                    }
                />
            </Routes>
        </>
    );
};

export default RouterComponent;
