import React, { useState } from 'react';
import char from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';

const AppoinmentBanner = ({selectedDate, SetSelectedDate}) => {
   
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={char} alt='dentist chair' className="max-w-sm rounded-lg shadow-2xl" />

                    <div className='mr-6'>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={SetSelectedDate}
                   
                    />
                    {/* <p>You have selected date {format(selectedDate, 'PP')}.</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;