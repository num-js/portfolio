import React from 'react'

const DesktopViewExperience = ({ experiencesData }) => {
    return (
        <>
            <div class="border-2-2 absolute border-opacity-20 h-full border" style={{ left: '50%' }}></div>
            {
                experiencesData.map((companyData, index) => (
                    companyData.isLeftSideStarts ? (
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="order-1 w-5/12 flex justify-end">
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-green-400 bg-gray-800 flex-shrink-0">
                                    <a target='_blank' href={companyData.companyURL}>
                                        <img className="rounded-full" src={companyData.companyLogo} />
                                    </a>
                                </div>
                            </div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">{companyData.duration}</h1>
                            </div>
                            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="font-bold text-gray-800 text-xl">{companyData.name}</h3>
                                <span className="text-gray-500 text-sm">
                                    {companyData.timeLine}
                                </span>
                                <h3 class="text-2xl font-medium text-pink-600 title-font mb-2">
                                    {companyData.role}
                                </h3>
                                <p class="leading-relaxed text-base">
                                    {companyData.description}
                                </p>
                                <div className="mt-2 font-semibold">
                                    {companyData.workingTech.label}
                                    <div className="">
                                        <div class="flex flex-wrap -m-4 text-center">
                                            {
                                                companyData.workingTech.technologies.map((tech, index) => (
                                                    <div class="p-4 sm:w-1/4 w-1/2">
                                                        <h1 class="title-font font-medium">
                                                            {tech}
                                                        </h1>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12">
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-green-400 bg-gray-800 flex-shrink-0">
                                    <a target='_blank' href={companyData.companyURL}>
                                        <img className="rounded-full" src={companyData.companyLogo} />
                                    </a>
                                </div>
                            </div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 rounded-full">
                                <h1 class="mx-auto text-white font-semibold text-lg">{companyData.duration}</h1>
                            </div>
                            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="font-bold text-white text-xl">{companyData.name}</h3>
                                <span className="text-gray-300 text-sm">
                                    {companyData.timeLine}
                                </span>
                                <h3 class="text-2xl font-medium text-white title-font mb-2">
                                    {companyData.role}
                                </h3>
                                <p class="leading-relaxed text-base">
                                    {companyData.description}
                                </p>
                                <div className="mt-2 font-semibold">
                                    {companyData.workingTech.label}
                                    <div className="">
                                        <div class="flex flex-wrap -m-4 text-center">
                                            {
                                                companyData.workingTech.technologies.map((tech, index) => (
                                                    <div class="p-4 sm:w-1/4 w-1/2">
                                                        <h1 class="title-font font-medium">
                                                            {tech}
                                                        </h1>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))
            }
        </>
    )
}

export default DesktopViewExperience;