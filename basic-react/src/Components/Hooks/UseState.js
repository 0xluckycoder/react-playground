import React, { useState } from 'react';

export default function Usestate() {

    const [count, setcount] = useState(0);

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setcount(prevCount => prevCount + 1)}>
                Click me
            </button>
        </div>
    );
}