import React from 'react';
import SingleProject from './SingleProject';
import projectsData from '../../assets/data/projectsData.json';
import useScreenWidth from '../../hooks/useScreenWidth';

const Projects = () => {
    const screenSize = useScreenWidth();

    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Projects</h1>
                </div>

                {
                    screenSize === 'large' ? (
                        <div class="container px-10 lg:px-60 mt-20 mx-auto">
                            {
                                projectsData.map((projectData, index) => {
                                    const isLeftSide = index % 2 == 0;
                                    return (
                                        <div className={`-mb-36 ${isLeftSide ? 'mr-32' : 'ml-32'}`}>
                                            <div class="p-5 rounded-lg h-96 w-full bg-cover mr-30 cursor-pointer" style={{ backgroundImage: `url(${projectData.image})` }}>
                                            </div>

                                            <div class={`bg-gray-800 p-5 rounded-lg min-h-64 w-80 relative -top-52 glass-div ${isLeftSide ? 'ml-auto left-32' : '-left-32'}`}
                                                style={{ boxShadow: '0 2px 5px 0 rgb(0 0 0 / 100%), 0 2px 10px 0 rgb(0 0 0 / 100%)' }}
                                            >
                                                <h1 class="text-pink-500 text-2xl title-font font-medium mb-1 text-center">{projectData.name}</h1>

                                                <p class="leading-relaxed text-white my-2">
                                                    {projectData.description}
                                                </p>

                                                <div class="my-2">
                                                    {
                                                        projectData.usedTech.map((tech, index) => (
                                                            <span key={index} class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-indigo-100 bg-pink-700 rounded">
                                                                {tech}
                                                            </span>
                                                        ))
                                                    }
                                                </div>

                                                <div class="flex items-center border-b-2 border-gray-600"></div>

                                                <div class="flex mt-2 justify-between items-center">
                                                    <span>
                                                        <a target="_BLANK" href={projectData.demo}>
                                                            <img alt="numan ahmed" src="../icons/demo.png" width="80%" />
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a target="_BLANK" href={projectData.code}>
                                                            <img alt="numan ahmed" src="../icons/codes.png" width="80%" />
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a target="_BLANK" href={`${projectData.repo}`}>
                                                            <img alt="numan ahmed" src="../icons/github-small.svg" width="80%" />
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        projectsData.map(projectData => (
                            <SingleProject projectData={projectData} />
                        ))
                    )
                }

                {/* {
                    
                } */}


            </section>
        </>
    );
}

export default Projects;