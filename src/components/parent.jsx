import ChildOne from "./child-1";
import ChildTwo from "./child-2";
import { useState, useEffect } from "react";

const Parent = () => {
    const [name, setName] = useState('john')
    const [name2, setName2] = useState('peter')
    const [grandChildName1, setGrandChildName1] = useState('doe')
    const [message, setMessage] = useState('')

    const greetings = (msg) => {
        console.log(msg)
        setMessage(msg)
    }

    useEffect( ()=>{

        fetchRandomJoke()
    },[])

    const fetchRandomJoke = async () => {
        // fetch 3rd party api // synchronous and asynchronous
        // using fetch built in js
        // another way is to use axios
        
        const response = await fetch("https://icanhazdadjoke.com/slack");
        if (!response.ok) {
            console.log('error')
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json)
    }
    


    return (
        <div style={{backgroundColor: '#eee'}}>
            <ChildOne name={name} greetings={greetings} />
            <ChildTwo name={name2} nameOfChild={grandChildName1} message={message} />
        </div>
     );
}
 
export default Parent;