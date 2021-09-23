import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { InfoData } from '../../../assets/data/info';
import Fade from 'react-reveal/Fade';

import './profilePicture.scss'
import ActiveStatusGreenDot from '../../SharedComponents/ActiveStatusGreenDot/ActiveStatusGreenDot';

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 23,
        width: 23,
        backgroundColor: '#306344',
        border: '5px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        boxShadow: "inset 5px 1px 4px -2px rgba(0,0,0,0.16)",
        '&:focus, &:hover, &$active': {
            boxShadow: "inset 5px 1px 4px -2px rgba(0,0,0,0.16)",
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 6,
        borderRadius: 4,
    },
    rail: {
        height: 6,
        borderRadius: 4,
    },
})(Slider);


const ProfilePicture = () => {
    const [year, setYear] = useState(2021)
    let data = InfoData[year];
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(function () { setVisible(true) }, 400);
    }, [year]);
    return (
        <div className="visual-bg" style={{ backgroundImage: `url('../images/my-pic.png')` }}>
            <p className="year">{year}</p>
            <div className="top-lable">
                <div className="current-job" onClick={() => { if (data.minor.url) { window.open(data.minor.url, "_blank") } }}>
                    <Fade opposite when={visible}>
                        <ActiveStatusGreenDot icon={data.minor.img} inactive={data.minor.inactive} />
                        <p className="card-title">{data.minor.title}</p>
                        <p className="card-sub">{data.minor.sub1}</p>
                        <p className="card-sub">{data.minor.sub2}</p>
                    </Fade>
                </div>
                <div className="current-job" onClick={() => { if (data.major.url) { window.open(data.major.url, "_blank") } }}>
                    <Fade opposite when={visible}>
                        <div align="center">
                            <ActiveStatusGreenDot icon={data.major.img} inactive={data.major.inactive} />
                        </div>
                        <p className="card-title">{data.major.title}</p>
                        <p className="card-sub">{data.major.sub1}</p>
                        <p className="card-sub">{data.major.sub2}</p>
                    </Fade>
                </div>
            </div>
            <div className="top-lable down">
                <div className="current-job flat-large">
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p className="card-sub">2020</p>
                        <p className="card-sub">2021</p>
                    </div>
                    <PrettoSlider
                        aria-label="pretto slider"
                        value={year}
                        onChange={(event, newValue) => { if (newValue !== year) { setVisible(false) }; setYear(newValue); }}
                        steps={1}
                        min={2020}
                        max={2021}
                    />
                </div>
            </div>
        </div>
    );
}
export default ProfilePicture;