import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { InfoData } from '../../../assets/data/info';

import './profilePicture.scss'
import ActiveStatusGreenDot from '../../SharedComponents/ActiveStatusGreenDot/ActiveStatusGreenDot';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { getCurrentYear } from '../../../helpers/getDate';

const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        color: 'white',
        fontSize: '14px',
        backgroundColor: '#306344',
        border: '1px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        boxShadow: "inset 5px 1px 4px -2px rgba(0,0,0,0.16)",
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: "inset 5px 1px 4px -2px rgba(0,0,0,0.16)",
        },
    },
    '& .MuiSlider-valueLabel': {
        left: 'calc(-50% + 4px)',
    },
    '& .MuiSlider-track': {
        height: 6,
        borderRadius: 4,
    },
    '& .MuiSlider-rail': {
        height: 6,
        borderRadius: 4,
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
        setTimeout(function () { setVisible(true) }, 400);
    }, [year]);

    const ThumbComponentCustom = React.forwardRef(function ThumbComponentCustom(props, ref) {
        const { children, ...other } = props;
        return (
            <span {...other} ref={ref}>
                {('' + year).slice(2, 4)}
                {children}
            </span>
        );
    });

    return (
        <div className="visual-bg">
            <div className="circle-div">
                <div className="circle"></div>
                <div className="pp" style={{ backgroundImage: `url('../images/my-pic.png')` }}></div>
            </div>
            <p className="year" style={{ fontFamily: "akronim, cursive" }}>{year}</p>
            <div className="top-lable">
                {data.minor && (
                    <div className="current-job" onClick={() => { if (data.minor.url) { window.open(data.minor.url, "_blank") } }}>
                        <FadeWhen when={visible}>
                            <ActiveStatusGreenDot icon={data.minor.img} inactive={data.minor.inactive} />
                            <p className="card-title">{data.minor.title}</p>
                            <p className="card-sub">{data.minor.sub1}</p>
                            <p className="card-sub">{data.minor.sub2}</p>
                        </FadeWhen>
                    </div>
                )}

                {data.extra && (
                    <div className={`current-job flat-extra`} onClick={() => { if (data.extra.url) { window.open(data.extra.url, "_blank") } }}>
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
                    <div className="current-job" onClick={() => { if (data.major.url) { window.open(data.major.url, "_blank") } }}>
                        <FadeWhen when={visible}>
                            <div align="center">
                                <ActiveStatusGreenDot icon={data.major.img} inactive={data.major.inactive} />
                            </div>
                            <p className="card-title">{data.major.title}</p>
                            <p className="card-sub">{data.major.sub1}</p>
                            <p className="card-sub">{data.major.sub2}</p>
                        </FadeWhen>
                    </div>
                )}
            </div>
            <div className={`top-lable down`}>
                <div className={`current-job flat-large ${screenSize === 'small' ? 'mb-10' : ''}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p className="card-sub">Timeline</p>
                        <p className="card-sub">{year}</p>
                    </div>
                    <PrettoSlider
                        aria-label="pretto slider"
                        value={year}
                        onChange={(event, newValue) => { if (newValue !== year) { setVisible(false) }; setYear(newValue); }}
                        step={1}
                        min={2020}
                        max={parseInt(currentYear)}
                        defaultValue={parseInt(currentYear)}
                        slots={{ thumb: ThumbComponentCustom }}
                    />
                </div>
                <div id="heroSectionEnd"> &nbsp; </div>
            </div>
        </div>
    );
}
export default ProfilePicture;
