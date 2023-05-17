// Working from this link: left off at 1hr and 5 min
// https://www.youtube.com/watch?v=9U3IhLAnSxM&t=2217s

import React from 'react';

// function Greeter(props){
//     return <h1>Hi there, {props.name}!</h1>
// }
function Greeter({name, excitement_level = 1, age =18}){
    const greet = ()=>{
        alert(`Hello There ${name}`)
    }
    return(
        <>
        <h1>Hi there, {name}{"!".repeat(excitement_level)}</h1>
        <p>You are {age} years old.</p>
        <button onClick={greet}>Click me</button>
        </>
    ) 
}
export default Greeter;