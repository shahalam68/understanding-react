import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{border: '2px solid red',margin: '15px', padding:'20px'}}>
            <h2>My device: {props.name}</h2>
            <h4>Curent steps: {props.steps}</h4>
            <Config price={props.price}/>
        </div>
    );
};

export default Device;