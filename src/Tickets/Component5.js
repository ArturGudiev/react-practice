/*
    Increase counter in inline button 
*/
import { useState } from 'react';

const Component5 = () => {
    const [counter, setCounter] = useState(0);
    
    return <>
        <button> Increase counter {counter}</button>
    </>
};

export default Component5;
