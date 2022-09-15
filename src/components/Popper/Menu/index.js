import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ data, type }) => {
    return (
        <div className="menu__wrapper">
            {data.map((item) => (
                <MenuItem key={item.id} id={item.id} type={type} title={item.title} />
            ))}
        </div>
    );
};

export default Menu;
