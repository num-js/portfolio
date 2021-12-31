import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import MobileExperience from './MobileExperience';
import useScreenWidth from '../../hooks/useScreenWidth';
import DesktopViewExperience from './DesktopViewExperience';

const Experiences = () => {
    const screenSize = useScreenWidth();

    return (
        <>
            <div class="container mx-auto w-full h-full">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Experiences</h1>
                </div>
                <div class="relative wrap overflow-hidden p-10 h-full">
                    {
                        screenSize == 'large' ? (
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