import { useState } from 'react';


const Component4 = () => {
    const counter = 0;
    return <>
        <ButtonComponent />
        <ButtonComponent />
    </>;
};

const ButtonComponent = () => {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    return <button onClick={increment}>Click on button {counter}</button>
}

export default Component4;
