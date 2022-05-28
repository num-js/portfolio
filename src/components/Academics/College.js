import React from 'react';
import ExternalLink from '../SharedComponents/ActiveStatusGreenDot/ExternalLink';

const College = ({ collegeData }) => {

    return (
        <>
            <div className="flex flex-wrap py-8 md:flex-nowrap">
                <div className="flex flex-col items-center flex-shrink-0 mb-6 md:w-64 md:mb-0">
                    <span className="text-2xl font-medium text-green-500 title-font"
                        dangerouslySetInnerHTML={{ __html: collegeData?.name }}
                    />
                    <span className="text-2xl font-medium text-white">
                        {collegeData?.board}
                    </span>
                    <span className="mt-1 text-sm text-xl text-gray-500">
                        {collegeData?.timeLine}
                    </span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="mb-2 text-2xl font-medium text-pink-600 title-font">
                        {collegeData?.course}
                    </h2>
                    <div className="leading-relaxed text-gray-200">
                        <div className="text-xl font-medium text-white">
                            {collegeData?.description}
                        </div>
                        <div className="flex text-lg font-medium">
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
                        <div className="text-lg font-medium text-white">
                            {collegeData?.stream}
                        </div>
                    </div>

                    <div className="w-full mx-auto mt-5 overflow-auto lg:w-2/3">
                        <table className="w-full text-left whitespace-no-wrap table-auto">
                            <thead>
                                <tr>
                                    {
                                        collegeData?.marks?.semMarks?.headerLabels.map((header, index) => (
                                            <th className="px-4 py-3 text-sm font-medium tracking-wider text-white bg-gray-800 rounded-tl rounded-bl title-font">
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
                </div>
            </div>
        </>
    );
}

export default College;