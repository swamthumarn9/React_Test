//useEffection(function [dependencies])
import React, {useState, useEffect} from "react";

function windowWidthHeight(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener("resize", handleResize());
    console.log("EVENT LISTENER ADDED");

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.setHeight);
    }

    return(<div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </div>);
}
export default windowWidthHeight