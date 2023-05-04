import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light mt-5 p-3'>
            <h2>Q-Zone</h2>
            <div className=' text-center'>
                <img className='img-fluid' src={QZone1} alt="" />
                <img className='img-fluid' src={QZone2} alt="" />
                <img className='img-fluid' src={QZone3} alt="" />
            </div>
            
        </div>
    );
};

export default QZone;