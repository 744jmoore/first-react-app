import React, {useState} from "react";
import './Counter.css';
function Counter(){
    const [count,setCount] = useState(0)
    const [mood,setMood] = useState(true)
    const togglemood =() =>setMood(!mood)
    return(
        <div className="Counter">
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>+1</button>
            <h3 onClick={togglemood}>{mood ? ":)": ":("}</h3>
        </div>
    )
}
export default Counter;