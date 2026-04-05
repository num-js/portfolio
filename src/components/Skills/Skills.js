import React, { useEffect, useState } from 'react';
import SkillsPopover from './SkillsPopover';
import skillsData from '../../assets/data/skillsData.json';
import RotatingCircle from '../SharedComponents/RotatingCircle/RotatingCircle';
import scrollToPosition from '../../helpers/scrollToPosition';
import { SectionHeader } from '../SharedComponents/index.js';

const Skills = () => {
    const [skillImgElem, setSkillImgElem] = useState(null);
    const [skillDetails, setSkillDetails] = useState(null);

    const openPopover = Boolean(skillImgElem);
    const popoverId = openPopover ? 'simple-popover' : undefined;

    const showSkillPopover = (event, skillData) => {
        if (!skillData) {
            return;
        }
        setSkillImgElem(event.currentTarget);
        setSkillDetails(skillData);
    };

    const closeSkillPopover = () => {
        setSkillImgElem(null);
    };

    useEffect(() => {
        scrollToPosition();
    }, []);

    return (
        <>
            <section className="body-font px-4 pb-20 pt-6 text-white/70 lg:mt-10 lg:pb-28">
                <SectionHeader sectionTitle="Tech Stack" />

                <div className="mx-auto mt-10 w-full max-w-content px-2 sm:px-4 lg:mt-16">
                    {/* Mobile: vertical stack with even spacing */}
                    {/* Desktop: 2-column grid (FE | BE) + full-width row (Other tools) with aligned gaps */}
                    <div className="flex flex-col items-center gap-20 lg:grid lg:grid-cols-2 lg:items-start lg:justify-items-center lg:gap-x-12 lg:gap-y-28 xl:gap-x-20 xl:gap-y-32 2xl:gap-x-28">
                        {skillsData?.fullStack?.map((data, index) => (
                            <div
                                key={index}
                                className="mx-auto flex w-full max-w-[340px] justify-center lg:max-w-none"
                            >
                                <RotatingCircle data={data} showSkillPopover={showSkillPopover} />
                            </div>
                        ))}
                        {skillsData?.others?.map((data, index) => (
                            <div
                                key={`other-${index}`}
                                className="mx-auto flex w-full max-w-[340px] justify-center lg:col-span-2 lg:max-w-none lg:pt-4"
                            >
                                <RotatingCircle data={data} showSkillPopover={showSkillPopover} />
                            </div>
                        ))}
                    </div>
                </div>

                {skillsData && (
                    <SkillsPopover
                        skillImgElem={skillImgElem}
                        popoverId={popoverId}
                        openPopover={openPopover}
                        closeSkillPopover={closeSkillPopover}
                    >
                        <div className="relative pt-3">
                            <div className="flex justify-between">
                                <div className="text-center">
                                    <span className="inline-flex items-center justify-center rounded-md border border-primary/40 bg-primary/25 px-6 py-1 leading-none text-white">
                                        {skillDetails?.name}
                                    </span>
                                </div>
                                {skillDetails?.projects?.length ? (
                                    <div className="absolute right-2 top-2">
                                        <button type="button" onClick={closeSkillPopover}>
                                            <img src="../icons/close-circle.svg" width="18" alt="Close" />
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                            <div className="group/repos grid grid-cols-1 gap-3">
                                {skillDetails?.projects?.map((project, index) => (
                                    <div
                                        key={index}
                                        className="flex min-w-[220px] max-w-[15rem] -rotate-2 flex-col border border-white/[0.06] bg-surface-glass/90 px-3 pb-0 pt-2 text-white/85 shadow-glass backdrop-blur-md transition-all duration-150 even:translate-y-2 group-hover/repos:opacity-50 group-hover/repos:hover:!z-10 group-hover/repos:hover:!scale-110 group-hover/repos:hover:!opacity-100"
                                    >
                                        <div className="flex justify-between">
                                            <div className="flex items-end">
                                                <span className="mr-1">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        className="text-primary"
                                                        viewBox="0 0 1024 1024"
                                                        height="26px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path>
                                                    </svg>
                                                </span>

                                                <h2 className="card-title font-bold text-primary">{project.title}</h2>
                                            </div>
                                            {!project.links.code ? (
                                                <span>
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="3"
                                                        className="h-5 w-5 shrink-0 text-primary"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                        <path d="M22 4L12 14.01l-3-3"></path>
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span></span>
                                            )}
                                        </div>
                                        <p className="description text-sm">{project.description}</p>
                                        <div className="mt-2 flex justify-around">
                                            {project.links.demo && (
                                                <span>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={project.links.demo}
                                                    >
                                                        <img alt="Demo" src="../icons/demo.png" width="30px" />
                                                    </a>
                                                </span>
                                            )}
                                            {project.links.code && (
                                                <span>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={project.links.code}
                                                    >
                                                        <img alt="GitHub" src="../icons/github-small.svg" width="30px" />
                                                    </a>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="my-4 text-center"></div>
                        </div>
                    </SkillsPopover>
                )}
            </section>
        </>
    );
};

export default Skills;
