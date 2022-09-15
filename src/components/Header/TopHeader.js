import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { multilingualSelector } from '~/redux/selector';
import { Wrapper } from '../Popper';
import Menu from '../Popper/Menu';
import ThemeMenu from '../ThemeMenu';

const MEMU_ITEMS_CURRENCY = [
    {
        id: uuidv4(),
        title: 'JPN',
    },
    {
        id: uuidv4(),
        title: 'EUR',
    },
    {
        id: uuidv4(),
        title: 'SPN',
    },
    {
        id: uuidv4(),
        title: 'USD',
    },
];

const TopHeader = () => {
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected, translations } = multilingual;

    const [translationsList, setTranslationsList] = useState([]);

    useEffect(() => {
        const index = translations.indexOf(translationSelected);
        const newLanguadeList = [...translations];
        newLanguadeList.splice(index, 1);
        setTranslationsList(newLanguadeList);
    }, [multilingual]);

    const themeRef = useRef(null);
    const currencyRef = useRef(null);
    const languageRef = useRef(null);

    const handleThemeModeToggle = (e) => {
        e.preventDefault();

        themeRef.current.classList.toggle('active');
    };

    return (
        <div className="header__wrapper__top container">
            <ul className="header__wrapper__top__devided">
                <li>
                    <a href="/">+84 39 406 2185</a>
                </li>
                <li>
                    <a href="/">dev_it@gmail.com</a>
                </li>
            </ul>
            <ul className="header__wrapper__top__devided">
                <li className="dropdown">
                    <a ref={currencyRef} href="/" className="toggle-currency" onClick={(e) => e.preventDefault()}>
                        VND
                    </a>
                    <Wrapper menu_toggle_ref={currencyRef} className="dropdown__content">
                        <Menu type="currency" data={MEMU_ITEMS_CURRENCY}></Menu>
                    </Wrapper>
                </li>
                {translations ? (
                    <li className="dropdown">
                        <a ref={languageRef} href="/" className="toggle-language" onClick={(e) => e.preventDefault()}>
                            {translationSelected.title}
                        </a>
                        <Wrapper menu_toggle_ref={languageRef} className="dropdown__content">
                            <Menu type="multilingual" data={translationsList}></Menu>
                        </Wrapper>
                    </li>
                ) : (
                    ''
                )}
                <li>
                    <a href="/" className="toggle-theme" onClick={(e) => handleThemeModeToggle(e)}>
                        {translationSelected.messages.theme}
                    </a>
                    <ThemeMenu ref={themeRef} />
                </li>
            </ul>
        </div>
    );
};

export default TopHeader;
