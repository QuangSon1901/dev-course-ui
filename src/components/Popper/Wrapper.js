import React, { useEffect, useRef } from 'react';

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active');
        } else {
            // user click ouutside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active');
            }
        }
    });
};

const Wrapper = ({ children, className, menu_toggle_ref }) => {
    const menu_ref = useRef(null);

    useEffect(() => {
        menu_toggle_ref && menu_ref && clickOutsideRef(menu_ref, menu_toggle_ref);
    }, []);
    return (
        <div ref={menu_ref} className={`wrapper ${className}`}>
            {children}
        </div>
    );
};

export default Wrapper;
