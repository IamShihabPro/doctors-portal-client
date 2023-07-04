import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault()

        const form = event.target;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking ={
            appoinmentDate: date,
            treatment: name,
            patient : patientName, 
            email, 
            slot, 
            phone

        }

        console.log(booking);
        setTreatment(null)
    }
    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <div className='flex justify-between items-center'>
                    <h3 className="font-bold text-xl">{name}</h3>

                    <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn btn-secondary btn-xs text-white rounded-full">X</label>
                    </div>

                </div>
               
                {/* <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div> */}

                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'> 
                    <input type="text" value={date} disabled className="input input-bordered input-accent w-full " />

                    <select name='slot' className="select select-accent w-full">
                        {
                            slots.map((slot, index) =>  <option key={index} value={slot}> {slot}</option>)
                        }
                       
                    </select>

                    <input name='patientName' type="text" placeholder="Your Name " className="input input-bordered input-accent w-full " />
                    <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-accent w-full " />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-accent w-full " />
                    <br />
                    <input type="submit" value='Submit' className='btn btn-secondary w-full text-white' />
                </form>
            </div>
            </div>
            
        </>
    );
};

export default BookingModal;