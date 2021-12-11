import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';

const Experiences = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Experiences</h1>
                </div>
                <div align="left">
                    <div class="mt-5">
                        <div class="-my-8 divide-y-2 divide-gray-100">
                            <section class="text-gray-400 body-font">
                                <div class="container px-5 py-24 mx-auto">
                                    {
                                        experiencesData.map((companyData, index) => (
                                            companyData.isLeftSideStarts ? (
                                                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                                                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-green-400 bg-gray-800 flex-shrink-0">
                                                        <a target='_blank' href={companyData.companyURL}>
                                                            <img className="rounded-full" src={companyData.companyLogo} />
                                                        </a>
                                                    </div>
                                                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                                        <h2 class="text-white text-lg title-font font-medium">
                                                            {companyData.name}
                                                        </h2>
                                                        <span className="mt-1 text-gray-500 text-sm">
                                                            {companyData.timeLine}
                                                        </span>
                                                        <h2 class="text-2xl font-medium text-pink-600 title-font mb-2">
                                                            {companyData.role}
                                                        </h2>
                                                        <p class="leading-relaxed text-base">
                                                            {companyData.description}
                                                        </p>
                                                        <div>
                                                            {companyData.workingTech.label}
                                                            <div className="mx-10">
                                                                <div class="flex flex-wrap -m-4 text-center">
                                                                    {
                                                                        companyData.workingTech.technologies.map((tech, index) => (
                                                                            <div class="p-4 sm:w-1/4 w-1/2">
                                                                                <h1 class="title-font font-medium text-white">
                                                                                    {tech}
                                                                                </h1>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <a class="mt-3 text-green-400 inline-flex items-center">
                                                            More
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a> */}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                                                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                                        <h2 class="text-white text-lg title-font font-medium">
                                                            {companyData.name}
                                                        </h2>
                                                        <span className="mt-1 text-gray-500 text-sm">
                                                            {companyData.timeLine}
                                                        </span>
                                                        <h2 class="text-2xl font-medium text-pink-600 title-font mb-2">
                                                            {companyData.role}
                                                        </h2>
                                                        <p class="leading-relaxed text-base">
                                                            {companyData.description}
                                                        </p>
                                                        <div>
                                                            {companyData.workingTech.label}
                                                            <div className="mx-10">
                                                                <div class="flex flex-wrap -m-4 text-center">
                                                                    {
                                                                        companyData.workingTech.technologies.map((tech, index) => (
                                                                            <div class="p-4 sm:w-1/4 w-1/2">
                                                                                <h1 class="title-font font-medium text-white">
                                                                                    {tech}
                                                                                </h1>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <a class="mt-3 text-green-400 inline-flex items-center">More
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a> */}
                                                    </div>
                                                    <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-green-400 bg-gray-800 flex-shrink-0">
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