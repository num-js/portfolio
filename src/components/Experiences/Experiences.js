import React, { useEffect } from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import useScreenWidth from '../../hooks/useScreenWidth';
import scrollToPosition from '../../helpers/scrollToPosition';
import './experience.scss';
import { getDuration, getMonthNameYear } from '../../helpers/getDate';
const Experiences = () => {
    const screenSize = useScreenWidth();

    useEffect(() => {
        scrollToPosition();
    }, []);

    return (
        <section id="experience">
            <div className="container w-full h-full mx-auto">
                <div align="center">
                    <h1 className="mb-2 text-2xl font-medium text-white title-font" id="experienceLabel">Experiences</h1>
                </div>
                <div className="relative h-full p-10 overflow-hidden wrap">
                    {/* {
                        screenSize === 'large' ? (
                            <DesktopViewExperience experiencesData={experiencesData} />
                        ) : (
                            <MobileExperience experiencesData={experiencesData} />
                        )
                    } */}
                    {/* </div> */}
                    <div>
                        <section id="cd-timeline" class="cd-container">
                            {
                                experiencesData?.map((companyData, index) => (
                                    <div class="cd-timeline-block">
                                        <div class="cd-timeline-img cd-picture">
                                            <span class="flex justify-center align-middle text-lg font-semibold text-white">
                                                {getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}
                                            </span>
                                        </div>
                                        <div class="cd-timeline-content">
                                            <div class="flex items-center">
                                                <div>
                                                    <a target="_blank" href={companyData?.companyURL}>
                                                        <img width="60" class="rounded-full" src={companyData?.companyLogo} />
                                                    </a>
                                                </div>
                                                <div className="w-full ml-4">
                                                    <h2>{companyData?.name}</h2>
                                                    <div class="timeline-content-info flex justify-between flex-wrap">
                                                        <span class="flex align-middle">
                                                            <span>
                                                                <img width="16" class="mr-2 "
                                                                    src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-Developer-programming-and-development-those-icons-lineal-color-those-icons.png"
                                                                />
                                                            </span>
                                                            <span>{companyData?.role}</span>
                                                        </span>
                                                        <span class="flex align-middle">
                                                            <span>
                                                                <img width="16" class="mr-2 "
                                                                    src="https://img.icons8.com/color/48/000000/calendar--v1.png"
                                                                />
                                                            </span>
                                                            <span>{getMonthNameYear(companyData?.timeLine.start)} -- {companyData?.timeLine.end === "" ? "present" : getMonthNameYear(companyData?.timeLine.end)}</span>
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                            <p> {companyData?.description} </p>
                                            <ul class="content-skills">
                                                {companyData?.workingTech.map((tech, index) => (
                                                    <li>{tech}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiences;