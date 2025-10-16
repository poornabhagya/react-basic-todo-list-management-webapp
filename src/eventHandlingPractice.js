function EventHandling() {
    function handleClick() {
        alert('Button Clicked!');
    }
    return (
        <div>
            <h2>Event Handling in React</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default EventHandling;