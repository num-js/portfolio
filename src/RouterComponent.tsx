import { Routes, Route } from 'react-router-dom';
import Academics from './components/Academics/Academics';
import ContactMe from './components/ContactMe/ContactMe';
import Experiences from './components/Experiences/Experiences';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Seo from './components/Seo/Seo';
import { PERSON_PRIMARY_NAME, PERSON_SHORT_NAME } from './config/seo';
import { ACADEMICS, CONTACT_ME, EXPERIENCES, INDEX, PROJECTS, SKILLS } from './helpers/routesURL';

const RouterComponent = () => {
    return (
        <>
            <Seo />
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
                            <h1 className="sr-only">
                                {PERSON_PRIMARY_NAME} — work experience as a software engineer and full stack developer
                            </h1>
                            <Experiences />
                        </div>
                    }
                />
                <Route
                    path={SKILLS}
                    element={
                        <div className="mt-header">
                            <h1 className="sr-only">
                                {PERSON_SHORT_NAME} — technical skills, frontend engineer and full stack tech stack
                            </h1>
                            <Skills />
                        </div>
                    }
                />
                <Route
                    path={PROJECTS}
                    element={
                        <div className="mt-header">
                            <h1 className="sr-only">
                                {PERSON_PRIMARY_NAME} — software engineering and web development projects
                            </h1>
                            <Projects />
                        </div>
                    }
                />
                <Route
                    path={ACADEMICS}
                    element={
                        <div className="mt-header">
                            <h1 className="sr-only">{PERSON_SHORT_NAME} — education and academic background</h1>
                            <Academics />
                        </div>
                    }
                />
                <Route
                    path={CONTACT_ME}
                    element={
                        <div className="mt-header">
                            <h1 className="sr-only">Contact {PERSON_PRIMARY_NAME} — software engineer</h1>
                            <ContactMe />
                        </div>
                    }
                />
            </Routes>
        </>
    );
};

export default RouterComponent;
