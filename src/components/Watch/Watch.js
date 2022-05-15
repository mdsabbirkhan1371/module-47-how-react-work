import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseStep = () => {
        const newCount = steps + 1;
        setSteps(newCount)
    }

    useEffect(() => {

    }, [steps])
    return (
        <div style={{ border: '3px solid red' }}>
            <h2>This is My Watch</h2>
            <h4>Steps GO : {steps}</h4>
            <button onClick={increaseStep}>Da dor...</button>
            <Display name="Rion" step={steps}></Display>
        </div>
    );
};

export default Watch;