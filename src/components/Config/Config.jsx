import React from 'react';

const Config = (props) => {
    return (
        <div style={{border:'2px solid green', margin:'5px'}}>
            <ul>
                <li>Price: {props.price}</li>
            </ul>
        </div>
    );
};

export default Config;