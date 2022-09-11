import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import projectsData from '../../assets/data/projectsData.json';
import useScreenWidth from '../../hooks/useScreenWidth';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';
import { generateRandomNumber } from '../../helpers/generateNumber';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../helpers/routesURL';
import scrollToPosition from '../../helpers/scrollToPosition';
import { SectionHeader } from '../SharedComponents';

const Projects = () => {
    const screenSize = useScreenWidth();

    const [showAllProjects, setShowAllProjects] = useState(false);
    const [projectType, setProjectType] = useState("");

    useEffect(() => {
        setShowAllProjects(window?.location?.href?.includes("projects"))
        scrollToPosition();
    }, []);

    return (
        <>
            <section className="mb-20 text-gray-600 body-font lg:mt-10">
                <SectionHeader
                    sectionTitle="Projects"
                />


                <div>
                    {showAllProjects && (
                        <div className="flex flex-col w-full pt-8 text-center">
                            <div className="flex mx-auto overflow-hidden border-2 rounded nborder-pink">
                                <button
                                    className={`py-1 px-4 text-white focus:outline-none ${projectType === "" ? 'nbg-pink' : ''}`}
                                    onClick={() => setProjectType('')}
                                > &nbsp; &nbsp;  All &nbsp; &nbsp; </button>
                                <button
                                    className={`py-1 px-4 text-white focus:outline-none ${projectType === "front-end" ? 'nbg-pink' : ''}`}
                                    onClick={() => setProjectType('front-end')}
                                >FrontEnd</button>
                                <button
                                    className={`py-1 px-4 text-white focus:outline-none ${projectType === "back-end" ? 'nbg-pink' : ''}`}
                                    onClick={() => setProjectType('back-end')}
                                >BackEnd</button>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    {
                        screenSize === 'large' ? (
                            <div className="container px-10 mx-auto mt-8 lg:px-60">
                                {
                                    projectsData?.filter((projectData) => (projectData?.type?.includes(projectType)))?.map((projectData, index) => {
                                        const isLeftSide = index % 2 == 0;
                                        if (!showAllProjects && index >= 3) {
                                            return;
                                        }
                                        return (
                                            <div key={index} className={`-mb-36 ${isLeftSide ? 'mr-32' : 'ml-32'}`}>
                                                <div className="w-full p-5 bg-cover rounded-lg cursor-pointer h-96 mr-30" style={{ backgroundImage: `url(${projectData.image})` }}>
                                                </div>

                                                <div className={`bg-gray-800 p-5 rounded-lg min-h-64 w-80 relative -top-52 glass-div ${isLeftSide ? 'ml-auto left-32' : '-left-32'}`}
                                                    style={{ boxShadow: '0 2px 5px 0 rgb(0 0 0 / 100%), 0 2px 10px 0 rgb(0 0 0 / 100%)' }}
                                                >
                                                    <h1 className="mb-1 text-2xl font-medium text-center title-font ncolor-pink">{projectData.name}</h1>

                                                    {!projectData.repo && <span title="company" style={{ position: 'absolute', top: '8px', left: '91%' }}>
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink w-5 h-5" color="#ff0052" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                                                    </span>}

                                                    <p className="my-2 leading-relaxed text-white">
                                                        {projectData.description}
                                                    </p>

                                                    <div className="my-2">
                                                        {
                                                            projectData.usedTech.map((tech, index) => (
                                                                <SkillDiv key={index} skill={tech} />
                                                            ))
                                                        }
                                                    </div>

                                                    <div className="flex items-center border-b-2 border-gray-600"></div>

                                                    <div className="flex items-center justify-around mt-2">
                                                        {projectData?.demo && <span>
                                                            <a target="_BLANK" href={projectData?.demo}>
                                                                <img alt="numan ahmed" src="../icons/demo.png" width="80%" />
                                                            </a>
                                                        </span>}
                                                        {projectData?.code && <span>
                                                            <a target="_BLANK" href={projectData?.code}>
                                                                <img alt="numan ahmed" src="../icons/codes.png" width="80%" />
                                                            </a>
                                                        </span>}
                                                        {projectData.repo && <span>
                                                            <a target="_BLANK" href={`${projectData.repo}`}>
                                                                <img alt="numan ahmed" src="../icons/github-small.svg" width="80%" />
                                                            </a>
                                                        </span>}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            projectsData?.filter((projectData) => (projectData?.type?.includes(projectType)))?.map((projectData, index) => {
                                if (!showAllProjects && index >= 3) {
                                    return;
                                }

                                return (
                                    <SingleProject key={index} projectData={projectData} />
                                )
                            })
                        )
                    }
                </div>
                <div>
                    {!showAllProjects && (
                        <div align="center">
                            <div className="order-1 px-4 py-2 rounded-lg shadow-xl"
                                style={{ boxShadow: `0px 0px 15px 1px rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)})`, width: 'fit-content' }}
                            >
                                <Link
                                    to={PROJECTS}
                                    onClick={() => scrollToPosition()}
                                >
                                    <span className="text-white text-l">
                                        More Projects
                                    </span>
                                </Link>
                            </div>

                            <div className="flex justify-between" style={{ width: '210px', position: 'relative', top: '-10px' }}>
                                <div style={{ position: '', left: '' }}>
                                    <img src="../icons/left-spiral-arrow.gif" alt="left-arrow" className="h-12" />
                                </div>
                                <div style={{ position: '', left: '' }}>
                                    <img src="../icons/right-spiral-arrow.gif" alt="left-arrow" className="h-12" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Projects;