import './CreateTodoButton.css'

function CreateTodoButton () {
    return (
        <button className="create-button" onClick={(event) => {
            console.log('le diste click');
            console.log(event);
            console.log(event.target);
        }}>+</button>
    );
}

export { CreateTodoButton };