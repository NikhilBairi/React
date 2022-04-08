import React, { useState } from 'react';

const App = () => {
    const [changeColour, setChangeColour] = useState('red');
    const submit = (arg) => {
        console.log(arg);
        setChangeColour(arg);
    };
    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: changeColour,
                }}
            ></div>
            <button onClick={() => submit('black')}> Black</button>
            <button onClick={() => submit('green')}>green</button>
        </div>
    );
};

export default App;
