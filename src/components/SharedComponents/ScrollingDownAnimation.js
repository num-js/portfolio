import React, { useEffect, useState } from 'react';
import { scrollToElement } from '../../helpers/scrollToPosition';

const arrowBg =
    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIGZpbGw9IiNlMjcyNWIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247dGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uO2ltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IiB2aWV3Qm94PSIwIDAgNjY4IDM3NSIgeD0iMHB4IiB5PSIwcHgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAKICAgIC5maWwwIHtmaWxsOiNlMjcyNWJ9CiAgIAogIDwvc3R5bGU+PC9kZWZzPjxnPjxwYXRoIGNsYXNzPSIiIGQ9Ik0zNjMgMzYzbDI5MyAtMjkyYzE2LC0xNyAxNiwtNDMgMCwtNTkgLTE2LC0xNiAtNDMsLTE2IC01OSwwbC0yNjMgMjYzIC0yNjMgLTI2M2MtMTcsLTE2IC00MywtMTYgLTU5LDAgLTE2LDE2IC0xNiw0MiAwLDU5bDI5MiAyOTJjMTcsMTYgNDMsMTYgNTksMHoiIHN0eWxlPSImIzEwOyAgICBmaWxsOiAjMmVhNmZlOyYjMTA7Ii8+PC9nPjwvc3ZnPg==")';

const ScrollingDownAnimation = ({ hiddenSection }) => {
    const [isShowScrollingDownAnim, setIsShowScrollingDownAnim] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsShowScrollingDownAnim(!entries[0]?.isIntersecting);
            },
            {
                rootMargin: '0px',
                threshold: 1.0,
            }
        );
        const hideSectionElem = document.querySelector(hiddenSection);
        hideSectionElem && observer.observe(hideSectionElem);

        return () => {
            observer.disconnect();
        };
    }, [hiddenSection]);

    return (
        <>
            {isShowScrollingDownAnim && (
                <div className="sticky bottom-8 right-0 my-6 -inset-x-3/4">
                    <div className="w-8">
                        <button
                            type="button"
                            className="absolute bottom-0 left-1/2 z-[100] h-[30px] w-[30px] -translate-x-1/2 cursor-pointer border-none bg-transparent bg-contain bg-no-repeat text-[70px] shadow-[0_0_3px_rgba(0,0,0,0.4)] animate-fade-move-down"
                            style={{ backgroundImage: arrowBg }}
                            aria-label="Scroll to timeline"
                            onClick={() => scrollToElement('heroSectionEnd')}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollingDownAnimation;
