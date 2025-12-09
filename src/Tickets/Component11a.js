/* Replace sending property using context */
import { useState, createContext, useContext } from 'react';

export const CountContext = createContext();

export function CountProvider({ children }) {
    const [count, setCount] = useState(0);
  
    return (
      <CountContext.Provider value={{ count, setCount }}>
        {children}
      </CountContext.Provider>
    );
  }

  const Child = ({ count, setCount }) => {
    return (
        <div>
            <div>Current value: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>Counter</button>
        </div>
    );
};

const Parent = () => {
    const { count, setCount } = useContext(CountContext);
    return (
        <div>
            <Child count={count} setCount={setCount} />
        </div>
    );
};

const Component11a = () => {
    return <CountProvider><Parent /></CountProvider>
};

export default Component11a;
