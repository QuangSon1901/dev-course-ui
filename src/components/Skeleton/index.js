import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({
    speed = 2,
    width = 400,
    height = 160,
    backgroundColor = '#f5f5f5',
    foregroundColor = '#ccc',
    children,
    ...props
}) => {
    return (
        <ContentLoader
            speed={speed}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            {...props}
        >
            {children}
        </ContentLoader>
    );
};

export default Skeleton;
