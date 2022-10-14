import React from 'react';

const Section = (props) => {
    return <div className="section">{props.children}</div>;
};

export const SectionTitle = (props) => {
    return (
        <>
            <div className="section__title">{props.title}</div>
            <div className="section__desc">{props.desc}</div>
        </>
    );
};

export const SectionBody = (props) => {
    return <div className="section__body">{props.children}</div>;
};

export default Section;
