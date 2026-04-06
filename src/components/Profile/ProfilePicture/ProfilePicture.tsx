import { useState, useEffect, type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { InfoData, type YearData } from '../../../assets/data/info';

import ActiveStatusGreenDot from '../../SharedComponents/ActiveStatusGreenDot/ActiveStatusGreenDot';
import useScreenWidth from '../../../hooks/useScreenWidth';

const PrettoSlider = styled(Slider)({
    color: '#00d4c8',
    height: 6,
    '& .MuiSlider-thumb': {
        display: 'none',
    },
    '& .MuiSlider-track': {
        height: 5,
        borderRadius: 4,
        background: 'linear-gradient(90deg, #00d4c8, #00a8e0)',
    },
    '& .MuiSlider-rail': {
        height: 5,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.12)',
    },
});

const FadeWhen = ({ when, children }: { when: boolean; children: ReactNode }) => (
    <div style={{ transition: 'opacity 0.4s ease', opacity: when ? 1 : 0 }}>{children}</div>
);

const currentYearNum = new Date().getFullYear();

function getYearData(selectedYear: number): YearData {
    let infoData = InfoData[selectedYear];
    if (!infoData) {
        infoData = InfoData[2025];
    }
    return infoData;
}

const circleOuter =
    'absolute rounded-full border-2 border-primary shadow-primary-glow animate-glow-spin max-md:[animation-play-state:paused] h-[360px] w-[360px] max-lg:h-[300px] max-lg:w-[300px] max-md:h-[250px] max-md:w-[250px]';

const circleInner =
    'absolute flex h-[336px] w-[336px] items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_center,#0d1f35_0%,#06111f_70%)] shadow-[0_0_40px_rgba(0,212,200,0.25),inset_0_0_60px_rgba(0,40,60,0.8)] max-lg:h-[278px] max-lg:w-[278px] max-md:h-[232px] max-md:w-[232px]';

const ppPic =
    'h-[308px] w-[308px] rounded-full bg-cover bg-center bg-no-repeat max-lg:h-[255px] max-lg:w-[255px] max-md:h-[210px] max-md:w-[210px]';

const careerCardBase =
    'flex cursor-pointer flex-col items-start rounded-[14px] border border-primary/20 bg-surface p-3.5 text-white shadow-glass backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-primary/35 hover:shadow-[0_8px_32px_rgba(0,212,200,0.25)] max-md:min-h-[110px] max-md:w-[120px] max-md:items-center';

const ProfilePicture = () => {
    const screenSize = useScreenWidth();
    const [year, setYear] = useState(currentYearNum);
    const [visible, setVisible] = useState(true);
    const data = getYearData(year);

    useEffect(() => {
        setTimeout(function () {
            setVisible(true);
        }, 400);
    }, [year]);

    return (
        <div className="relative z-[2] flex h-[380px] w-[380px] flex-col items-center justify-center max-lg:h-80 max-lg:w-80 max-md:mt-10 max-md:h-[280px] max-md:w-[280px]">
            <div className="absolute flex items-center justify-center">
                <div className={circleOuter} />
                <div className={circleInner}>
                    <div className={ppPic} style={{ backgroundImage: `url('../images/my-pic.png')` }} />
                </div>
            </div>

            <div className="z-[5] -mt-[18%] flex w-[130%] flex-row items-start justify-between max-lg:w-[120%] max-md:mt-[340px] max-md:w-full">
                {data.minor && (
                    <div
                        className={`${careerCardBase} min-h-[130px] w-[140px] animate-float-down`}
                        onClick={() => {
                            if (data.minor?.url) {
                                window.open(data.minor.url, '_blank');
                            }
                        }}
                    >
                        <FadeWhen when={visible}>
                            <ActiveStatusGreenDot icon={data.minor.img} inactive={data.minor.inactive} />
                            <p className="my-1.5 mb-1 mt-1.5 text-[0.88rem] font-semibold text-white">
                                {data.minor.title}
                            </p>
                            <p className="m-0 text-xs font-light leading-relaxed text-white/60">{data.minor.sub1}</p>
                            <p className="m-0 text-xs font-light leading-relaxed text-white/60">{data.minor.sub2}</p>
                        </FadeWhen>
                    </div>
                )}

                {data.extra && (
                    <div
                        className={`${careerCardBase} !animate-float-down-slow absolute left-[45vw] top-[26vh] min-h-[65px] w-[175px] !flex-row items-center justify-start py-2 pl-3 max-md:absolute max-md:left-[5px] max-md:top-[380px] max-md:h-[145px] max-md:w-[90px] max-md:flex-col max-md:items-center max-md:!flex-col`}
                        onClick={() => {
                            if (data.extra?.url) {
                                window.open(data.extra.url, '_blank');
                            }
                        }}
                    >
                        <FadeWhen when={visible}>
                            <ActiveStatusGreenDot icon={data.extra.img} inactive={data.extra.inactive} />
                            <div className="ml-2 flex flex-col items-start max-md:ml-0 max-md:items-center">
                                <p className="my-1.5 mb-1 mt-1.5 text-[0.88rem] font-semibold text-white">
                                    {data.extra.title}
                                </p>
                                <p className="m-0 text-xs font-light leading-relaxed text-white/60">
                                    {data.extra.sub2}
                                </p>
                            </div>
                        </FadeWhen>
                    </div>
                )}

                {data.major && (
                    <div
                        className={`${careerCardBase} min-h-[130px] w-[140px] animate-float-up`}
                        onClick={() => {
                            if (data.major?.url) {
                                window.open(data.major.url, '_blank');
                            }
                        }}
                    >
                        <FadeWhen when={visible}>
                            <div className="text-center">
                                <ActiveStatusGreenDot icon={data.major.img} inactive={data.major.inactive} />
                            </div>
                            <p className="my-1.5 mb-1 mt-1.5 text-[0.88rem] font-semibold text-white">
                                {data.major.title}
                            </p>
                            <p className="m-0 text-xs font-light leading-relaxed text-white/60">{data.major.sub1}</p>
                            <p className="m-0 text-xs font-light leading-relaxed text-white/60">{data.major.sub2}</p>
                        </FadeWhen>
                    </div>
                )}
            </div>

            <div className="z-[5] mt-28 flex flex-col items-center max-md:mt-5">
                <div
                    className={`flex w-[210px] flex-col items-center justify-around rounded-[14px] border border-primary/20 bg-surface p-2.5 px-5 backdrop-blur-md ${
                        screenSize === 'small' ? '' : ''
                    }`}
                >
                    <div className="mb-1 flex w-full justify-between">
                        <p className="m-0 text-xs font-light text-white/60">Timeline</p>
                        <p className="m-0 text-xs font-semibold text-primary">{year}</p>
                    </div>
                    <PrettoSlider
                        aria-label="career timeline"
                        value={year}
                        onChange={(_, newValue) => {
                            const next = typeof newValue === 'number' ? newValue : newValue[0];
                            if (next !== year) {
                                setVisible(false);
                            }
                            setYear(next);
                        }}
                        step={1}
                        min={2020}
                        max={currentYearNum}
                    />
                </div>
                <div id="heroSectionEnd" className="absolute mt-[100px] max-md:mt-8">
                    &nbsp;
                </div>
            </div>
        </div>
    );
};

export default ProfilePicture;
