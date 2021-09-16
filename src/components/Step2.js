import React from 'react';
import {Input} from "antd";
function Step2(props){
    return(
        <div>
            <p>
                <Input addonBefore="Street"
                 name="street" value={props.getState('street','')} onChange={props.handleChange}/></p>
            <p>
                <Input addonBefore="City"
                 name="city" value={props.getState('city','')}onChange={props.handleChange}/></p>
            <p>
                <Input addonBefore="State"
                 name="state" value={props.getState('state','')} onChange={props.handleChange}/></p>
            
        </div>
    );
}

export default Step2;