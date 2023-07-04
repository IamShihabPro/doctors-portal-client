import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from '../../../components/BookingModal/BookingModal';

const AvailableAppoinment = ({selectedDate}) => {
    const [appoinmentOptions, setAppoinmentOptions]= useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('AppoinmentOptions.json')
        .then(res=> res.json())
        .then(data =>{
            setAppoinmentOptions(data)
        })
    },[])
    return (
        <section className='my-16'>
            <p className='text-center font-bold text-secondary'>Available Appoinment on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>

                {
                    appoinmentOptions.map(options => <AppoinmentOption key={options._id} options={options} setTreatment={setTreatment}></AppoinmentOption>)
                }

            </div>
           { treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>}
           {/* <BookingModal></BookingModal> */}
        </section>
    );
};

export default AvailableAppoinment;