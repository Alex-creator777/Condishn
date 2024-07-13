// Wrapper.js
import React from 'react';

function Wrapper(props) {
    const style = {
        backgroundColor: props.color,
        width: '250px',
        padding: '20px',
        margin: '20px auto',
        boxSizing: 'border-box',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'  // Для отладки
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default Wrapper;
