import React from 'react'
import './techs.css'

const Tech = ({
    pic,
    picHeight = '100%',
    divStyles,
    styles = {
        width: '150px',
        height: '150px',
        ...divStyles,
    },
    skill,
    showSkillPopover
}) => {
    return (
        <>
            <div className="cursor-pointer square"
                style={styles}
            >
                <img src={pic} width="100%" height={picHeight}
                    onClick={(event) => showSkillPopover(event, skill.details)}
                />
            </div>
        </>
    )
}

export default Tech;