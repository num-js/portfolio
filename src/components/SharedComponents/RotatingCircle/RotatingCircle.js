import React, { useEffect } from 'react';
import './rotating-circle.css';

const RotatingCircle = ({ data, showSkillPopover }) => {

    useEffect(() => {
        let angle = 360 / 6;
        let finalAngle = -360;
        const circleContainer = document.querySelectorAll(".rotating-circle");
        circleContainer.forEach(circle => {
            finalAngle -= 60;
            circle.style.transform = `rotate(${angle}deg)`;
            circle.style.setProperty("--start-angle-of-rotation", `-${angle}deg`);
            circle.style.setProperty("--end-angle-of-rotation", `${finalAngle}deg`);
            angle += 60;
        });
    }, []);

    return (
        <>
            <div className="rotating-circle-section">
                <div className="rotating-circle-container">
                    {/* <img className="rotating-circle-img" src="https://numan-dev.web.app/images/my-pic.png" alt="portrait" /> */}
                    <span className="rotating-circle-text" style={{ width: "500px", color: 'white', display: 'flex', justifyContent: 'center' }}>
                        {data?.title}
                    </span>
                    {data?.skills.map(skill => (
                        <div className="rotating-circle">
                            <div className="rotating-inner-circle" style={skill?.styles}
                                onClick={(event) => showSkillPopover(event, skill)}
                            >
                                <img src={skill.pic} width="100%" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RotatingCircle;