import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import MidHeader from './MidHeader';
import { useEffect, useRef } from 'react';

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const shrink = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };

        window.addEventListener('scroll', shrink);
        return () => {
            window.removeEventListener('scroll', shrink);
        };
    }, []);
    return (
        <>
            <header ref={headerRef} className="header">
                <div className="header__wrapper" id="header-wrapper">
                    <div className="bg-second">
                        <TopHeader />
                    </div>
                    <div className="bg-main">
                        <MidHeader />
                    </div>
                    <div className="bg-main">
                        <BottomHeader />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
