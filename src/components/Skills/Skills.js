import React, { useEffect, useState } from 'react';
import SkillsPopover from './SkillsPopover';
import skillsData from '../../assets/data/skillsData.json';
import "./skills.css";
import RotatingCircle from '../SharedComponents/RotatingCircle/RotatingCircle';
import scrollToPosition from '../../helpers/scrollToPosition';
import { SectionHeader } from '../SharedComponents/index.js';

const Skills = () => {
    const [skillImgElem, setSkillImgElem] = useState(null);
    const [skillDetails, setSkillDetails] = useState(null);

    const openPopover = Boolean(skillImgElem);
    const popoverId = openPopover ? "simple-popover" : undefined;

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
            <section className="text-gray-600 body-font lg:mt-10">

                <SectionHeader
                    sectionTitle="Tech Stack"
                />

                <div className="rotating-skills-section" style={{ minHeight: "65vh" }}>
                    <div className="flex mt-40 justify-evenly rotating-skills-container">
                        {
                            skillsData?.fullStack?.map((data, index) => {
                                return (
                                    <div key={index} id={data?.id}>
                                        <RotatingCircle data={data} showSkillPopover={showSkillPopover} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex mt-52 justify-evenly rotating-skills-container">
                        {
                            skillsData?.others?.map((data, index) => {
                                return (
                                    <div key={index} id={data?.id}>
                                        <RotatingCircle data={data} showSkillPopover={showSkillPopover} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {skillsData && (
                    <SkillsPopover
                        skillImgElem={skillImgElem}
                        popoverId={popoverId}
                        openPopover={openPopover}
                        closeSkillPopover={closeSkillPopover}
                    >
                        <div className="pt-3">
                            <div className="flex justify-between">
                                <div className="text-center">
                                    <span className="inline-flex items-center justify-center px-6 py-1 leading-none text-indigo-100 bg-pink-700 rounded ">
                                        {skillDetails?.name}
                                    </span>
                                </div>
                                {skillDetails?.projects?.length ? (
                                    <div className="absolute right-2 top-2">
                                        <button onClick={closeSkillPopover}>
                                            <img src="../icons/close-circle.svg" width="18" />
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                            <div className="">
                                <div className="repo-cards">
                                    {
                                        skillDetails?.projects?.map((project, index) => (
                                            <div key={index} className="repo-card">
                                                <div className="flex justify-between">
                                                    <div className="flex items-end">
                                                        <span className="mr-1">
                                                            <svg stroke="#bb86fc" fill="#bb86fc" stroke-width="0" viewBox="0 0 1024 1024" height="26px" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path>
                                                            </svg>
                                                        </span>

                                                        <h2 className="font-bold card-title" style={{ color: '#bb86fc' }}>
                                                            {project.title}
                                                        </h2>
                                                    </div>
                                                    {!project.links.code ? (
                                                        <span className="">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink w-5 h-5" color="#bb86fc" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                                                        </span>
                                                    ) : (
                                                            <span
                                                            // className="card-title-circle"
                                                            ></span>
                                                    )}
                                                </div>
                                                <p className="description">
                                                    {project.description}
                                                </p>
                                                <div className="flex justify-around mt-2">
                                                    {project.links.demo && (
                                                        <span>
                                                            <a target="_BLANK" href={project.links.demo}>
                                                                <img alt="numan ahmed" src="../icons/demo.png" width="30px" />
                                                            </a>
                                                        </span>
                                                    )}
                                                    {project.links.code && (
                                                        <span>
                                                            <a target="_BLANK" href={project.links.code}>
                                                                <img alt="numan ahmed" src="../icons/github-small.svg" width="30px" />
                                                            </a>
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="my-4 text-center">
                                {/* <button className="inline-flex px-6 text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">More</button> */}
                            </div>
                        </div>
                    </SkillsPopover>
                )}



            </section>
        </>
    )
}

export default Skills;