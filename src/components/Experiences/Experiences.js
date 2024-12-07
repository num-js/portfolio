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

                    <div id="cd-timeline" class="cd-container">
                        {
                            experiencesData?.map((companyData, index) => (
                                <div class="cd-timeline-block">

                                    <div class="cd-timeline-pic">
                                        <img src={companyData.sidePic.url} width="280" />
                                    </div>

                                    <div class="cd-timeline-img cd-picture">
                                        <span class="time-duration flex justify-center align-middle text-white text-xs">
                                            {getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}
                                        </span>
                                    </div>

                                    <div class="cd-timeline-content nbg-glass">
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
                                                                src="../icons/num-lappy-icon.png"
                                                            />
                                                        </span>
                                                        <span>{companyData?.role}</span>
                                                    </span>
                                                    <span class="flex align-middle">
                                                        <span>
                                                            <img width="16" class="mr-2 "
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