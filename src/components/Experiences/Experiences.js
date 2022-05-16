import React from 'react';
import experiencesData from '../../assets/data/experiencesData.json';
import MobileExperience from './MobileExperience';
import useScreenWidth from '../../hooks/useScreenWidth';
import DesktopViewExperience from './DesktopViewExperience';
import { generateRandomNumber } from '../../helpers/generateNumber';
import { getFullDuration } from '../../helpers/getDate';

const Experiences = () => {
    const screenSize = useScreenWidth();

    return (
        <>
            <div class="container mx-auto w-full h-full">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Experiences</h1>

                    <div class="order-1 rounded-lg shadow-xl px-4 py-2 mt-8"
                        style={{ boxShadow: `0px 0px 15px 1px rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)} ${generateRandomNumber(100, 255)})`, width: 'fit-content' }}
                    >
                        <h3 class="text-l text-white">
                            {getFullDuration('2020-03-01', '2022-05-05')} <br />
                            {/* 8 Hrs 20 Min 15 Sec */}
                        </h3>
                    </div>
                </div>
                <div class="relative wrap overflow-hidden p-10 h-full">
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