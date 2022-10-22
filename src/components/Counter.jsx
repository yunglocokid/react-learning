import React, {useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(0)

    const increment = () => {
        setCount(count += 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count -= 1)
        }
    }
    return (
        <div>
            <h1 className="white">{count}</h1>
            <button className="button" onClick={increment}>Increment</button>
            <button className="button" onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
