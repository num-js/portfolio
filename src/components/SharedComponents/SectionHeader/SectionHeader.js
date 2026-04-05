import React from 'react';

const SectionHeader = ({ sectionTitle, sectionId = '', sectionIconPath = '', sectionIcon }) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="relative flex h-auto w-[350px] items-center justify-center">
                    <img src="../icons/curvy-lines.svg" alt="" />
                    <h2
                        className="font-akronim absolute m-0 text-2xl font-semibold tracking-wide text-primary drop-shadow-[0_0_24px_rgba(0,212,200,0.25)] title-font flex"
                        id={sectionId}
                    >
                        {sectionTitle}
                        {sectionIconPath && <img src={sectionIconPath} alt="" />}
                        {sectionIcon && sectionIcon}
                    </h2>
                    <span></span>
                </div>
            </div>
        </>
    );
};

export default SectionHeader;
