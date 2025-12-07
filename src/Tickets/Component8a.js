import { useRef } from 'react';

const Component8a = () => {
    const myRef = useRef(null);
    return <>
        <div>
            <input 
                ref={myRef}
                type="text" 
                placeholder="Enter text..."

            />
            <button onClick={() => console.log(myRef.current.value)}>Submit</button>
        </div>
    </>
};

export default Component8a;

