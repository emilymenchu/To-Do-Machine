import { useContext } from 'react';
import './TodoCounter.css';
import { TaskContext } from '../../TaskContext';

function TodoCounter() {
    const { totalTasks:total, completedTasks:completed} = useContext(TaskContext);
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