import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import Company from './Company';

const Experiences = () => {
    return (
        <>
            <section className="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 className="mb-2 text-2xl font-medium text-white title-font">Experiences</h1>
                </div>
                <div align="left">
                    <div className="mt-5">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            {
                                experiencesData.map((companyData, index) => (
                                    <Company key={index} companyData={companyData} />
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