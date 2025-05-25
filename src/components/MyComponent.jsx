// import react from 'react'

function MyComponent(props){

    // props.name = "John" ERROR - read only

    return (
        <div>
            {/* <h1>
                hello {props.name}
            </h1> */}
            <h1>
                hello {props["name"]}
            </h1>
        </div>
    )
}

export default MyComponent