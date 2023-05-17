import React from 'react';

// function Greeter(props){
//     return <h1>Hi there, {props.name}!</h1>
// }
function Greeter({name, excitement_level = 1, age =18}){
    return(
        <>
        <h1>Hi there, {name}{"!".repeat(excitement_level)}</h1>
        <p>You are {age} years old.</p>
        </>
    ) 
}
export default Greeter;