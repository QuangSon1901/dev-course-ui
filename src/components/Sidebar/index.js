import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { multilingualSelector } from '~/redux/selector';

const Sidebar = forwardRef((props, ref) => {
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected } = multilingual;

    return (
        <div ref={ref} className="sidebar">
            {props.type === 'toggle-menu' ? (
                <ul>
                    <li>
                        <h3>{translationSelected.messages.home}</h3>
                    </li>
                    <li>
                        <h3>{translationSelected.messages.educationProgram}</h3>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li>
                        <h3>{translationSelected.messages.news}</h3>
                    </li>
                    <li>
                        <h3>{translationSelected.messages.paymentGuide}</h3>
                    </li>
                    <li>
                        <h3>{translationSelected.messages.contact}</h3>
                    </li>
                </ul>
            ) : (
                ''
            )}

            {props.type === 'search' ? (
                <div className="sidebar__search">
                    <div className="sidebar__search__input">
                        <input type="text" placeholder={translationSelected.messages.search} />
                        {/* <i className="bx bx-search-alt search-btn"></i> */}
                        <i className="bx bx-loader-alt sidebar__search__input-loading"></i>
                    </div>
                    <div className="sidebar__search__suggess"></div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
});

export default Sidebar;
