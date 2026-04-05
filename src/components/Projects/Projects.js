import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import projectsData from '../../assets/data/projectsData.json';
import useScreenWidth from '../../hooks/useScreenWidth';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../helpers/routesURL';
import scrollToPosition from '../../helpers/scrollToPosition';
import { SectionHeader, SkillsView } from '../SharedComponents';
import AnimatedHoverButton from '../shared/AnimatedHoverButton';

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
                            <div className="mx-auto flex overflow-hidden rounded-md border-2 border-primary bg-surface-card">
                                <button
                                    className={`py-1 px-4 text-white focus:outline-none transition-colors ${projectType === "" ? 'bg-primary text-background' : 'hover:bg-white/5'}`}
                                    onClick={() => setProjectType('')}
                                > &nbsp; &nbsp;  All &nbsp; &nbsp; </button>
                                <button
                                    className={`py-1 px-4 text-white focus:outline-none transition-colors border-l border-white/10 ${projectType === "front-end" ? 'bg-primary text-background' : 'hover:bg-white/5'}`}
                                    onClick={() => setProjectType('front-end')}
                                >FrontEnd</button>
                                <button
                                    className={`py-1 px-4 text-white focus:outline-none transition-colors border-l border-white/10 ${projectType === "back-end" ? 'bg-primary text-background' : 'hover:bg-white/5'}`}
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
                                    projectsData?.filter((projectData) => (projectData?.isVisible !== false && projectData?.type?.includes(projectType)))?.map((projectData, index) => {
                                        const isLeftSide = index % 2 == 0;
                                        if (!showAllProjects && index >= 3) {
                                            return;
                                        }
                                        return (
                                            <div key={index} className={`-mb-36 ${isLeftSide ? 'mr-24' : 'ml-24'}`}>
                                                <div className="w-full p-5 bg-cover rounded-lg cursor-pointer h-96 mr-30" style={{ backgroundImage: `url(${projectData.image})` }}>
                                                </div>

                                                <div
                                                    className={`relative -top-52 w-80 rounded-2xl border border-white/[0.18] bg-surface-glass/90 p-5 text-white shadow-glass backdrop-blur-xl ${
                                                        isLeftSide ? 'left-32 ml-auto' : '-left-32'
                                                    }`}
                                                >
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <h1 className="title-font mb-1 text-xl font-medium drop-shadow-[0_0_5px_rgba(0,0,0,0.9)]">
                                                                {projectData.name}
                                                            </h1>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            {/* {projectData?.demo && <span>
                                                                <a target="_BLANK" href={projectData?.demo}>
                                                                    <img alt="numan ahmed" src="../icons/demo.png" width="30" />
                                                                </a>
                                                            </span>} */}
                                                            {projectData.repo && <span className="ml-4">
                                                                <a target="_BLANK" href={`${projectData.repo}`}>
                                                                    <img alt="numan ahmed" src="../icons/github-small.svg" width="30" />
                                                                </a>
                                                            </span>}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center border-b border-white/10"></div>

                                                    <p className="my-2 leading-relaxed text-white text-sm">
                                                        {projectData.description}
                                                    </p>

                                                    <div className="mt-2">
                                                        {<SkillsView skills={projectData.usedTech} />}
                                                    </div>

                                                    {/* <div className="flex items-center border-b-2 border-gray-600 mt-4"></div> */}

                                                    {projectData?.demo && <span>
                                                        <a target="_BLANK" href={projectData?.demo}>
                                                            <AnimatedHoverButton btnTxt={'View Demo'} btnClass={"mt-3"} />
                                                        </a>
                                                    </span>}

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
                            <div className="order-1 rounded-lg border border-primary/40 bg-surface-glass/90 px-4 py-2 shadow-primary-glow backdrop-blur-md"
                                style={{ width: 'fit-content' }}
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