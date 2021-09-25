import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import Company from './Company';

const Experiences = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-28">
                <h1 class="text-2xl font-medium text-white title-font mb-2">Experiences</h1>
                <div align="left">
                    <div class="mt-5">
                        <div class="-my-8 mt-5 divide-y-2 divide-gray-100">
                            {
                                experiencesData.map((companyData, index) => (
                                    <Company companyData={companyData} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;