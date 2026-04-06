import projectsData from '../../assets/data/projectsData.json';
import { SkillsView } from '../SharedComponents';
import AnimatedHoverButton from '../shared/AnimatedHoverButton';

type ProjectEntry = (typeof projectsData)[number];

type SingleProjectProps = {
    projectData: ProjectEntry;
};

const SingleProject = ({ projectData }: SingleProjectProps) => {
    return (
        <section className="overflow-hidden text-white/70 body-font">
            <div className="container px-5 py-6 mx-auto">
                <div className="mx-auto flex flex-wrap rounded-2xl border border-white/[0.18] bg-surface-glass/90 px-2 py-2 text-white shadow-glass backdrop-blur-xl lg:w-4/5">
                    <img
                        alt="numan ahmed"
                        className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                        src={projectData.image}
                    />
                    <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                        <div className="flex justify-between">
                            <h1 className="mb-1 text-2xl font-medium title-font text-white">{projectData.name}</h1>
                        </div>
                        <p className="my-2 leading-relaxed text-white text-sm">{projectData.description}</p>

                        <div className="my-2">
                            <SkillsView skills={projectData.usedTech} />
                        </div>

                        <div className="flex items-center border-b border-white/10"></div>

                        <div className="flex items-center justify-around mt-2">
                            {projectData?.demo && (
                                <span className="w-full">
                                    <a target="_blank" rel="noreferrer" className="my-2" href={projectData?.demo}>
                                        <AnimatedHoverButton btnTxt={'View Demo'} btnClass={''} />
                                    </a>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProject;
