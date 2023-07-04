import React from 'react';
import ChairImg from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero" 
        style={{
          background: `url(${bg})`
      }}
        >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={ChairImg} className=" w-full lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button> */}
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;