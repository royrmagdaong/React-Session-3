// import react from 'react'
import { useState } from "react"

function MyComponent(props){
    const [count, setCount] = useState(0)
    let count2 = 1

    // count = 2 error
    // props.name = "John" ERROR - read only

    // setCount(1)

    const handleMouseEnter = () => {
        console.log('mouse enter')
        setCount(count + 1)
    }

    return (
        <div>
            {/* <h1>
                hello {props.name}
            </h1> */}
            {/* <h1>
                hello {props["name"]}
            </h1> */}
            {/* <div>
                {count}
                <br/>
                <button onClick={()=>{setCount(count + 1)}}>counter</button>
            </div>

            <div>
                {count2}
                <br/>
                <button onClick={()=>{count2++; console.log(count2)}}>counter 2</button>
            </div> */}

            <div style={{backgroundColor: "red"}} onMouseEnter={handleMouseEnter}>here {count}</div>
        </div>
    )
}

export default MyComponent