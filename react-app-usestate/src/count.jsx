import React, {useEffect, useState} from "react";

function Count(){

    const [count, SetCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`;
    },[count,color]);

    function addCount(){
        SetCount(c => c+1);
    }

    function subtractCount(){
        SetCount(c => c-1);
    }

    function changeColor(){
        setColor(c=> c==="green" ? "red" : "green");
    }

    return(<div>
        <h2 style={{color: color}}>Count: {count}</h2>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </div>)
}

export default Count