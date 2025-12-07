import { useMemo, useState } from 'react';

const Component9a = () => {

    const [inputValue, setInputValue] = useState('');
    
    const v = useMemo(() => {
        return inputValue + ' ' + inputValue;
    }, [inputValue]);
    
    return <>
        <div>
            <div>AAA {v}</div>
            <input 
                value={inputValue}
                type="text" 
                placeholder="Enter text..."
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => console.log(v)}>Submit</button>
        </div>
    </>
};

export default Component9a;

