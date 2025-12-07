/*
    Set right printints
*/

import { useState, useEffect } from 'react';

const Component7a = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
    console.log('After each render');

    useEffect(() => console.log('Only on Init'), []);
    
    useEffect(() => {
        console.log('After counter is changed');
    }, [counter]);

    return <>
        <div>Set right printings</div>
        <button onClick={() => setCounter(counter + 1)}> Increase counter</button>
        <button onClick={() => setCounter2(counter2 + 1)}> Increase counter2</button>
    </>
};

export default Component7a;

