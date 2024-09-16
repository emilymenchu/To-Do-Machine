import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        (total === completed) ?
            <h1>
                You have completed all your tasks. Congratulations 🎉
            </h1>
            :
            <h1>
                You have completed {completed} out of {total} to-do's
            </h1>    
    )
}

export { TodoCounter };