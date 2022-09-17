import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/components/Button';
import multilingualSlice from '~/components/Header/multilingualSlice';

const MenuItem = ({ title, id, type, style, leftIcon, line, img }) => {
    const dispatch = useDispatch();

    const handeClick = () => {
        switch (type) {
            case 'multilingual':
                return dispatch(multilingualSlice.actions.CHANGE_LANGUAGE(id));
            default:
                return;
        }
    };

    return (
        <Button
            small
            line={line}
            img={img}
            className="btn-wrapper"
            style={style}
            leftIcon={leftIcon}
            onClick={handeClick}
        >
            {title}
        </Button>
    );
};

export default MenuItem;
