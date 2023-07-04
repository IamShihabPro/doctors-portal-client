import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({treatment, selectedDate}) => {
    const {name, slots} = treatment
    const date = format(selectedDate, 'PP')
    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <div className='flex justify-between items-center'>
                    <h3 className="font-bold text-lg">{name}</h3>

                    <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn btn-secondary btn-xs text-white rounded-full">X</label>
                    </div>

                </div>
               
                {/* <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div> */}

                <form className='grid grid-cols-1 gap-3 mt-10'> 
                    <input type="text" value={date} disabled className="input input-bordered input-accent w-full " />

                    <select className="select select-accent w-full">
                        {
                            slots.map(slot =>  <option value={slot}> {slot}</option>)
                        }
                       
                    </select>

                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
                    <br />
                    <input type="submit" value='Submit' className='btn btn-secondary w-full text-white' />
                </form>
            </div>
            </div>
            
        </>
    );
};

export default BookingModal;