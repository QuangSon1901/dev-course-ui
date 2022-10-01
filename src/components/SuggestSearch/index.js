import React from 'react';
import Button from '../Button';

const SuggestSearch = ({ data }) => {
    return (
        <div className="search__dropdown__content__wrapp__body">
            {data.subjects.length > 0 && (
                <div className="search__dropdown__content__wrapp__body__group">
                    <div className="search__dropdown__content__wrapp__body__group__title">
                        <h4>Môn học</h4>
                        <span>Xem thêm</span>
                    </div>
                    <ul>
                        {data.subjects.map((item) => (
                            <li key={item.id}>
                                <Button
                                    large
                                    className="btn-wrapper btn-default"
                                    img="userAvt"
                                    imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                    style={{ justifyContent: 'flex-start' }}
                                >
                                    {item.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {data.programs.length > 0 && (
                <div className="search__dropdown__content__wrapp__body__group">
                    <div className="search__dropdown__content__wrapp__body__group__title">
                        <h4>Khoá học</h4>
                        <span>Xem thêm</span>
                    </div>
                    <ul>
                        {data.programs.map((item) => (
                            <li key={item.id}>
                                <Button
                                    large
                                    className="btn-wrapper btn-default"
                                    img="userAvt"
                                    imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                    style={{ justifyContent: 'flex-start' }}
                                >
                                    {item.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {data.teachers.length > 0 && (
                <div className="search__dropdown__content__wrapp__body__group">
                    <div className="search__dropdown__content__wrapp__body__group__title">
                        <h4>Giảng viên</h4>
                        <span>Xem thêm</span>
                    </div>
                    <ul>
                        {data.teachers.map((item) => (
                            <li key={item.id}>
                                <Button
                                    large
                                    className="btn-wrapper btn-default"
                                    img="userAvt"
                                    imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                    style={{ justifyContent: 'flex-start' }}
                                >
                                    {item.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SuggestSearch;
