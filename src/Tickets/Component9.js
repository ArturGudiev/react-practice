/* Display a dobuled input content in div */
import { useRef, useState } from 'react';

const Component9a = () => {
    const myRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    
   
    
    return <>
        <div>
            <div>AAA {'YOUR VALUE HERE'}</div>
            <input 
                ref={myRef}
                type="text" 
                placeholder="Enter text..."
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => console.log(myRef.current.value)}>Submit</button>
        </div>
    </>
};

export default Component9a;

