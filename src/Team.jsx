import { useState } from "react";

export default function Team() {

    const [count ,setCount] =useState(0);

    const handleAdd =()=>{
        const newadd =count +1;
        setCount(newadd)
    }
    const handleReduce=()=>{
       const newadd =count -1;
        setCount(newadd);
    }


    return (
        <div style={{border: '2px solid yellow',borderRadius:'16px',margin:'16px'}}>
            <h2>Players :{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Minimize</button>
        </div>
    )
    
}