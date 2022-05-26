import React, { useState, useEffect } from 'react';

export default function Usestate() {

    const [count, setcount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setcount(count + 1)}>
                Click me
            </button>
        </div>
    );
}