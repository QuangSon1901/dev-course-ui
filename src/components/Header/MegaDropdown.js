import React from 'react';
import Grid from '../Grid';
import { useSelector } from 'react-redux';
import { combineSelector } from '~/redux/selector';
import Skeleton from '../Skeleton';

const MegaDropdown = () => {
    const { menuPrograms, loading } = useSelector(combineSelector);

    return (
        <div className="grid mega-dropdown">
            {loading ? (
                <Skeleton width={1326} height={200}>
                    <rect x="0" y="60" rx="8" ry="8" width="240" height="10" />
                    <rect x="0" y="20" rx="8" ry="8" width="160" height="14" />
                    <rect x="0" y="80" rx="8" ry="8" width="240" height="10" />
                    <rect x="0" y="100" rx="8" ry="8" width="240" height="10" />
                    <rect x="0" y="120" rx="8" ry="8" width="240" height="10" />
                    <rect x="0" y="140" rx="8" ry="8" width="240" height="10" />
                    <rect x="0" y="160" rx="8" ry="8" width="240" height="10" />
                    <rect x="0" y="180" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="60" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="20" rx="8" ry="8" width="160" height="14" />
                    <rect x="260" y="80" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="100" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="120" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="140" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="160" rx="8" ry="8" width="240" height="10" />
                    <rect x="260" y="180" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="60" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="20" rx="8" ry="8" width="160" height="14" />
                    <rect x="520" y="80" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="100" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="120" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="140" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="160" rx="8" ry="8" width="240" height="10" />
                    <rect x="520" y="180" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="60" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="20" rx="8" ry="8" width="160" height="14" />
                    <rect x="780" y="80" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="100" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="120" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="140" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="160" rx="8" ry="8" width="240" height="10" />
                    <rect x="780" y="180" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="60" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="20" rx="8" ry="8" width="160" height="14" />
                    <rect x="1040" y="80" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="100" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="120" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="140" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="160" rx="8" ry="8" width="240" height="10" />
                    <rect x="1040" y="180" rx="8" ry="8" width="240" height="10" />
                </Skeleton>
            ) : (
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
            )}
        </div>
    );
};

export default MegaDropdown;
