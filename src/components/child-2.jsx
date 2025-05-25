import GrandChildTwo from "./grand-child-2";

const ChildTwo = ({name, nameOfChild, message}) => {

    // update the name to alex
    
    return (
        <div style={{backgroundColor: 'lightblue'}}>
            my name is {name} - child2-
            {message}
            <GrandChildTwo name={nameOfChild} message={message} />
        </div>
     );
}
 
export default ChildTwo;