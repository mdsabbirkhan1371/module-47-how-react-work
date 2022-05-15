import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid green', margin: '10px' }}>
            <h3>This is Dial</h3>
            <h4> so far steps..{props.steps}</h4>
        </div>
    );
};

export default Dial;