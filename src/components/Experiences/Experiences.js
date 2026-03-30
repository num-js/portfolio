import React, { useEffect } from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import useScreenWidth from '../../hooks/useScreenWidth';
import scrollToPosition from '../../helpers/scrollToPosition';
import './experience.scss';
import { getDuration, getMonthNameYear } from '../../helpers/getDate';
import { SectionHeader, SkillsView } from '../SharedComponents';

const Experiences = () => {
    const screenSize = useScreenWidth();

    useEffect(() => {
        scrollToPosition();
    }, []);

    return (
        <>
            <section id="experience">
                <div className="container w-full h-full mx-auto">
                    <SectionHeader
                        sectionTitle="Experiences"
                        sectionId="experienceLabel"
                    />

                    <div id="cd-timeline" className="cd-container">
                        {
                            experiencesData?.map((companyData, index) => (
                                <div key={index} className="cd-timeline-block">

                                    <div className="cd-timeline-pic">
                                        <img alt={companyData?.name} src={companyData.sidePic.url} width="280" />
                                    </div>

                                    <div className="cd-timeline-img cd-picture">
                                        <span className="time-duration flex justify-center align-middle text-white text-xs">
                                            {getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}
                                        </span>
                                    </div>

                                    <div className="cd-timeline-content nbg-glass">
                                        <div className="flex items-center">
                                            <div>
                                                <a target="_blank" rel="noreferrer" href={companyData?.companyURL}>
                                                    <img width="60" className="rounded-full" alt={companyData?.name} src={companyData?.companyLogo} />
                                                </a>
                                            </div>
                                            <div className="w-full ml-4">
                                                <h2>{companyData?.name}</h2>
                                                <div className="timeline-content-info flex justify-between flex-wrap">
                                                    <span className="flex align-middle">
                                                        <span>
                                                            <img width="16" className="mr-2" alt="role"
                                                                src="../icons/num-lappy-icon.png"
                                                            />
                                                        </span>
                                                        <span>{companyData?.role}</span>
                                                    </span>
                                                    <span className="flex align-middle">
                                                        <span>
                                                            <img width="16" className="mr-2" alt="calendar"
                                                                src="../icons/calendar-icon.png"
                                                            />
                                                        </span>
                                                        <span>{getMonthNameYear(companyData?.timeLine.start)} -- {companyData?.timeLine.end === "" ? "present" : getMonthNameYear(companyData?.timeLine.end)}</span>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <p> {companyData?.description} </p>
                                        <SkillsView skills={companyData?.workingTech} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;
