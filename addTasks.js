import React, { useState } from 'react';

const App = () => {
    const [taskname, settaskName] = useState([]);
    const submit = () => {
        console.log('This was clicked');
        const task = document.querySelector('#getId').value;
        const newTask = [...taskname, task];
        settaskName(newTask);
        document.querySelector('#getId').value = '';
        console.log(newTask);
    };
    return (
        <div>
            <input type="task" placeholder="task" id="getId" />
            <button onClick={submit}> Submit</button>
            {taskname.map((el) => {
                return <h1 key={el}>{el}</h1>;
            })}
        </div>
    );
};

export default App;
