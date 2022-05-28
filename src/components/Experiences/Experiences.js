import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import MobileExperience from './MobileExperience';
import useScreenWidth from '../../hooks/useScreenWidth';
import DesktopViewExperience from './DesktopViewExperience';

const Experiences = () => {
    const screenSize = useScreenWidth();

    return (
        <>
            <div className="container w-full h-full mx-auto">
                <div align="center">
                    <h1 className="mb-2 text-2xl font-medium text-white title-font">Experiences</h1>
                </div>
                <div className="relative h-full p-10 overflow-hidden wrap">
                    {
                        screenSize === 'large' ? (
                            <DesktopViewExperience experiencesData={experiencesData} />
                        ) : (
                            <MobileExperience experiencesData={experiencesData} />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Experiences;