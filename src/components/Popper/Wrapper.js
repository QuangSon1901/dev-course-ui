import React, { useEffect, useRef } from 'react';

const Wrapper = ({
    children,
    className,
    menu_toggle_ref,
    style = {},
    focus_ref = false,
    focus_active = false,
    setSuggest,
}) => {
    const menu_ref = useRef(null);

    useEffect(() => {
        const clickOutsideRef = (e) => {
            if (menu_toggle_ref.current && menu_toggle_ref.current.contains(e.target)) {
                menu_ref.current.classList.toggle('active');
            } else {
                // user click ouutside toggle and content
                if (menu_ref.current && !menu_ref.current.contains(e.target)) {
                    menu_ref.current.classList.remove('active');
                }
            }
        };
        const focusOutsideRef = (e) => {
            if (
                menu_ref.current &&
                !menu_toggle_ref.current.contains(e.target) &&
                !menu_ref.current.contains(e.target)
            ) {
                menu_ref.current.classList.remove('active');
                setSuggest(false);
            }
        };

        focus_ref === false && menu_toggle_ref && menu_ref && document.addEventListener('mousedown', clickOutsideRef);
        focus_ref === true && menu_toggle_ref && menu_ref && document.addEventListener('mousedown', focusOutsideRef);

        return () => {
            document.removeEventListener('mousedown', clickOutsideRef);
            document.removeEventListener('mousedown', focusOutsideRef);
        };
    }, []);
    return (
        <div ref={menu_ref} style={style} className={`wrapper ${className} ${focus_active ? 'active' : ''}`}>
            {children}
        </div>
    );
};

export default Wrapper;
