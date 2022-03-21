import React from 'react';
import academicsData from '../../assets/data/academicsData.json';
import ExternalLink from '../SharedComponents/ActiveStatusGreenDot/ExternalLink';
import College from './College';

const Academics = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10 my-10 mb-32 lg:mx-20">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Academics</h1>
                </div>

                <div class="flex flex-wrap w-full lg:mx-10">
                    <div class="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
                        <div>

                            {
                                academicsData.map((collegeData, index) => (
                                    <div class={`flex relative ${index !== (academicsData.length - 1) ? 'pb-12' : 'pb-4'}`}>
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg> */}
                                            {
                                                collegeData?.icon === "college" ? (<svg version="1.1" id="svg4619" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 15 15" style={{ enableBackground: "new 0 0 15 15" }}>
                                                    <path id="path9" style={{ fill: "white" }} d="M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1  C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1  c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z" />
                                                </svg>) : (
                                                    <div className="font-bold text-lg">
                                                        {collegeData.icon}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div class="flex-grow pl-4">
                                            <h2 class="lg:text-2xl text-xl font-medium text-pink-600 title-font mb-2">
                                                {collegeData?.course}
                                            </h2>
                                            <span class="text-base text-white">
                                                <span className="font-medium">{collegeData?.board}</span> - {collegeData?.name}
                                            </span>

                                            <div class="leading-relaxed text-gray-200">
                                                <div className="text-base font-medium text-white">
                                                    {collegeData?.description}
                                                </div>
                                                <div className="text-lg font-medium text-white">
                                                    {collegeData?.stream}
                                                </div>
                                                <span class="mt-1 text-base font-medium text-gray-500">
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
                                                    <div class="mt-5 lg:w-2/3 mx-auto overflow-auto">
                                                        <table class="text-left whitespace-no-wrap m-6" style={{ transform: 'rotate(-5deg)' }}>
                                                            <thead>
                                                                <tr>
                                                                    {
                                                                        collegeData?.marks?.semMarks?.headerLabels.map((header, index) => (
                                                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
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
                                                                            <td class="px-4 text-white ">{data.sem}</td>
                                                                            <td class="px-4 text-white ">{data.marks}</td>
                                                                            <td class="px-4 text-lg text-white">
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
                    <div class="hidden lg:block lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                        style={{ background: `url("../images/numan-learning.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", }} alt="step" />
                </div>
            </section>
        </>
    );
}

export default Academics;