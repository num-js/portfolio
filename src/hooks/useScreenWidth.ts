import { useEffect, useState } from 'react';

export type ScreenWidthSize = '' | 'large' | 'medium' | 'small';

const useScreenWidth = () => {
    const [screenWidthSize, setScreenWidthSize] = useState<ScreenWidthSize>('');

    useEffect(() => {
        if (window.innerWidth > 992) return setScreenWidthSize('large');
        if (window.innerWidth < 992 && window.innerWidth > 600) return setScreenWidthSize('medium');
        if (window.innerWidth < 600) return setScreenWidthSize('small');
    }, []);

    return screenWidthSize;
};

export default useScreenWidth;
