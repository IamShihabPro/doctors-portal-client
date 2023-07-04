import React from 'react';

const Review = ({review}) => {
    const {name, img, location, reviews} = review
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>{reviews}</p>
                <div className="flex items-center ">
                    
                     <div className="avatar mr-6 mt-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>

                    <div>
                        <h5>{name}</h5>
                        <p>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;