import React from 'react';
import Popover from '@mui/material/Popover';

const paperClass =
    '!mt-1 !rounded-lg !border !border-white/10 !bg-surface-glass/95 !shadow-glass !backdrop-blur-md px-4 py-1';

const SkillsPopover = ({ skillImgElem, popoverId, openPopover, closeSkillPopover, children }) => {
    return (
        <Popover
            id={popoverId}
            open={openPopover}
            anchorEl={skillImgElem}
            onClose={closeSkillPopover}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            slotProps={{
                paper: {
                    className: paperClass,
                },
            }}
        >
            {children}
        </Popover>
    );
};

export default SkillsPopover;
