import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../Popper';
import MegaDropdown from './MegaDropdown';
import { useSelector } from 'react-redux';
import { multilingualSelector } from '~/redux/selector';
import config from '~/config';

const BottomHeader = () => {
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected } = multilingual;

    const programRef = useRef(null);

    useEffect(() => {
        const linkActive = document.querySelector('.header__wrapper__bottom__main-menu__item.active');
        const linkUnderline = document.querySelector('.header__wrapper__bottom__main-menu__underline');
        if (linkActive) {
            const actWidth = linkActive.clientWidth;
            const actPosition = linkActive.offsetLeft;

            linkUnderline.style.width = actWidth + 'px';
            linkUnderline.style.left = actPosition + 'px';
        } else {
            linkUnderline.style.left = 0;
            linkUnderline.style.width = 0;
        }
    });

    return (
        <div className="header__wrapper__bottom container">
            <ul className="header__wrapper__bottom__main-menu">
                <span className="header__wrapper__bottom__main-menu__underline"></span>
                <li>
                    <NavLink className="header__wrapper__bottom__main-menu__item" to={config.routes.home}>
                        {translationSelected.messages.home}
                    </NavLink>
                </li>
                <li className="header__wrapper__bottom__mega-dropdown">
                    <NavLink
                        className="header__wrapper__bottom__main-menu__item"
                        to="/course"
                        ref={programRef}
                        onClick={(e) => e.preventDefault()}
                    >
                        {translationSelected.messages.educationProgram}
                        <i className="bx bxs-chevron-down"></i>
                    </NavLink>
                    <Wrapper menu_toggle_ref={programRef} className={'header__wrapper__bottom__mega-dropdown__content'}>
                        <MegaDropdown />
                    </Wrapper>
                </li>
                <li>
                    <NavLink className="header__wrapper__bottom__main-menu__item" to={config.routes.news}>
                        {translationSelected.messages.news}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="header__wrapper__bottom__main-menu__item" to={config.routes.paymentGuide}>
                        {translationSelected.messages.paymentGuide}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="header__wrapper__bottom__main-menu__item" to={config.routes.contact}>
                        {translationSelected.messages.contact}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default BottomHeader;
