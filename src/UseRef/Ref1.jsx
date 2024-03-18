import { useRef, useState } from 'react';
// import './App.css';

function Ref() {
    const hook = useRef('')
    const [name, setName] = useState("Input field")

    function Reset() {
        setName("")
        hook.current.focus()
    }
    function Color() {
        hook.current.style.color = 'red'
    }
    return (
        <center>
        <div className="App">
            <h1><b>useRef</b></h1>
            <input ref={hook} type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={Reset}>Reset</button>
            <button onClick={Color}> Change input color</button>
        </div>
        </center>
    );

}



export default Ref





