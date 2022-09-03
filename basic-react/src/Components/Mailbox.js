import React from 'react';

export default function Mailbox(props) {
    const someCount = props.count;
    console.log(props.count === 5)
    return (
        <div>
            {someCount === 5 ? <h1>count is five</h1> : <h1>count is not five</h1>}
        </div>
    )
}