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
                        <div class="flex my-4">
                            <span class="flex items-center">
                                <div>
                                    <a target="_BLANK" href={projectData.demo}>
                                        <img alt="numan ahmed" src="../icons/demo.png" />
                                    </a>
                                </div>
                            </span>
                            <span class="flex flex items-center ml-3 pl-3">
                                <div>
                                    <a target="_BLANK" href={projectData.code}>
                                        <img alt="numan ahmed" src="../icons/codes.png" />
                                    </a>
                                </div>
                            </span>
                            <span class="flex flex items-center ml-3 pl-3">
                                <div>
                                    <a target="_BLANK" href={`${projectData.repo}`}>
                                        <img alt="numan ahmed" src="../icons/github-small.svg" />
                                    </a>
                                </div>
                            </span>
                        </div>
                        <p class="leading-relaxed text-white">
                            {projectData.description}
                        </p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                        <div class="flex mb-4">
                            {
                                projectData.usedTech.map((tech, index) => (
                                    <span class={`flex items-center ml-2 pl-2 text-green-500  ${index !== 0 ? 'border-l-2 border-gray-200' : ''}`}> {tech} </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleProject;