import React, { useState } from 'react'

function Percent() {
    const [numbers, setNumbers] = useState([]);
    const [x, setX] = useState(0);
    const [count, setCount] = useState(0);

    const add = () => {
        if(isNaN(x)) {
            alert('Lütfen sayı giriniz.');
        }
        else{
            setCount(numbers.length + 1);
            setNumbers([...numbers,x*1.18]);
        }
    }

    return (
        <>
            <p>{count}</p>
            <input type='text' value={x} onChange={(e)=>setX(e.target.value)}></input>
            <button onClick={()=> add()}>Hesapla</button>

            <ul>
                {
                    numbers.map((item,key)=> <li key={key}>{item.toFixed(2)}</li>)
                }
            </ul>
        </>
    )
}

export default Percent
