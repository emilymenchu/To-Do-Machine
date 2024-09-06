import './TodoItem.css';

function TodoItem({ text, state }) {
    return (
    <div className="task-container">
        <li>
            <span>V {state} </span>
            <p>{text}</p>
            <span>X</span>
        </li>
    </div>
    );
}

export { TodoItem };