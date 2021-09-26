import React from 'react';
import './activityStatusFreenDotStyles.scss'

const ActiveStatusGreenDot = ({ icon, inactive }) => {
    let imgURL = "/icons/" + icon
    return (
        <div style={{ backgroundImage: "url(" + imgURL + ")" }} className="activity-bg">
            <div className={`status ${inactive ? 'inactive' : null}`}>
            </div>
        </div>
    )
}

export default ActiveStatusGreenDot;