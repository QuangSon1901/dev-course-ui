import React from 'react';

const ScrollTop = ({ active }) => {
    const handleScollTop = () => {
        var rootElement = document.documentElement;
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scroll-top ${active ? 'active' : ''}`} onClick={handleScollTop}>
            <i className="bx bxs-arrow-to-top"></i>
        </div>
    );
};

export default ScrollTop;
