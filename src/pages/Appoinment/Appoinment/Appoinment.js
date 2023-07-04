import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [selectedDate, SetSelectedDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate} SetSelectedDate={SetSelectedDate}></AppoinmentBanner>
            <AvailableAppoinment selectedDate={selectedDate} SetSelectedDate={SetSelectedDate}></AvailableAppoinment>
            
        </div>
    );
};

export default Appoinment;