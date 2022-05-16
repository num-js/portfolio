import React from 'react';
import { generateRandomNumber } from '../../helpers/generateNumber';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';

const SingleProject = ({ projectData }) => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-6 mx-auto">
                <div class="lg:w-4/5 px-2 py-2 mx-auto flex flex-wrap black-shadow">
                    <img alt="numan ahmed" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={projectData.image}
                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div className="flex justify-between">
                            <h1 class="text-2xl title-font font-medium mb-1 ncolor-pink">{projectData.name}</h1>
                            {!projectData.repo && <span title="company">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-5 h-5 flex-shrink" color="#ff0052" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            </span>}
                        </div>
                        <p class="leading-relaxed text-white my-2">
                            {projectData.description}
                        </p>

                        <div class="my-2">
                            {
                                projectData.usedTech.map((tech, index) => (
                                    <SkillDiv key={index} skill={tech} />
                                ))
                            }
                        </div>

                        <div class="flex items-center border-b-2 border-gray-800"></div>

                        <div class="flex mt-2 justify-around items-center">
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