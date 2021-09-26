import React from 'react';

const Company = ({ companyData }) => {

    return (
        <>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                    <span class="text-2xl font-medium title-font text-green-500">
                        {companyData.name}
                    </span>
                    <span class="mt-1 text-gray-500 text-sm">
                        {companyData.timeLine}
                    </span>
                </div>
                <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-pink-600 title-font mb-2">
                        {companyData.role}
                    </h2>
                    <p class="leading-relaxed text-gray-300">
                        {companyData.description}
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
                    </p>
                    <a class="text-green-500 inline-flex items-center mt-4"> More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Company;