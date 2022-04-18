import React from 'react'
import { generateRandomNumber } from '../../helpers/generateNumber';
import { getDuration, getMonthNameYear } from '../../helpers/getDate';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';

const DesktopViewExperience = ({ experiencesData }) => {
    return (
        <>
            <div class="absolute h-full w-1 bg-gray-500" style={{ left: '49.8%' }}></div>
            {
                experiencesData?.map((companyData, index) => {
                    const isLeftSide = index % 2 == 0;
                    return (
                        <div class={`mb-8 flex justify-between ${isLeftSide ? "flex-row-reverse items-center w-full left-timeline" : "items-center w-full right-timeline"}`} >
                            <div class={`order-1 w-5/12 ${isLeftSide ? "" : "flex justify-end"}`}>
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <a target='_blank' href={companyData?.companyURL}>
                                        <img className="rounded-full imgJump" src={companyData?.companyLogo} />
                                    </a>
                                </div>
                            </div>
                            <div class="z-20 flex items-center order-1 bg-gray-500 shadow-xl w-10 h-10 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">{getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}</h1>
                            </div>
                            <div class="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
                                style={{ boxShadow: `0px 0px 15px 1px rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)})` }}
                            >
                                <h3 class="font-bold text-xl text-white">{companyData?.name}</h3>
                                <span className="text-sm text-gray-300">
                                    {getMonthNameYear(companyData?.timeLine.start)} -- {companyData?.timeLine.end === "" ? "present" : getMonthNameYear(companyData?.timeLine.end)}
                                </span>
                                <h3 class="font-bold text-xl text-pink-600 title-font mb-2">
                                    {companyData?.role}
                                </h3>
                                <p class="leading-relaxed text-base text-gray-400">
                                    {companyData?.description}
                                </p>
                                <div className="mt-2 font-semibold text-green-200">
                                    Used Tech Stack
                                    <div className="">
                                        <div class="flex flex-wrap -m-4 text-center">
                                            {companyData?.workingTech.map((tech) => (
                                                <div class="p-4 sm:w-1/4 w-1/2">
                                                    <SkillDiv skill={tech} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a target='_blank' href={companyData?.companyURL} class="mt-3 text-pink-500 inline-flex items-center">More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
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