import React, { useEffect, useState } from 'react';
import SkillsPopover from './SkillsPopover';
import Tech from './Tech/Tech';
import skillsData from '../../assets/data/skillsData.json';
import "./skills.css";
import RotatingCircle from '../SharedComponents/RotatingCircle/RotatingCircle';

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

    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10">

                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Tech Stack</h1>
                </div>

                <div className="rotating-skills-section" style={{ minHeight: "65vh" }}>
                    <div className="flex mt-40 justify-evenly rotating-skills-container">
                        {
                            skillsData?.fullStack?.map(data => {
                                return (
                                    <div id={data?.id}>
                                        <RotatingCircle data={data} showSkillPopover={showSkillPopover} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex mt-52 justify-evenly rotating-skills-container">
                        {
                            skillsData?.others?.map(data => {
                                return (
                                    <div id={data?.id}>
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
                                    <span class="inline-flex items-center justify-center px-6 py-1 leading-none text-indigo-100 bg-pink-700 rounded ">
                                        {skillDetails?.name}
                                    </span>
                                </div>
                                {skillDetails?.projects?.length ? (
                                    <div className="text-white">
                                        <button onClick={closeSkillPopover}>X</button>
                                    </div>
                                ) : null}
                            </div>
                            <div className="">
                                <div class="repo-cards">
                                    {
                                        skillDetails?.projects?.map(project => (
                                            <div class="repo-card">
                                                <div className="flex justify-between">
                                                    <h2 class="card-title font-bold" style={{ color: '#bb86fc' }}>
                                                        {project.title}
                                                    </h2>
                                                    {project.links.demo ? (
                                                        <span className="">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-5 h-5 flex-shrink" color="#bb86fc" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                                                        </span>
                                                    ) : (
                                                        <span className="card-title-circle"></span>
                                                    )}
                                                </div>
                                                <p class="description">
                                                    {project.description}
                                                </p>
                                                <div class="flex justify-around mt-2">
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
                                {/* <button class="inline-flex text-gray-400 bg-gray-800 border-0  px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded">More</button> */}
                            </div>
                        </div>
                    </SkillsPopover>
                )}



            </section>
        </>
    )
}

export default Skills;