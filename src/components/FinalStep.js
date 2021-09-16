import React from 'react';

function FinalStep(props){
    return(
        <div style={{textAlign:"left"}}>
            <p><b>Name:</b> {props.state.name}</p>
            <p><b>Email:</b> {props.state.email}</p>
            <p><b>Phoneno:</b> {props.state.phoneno}</p>
            <p><b>Street:</b> {props.state.street}</p>
            <p><b>City: </b>{props.state.city}</p>
            <p><b>State:</b> {props.state.state}</p>
        </div>
    );
}

export default FinalStep;