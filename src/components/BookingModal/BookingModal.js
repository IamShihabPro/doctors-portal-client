import React from 'react';

const BookingModal = ({treatment}) => {
    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <div className='flex justify-between items-center'>
                    <h3 className="font-bold text-lg">{treatment.name}</h3>

                    <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn btn-primary btn-xs text-white">X</label>
                    </div>

                </div>
                <p className="py-4">This modal works with a hidden checkbox!</p>
                {/* <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div> */}
            </div>
            </div>
            
        </>
    );
};

export default BookingModal;