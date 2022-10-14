import React, { useEffect, useState } from 'react';
import Grid from '../Grid';
import * as httpRequest from '~/utils/httpRequest';

const MegaDropdown = () => {
    const [programs, setPrograms] = useState({ program: [] });
    useEffect(() => {
        const fetchPrograms = async () => {
            const res = await httpRequest.get('/programs', {
                params: { type: 'less' },
            });
            setPrograms(res);
        };

        fetchPrograms();
    }, []);
    return (
        <div className="grid mega-dropdown">
            <Grid col={5} mdCol={3} smCol={2} gap={20}>
                {programs.program.map((item) => (
                    <div key={item.id}>
                        <h3 className="header__wrapper__bottom__mega-dropdown__content__title">{item.name}</h3>
                        <ul>
                            {item.courses.map((item2) => (
                                <li key={item2.id}>
                                    <a href={'course/' + item2.slug}>
                                        <i className="bx bx-right-arrow-circle"></i>
                                        {item2.name}
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
