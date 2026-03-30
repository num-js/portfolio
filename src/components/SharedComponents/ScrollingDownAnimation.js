import React, { useEffect, useState } from 'react'
import { scrollToElement } from '../../helpers/scrollToPosition';
import '../../styles/down-arrow.css';

const ScrollingDownAnimation = ({ hiddenSection }) => {

    const [isShowScrollingDownAnim, setIsShowScrollingDownAnim] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsShowScrollingDownAnim(!entries[0]?.isIntersecting);
            },
            {
                rootMargin: '0px',
                threshold: 1.0
            }
        );
        const hideSectionElem = document.querySelector(hiddenSection);
        hideSectionElem && observer.observe(hideSectionElem);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {isShowScrollingDownAnim && (
                <div className="sticky right-0 my-6 bottom-8 -inset-x-3/4">
                    <div className="w-8">
                        <a className="cursor-pointer scrolling-down-link scrolling-down-arrow" onClick={() => scrollToElement('heroSectionEnd')} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ScrollingDownAnimation;