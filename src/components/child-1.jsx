import GrandChildOne from "./grand-child-1";

const ChildOne = (props) => {


    // const greetings = (msg) => {
    //     console.log(msg)
    // }

    return (
        <div style={{backgroundColor: '#ddd'}}>
            my name is {props.name}
            <br />
            <p>{props.joke}</p>
            <GrandChildOne greetings={props.greetings} />
        </div>
     );
}
 
export default ChildOne;