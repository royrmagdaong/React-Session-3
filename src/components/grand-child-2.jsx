const GrandChildTwo = (props) => {

    return (
        <div>
            my name is {props.name}
            <p>from grandchild1 = {props.message}</p>
        </div>
    );
}
 
export default GrandChildTwo;