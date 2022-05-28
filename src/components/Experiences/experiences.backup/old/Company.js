import React from 'react';

const Company = ({ companyData }) => {

    return (
        <>
            <div className="flex flex-wrap py-8 md:flex-nowrap">
                <div className="flex flex-col items-center flex-shrink-0 mb-6 md:w-64 md:mb-0">
                    <span className="text-2xl font-medium text-green-500 title-font">
                        {companyData.name}
                    </span>
                    <span className="mt-1 text-sm text-gray-500">
                        {companyData.timeLine}
                    </span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="mb-2 text-2xl font-medium text-pink-600 title-font">
                        {companyData.role}
                    </h2>
                    <p className="leading-relaxed text-gray-300">
                        {companyData.description}
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
                    </p>
                    {/* <a className="inline-flex items-center mt-4 text-green-500"> More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a> */}
                </div>
            </div>
        </>
    );
}

export default Company;