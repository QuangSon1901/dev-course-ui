import React from 'react';
import images from '~/assets/images';
import { CardItem } from '~/components/Card';
import Grid from '~/components/Grid';
import InputCustom from '~/components/InputCustom';

const MyLearning = () => {
    return (
        <div className="profile__learning">
            <div className="container">
                <div className="profile__learning__container">
                    <div className="profile__learning__container__navbar">
                        <ul>
                            <li className="active">All courses</li>
                            <li>Wish list</li>
                            <li>Online course</li>
                            <li>Offline course</li>
                        </ul>
                    </div>
                    <div className="profile__learning__container__content">
                        <div className="profile__learning__container__content__header">
                            <div className="profile__learning__container__content__header__search">
                                <InputCustom
                                    label=""
                                    validate={false}
                                    tag=""
                                    name="name"
                                    value=""
                                    onChange={() => {}}
                                    placeholder="Search my courses"
                                />
                                <InputCustom
                                    classComp="primary-2"
                                    leftIcon="bx bx-search"
                                    typeComp="button"
                                    width="w-auto"
                                />
                            </div>
                        </div>
                        <Grid col={3} gap={50} className="profile__learning__container__content__body">
                            <CardItem
                                name="Java Fullstackk"
                                image={'16666917886851712_fc61_6.jpg'}
                                slug="hakfgkhdgfkhsdgf"
                                to={'course/ljhafjkakjfhd'}
                            />
                            <CardItem
                                name="Java Fullstackk"
                                image={'16666917886851712_fc61_6.jpg'}
                                slug="hakfgkhdgfkhsdgf"
                                to={'course/ljhafjkakjfhd'}
                            />
                            <CardItem
                                name="Java Fullstackk"
                                image={'16666917886851712_fc61_6.jpg'}
                                slug="hakfgkhdgfkhsdgf"
                                to={'course/ljhafjkakjfhd'}
                            />
                            <CardItem
                                name="Java Fullstackk"
                                image={'16666917886851712_fc61_6.jpg'}
                                slug="hakfgkhdgfkhsdgf"
                                to={'course/ljhafjkakjfhd'}
                            />
                            <CardItem
                                name="Java Fullstackk"
                                image={'16666917886851712_fc61_6.jpg'}
                                slug="hakfgkhdgfkhsdgf"
                                to={'course/ljhafjkakjfhd'}
                            />
                            <CardItem
                                name="Java Fullstackk"
                                image={'16666917886851712_fc61_6.jpg'}
                                slug="hakfgkhdgfkhsdgf"
                                to={'course/ljhafjkakjfhd'}
                            />
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLearning;
