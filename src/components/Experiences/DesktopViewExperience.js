import React from 'react'
import { generateRandomNumber } from '../../helpers/generateNumber';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';

const DesktopViewExperience = ({ experiencesData }) => {
    return (
        <>
            <div class="border-2-2 absolute border-opacity-20 h-full border" style={{ left: '50%' }}></div>
            {
                experiencesData.map((companyData, index) => {
                    const isLeftSide = index % 2 == 0;
                    return (
                        <div class={`mb-8 flex justify-between ${isLeftSide ? "flex-row-reverse items-center w-full left-timeline" : "items-center w-full right-timeline"}`} >
                            <div class={`order-1 w-5/12 ${isLeftSide ? "" : "flex justify-end"}`}>
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <a target='_blank' href={companyData.companyURL}>
                                        <img className="rounded-full imgJump" src={companyData.companyLogo} />
                                    </a>
                                </div>
                            </div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">{companyData.duration}</h1>
                            </div>
                            <div class="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
                                style={{ boxShadow: `0px 0px 15px 1px rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)})` }}
                            >
                                <h3 class="font-bold text-xl text-white">{companyData.name}</h3>
                                <span className="text-sm text-gray-300">
                                    {companyData.timeLine}
                                </span>
                                <h3 class="font-bold text-xl text-pink-600 title-font mb-2">
                                    {companyData.role}
                                </h3>
                                <p class="leading-relaxed text-base text-gray-400">
                                    {companyData.description}
                                </p>
                                <div className="mt-2 font-semibold text-green-200">
                                    {companyData.workingTech.label}
                                    <div className="">
                                        <div class="flex flex-wrap -m-4 text-center">
                                            {companyData.workingTech.technologies.map((tech, index) => (
                                                <div class="p-4 sm:w-1/4 w-1/2">
                                                    <SkillDiv skill={tech} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DesktopViewExperience;