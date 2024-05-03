import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'3px solid purple', margin:'23px'}}>
            <h3>This is Dial components</h3>
            <p>Your steps count:{props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;