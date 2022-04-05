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
            <div class="square cursor-pointer"
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