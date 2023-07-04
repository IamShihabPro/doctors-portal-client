import React from 'react';

const AppoinmentOption = ({options, setTreatment}) => {
    const {name, slots} = options
    return (
        <div className="card shadow-xl">
            <div className="card-body  text-center">
                <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                {/* <button className="btn btn-primary text-white" onClick={()=>window.my_modal_3.showModal(setTreatment(options))}>Book Appoinment</button> */}
                {/* <button className="btn btn-primary text-white" onClick={()=>setTreatment(options)}>Book Appoinment</button> */}
                <label onClick={()=>setTreatment(options)} htmlFor="my_modal_6" className="btn btn-primary text-white">Book Appoinment </label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;