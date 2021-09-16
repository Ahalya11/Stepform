import React from 'react';
import {Input} from "antd";

function Step1(props){
    return(
        <div>
            <p>
                <Input addonBefore="Name"
                name="name" value={props.getState('name','')} onChange={props.handleChange} /></p>
            <p>
                <Input addonBefore="Email"
                 name="email" value={props.getState('email','')} onChange={props.handleChange} /></p>
            <p>
                <Input addonBefore="Phoneno"
                 name="phoneno" value={props.getState('phoneno','')} onChange={props.handleChange}/></p>
            
        </div>
    );
}

export default Step1;