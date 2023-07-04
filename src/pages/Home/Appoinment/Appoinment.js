import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Appoinment = () => {
    return (
        <section className='mt-32'
        style={{
            background: `url(${appoinment})`
        }}>

            <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="lg:w-1/2 md:1/3 hidden md:block lg:block rounded-lg -mt-36" />
                <div>
                    <h4 className='text-primary text-lg'>Appoinment</h4>
                <h1 className="text-4xl font-bold text-white">Make An Appoinment Today</h1>
                <p className="py-6 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero pariatur quam labore veritatis ratione. Hic accusantium nisi, fugiat voluptatibus excepturi quia fuga dolore debitis nobis illum quis, corrupti officiis? Quo.</p>
                <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Appoinment;