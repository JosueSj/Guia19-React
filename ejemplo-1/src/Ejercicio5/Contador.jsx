import React, { useState } from 'react';

export const Contador =() =>{
    const [count, setCount] = useState(0)
    return (
        <div>
        <button onClick={() => setCount((count) => count + 1)}>Contador de CLICKS {count}</button>
        </div>
        );
}
