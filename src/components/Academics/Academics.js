import React from 'react';
import academicsData from '../../assets/data/academicsData.json';
import College from './College';

const Academics = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-28">
                <h1 class="text-2xl font-medium text-white title-font mb-2">Academics</h1>
                <div align="left">
                    <div class="mt-5">
                        <div class="-my-8 mt-5 divide-y-2 divide-gray-100">
                            {
                                academicsData.map((collegeData, index) => (
                                    <College collegeData={collegeData} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Academics;