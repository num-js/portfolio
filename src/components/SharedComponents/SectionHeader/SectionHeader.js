import React from 'react';
import './section-header.css';
const SectionHeader = ({ sectionTitle, sectionId = "", sectionIconPath = "", sectionIcon }) => {
    return (
        <>
            <div align="center">
                <div class="sec-header-div">
                    <img src="../icons/curvy-lines.svg" />
                    <h2 class="font-akronim sec-header-txt text-2xl font-medium text-white title-font flex" id={sectionId}>
                        {sectionTitle}
                        {sectionIconPath && (<img src={sectionIconPath} />)}
                        {sectionIcon && (sectionIcon)}
                    </h2>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default SectionHeader;