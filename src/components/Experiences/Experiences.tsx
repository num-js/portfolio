import { useEffect } from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import scrollToPosition from '../../helpers/scrollToPosition';
import { getDuration, getMonthNameYear } from '../../helpers/getDate';
import { SectionHeader, SkillsView } from '../SharedComponents';

const contentBeforeOdd =
    "before:content-[''] before:absolute before:top-4 before:right-full before:border-[7px] before:border-transparent before:border-r-[#1a3344] " +
    'min-[1170px]:before:top-[30px] min-[1170px]:before:left-full min-[1170px]:before:right-auto min-[1170px]:before:border-l-[#1a3344] min-[1170px]:before:border-r-transparent';

const contentBeforeEven =
    "before:content-[''] before:absolute before:top-4 before:right-full before:border-[7px] before:border-transparent before:border-r-[#1a3344] " +
    'min-[1170px]:before:top-6 min-[1170px]:before:left-auto min-[1170px]:before:right-full min-[1170px]:before:border-r-[#1a3344] min-[1170px]:before:border-l-transparent';

const Experiences = () => {
    useEffect(() => {
        scrollToPosition();
    }, []);

    return (
        <>
            <section id="experience">
                <div className="container mx-auto h-full w-full">
                    <SectionHeader sectionTitle="Experiences" sectionId="experienceLabel" />

                    <div
                        id="cd-timeline"
                        className="relative mx-auto mb-8 px-4 py-8 after:clear-both after:table after:content-[''] min-[1170px]:mb-12 min-[1170px]:mt-12 min-[1170px]:px-[10%]
                            before:absolute before:top-0 before:h-full before:w-1.5 before:bg-timeline-rail before:content-['']
                            before:left-[27px] min-[1170px]:before:left-[49.8%]"
                    >
                        {experiencesData?.map((companyData, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <div
                                    key={index}
                                    className="relative my-8 first:mt-0 last:mb-0 after:clear-both after:table after:content-[''] min-[1170px]:my-16"
                                >
                                    <div
                                        className={`absolute top-0 max-[500px]:hidden min-[500px]:block ${
                                            isEven ? 'left-0' : 'right-0'
                                        }`}
                                    >
                                        <img alt={companyData?.name} src={companyData.sidePic.url} width="280" />
                                    </div>

                                    <div className="absolute left-[14px] top-2 flex flex-col items-center overflow-visible -translate-x-1/2 min-[1170px]:left-1/2 min-[1170px]:top-[15px]">
                                        <div className="flex justify-center items-center h-[30px] w-[30px] shrink-0 rounded-full bg-timeline-node shadow-[0_0_0_4px_#1a3344,inset_0_2px_0_rgba(0,0,0,0.08),0_3px_0_4px_rgba(0,0,0,0.05)] min-[1170px]:h-10 min-[1170px]:w-10">
                                            <span className="max-w-[4.5rem] text-center text-[10px] leading-tight text-white min-[1170px]:text-xs">
                                                {getDuration(companyData?.timeLine.start, companyData?.timeLine?.end)}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className={`relative ml-[60px] mr-3 p-4 text-white min-[768px]:[&_h2]:text-xl min-[768px]:[&_p]:text-base
                                            min-[1170px]:mx-[5%] min-[1170px]:ml-0 min-[1170px]:w-[36%] min-[1170px]:px-6 min-[1170px]:py-6
                                            rounded-xl border border-white/[0.06] bg-surface-glass/90 shadow-card backdrop-blur-xl
                                            ${isEven ? 'min-[1170px]:float-right' : ''}
                                            ${isEven ? contentBeforeEven : contentBeforeOdd}`}
                                    >
                                        <div className="flex items-center">
                                            <div>
                                                <a target="_blank" rel="noreferrer" href={companyData?.companyURL}>
                                                    <img
                                                        width="60"
                                                        className="rounded-full"
                                                        alt={companyData?.name}
                                                        src={companyData?.companyLogo}
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-4 w-full">
                                                <h2 className="mb-1.5 mt-0 text-white">{companyData?.name}</h2>
                                                <div className="flex flex-wrap justify-between rounded-sm border-b border-white/[0.06] bg-surface-card px-2.5 py-1.5 text-xs text-white/65 shadow-[inset_0_2px_0_rgba(0,0,0,0.08)] max-[500px]:flex-col">
                                                    <span className="flex max-[500px]:w-full items-center">
                                                        <img
                                                            width="16"
                                                            className="mr-2"
                                                            alt="role"
                                                            src="../icons/num-lappy-icon.png"
                                                        />
                                                        <span>{companyData?.role}</span>
                                                    </span>
                                                    <span className="flex max-[500px]:w-full items-center">
                                                        <img
                                                            width="16"
                                                            className="mr-2"
                                                            alt="calendar"
                                                            src="../icons/calendar-icon.png"
                                                        />
                                                        <span>
                                                            {getMonthNameYear(companyData?.timeLine.start)} --{' '}
                                                            {companyData?.timeLine.end === ''
                                                                ? 'present'
                                                                : getMonthNameYear(companyData?.timeLine.end)}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="my-4 leading-relaxed text-white/65 text-[0.8125rem] min-[768px]:text-base">
                                            {' '}
                                            {companyData?.description}{' '}
                                        </p>
                                        <SkillsView skills={companyData?.workingTech} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experiences;
