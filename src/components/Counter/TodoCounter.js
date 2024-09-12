import './TodoCounter.css';

function TodoCounter({ total, completed, areAllTasksDone }) {
    return (
            <h1>
                {!areAllTasksDone && `You have completed ${completed} out of ${total} to-do's`}
                {areAllTasksDone && `You have completed all your tasks, Congratulations`}
            </h1>
    )
}

export { TodoCounter };