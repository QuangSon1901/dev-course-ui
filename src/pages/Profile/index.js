import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Image from '~/components/Image';
import InputCustom from '~/components/InputCustom';
import { authSelector } from '~/redux/selector';

const Profile = () => {
    const { user } = useSelector(authSelector);

    const [profileMenu, setProfileMenu] = useState({
        about: true,
    });

    return (
        <div className="profile__info bg-second">
            <div className="container">
                <div className="profile__info__header">
                    <h3 className="profile__info__header__title">Profile</h3>
                    <ul className="breadcrumb"></ul>
                </div>
                <div className="profile__info__profile-header">
                    <div className="profile__info__profile-header__content">
                        <div className="profile__info__profile-header__content__image">
                            <Link to="/">
                                <Image
                                    src={
                                        (user.avatar && process.env.REACT_APP_BASE_URL_FILE_UPLOAD + user.avatar) || ''
                                    }
                                    fallback={images.noAvt}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="profile__info__profile-header__content__user-info">
                            <h4>{user.name}</h4>
                            <h6>UI/UX Design Team</h6>
                            <span>{user.email}</span>
                        </div>
                        <div className="profile__info__profile-header__content__btn">
                            <InputCustom typeComp="button" width="w-100 " classComp="primary" value="Edit" />
                        </div>
                    </div>
                </div>
                <div className="profile__info__profile-menu">
                    <ul>
                        <li className={profileMenu.about && 'active'} onClick={() => setProfileMenu({ about: true })}>
                            About
                        </li>
                        <li
                            className={profileMenu.password && 'active'}
                            onClick={() => setProfileMenu({ password: true })}
                        >
                            Password
                        </li>
                    </ul>
                </div>

                <div className="profile__info__profile-tab-cont">
                    {profileMenu.about && <About user={user} />}
                    {profileMenu.password && <Password />}
                </div>
            </div>
        </div>
    );
};

const About = ({ user }) => {
    return (
        <div className="profile__info__profile-tab-cont__content">
            <div className="profile__info__profile-tab-cont__content__card">
                <div className="profile__info__profile-tab-cont__content__card__body">
                    <h5>
                        <span>Personal Details</span>
                        <button className="edit-link" href="/">
                            <i className="bx bxs-edit"></i>
                            <p>Edit</p>
                        </button>
                    </h5>
                    <div className="profile__info__profile-tab-cont__content__card__body__field">
                        <p>Name</p>
                        <p>{user.name}</p>
                    </div>
                    <div className="profile__info__profile-tab-cont__content__card__body__field">
                        <p>Date of Birth</p>
                        <p>{user.birth}</p>
                    </div>
                    <div className="profile__info__profile-tab-cont__content__card__body__field">
                        <p>Gender</p>
                        <p>{user.sex}</p>
                    </div>
                    <div className="profile__info__profile-tab-cont__content__card__body__field">
                        <p>Email ID</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="profile__info__profile-tab-cont__content__card__body__field">
                        <p>Mobile</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div>
                <div className="profile__info__profile-tab-cont__content__card">
                    <div className="profile__info__profile-tab-cont__content__card__body">
                        <h5>
                            <span>Account Status</span>
                            <button className="edit-link" href="/">
                                <i className="bx bxs-edit"></i>
                                <p>Edit</p>
                            </button>
                        </h5>
                        <InputCustom typeComp="button" classComp="primary" value="Active" />
                    </div>
                </div>

                <div className="profile__info__profile-tab-cont__content__card">
                    <div className="profile__info__profile-tab-cont__content__card__body">
                        <h5>
                            <span>Skills </span>
                            <button className="edit-link" href="/">
                                <i className="bx bxs-edit"></i>
                                <p>Edit</p>
                            </button>
                        </h5>
                        <div className="skill-tags">
                            <span>Html5</span>
                            <span>CSS3</span>
                            <span>WordPress</span>
                            <span>Javascript</span>
                            <span>Android</span>
                            <span>iOS</span>
                            <span>Angular</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Password = () => {
    return (
        <div className="profile__info__profile-tab-cont__content">
            <div className="profile__info__profile-tab-cont__content__card">
                <div className="profile__info__profile-tab-cont__content__card__body">
                    <h5 className="card-title">Change Password</h5>
                    <div className="row">
                        <div className="col-md-10 col-lg-6">
                            <form>
                                <InputCustom
                                    label="Old Password"
                                    validate={true}
                                    name="name"
                                    value={''}
                                    type="password"
                                    onChange={() => console.log()}
                                />
                                <InputCustom
                                    label="New Password"
                                    validate={true}
                                    name="name"
                                    value={''}
                                    type="password"
                                    onChange={() => console.log()}
                                />
                                <InputCustom
                                    label="Confirm Password"
                                    validate={true}
                                    name="name"
                                    value={''}
                                    type="password"
                                    onChange={() => console.log()}
                                />
                                <InputCustom typeComp="button" classComp="primary" value="Save change" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
