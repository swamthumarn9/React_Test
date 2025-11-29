import React, {useState} from "react";

function MyComponent(){

    const [car, setCar]  = useState ({year: 2024,
                                      make: "Ford",
                                      model: "Mustang"});
                                    
    function handleYearChange(event){
        //setCar({year: 2024, make: "Ford", model: "Mustang"})
        setCar({year: 2025});
    }
    // function handleMakeChange(event){
    //     setMake({make: "Chevrolet"});
    // }
    // function handleModelChange(event){
    //     setMake({model: "2022"});
    // }

    return (<div>
            <p>Your favourite car is {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onCanPlay={handleModelChange}/><br/>
            </div>)



    // const [count, setCount] = useState(0);

    // function increment(){

    //     setCount(c => count +1);
    //     setCount(c => count +1);
    //     setCount(c => count +1);
        
    // };

    // function decrement(){
    //     setCount(count -1);
    // };

    
}

export default MyComponent