import React, { useEffect } from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import MobileExperience from './MobileExperience';
import useScreenWidth from '../../hooks/useScreenWidth';
import DesktopViewExperience from './DesktopViewExperience';
import scrollToPosition from '../../helpers/scrollToPosition';

const Experiences = () => {
    const screenSize = useScreenWidth();

    useEffect(() => {
        scrollToPosition();
    }, []);

    return (
        <section id="experience">
            <div className="container w-full h-full mx-auto">
                <div align="center">
                    <h1 className="mb-2 text-2xl font-medium text-white title-font" id="experienceLabel">Experiences</h1>
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
        </section>
    );
}

export default Experiences;