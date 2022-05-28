import React from 'react';
import { generateRandomNumber } from '../../helpers/generateNumber';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';

const SingleProject = ({ projectData }) => {
    return (
        <section className="overflow-hidden text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap px-2 py-2 mx-auto lg:w-4/5 black-shadow">
                    <img alt="numan ahmed" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                        src={projectData.image}
                    />
                    <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                        <div className="flex justify-between">
                            <h1 className="mb-1 text-2xl font-medium title-font ncolor-pink">{projectData.name}</h1>
                            {!projectData.repo && <span title="company">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="flex-shrink w-5 h-5" color="#ff0052" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            </span>}
                        </div>
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

                        <div className="flex items-center border-b-2 border-gray-800"></div>

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
            </div>
        </section>
    );
}

export default SingleProject;