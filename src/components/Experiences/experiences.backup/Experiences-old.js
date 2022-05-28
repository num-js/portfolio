import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';

const Experiences = () => {
    return (
        <>
            <section className="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 className="mb-2 text-2xl font-medium text-white title-font">Experiences</h1>
                </div>
                <div align="left">
                    <div className="mt-5">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <section className="text-gray-400 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    {
                                        experiencesData.map((companyData, index) => (
                                            companyData.isLeftSideStarts ? (
                                                <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row">
                                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-green-400 bg-gray-800 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                                                        <a target='_blank' href={companyData.companyURL}>
                                                            <img className="rounded-full" src={companyData.companyLogo} />
                                                        </a>
                                                    </div>
                                                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                                                        <h2 className="text-lg font-medium text-white title-font">
                                                            {companyData.name}
                                                        </h2>
                                                        <span className="mt-1 text-sm text-gray-500">
                                                            {companyData.timeLine}
                                                        </span>
                                                        <h2 className="mb-2 text-2xl font-medium text-pink-600 title-font">
                                                            {companyData.role}
                                                        </h2>
                                                        <p className="text-base leading-relaxed">
                                                            {companyData.description}
                                                        </p>
                                                        <div>
                                                            {companyData.workingTech.label}
                                                            <div className="mx-10">
                                                                <div className="flex flex-wrap -m-4 text-center">
                                                                    {
                                                                        companyData.workingTech.technologies.map((tech, index) => (
                                                                            <div className="w-1/2 p-4 sm:w-1/4">
                                                                                <h1 className="font-medium text-white title-font">
                                                                                    {tech}
                                                                                </h1>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <a className="inline-flex items-center mt-3 text-green-400">
                                                            More
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a> */}
                                                    </div>
                                                </div>
                                            ) : (
                                                    <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row">
                                                        <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                                                            <h2 className="text-lg font-medium text-white title-font">
                                                            {companyData.name}
                                                        </h2>
                                                            <span className="mt-1 text-sm text-gray-500">
                                                            {companyData.timeLine}
                                                        </span>
                                                            <h2 className="mb-2 text-2xl font-medium text-pink-600 title-font">
                                                            {companyData.role}
                                                        </h2>
                                                            <p className="text-base leading-relaxed">
                                                            {companyData.description}
                                                        </p>
                                                        <div>
                                                            {companyData.workingTech.label}
                                                            <div className="mx-10">
                                                                    <div className="flex flex-wrap -m-4 text-center">
                                                                    {
                                                                        companyData.workingTech.technologies.map((tech, index) => (
                                                                            <div className="w-1/2 p-4 sm:w-1/4">
                                                                                <h1 className="font-medium text-white title-font">
                                                                                    {tech}
                                                                                </h1>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                            {/* <a className="inline-flex items-center mt-3 text-green-400">More
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a> */}
                                                    </div>
                                                        <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-green-400 bg-gray-800 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                                                        <a target='_blank' href={companyData.companyURL}>
                                                            <img className="rounded-full" src={companyData.companyLogo} />
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        ))
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;