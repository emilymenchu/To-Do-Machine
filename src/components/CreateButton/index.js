import './CreateTodoButton.css'

function CreateTodoButton ({onClick}) {
    return (
        <button className="create-button" onClick={onClick}>+</button>
    );
}

export { CreateTodoButton };