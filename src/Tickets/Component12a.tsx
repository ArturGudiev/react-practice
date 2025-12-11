import React, { useState, useEffect } from 'react';

const Child: React.FC = React.memo(() => {
    useEffect(() => {
        console.log('Child component rerendered');
    });
    
    return (
        <div>
            <div>This is static content in the child component.</div>
        </div>
    );
});

const Parent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount((c: number) => c + 1)}>Counter</button>
            <Child />
        </div>
    );
};

const Component12a: React.FC = () => {
    return <Parent />;
};

export default Component12a;
