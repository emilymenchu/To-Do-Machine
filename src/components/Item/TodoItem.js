import './TodoItem.css';

function TodoItem({ task }) {
    return (
    <div className="task-container">
        <li className='li-task-container'>
            <p id="task-title">{task.text}</p>
            <div className='task-info'>
                <section className='categories-container'>
                    {task.categories.map((category, index) => {
                        return <span id={category} className='category-container' key={index}>{category}</span>;
                    } )}
                </section>
                <div className='priority-date-container'>
                    <section className='priority-container'>
                        <p>Priority:</p>
                        <div id={task.priority} className='priority' >{task.priority}</div>
                    </section>
                    <div className='due-date'>Deadline: {task.dueDate}</div>
                </div>
            </div>
        </li>
    </div>
    );
}

export { TodoItem };