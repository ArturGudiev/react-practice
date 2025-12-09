import { useState } from 'react';

const Child = ({ count, setCount }) => {
    return (
        <div>
            <div>Current value: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>Counter</button>
        </div>
    );
};

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Child count={count} setCount={setCount} />
        </div>
    );
};

const Component11 = () => {
    return <Parent />;
};

export default Component11;
