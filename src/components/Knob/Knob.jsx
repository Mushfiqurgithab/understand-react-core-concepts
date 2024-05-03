import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'3px solid salmon', margin:'20px'}}>
            <h5>This is Knob components.</h5>
            <p>Steps Here is: {props.steps}</p>
        </div>
    );
};

export default Knob;