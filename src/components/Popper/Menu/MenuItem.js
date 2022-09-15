import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/components/Button';
import multilingualSlice from '~/components/Header/multilingualSlice';

const MenuItem = ({ title, id, type }) => {
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
        <Button small className="btn-wrapper" onClick={handeClick}>
            {title}
        </Button>
    );
};

export default MenuItem;
