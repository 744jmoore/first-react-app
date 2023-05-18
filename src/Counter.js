import React, {useState} from "react";

function Counter(){
    const [count,setCount] = useState(0)
    const [mood,setMood] = useState(true)
    const togglemood =() =>setMood(!mood)
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>+1</button>
            <h3 onClick={togglemood}>{mood ? ":)": ":("}</h3>
        </div>
    )
}
export default Counter;