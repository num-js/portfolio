import React from 'react';

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
    showSkillPopover,
}) => {
    return (
        <div
            className="relative cursor-pointer rounded-2xl border border-white/15 bg-surface-glass shadow-glass backdrop-blur-[5px] animate-up-down-tech"
            style={styles}
        >
            <img
                src={pic}
                width="100%"
                height={picHeight}
                alt=""
                className="h-full w-full object-cover"
                onClick={(event) => showSkillPopover(event, skill.details)}
            />
        </div>
    );
};

export default Tech;
