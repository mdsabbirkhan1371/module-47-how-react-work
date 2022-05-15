import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid green', margin: '10px' }}>
            <h3>Name:{props.name}</h3>
            <p>so far steps today....{props.step}</p>

            <Dial steps={props.step}></Dial>
        </div>
    );
};

export default Display;