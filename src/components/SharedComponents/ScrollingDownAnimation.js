import React, { useEffect, useState } from 'react'
import '../../styles/down-arrow.css';

const ScrollingDownAnimation = ({ hiddenSection }) => {

    const [isShowScrollingDownAnim, setIsShowScrollingDownAnim] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsShowScrollingDownAnim(!entries[0]?.isIntersecting);
                console.log('entries: ', entries);
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
                        <a className="scrolling-down-link scrolling-down-arrow" />
                    </div>
                </div>
            )}
        </>
    )
}

export default ScrollingDownAnimation;