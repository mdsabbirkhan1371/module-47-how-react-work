import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>Device Name: {props.name}</h2>

            <DeviceDetails price={props.price}></DeviceDetails>


        </div>
    );
};

export default Device;