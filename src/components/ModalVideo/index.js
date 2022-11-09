import React from 'react';

const ModalVideo = ({ active, children, onClose }) => {
    return (
        <div className={`${active && 'active'} modal-video`} onClick={onClose}>
            {children}
        </div>
    );
};

export const ModalVideoContent = ({ children, onClose }) => {
    return (
        <div className="active modal-video__content">
            {children}
            <div className="modal-video__content__close" onClick={onClose}>
                <i className="bx bx-x" />
            </div>
        </div>
    );
};

export default ModalVideo;
