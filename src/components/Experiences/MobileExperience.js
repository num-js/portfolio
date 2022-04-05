import React from 'react'

const MobileExperience = ({ experiencesData }) => {
    return (
        experiencesData && experiencesData.map((companyData, index) => (
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-2 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
                    {companyData.duration}
                </div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                        <a target='_blank' href={companyData.companyURL}>
                            <img className="rounded-full" src={companyData.companyLogo} />
                        </a>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <div class="">
                            <h2 class="text-white text-lg title-font font-medium">
                                {companyData.name}
                            </h2>
                            <span className="mt-1 text-gray-500 text-sm">
                                {companyData.timeLine}
                            </span>
                            <h2 class="text-2xl font-medium text-pink-600 title-font mb-2">
                                {companyData.role}
                            </h2>
                            <p class="leading-relaxed text-base text-white">
                                {companyData.description}
                            </p>
                            <div class="text-green-700 font-semibold">
                                {companyData.workingTech.label}
                                <div className="mx-10">
                                    <div class="flex flex-wrap -m-4 text-center">
                                        {
                                            companyData.workingTech.technologies.map((tech, index) => (
                                                <div class="p-4 sm:w-1/4 w-1/2">
                                                    <h1 class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-indigo-100 bg-pink-700 rounded">
                                                        {tech}
                                                    </h1>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <a target='_blank' href={companyData.companyURL} class="mt-3 text-pink-700 inline-flex items-center">More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default MobileExperience;