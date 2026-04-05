import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { InfoData } from '../../../assets/data/info';

import './profilePicture.scss';
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

const FadeWhen = ({ when, children }) => (
    <div style={{ transition: 'opacity 0.4s ease', opacity: when ? 1 : 0 }}>
        {children}
    </div>
);

const currentYear = new Date().getFullYear().toString();

function getYearData(selectedYear) {
    let infoData = InfoData[selectedYear];
    if (!infoData) {
        infoData = InfoData[2025];
    }
    return infoData;
}

const ProfilePicture = () => {
    const screenSize = useScreenWidth();
    const [year, setYear] = useState(currentYear);
    const [visible, setVisible] = useState(true);
    let data = getYearData(year);

    useEffect(() => {
        setTimeout(function () { setVisible(true); }, 400);
    }, [year]);

    return (
        <div className="visual-bg">
            <p className="year-ghost" style={{ fontFamily: "akronim, cursive" }}>{year}</p>

            <div className="circle-div">
                <div className="circle-outer"></div>
                <div className="circle-inner">
                    <div className="pp" style={{ backgroundImage: `url('../images/my-pic.png')` }}></div>
                </div>
            </div>

            <div className="top-lable">
                {data.minor && (
                    <div
                        className="career-card"
                        onClick={() => { if (data.minor.url) { window.open(data.minor.url, "_blank"); } }}
                    >
                        <FadeWhen when={visible}>
                            <ActiveStatusGreenDot icon={data.minor.img} inactive={data.minor.inactive} />
                            <p className="card-title">{data.minor.title}</p>
                            <p className="card-sub">{data.minor.sub1}</p>
                            <p className="card-sub">{data.minor.sub2}</p>
                        </FadeWhen>
                    </div>
                )}

                {data.extra && (
                    <div
                        className="career-card extra-card"
                        onClick={() => { if (data.extra.url) { window.open(data.extra.url, "_blank"); } }}
                    >
                        <FadeWhen when={visible}>
                            <ActiveStatusGreenDot icon={data.extra.img} inactive={data.extra.inactive} />
                            <div className="flat-con">
                                <p className="card-title">{data.extra.title}</p>
                                <p className="card-sub">{data.extra.sub2}</p>
                            </div>
                        </FadeWhen>
                    </div>
                )}

                {data.major && (
                    <div
                        className="career-card"
                        onClick={() => { if (data.major.url) { window.open(data.major.url, "_blank"); } }}
                    >
                        <FadeWhen when={visible}>
                            <div style={{ textAlign: 'center' }}>
                                <ActiveStatusGreenDot icon={data.major.img} inactive={data.major.inactive} />
                            </div>
                            <p className="card-title">{data.major.title}</p>
                            <p className="card-sub">{data.major.sub1}</p>
                            <p className="card-sub">{data.major.sub2}</p>
                        </FadeWhen>
                    </div>
                )}
            </div>

            <div className="timeline-row">
                <div className={`timeline-card ${screenSize === 'small' ? 'mb-10' : ''}`}>
                    <div className="timeline-header">
                        <p className="card-sub">Timeline</p>
                        <p className="card-sub timeline-year">{year}</p>
                    </div>
                    <PrettoSlider
                        aria-label="career timeline"
                        value={year}
                        onChange={(event, newValue) => {
                            if (newValue !== year) { setVisible(false); }
                            setYear(newValue);
                        }}
                        step={1}
                        min={2020}
                        max={parseInt(currentYear)}
                        defaultValue={parseInt(currentYear)}
                    />
                </div>
                <div id="heroSectionEnd">&nbsp;</div>
            </div>
        </div>
    );
};

export default ProfilePicture;
