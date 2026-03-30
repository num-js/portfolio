import { useState } from 'react'

const useToggleNav = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    return { toggleMobileMenu, setToggleMobileMenu };
}

export default useToggleNav;