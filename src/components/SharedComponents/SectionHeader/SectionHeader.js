import React from 'react';
import './section-header.css';
const SectionHeader = ({ sectionTitle, sectionId = "", sectionIconPath = "", sectionIcon }) => {
    return (
        <>
            <div align="center">
                <div className="sec-header-div">
                    <img src="../icons/curvy-lines.svg" alt="" />
                    <h2 className="font-akronim sec-header-txt text-2xl font-medium title-font flex" id={sectionId}>
                        {sectionTitle}
                        {sectionIconPath && (<img src={sectionIconPath} alt="" />)}
                        {sectionIcon && (sectionIcon)}
                    </h2>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default SectionHeader;
