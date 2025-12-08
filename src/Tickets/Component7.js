/*
    Set right printings
*/

import { useState } from 'react';

const Component7 = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
    console.log('After each render');
    console.log('Only on Init');
    console.log('After counter is changed');

    return <>
        <div>Set right printings</div>
        <button onClick={() => setCounter(counter + 1)}> Increase counter</button>
        <button onClick={() => setCounter2(counter2 + 1)}> Increase counter2</button>
    </>
};
export default Component7;
