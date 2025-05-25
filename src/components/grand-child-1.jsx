const GrandChildOne = (props) => {

    const greet = () => {
        props.greetings("good morning!")
    }

    return (
        <div>
            grand child 1
            <button onClick={greet}>greet</button>
        </div>
     );
}
 
export default GrandChildOne;