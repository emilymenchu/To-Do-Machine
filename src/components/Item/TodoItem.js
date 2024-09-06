import './TodoItem.css';

function TodoItem({ text, state }) {
    return (
    <div className="task-container">
        <li>
            <p id="task-title">{text}</p>
            <p id="task-description"></p>
        </li>
    </div>
    );
}

export { TodoItem };