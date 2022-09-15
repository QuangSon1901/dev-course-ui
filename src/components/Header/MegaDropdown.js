import React from 'react';
import Grid from '../Grid';

const MegaDropdown = ({ data }) => {
    return (
        <div className="grid">
            <Grid col={5} mdCol={3} smCol={2} gap={20}>
                {data.map((item) => (
                    <div key={item.id}>
                        <h3 className="header__wrapper__bottom__mega-dropdown__content__title">{item.title}</h3>
                        <ul>
                            {item.data.map((item2) => (
                                <li key={item2.id}>
                                    <a href="/">
                                        <i className="bx bx-right-arrow-circle"></i>
                                        {item2.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Grid>
        </div>
    );
};

export default MegaDropdown;
