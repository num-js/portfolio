import React from 'react'
import { generateRandomNumber } from '../../helpers/generateNumber';
import { getDuration, getMonthNameYear } from '../../helpers/getDate';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';

const DesktopViewExperience = ({ experiencesData }) => {
    return (
        <>
            <div className="absolute w-1 h-full bg-gray-500" style={{ left: '49.8%' }}></div>
            {
                experiencesData?.map((companyData, index) => {
                    const isLeftSide = index % 2 == 0;
                    return (
                        <div key={index} className={`mb-8 flex justify-between ${isLeftSide ? "flex-row-reverse items-center w-full left-timeline" : "items-center w-full right-timeline"}`} >
                            <div className={`order-1 w-5/12 ${isLeftSide ? "" : "flex justify-end"}`}>
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                                    <a target='_blank' href={companyData?.companyURL}>
                                        <img className="rounded-full imgJump" src={companyData?.companyLogo} />
                                    </a>
                                </div>
                            </div>
                            <div className="z-20 flex items-center order-1 w-10 h-10 bg-gray-500 rounded-full shadow-xl">
                                <h1 className="mx-auto text-lg font-semibold text-white">{getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}</h1>
                            </div>
                            <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl"
                                style={{ boxShadow: `0px 0px 15px 1px rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)})` }}
                            >
                                <h3 className="text-xl font-bold text-white">{companyData?.name}</h3>
                                <span className="text-sm text-gray-300">
                                    {getMonthNameYear(companyData?.timeLine.start)} -- {companyData?.timeLine.end === "" ? "present" : getMonthNameYear(companyData?.timeLine.end)}
                                </span>
                                <h3 className="mb-2 text-xl font-bold text-pink-600 title-font">
                                    {companyData?.role}
                                </h3>
                                <p className="text-base leading-relaxed text-gray-400">
                                    {companyData?.description}
                                </p>
                                <div className="mt-2 font-semibold text-green-200">
                                    Used Tech Stack
                                    <div className="">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            {companyData?.workingTech.map((tech) => (
                                                <div key={index} className="w-1/2 p-4 sm:w-1/4">
                                                    <SkillDiv skill={tech} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a target='_blank' href={companyData?.companyURL} className="inline-flex items-center mt-3 text-pink-500">More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
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