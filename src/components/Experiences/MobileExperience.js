import React from 'react'
import { generateRandomNumber } from '../../helpers/generateNumber';
import { getDuration, getMonthNameYear } from '../../helpers/getDate';
import SkillDiv from '../SharedComponents/ActiveStatusGreenDot/SkillDiv';

const MobileExperience = ({ experiencesData }) => {
    return (
        experiencesData?.map((companyData) => (
            <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
                <div className="absolute flex items-center justify-center w-6 h-full inset-2">
                    <div className="absolute w-1 h-full bg-gray-500"></div>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mt-10 text-sm font-medium text-white bg-gray-500 rounded-full sm:mt-0 title-font">
                    {getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}
                </div>
                <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full">
                        <a target='_blank' href={companyData?.companyURL}>
                            <img className="rounded-full imgJump" src={companyData?.companyLogo} />
                        </a>
                    </div>
                    <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                        <div className="p-4 rounded-lg"
                            style={{ boxShadow: `0px 0px 15px 1px rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)})` }}
                        >
                            <h2 className="text-lg font-medium text-white title-font">
                                {companyData?.name}
                            </h2>
                            <span className="mt-1 text-sm text-gray-500">
                                {getMonthNameYear(companyData?.timeLine.start)} -- {companyData?.timeLine.end === "" ? "present" : getMonthNameYear(companyData?.timeLine.end)}
                            </span>
                            <h2 className="text-lg font-medium text-pink-600 title-font">
                                {companyData?.role}
                            </h2>
                            <p className="text-base leading-relaxed text-gray-400">
                                {companyData?.description}
                            </p>
                            <div className="mt-2 font-semibold text-green-200">
                                Used Tech Stack
                                <div className="mx-auto">
                                    <div className="flex flex-wrap -m-4 text-center">
                                        {
                                            companyData?.workingTech?.map((tech, index) => (
                                                <div className="w-1/2 p-4 sm:w-1/4">
                                                    <SkillDiv skill={tech} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <a target='_blank' href={companyData?.companyURL} className="inline-flex items-center mt-3 text-pink-500">More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default MobileExperience;