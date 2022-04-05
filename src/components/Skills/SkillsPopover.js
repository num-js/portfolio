import React from 'react';
import Popover from '@material-ui/core/Popover';

const SkillsPopover = ({ skillImgElem, popoverId, openPopover, closeSkillPopover, children }) => {
    return (
        <>
            <Popover
                id={popoverId}
                open={openPopover}
                anchorEl={skillImgElem}
                onClose={closeSkillPopover}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
            >
                {children}
            </Popover>
        </>
    );
}

export default SkillsPopover;