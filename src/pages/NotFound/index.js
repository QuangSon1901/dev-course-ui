import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <div className="not-found__container__ground-color">
                    <div className="not-found__container__ground-color__404">
                        <div className="not-found__container__ground-color__404__clip">
                            <div className="not-found__container__ground-color__404__clip__shadow">
                                <span className="not-found__container__ground-color__404__clip__shadow__digit">4</span>
                            </div>
                        </div>
                        <div className="not-found__container__ground-color__404__clip">
                            <div className="not-found__container__ground-color__404__clip__shadow">
                                <span className="not-found__container__ground-color__404__clip__shadow__digit">0</span>
                            </div>
                        </div>
                        <div className="not-found__container__ground-color__404__clip">
                            <div className="not-found__container__ground-color__404__clip__shadow">
                                <span className="not-found__container__ground-color__404__clip__shadow__digit">4</span>
                            </div>
                        </div>
                        <div className="not-found__container__ground-color__404__msg">
                            OH!<span className="not-found__container__ground-color__404__msg__triangle"></span>
                        </div>
                    </div>
                    <h2 className="h1">Sorry! Page not found</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
