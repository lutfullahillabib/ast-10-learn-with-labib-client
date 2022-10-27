import React from 'react';

import Lottie from 'lottie-react'
import reader from '../../img/74797-thank-you-with-confetti.json'

const Thanks = () => {
    return (
        <div>
            <Lottie animationData={reader} loop={true} className='w-96 mx-auto' />
        </div>
    );
};

export default Thanks;