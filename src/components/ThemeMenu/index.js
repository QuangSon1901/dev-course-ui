import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { multilingualSelector, themeSelector } from '~/redux/selector';
import { disableScroll, enableScroll } from '~/utils/scrollBody';
import themeSlice from './themeSlice';

const ThemeMenu = (props) => {
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected } = multilingual;

    const themeMenuRef = useRef(null);
    const overlay = useRef(null);
    let unmountDelay;

    const dispatch = useDispatch();
    const theme = useSelector(themeSelector);

    const handleThemeMode = (themeClass) => {
        dispatch(themeSlice.actions.SET_THEME(themeClass));
    };

    const handleColorMode = (colorClass) => {
        dispatch(themeSlice.actions.SET_COLOR(colorClass));
    };

    const handleClose = () => {
        overlay.current.style.opacity = 0;
        themeMenuRef.current.style.right = '-300px';
        unmountDelay = setTimeout(() => {
            props.onClose();
        }, 500);
    };

    const clickOutSide = (e) => {
        if (!document.querySelector('.toggle-theme').contains(e.target) && !themeMenuRef.current.contains(e.target))
            return handleClose();
    };

    useEffect(() => {
        document.addEventListener('click', clickOutSide);
        disableScroll();
        return () => {
            clearTimeout(unmountDelay);
            document.removeEventListener('click', clickOutSide);
            enableScroll();
        };
    }, []);

    const mode_settings = [
        {
            id: 'light',
            name: translationSelected.messages.light,
            background: 'light-background',
            class: 'theme-mode-light',
        },
        {
            id: 'dark',
            name: translationSelected.messages.dark,
            background: 'dark-background',
            class: 'theme-mode-dark',
        },
    ];

    const color_settings = [
        {
            id: 'blue',
            name: translationSelected.messages.blue,
            background: 'blue-color',
            class: 'theme-color-blue',
        },
        {
            id: 'red',
            name: translationSelected.messages.red,
            background: 'red-color',
            class: 'theme-color-red',
        },
    ];

    return (
        <>
            <div ref={overlay} className="overlay"></div>

            <div ref={themeMenuRef} className="theme-menu">
                <h2>{translationSelected.messages.themeSettings}</h2>
                <button onClick={handleClose} className="theme-menu__close">
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme-menu__select">
                    <span>{translationSelected.messages.chooseMode}</span>
                    <ul className="theme-menu__select__mode-list">
                        {mode_settings.map((item, index) => (
                            <li key={index} onClick={() => handleThemeMode(item.class)}>
                                <div
                                    className={`theme-menu__select__mode-list__color ${item.background} ${
                                        theme.theme === item.class ? 'active' : ''
                                    }`}
                                >
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>{translationSelected.messages.chooseColor}</span>
                    <ul className="theme-menu__select__mode-list">
                        {color_settings.map((item, index) => (
                            <li key={index} onClick={() => handleColorMode(item.class)}>
                                <div
                                    className={`theme-menu__select__mode-list__color ${item.background} ${
                                        theme.color === item.class ? 'active' : ''
                                    }`}
                                >
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ThemeMenu;
