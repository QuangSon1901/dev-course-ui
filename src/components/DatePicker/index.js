import React from 'react';
import { CalendarContainer } from 'react-datepicker';

const DatePicker = () => {
    return <div></div>;
};

export const DateHeader = () => {
    return;
};

export const DateContainer = ({ children, className }) => {
    return (
        <div className="date">
            <CalendarContainer className={className}>
                <div style={{ position: 'relative' }}>{children}</div>
            </CalendarContainer>
        </div>
    );
};

export default DatePicker;
