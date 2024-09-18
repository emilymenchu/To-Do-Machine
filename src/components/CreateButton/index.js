import { useContext } from 'react';
import './CreateTodoButton.css'
import { TaskContext } from '../../TaskContext';

function CreateTodoButton () {
    const { showTaskWindow:onClick } = useContext(TaskContext);
    return (
        <button className="create-button" onClick={onClick}>+</button>
    );
}

export { CreateTodoButton };