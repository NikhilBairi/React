import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState('');
    const [showBoxes, setshowBoxes] = useState(true);
    const submit = () => {
        console.log('This was clicked');
        const invalue = document.querySelector('#getId').value;
        setData(invalue);
        setshowBoxes(false);
    };
    return (
        <div>
            <h1>{data}</h1>
            {showBoxes && (
                <>
                    <input type="text" placeholder="username" id="getId" />
                    <input type="password" placeholder="password" />
                    <button onClick={submit}> Submit </button>
                </>
            )}
        </div>
    );
};

export default App;
