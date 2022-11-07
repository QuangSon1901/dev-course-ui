import React, { useState } from 'react';
import { useRef } from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';
import InputCustom from '~/components/InputCustom';

const Profile = () => {
    const fileRef = useRef();

    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className="profile__info">
            <div className="container">
                <div className="profile__info__body">
                    <div className="profile__info__body__text">
                        <InputCustom
                            label="Fullname"
                            validate={false}
                            tag=""
                            name="name"
                            value=""
                            onChange={() => {}}
                            placeholder="VD: Lionel Messi"
                        />
                        <InputCustom label="Gender" typeComp="select" tag="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </InputCustom>
                        <InputCustom
                            label="Birth"
                            typeComp="date-picker"
                            validate={false}
                            tag=""
                            name="name"
                            onChange={() => {}}
                            value={new Date()}
                            placeholder="VD: Lionel Messi"
                        />
                    </div>
                    <div className="profile__info__body__upload">
                        <div className="profile__info__body__upload__preview">
                            <div className="profile__info__body__upload__preview__image">
                                <img src={selectedImage ? URL.createObjectURL(selectedImage) : images.noImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <InputCustom typeComp="button" classComp="primary-2" value="Save" />
                    <InputCustom typeComp="button" value="Upload image" onClick={() => fileRef.current.click()} />
                    <input
                        ref={fileRef}
                        type="file"
                        className="dnone"
                        onChange={(event) => setSelectedImage(event.target.files[0])}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
