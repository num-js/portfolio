import React from 'react';

const SingleProject = ({ projectData }) => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-10 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="numan ahmed" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={projectData.image}
                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 class="text-pink-500 text-2xl title-font font-medium mb-1">{projectData.name}</h1>
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

                        <div class="flex mt-2 justify-around items-center">
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
            </div>
        </section>
    );
}

export default SingleProject;