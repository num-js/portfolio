import React from 'react';
import academicsData from '../../assets/data/academicsData.json';
import ExternalLink from '../SharedComponents/ActiveStatusGreenDot/ExternalLink';

const Academics = () => {
    return (
        <>
            <section className="my-10 mb-32 text-gray-600 body-font lg:mt-10 lg:mx-20">
                <div align="center" className="flex justify-center">
                    <h1 className="mb-2 mr-1 text-2xl font-medium text-white title-font">
                        Academics
                    </h1>
                    <svg version="1.1" id="svg4619" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 15 15" style={{ enableBackground: "new 0 0 15 15" }}>
                        <path id="path9" style={{ fill: "white" }} d="M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1  C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1  c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z" />
                    </svg>
                </div>

                <div className="flex flex-wrap w-full lg:mx-10"
                    style={{ background: `url("../backgrounds/bg-circles.svg")`, backgroundPositionX: "-124%", backgroundPositionY: "-11%" }}
                >
                    <div className="m-auto lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
                        <div>

                            {
                                academicsData.map((collegeData, index) => (
                                    <div className={`flex relative ${index !== (academicsData.length - 1) ? 'pb-12' : 'pb-4'}`}>
                                        <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                            <div className="w-1 h-full bg-gray-800 pointer-events-none"></div>
                                        </div>
                                        <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-green-500 rounded-full">
                                            {
                                                collegeData?.icon === "college" ? (<svg version="1.1" id="svg4619" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 15 15" style={{ enableBackground: "new 0 0 15 15" }}>
                                                    <path id="path9" style={{ fill: "white" }} d="M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1  C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1  c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z" />
                                                </svg>) : (
                                                    <div className="text-lg font-bold">
                                                        {collegeData.icon}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="mb-2 text-xl font-medium text-pink-600 lg:text-2xl title-font">
                                                {collegeData?.course}
                                            </h2>
                                            <img src="../icons/small-circle.svg" className="absolute right-0" />
                                            <span className="text-base text-white">
                                                <span className="font-medium">{collegeData?.board}</span> - {collegeData?.name}
                                            </span>

                                            <div className="leading-relaxed text-gray-200">
                                                <div className="text-base font-medium text-white">
                                                    {collegeData?.description}
                                                </div>
                                                {collegeData?.stream && (
                                                    <div className="text-lg text-white">
                                                        Stream :  <span className="font-medium">{collegeData?.stream}</span>
                                                    </div>
                                                )}
                                                <span className="mt-1 text-base font-medium text-gray-500">
                                                    {collegeData?.timeLine}
                                                </span>
                                                <div className="flex text-base font-medium">
                                                    <div className="">
                                                        {collegeData.marks.label}
                                                    </div>
                                                    <div className="ml-5">
                                                        {collegeData.marks.percentage}
                                                    </div>
                                                    <div className="ml-5">
                                                        <ExternalLink link={collegeData.marks.link} />
                                                    </div>
                                                </div>

                                                {collegeData?.marks?.semMarks && (
                                                    <div className="mx-auto mt-5 overflow-auto lg:w-2/3">
                                                        <table className="m-6 text-left whitespace-no-wrap black-shadow" style={{ transform: 'rotate(-5deg)' }}>
                                                            <thead>
                                                                <tr>
                                                                    {
                                                                        collegeData?.marks?.semMarks?.headerLabels.map((header, index) => (
                                                                            <th className="px-4 py-3 text-sm font-medium tracking-wider text-white bg-gray-800 title-font">
                                                                                {header}
                                                                            </th>
                                                                        ))
                                                                    }
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    collegeData?.marks?.semMarks?.data.map(data => (
                                                                        <tr>
                                                                            <td className="px-4 text-white ">{data.sem}</td>
                                                                            <td className="px-4 text-white ">{data.marks}</td>
                                                                            <td className="px-4 text-lg text-white">
                                                                                <ExternalLink link={data.link} />
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hidden object-cover object-center mt-12 rounded-lg lg:block lg:w-1/2 md:w-1/2 md:mt-0">
                        <div className="relative top-1/2"
                            style={{ transform: 'translate(5%, -50%)', opacity: '0.9' }}
                        >
                            <img className="imgJump" src="../images/numan-learning.png" />
                            <img src="../icons/small-circle.svg" className="absolute" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Academics;