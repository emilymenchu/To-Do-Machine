import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h1>
            You have completed {completed} out of {total} to-do's
        </h1>
    )
}

export { TodoCounter };