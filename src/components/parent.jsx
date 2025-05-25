import ChildOne from "./child-1";
import ChildTwo from "./child-2";
import { useState } from "react";

const Parent = () => {
    const [name, setName] = useState('john')
    const [name2, setName2] = useState('peter')
    const [grandChildName1, setGrandChildName1] = useState('doe')
    const [message, setMessage] = useState('')

    const greetings = (msg) => {
        console.log(msg)
        setMessage(msg)
    }

    return (
        <div style={{backgroundColor: '#eee'}}>
            <ChildOne name={name} greetings={greetings} />
            <ChildTwo name={name2} nameOfChild={grandChildName1} message={message} />
        </div>
     );
}
 
export default Parent;