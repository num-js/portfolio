import React from 'react';
import ExternalLink from '../SharedComponents/ActiveStatusGreenDot/ExternalLink';

const College = ({ collegeData }) => {

    return (
        <>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                    <span class="text-2xl font-medium title-font text-green-500"
                        dangerouslySetInnerHTML={{ __html: collegeData?.name }}
                    />
                    <span class="text-2xl font-medium text-white">
                        {collegeData?.board}
                    </span>
                    <span class="mt-1 text-xl text-gray-500 text-sm">
                        {collegeData?.timeLine}
                    </span>
                </div>
                <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-pink-600 title-font mb-2">
                        {collegeData?.course}
                    </h2>
                    <div class="leading-relaxed text-gray-200">
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

                    <div class="mt-5 lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
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
                </div>
            </div>
        </>
    );
}

export default College;