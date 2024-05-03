import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () =>{
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }
    return (
        <div style={{border: '3px solid red', margin:'10px'}}>
            <h2>This is my Smart Watch!</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De Dour...</button>
            <Dial steps= {steps}></Dial>
        </div>
    );
};

export default Watch;