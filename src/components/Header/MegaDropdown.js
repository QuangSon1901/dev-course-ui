import React from 'react';
import Grid from '../Grid';
import { useSelector } from 'react-redux';
import { combineSelector } from '~/redux/selector';

const MegaDropdown = () => {
    const { menuPrograms } = useSelector(combineSelector);

    return (
        <div className="grid mega-dropdown">
            <Grid col={5} mdCol={3} smCol={2} gap={20}>
                {menuPrograms.map((program) => (
                    <div key={program.id}>
                        <a
                            href={'course/' + program.slug}
                            className="header__wrapper__bottom__mega-dropdown__content__title"
                        >
                            {program.name}
                        </a>
                        <ul>
                            {program.category_courses.map((category_course) => (
                                <li key={category_course.id}>
                                    <a href={'course/' + category_course.slug}>
                                        <i className="bx bx-right-arrow-circle"></i>
                                        {category_course.name}
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
