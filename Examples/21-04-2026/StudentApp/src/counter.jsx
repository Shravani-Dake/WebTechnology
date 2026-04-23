import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [rcount, setRcount] = useState(10);
    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Reverse Count : {rcount} </h2>
            <button onClick={() => setRcount(rcount - 1)}>Decrement</button>
        </div>
    );
}
export default Counter;